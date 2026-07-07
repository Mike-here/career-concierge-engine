// State Management
let currentStatus = "idle";
let eventSource = null;

// DOM Elements
const resumeEditor = document.getElementById("resume-editor");
const jobEditor = document.getElementById("job-editor");
const btnSave = document.getElementById("btn-save");
const btnRun = document.getElementById("btn-run");
const terminalLog = document.getElementById("terminal-log");
const engineStatus = document.getElementById("engine-status");

// On Page Load
document.addEventListener("DOMContentLoaded", () => {
  loadInputs();
  loadResults();
  
  // Button Bindings
  btnSave.addEventListener("click", () => saveInputs(true));
  btnRun.addEventListener("click", runEngine);
});

// Switch Tab Logic
window.switchTab = function(tabName) {
  const tabs = ["requirements", "comparison", "scorecard"];
  tabs.forEach(tab => {
    const contentEl = document.getElementById(`tab-${tab}`);
    const btnEl = document.getElementById(`tab-btn-${tab}`);
    if (tab === tabName) {
      contentEl.classList.add("active");
      btnEl.classList.add("active");
    } else {
      contentEl.classList.remove("active");
      btnEl.classList.remove("active");
    }
  });
};

// 1. API: Load Inputs
async function loadInputs() {
  try {
    const res = await fetch("/api/inputs");
    const data = await res.json();
    
    if (data.resume_master) {
      // Format JSON nicely
      try {
        const parsed = JSON.parse(data.resume_master);
        resumeEditor.value = JSON.stringify(parsed, null, 2);
      } catch {
        resumeEditor.value = data.resume_master;
      }
    }
    
    if (data.job_description) {
      jobEditor.value = data.job_description;
    }
  } catch (err) {
    appendLog(`[System Error] Failed to load initial inputs: ${err.message}`, "error-line");
  }
}

// 2. API: Save Inputs
async function saveInputs(showAlert = false) {
  try {
    const resumeVal = resumeEditor.value.trim();
    const jobVal = jobEditor.value.trim();
    
    const res = await fetch("/api/inputs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resume_master: resumeVal,
        job_description: jobVal
      })
    });
    
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to save data.");
    }
    
    if (showAlert) {
      appendLog("[System] Inputs saved to staging files successfully.", "system-line");
      alert("Staging inputs saved successfully!");
    }
    return true;
  } catch (err) {
    appendLog(`[System Error] Failed to save inputs: ${err.message}`, "error-line");
    alert(`Error: ${err.message}`);
    return false;
  }
}

// 3. API: Load and Render Results
async function loadResults() {
  try {
    const res = await fetch("/api/results");
    const data = await res.json();
    
    renderRequirements(data.extracted_requirements);
    renderComparison(data.resume_draft, data.resume_master);
    renderScorecard(data.score_card);
  } catch (err) {
    appendLog(`[System Error] Failed to load results: ${err.message}`, "error-line");
  }
}

// Render Extracted Requirements
function renderRequirements(reqs) {
  const reqDomainVal = document.getElementById("req-domain-val");
  const reqRoleVal = document.getElementById("req-role-val");
  const compList = document.getElementById("req-competencies-list");
  const toolsList = document.getElementById("req-tools-list");
  const softList = document.getElementById("req-soft-list");
  const tagsContainer = document.getElementById("req-keywords-tags");
  
  if (!reqs) {
    reqDomainVal.innerText = "—";
    reqRoleVal.innerText = "—";
    compList.innerHTML = `<li class="empty-list">No data extracted yet.</li>`;
    toolsList.innerHTML = `<li class="empty-list">No data extracted yet.</li>`;
    softList.innerHTML = `<li class="empty-list">No data extracted yet.</li>`;
    tagsContainer.innerHTML = `<span class="empty-list">No keywords extracted yet.</span>`;
    return;
  }
  
  reqDomainVal.innerText = reqs.domain_category || "N/A";
  reqRoleVal.innerText = reqs.target_role || "N/A";
  
  // Lists helper
  const populateList = (el, arr) => {
    if (!arr || arr.length === 0) {
      el.innerHTML = `<li class="empty-list">None specified</li>`;
    } else {
      el.innerHTML = arr.map(item => `<li>${escapeHtml(item)}</li>`).join("");
    }
  };
  
  populateList(compList, reqs.core_competencies);
  populateList(toolsList, reqs.required_tools_and_technologies);
  populateList(softList, reqs.soft_skills);
  
  // Tags
  if (reqs.ats_anchor_keywords && reqs.ats_anchor_keywords.length > 0) {
    tagsContainer.innerHTML = reqs.ats_anchor_keywords
      .map(kw => `<span class="tag">${escapeHtml(kw)}</span>`)
      .join("");
  } else {
    tagsContainer.innerHTML = `<span class="empty-list">None extracted</span>`;
  }
}

