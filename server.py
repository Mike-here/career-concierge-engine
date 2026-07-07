import os
import sys
import json
import asyncio
import subprocess
import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.responses import JSONResponse, Response
from starlette.staticfiles import StaticFiles
from sse_starlette.sse import EventSourceResponse

# Paths setup
WORKSPACE = os.path.dirname(os.path.abspath(__file__))
inputs_dir = os.path.join(WORKSPACE, "career-concierge", "inputs")
output_dir = os.path.join(WORKSPACE, "career-concierge", "output")
evals_dir = os.path.join(WORKSPACE, "career-concierge", "evals")
public_dir = os.path.join(WORKSPACE, "career-concierge", "public")

# Ensure folders exist
os.makedirs(inputs_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)
os.makedirs(evals_dir, exist_ok=True)
os.makedirs(public_dir, exist_ok=True)

# 1. API: Load Inputs
async def get_inputs(request):
    resume_path = os.path.join(inputs_dir, "resume_master.json")
    jd_path = os.path.join(inputs_dir, "job_description.md")
    
    resume_content = ""
    jd_content = ""
    
    if os.path.exists(resume_path):
        with open(resume_path, "r", encoding="utf-8") as f:
            resume_content = f.read()
            
    if os.path.exists(jd_path):
        with open(jd_path, "r", encoding="utf-8") as f:
            jd_content = f.read()
            
    return JSONResponse({
        "resume_master": resume_content,
        "job_description": jd_content
    })

# 2. API: Save Inputs
async def save_inputs(request):
    try:
        body = await request.json()
        resume_content = body.get("resume_master", "")
        jd_content = body.get("job_description", "")
        
        resume_path = os.path.join(inputs_dir, "resume_master.json")
        jd_path = os.path.join(inputs_dir, "job_description.md")
        
        # Validate resume is valid JSON
        if resume_content:
            try:
                json.loads(resume_content)
            except json.JSONDecodeError as je:
                return JSONResponse({"error": f"Invalid Resume JSON: {str(je)}"}, status_code=400)
        
        with open(resume_path, "w", encoding="utf-8") as f:
            f.write(resume_content)
            
        with open(jd_path, "w", encoding="utf-8") as f:
            f.write(jd_content)
            
        return JSONResponse({"status": "saved"})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

# 3. API: Load Results
async def get_results(request):
    reqs_path = os.path.join(inputs_dir, "extracted_requirements.json")
    draft_path = os.path.join(output_dir, "resume_draft.json")
    score_path = os.path.join(evals_dir, "score_card.json")
    
    reqs_data = None
    draft_data = None
    score_data = None
    
    if os.path.exists(reqs_path):
        try:
            with open(reqs_path, "r", encoding="utf-8") as f:
                reqs_data = json.load(f)
        except Exception:
            pass
            
    if os.path.exists(draft_path):
        try:
            with open(draft_path, "r", encoding="utf-8") as f:
                draft_data = json.load(f)
        except Exception:
            pass
            
    if os.path.exists(score_path):
        try:
            with open(score_path, "r", encoding="utf-8") as f:
                content = f.read().replace("\\'", "'")
                score_data = json.loads(content)
        except Exception:
            try:
                with open(score_path, "r", encoding="utf-8") as f:
                    score_data = json.load(f)
            except Exception:
                pass
                
    return JSONResponse({
        "extracted_requirements": reqs_data,
        "resume_draft": draft_data,
        "score_card": score_data
    })

# 4. API: Stream agent run logs
async def run_concierge_sse(request):
    async def log_streamer():
        python_executable = sys.executable
        script_path = os.path.join(WORKSPACE, "run_concierge.py")
        
        # Inject current process environment variables
        env = os.environ.copy()
        
        try:
            # Start run_concierge.py in a subprocess
            process = await asyncio.create_subprocess_exec(
                python_executable,
                script_path,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                cwd=WORKSPACE,
                env=env
            )
            
            # Read stdout line by line and stream it
            while True:
                line = await process.stdout.readline()
                if not line:
                    break
                decoded_line = line.decode("utf-8", errors="replace").rstrip()
                yield {"data": decoded_line}
                # Tiny sleep to ensure event loop throughput
                await asyncio.sleep(0.01)
                
            await process.wait()
            yield {"data": f"[System] Process finished with exit code: {process.returncode}"}
        except Exception as e:
            yield {"data": f"[System Error] {str(e)}"}
            
    return EventSourceResponse(log_streamer())

# Routes
routes = [
    Route("/api/inputs", get_inputs, methods=["GET"]),
    Route("/api/inputs", save_inputs, methods=["POST"]),
    Route("/api/results", get_results, methods=["GET"]),
    Route("/api/run", run_concierge_sse, methods=["GET"]),
    Mount("/", app=StaticFiles(directory=public_dir, html=True), name="static")
]

app = Starlette(debug=True, routes=routes)

if __name__ == "__main__":
    # Support dry-run verification
    if "--dry-run" in sys.argv:
        print("Dry-run validation successful. Server configuration is valid.")
        sys.exit(0)
        
    uvicorn.run(app, host="127.0.0.1", port=8000)
