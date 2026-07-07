import os
import json
import asyncio
import sys
from google.antigravity import Agent, LocalAgentConfig
from google.antigravity.types import CustomSystemInstructions

# Try to load dotenv to support local .env files
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

WORKSPACE = os.path.dirname(os.path.abspath(__file__))
inputs_dir = os.path.join(WORKSPACE, "career-concierge", "inputs")
agents_dir = os.path.join(WORKSPACE, "career-concierge", "agents")
output_dir = os.path.join(WORKSPACE, "career-concierge", "output")
evals_dir = os.path.join(WORKSPACE, "career-concierge", "evals")

# Helper to read file content safely
def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

async def run_context_hunter():
    print("\n=== Running Context Hunter ===")
    instruction_text = read_file(os.path.join(agents_dir, "context_hunter.md"))
    
    config = LocalAgentConfig(
        model="gemini-2.5-flash",
        system_instructions=CustomSystemInstructions(text=instruction_text),
        workspaces=[WORKSPACE]
    )
    
    jd_path = os.path.abspath(os.path.join(inputs_dir, "job_description.md"))
    reqs_path = os.path.abspath(os.path.join(inputs_dir, "extracted_requirements.json"))
    
    async with Agent(config) as agent:
        response = await agent.chat(
            f"Analyze the job description at {jd_path} and parse the requirements. "
            f"Write the resulting JSON structure into the file at {reqs_path}."
        )
        print("Context Hunter output:\n", await response.text())

async def run_resume_tailor():
    print("\n=== Running Resume Tailor ===")
    instruction_text = read_file(os.path.join(agents_dir, "resume_tailor.md"))
    
    config = LocalAgentConfig(
        model="gemini-2.5-flash",
        system_instructions=CustomSystemInstructions(text=instruction_text),
        workspaces=[WORKSPACE]
    )
    
    resume_path = os.path.abspath(os.path.join(inputs_dir, "resume_master.json"))
    reqs_path = os.path.abspath(os.path.join(inputs_dir, "extracted_requirements.json"))
    draft_path = os.path.abspath(os.path.join(output_dir, "resume_draft.json"))
    
    async with Agent(config) as agent:
        response = await agent.chat(
            f"Read the master resume at {resume_path} and optimize its linguistic framing "
            f"against the target profile in {reqs_path}. "
            f"Save the optimized draft to the file at {draft_path}."
        )
        print("Resume Tailor output:\n", await response.text())

async def run_ats_critic():
    print("\n=== Running ATS Critic ===")
    instruction_text = read_file(os.path.join(agents_dir, "ats_critic.md"))
    
    config = LocalAgentConfig(
        model="gemini-2.5-flash",
        system_instructions=CustomSystemInstructions(text=instruction_text),
        workspaces=[WORKSPACE]
    )
    
    draft_path = os.path.abspath(os.path.join(output_dir, "resume_draft.json"))
    reqs_path = os.path.abspath(os.path.join(inputs_dir, "extracted_requirements.json"))
    score_path = os.path.abspath(os.path.join(evals_dir, "score_card.json"))
    
    async with Agent(config) as agent:
        response = await agent.chat(
            f"Audit the resume draft at {draft_path} against the target requirements at {reqs_path}. "
            f"Write the scorecard report to the file at {score_path}."
        )
        critic_text = await response.text()
        print("ATS Critic output:\n", critic_text)
        return critic_text

async def main():
    if not os.environ.get("GEMINI_API_KEY"):
        print("Error: GEMINI_API_KEY environment variable is not set.")
        print("Please set it in your environment or in a .env file in this directory.")
        print("Obtain a key at https://aistudio.google.com/app/api-keys")
        sys.exit(1)

    # 1. Run Context Hunter
    await run_context_hunter()
    
    # Verify Context Hunter wrote the output
    reqs_path = os.path.join(inputs_dir, "extracted_requirements.json")
    if not os.path.exists(reqs_path):
        print("Error: Context Hunter did not create the extracted_requirements.json file.")
        sys.exit(1)
        
    max_loops = 3
    for loop in range(1, max_loops + 1):
        print(f"\n--- Execution Loop {loop} of {max_loops} ---")
        
        print("Waiting 15 seconds to manage API rate limits...")
        await asyncio.sleep(15)
        
        # 2. Run Resume Tailor
        await run_resume_tailor()
        
        draft_path = os.path.join(output_dir, "resume_draft.json")
        if not os.path.exists(draft_path):
            print("Error: Resume Tailor did not produce a resume_draft.json file.")
            sys.exit(1)
            
        print("Waiting 15 seconds to manage API rate limits...")
        await asyncio.sleep(15)
        
        # 3. Run ATS Critic
        critic_out = await run_ats_critic()
        
        score_path = os.path.join(evals_dir, "score_card.json")
        if os.path.exists(score_path):
            try:
                try:
                    with open(score_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    content = content.replace("\\'", "'")
                    scorecard = json.loads(content)
                except Exception as parse_err:
                    print("Initial JSON load failed, attempting simple cleaning...", parse_err)
                    # Fallback simple cleaning
                    content = content.replace("\\'", "'").replace('\\"', '"')
                    scorecard = json.loads(content)
                
                # Check metrics
                metrics = scorecard.get("evaluation_metrics", {})
                overall = metrics.get("overall_alignment_rating", {})
                score = overall.get("score") if isinstance(overall, dict) else None
                status = scorecard.get("status")
                
                print(f"Loop {loop} Score Card:")
                print(f"  Overall Score: {score}/10.0")
                print(f"  Status: {status}")
                
                if score is not None and score >= 9.0 and status == "Awaiting Human Review":
                    print("Overall score met target (>= 9.0/10.0) and loop succeeded!")
                    break
                elif "REVISE" in critic_out or (score is not None and score < 9.0):
                    print("Overall score is below 9.0/10.0. Issuing revise cycle...")
                else:
                    print("Score card is in final state. Halting loop.")
                    break
            except Exception as e:
                print("Error reading or parsing scorecard:", e)
                break
        else:
            print("Warning: score_card.json was not created.")
            break
            
    print("\n=== Framework Execution Complete ===")

if __name__ == "__main__":
    asyncio.run(main())