// Render Before vs After Resume Comparison
function renderComparison(draft, masterRaw) {
  const originalEl = document.getElementById("comp-original");
  const draftEl = document.getElementById("comp-draft");
  
  if (!draft) {
    originalEl.innerHTML = `<p class="empty-message">Run the concierge to generate a comparative draft.</p>`;
    draftEl.innerHTML = `<p class="empty-message">Run the concierge to generate a comparative draft.</p>`;
    return;
  }
  
  let master = null;
  if (masterRaw) {
    try {
      master = JSON.parse(masterRaw);
    } catch {
      // Ignored
    }
  }
  
  // Fallback to empty comparison if master is not loadable
  if (!master) {
    originalEl.innerText = "Master resume not available or not valid JSON.";
    draftEl.innerText = JSON.stringify(draft, null, 2);
    return;
  }
  
  // Build a comparison list of professional experience
  const buildExperienceHTML = (resume) => {
    const history = resume.professional_history || resume.experience || [];
    if (history.length === 0) return "<p class='empty-list'>No experience listed.</p>";
    
    return history.map(exp => {
      const company = exp.company || exp.organization || "";
      const role = exp.role || "";
      const duration = exp.duration || "";
      const bullets = exp.bullets || [];
      
      const bulletsHTML = bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
      return `
        <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 12px;">
          <div style="font-weight: 600; color: var(--accent-blue);">${escapeHtml(role)}</div>
          <div style="font-size: 10px; color: var(--text-muted); margin-bottom: 8px;">${escapeHtml(company)} | ${escapeHtml(duration)}</div>
          <ul style="padding-left: 14px; list-style-type: circle; display: flex; flex-direction: column; gap: 4px;">
            ${bulletsHTML}
          </ul>
        </div>
      `;
    }).join("");
  };
  
  originalEl.innerHTML = buildExperienceHTML(master);
  draftEl.innerHTML = buildExperienceHTML(draft);
}

// Render Scorecard
function renderScorecard(card) {
  const ratingEl = document.getElementById("score-rating");
  const parsingVal = document.getElementById("score-parsing-val");
  const keywordsVal = document.getElementById("score-keywords-val");
  const industryVal = document.getElementById("score-industry-val");
  
  const parsingFill = document.getElementById("score-parsing-fill");
  const keywordsFill = document.getElementById("score-keywords-fill");
  const industryFill = document.getElementById("score-industry-fill");
  
  const defList = document.getElementById("score-deficiencies-list");
  const actList = document.getElementById("score-actions-list");
  
  if (!card) {
    ratingEl.innerText = "—";
    parsingVal.innerText = "—";
    keywordsVal.innerText = "—";
    industryVal.innerText = "—";
    parsingFill.style.width = "0%";
    keywordsFill.style.width = "0%";
    industryFill.style.width = "0%";
    defList.innerHTML = `<li class="empty-list">No audit performed yet.</li>`;
    actList.innerHTML = `<li class="empty-list">No audit performed yet.</li>`;
    return;
  }
  
  // Extract overall score
  let overall = card["Overall Alignment Rating"] || card.overall_alignment_rating;
  if (typeof overall === "object" && overall !== null) {
    overall = overall.score;
  }
  
  // Extract specific bar metrics
  const getMetricScore = (name) => {
    let met = card[name] || (card.evaluation_metrics && card.evaluation_metrics[name]);
    if (typeof met === "object" && met !== null) return met.score;
    return met;
  };
  
  const pScore = getMetricScore("ATS Parsing Accuracy") || getMetricScore("ats_parsing_accuracy") || 0;
  const kwScore = getMetricScore("Target Keyword Density") || getMetricScore("target_keyword_density") || 0;
  const indScore = getMetricScore("Industry Terminology and Authenticity") || getMetricScore("industry_terminology_and_authenticity") || getMetricScore("technical_authenticity") || 0;
  
  // Set Text Values
  ratingEl.innerText = overall !== undefined ? overall.toFixed(1) : "—";
  parsingVal.innerText = `${pScore.toFixed(1)}/10`;
  keywordsVal.innerText = `${kwScore.toFixed(1)}/10`;
  industryVal.innerText = `${indScore.toFixed(1)}/10`;
  
  // Animate Fills
  parsingFill.style.width = `${pScore * 10}%`;
  keywordsFill.style.width = `${kwScore * 10}%`;
  industryFill.style.width = `${indScore * 10}%`;
  
  // Pop lists
  const populateBulletList = (el, arr) => {
    if (!arr || arr.length === 0) {
      el.innerHTML = `<li><span class="empty-list">No issues identified! Excellent alignment.</span></li>`;
    } else {
      el.innerHTML = arr.map(item => `<li>${escapeHtml(item)}</li>`).join("");
    }
  };
  
  populateBulletList(defList, card.deficiencies || card.Deficiencies);
  populateBulletList(actList, card.corrective_actions || card.Corrective_Actions || card.CorrectiveActions);
}

// 4. API: Stream Run Logs (Subprocess)
async function runEngine() {
  if (currentStatus === "running") return;
  
  // 1. Save inputs first
  const saveSuccess = await saveInputs(false);
  if (!saveSuccess) return;
  
  currentStatus = "running";
  updateUIState();
  
  terminalLog.innerHTML = `<div class="system-line">[System] Staged inputs saved. Launching multi-agent optimization loop...</div>`;
  
  // Establish EventSource
  eventSource = new EventSource("/api/run");
  
  eventSource.onmessage = (event) => {
    const rawLine = event.data;
    
    // Parse styling based on line patterns
    let lineClass = "system-line";
    if (rawLine.includes("Running Context Hunter") || rawLine.includes("Context Hunter output")) {
      lineClass = "hunter-line";
    } else if (rawLine.includes("Running Resume Tailor") || rawLine.includes("Resume Tailor output")) {
      lineClass = "tailor-line";
    } else if (rawLine.includes("Running ATS Critic") || rawLine.includes("ATS Critic output")) {
      lineClass = "critic-line";
    } else if (rawLine.includes("completed successfully") || rawLine.includes("succeeded!") || rawLine.includes("Complete")) {
      lineClass = "success-line";
    } else if (rawLine.includes("Error") || rawLine.includes("Traceback") || rawLine.includes("failed")) {
      lineClass = "error-line";
    }
    
    appendLog(rawLine, lineClass);
    
    // Check if process finished
    if (rawLine.includes("[System] Process finished")) {
      closeEventSource();
      currentStatus = "idle";
      
      const exitCode = parseInt(rawLine.split("exit code:")[1]);
      if (exitCode === 0) {
        engineStatus.innerText = "Complete";
        engineStatus.className = "badge-status status-complete";
        appendLog("[System] Execution completed successfully. Loading results...", "success-line");
      } else {
        engineStatus.innerText = "Error";
        engineStatus.className = "badge-status status-error";
        appendLog("[System] Execution terminated with errors.", "error-line");
      }
      
      loadResults();
      updateUIState();
    }
  };
  
  eventSource.onerror = (err) => {
    appendLog("[System Error] Connection to agent stream lost.", "error-line");
    closeEventSource();
    currentStatus = "idle";
    engineStatus.innerText = "Error";
    engineStatus.className = "badge-status status-error";
    updateUIState();
    loadResults();
  };
}

// Helpers
function closeEventSource() {
  if (eventSource) {
    eventSource.close();
    eventSource = null;
  }
}

function updateUIState() {
  if (currentStatus === "running") {
    btnRun.disabled = true;
    btnSave.disabled = true;
    resumeEditor.disabled = true;
    jobEditor.disabled = true;
    engineStatus.innerText = "Running";
    engineStatus.className = "badge-status status-running";
  } else {
    btnRun.disabled = false;
    btnSave.disabled = false;
    resumeEditor.disabled = false;
    jobEditor.disabled = false;
  }
}

function appendLog(text, className) {
  const line = document.createElement("div");
  line.className = className;
  line.innerText = text;
  terminalLog.appendChild(line);
  terminalLog.scrollTop = terminalLog.scrollHeight;
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
