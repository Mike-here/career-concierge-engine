// Constants for Offline / Demo Mode
const DEFAULT_MASTER_RESUME = {
  "personal_info": {
    "name": "Jane Doe",
    "phone": "555-019-2834",
    "email": "jane.doe@marketingpro.com",
    "linkedin": "https://www.linkedin.com/in/janedoe-marketing/",
    "portfolio": "https://janedoemarketing.myportfolio.com/"
  },
  "core_skills": [
    "Product Marketing",
    "GTM Execution",
    "Copywriting",
    "Market Research",
    "Google Analytics",
    "Excel",
    "SQL"
  ],
  "professional_history": [
    {
      "company": "Apex Creative Agency",
      "role": "Marketing Specialist",
      "duration": "May 2024 – Present",
      "location": "Boston, MA",
      "bullets": [
        "Wrote marketing copy for client email launches, increasing open rates by 12%.",
        "Worked with creative and product teams on launch asset delivery timelines.",
        "Tracked web metrics in Google Analytics and summarized performance in Excel report spreadsheets.",
        "Researched competitor websites to help position new client product campaigns."
      ]
    },
    {
      "company": "Innovate LLC",
      "role": "Marketing Coordinator",
      "duration": "June 2023 – April 2024",
      "location": "Boston, MA",
      "bullets": [
        "Helped launch two new app features by writing initial web copy and draft blog posts.",
        "Ran database lists in SQL to pull customer demographics for targeted email campaigns.",
        "Posted regular social media content across platforms, raising follower metrics by 15."
      ]
    }
  ],
  "education_and_certifications": [
    {
      "institution": "Boston University",
      "degree_or_certification": "B.S. in Business Administration (Marketing)",
      "duration": "Graduated May 2023",
      "location": "Boston, MA",
      "details": [
        "GPA: 3.8/4.0",
        "Relevant Coursework: Marketing Analytics, Brand Management"
      ]
    }
  ]
};

const DEFAULT_JOB_DESCRIPTION = `# Senior Product Marketing Manager (BrandSphere)

## Position Overview
We are looking for a Senior Product Marketing Manager to lead high-impact go-to-market (GTM) strategies for our brand management tools.

## Key Responsibilities
- Create GTM messaging frameworks, value propositions, and positioning statements.
- Direct campaign execution across segmentations and author user collateral.
- Query marketing databases using SQL and build Google Analytics dashboards.
- Lead cross-functional alignment with Product, Sales, and Design.

## Requirements
- 5+ years in product marketing with GTM campaign ownership.
- Proficiency in analytics tools (Google Analytics, Excel) and SQL database queries.
- Strong strategic writing and communication skills.`;

const MOCK_REQUIREMENTS = {
  "domain_category": "Marketing / Strategy",
  "target_role": "Senior Product Marketing Manager at BrandSphere",
  "core_competencies": [
    "Go-to-market (GTM) strategy execution",
    "Messaging framework development",
    "Customer segmentation",
    "Campaign orchestration",
    "User research",
    "Market analysis",
    "Competitive intelligence",
    "Performance reporting and optimization"
  ],
  "required_tools_and_technologies": [
    "SQL (database queries)",
    "Google Analytics",
    "Microsoft Excel",
    "Analytics dashboards"
  ],
  "soft_skills": [
    "Exceptional written and verbal communication",
    "Cross-functional collaboration (Product Management, Sales, Design)",
    "Collaborative mindset",
    "Adaptability in fast-paced environments"
  ],
  "ats_anchor_keywords": [
    "Product Marketing",
    "Go-To-Market",
    "GTM Strategy",
    "Messaging Framework",
    "Value Proposition",
    "Market Positioning",
    "Brand Strategy",
    "Customer Segmentation",
    "User Research",
    "Competitive Intelligence",
    "Campaign Analytics",
    "SQL Queries",
    "Google Analytics",
    "Cross-Functional Collaboration",
    "Market Analysis"
  ]
};

const MOCK_DRAFT = {
  "personal_info": {
    "name": "Jane Doe",
    "phone": "555-019-2834",
    "email": "jane.doe@marketingpro.com",
    "linkedin": "https://www.linkedin.com/in/janedoe-marketing/",
    "portfolio": "https://janedoemarketing.myportfolio.com/"
  },
  "core_skills": [
    "Product Marketing Strategy",
    "Go-to-market (GTM) Strategy & Execution",
    "Messaging Framework Development",
    "Value Proposition Definition",
    "Customer-Facing Collateral Authoring",
    "Market Research & Competitive Intelligence",
    "Marketing Analytics & Reporting",
    "Campaign Orchestration & Optimization",
    "Cross-functional Collaboration",
    "Product Positioning",
    "Brand Management",
    "SQL",
    "Google Analytics",
    "Excel"
  ],
  "professional_history": [
    {
      "company": "Apex Creative Agency",
      "role": "Marketing Specialist",
      "duration": "May 2024 – Present",
      "location": "Boston, MA",
      "bullets": [
        "Developed and authored compelling customer-facing collateral, including launch copy and promotional email campaigns, driving a 12% increase in open rates for client products.",
        "Facilitated cross-functional collaboration between creative and product management teams to ensure timely asset delivery and strategic GTM alignment for key initiatives.",
        "Conducted comprehensive marketing analytics and performance reporting using Google Analytics and Excel, translating complex data into actionable insights for stakeholder review and strategic decision-making.",
        "Contributed to competitive intelligence efforts, analyzing competitor features and market trends to strategically inform brand management and product positioning campaigns."
      ]
    },
    {
      "company": "Innovate LLC",
      "role": "Marketing Coordinator",
      "duration": "June 2023 – April 2024",
      "location": "Boston, MA",
      "bullets": [
        "Supported Go-to-market (GTM) execution for two new digital platform features by developing initial website messaging and blog announcements, contributing to successful product launches.",
        "Performed customer segmentation analysis utilizing SQL to extract and identify key demographic cohorts, optimizing targeting for direct email outreach campaigns.",
        "Orchestrated and optimized social media marketing campaigns, including content scheduling and engagement strategies, resulting in a 15% increase in follower count."
      ]
    }
  ],
  "education_and_certifications": [
    {
      "institution": "Boston University",
      "degree_or_certification": "B.S. in Business Administration (Marketing)",
      "duration": "Graduated May 2023",
      "location": "Boston, MA",
      "details": [
        "GPA: 3.8/4.0",
        "Relevant Coursework: Marketing Analytics, Consumer Behavior, Brand Management, Systems Thinking"
      ]
    }
  ]
};

const MOCK_SCORECARD = {
  "evaluation_metrics": {
    "ats_parsing_accuracy": {
      "score": 10.0,
      "feedback": "Perfect JSON schema alignment ensures 100% parsing success."
    },
    "target_keyword_density": {
      "score": 9.5,
      "feedback": "All primary ATS anchor terms (GTM, Messaging, SQL, Google Analytics, Excel) are strongly represented."
    },
    "recruiter_readability": {
      "score": 9.4,
      "feedback": "Clean hierarchy and highly impact-focused active phrasing."
    },
    "technical_authenticity": {
      "score": 9.3,
      "feedback": "Accurately represents professional competence in the marketing domain."
    },
    "credibility_of_claims": {
      "score": 9.5,
      "feedback": "All metrics are properly grounded in documented experience details."
    },
    "overall_alignment_rating": {
      "score": 9.4,
      "feedback": "Superb strategic fit for the Senior Product Marketing Manager role."
    }
  },
  "operational_playbook_audit": {
    "action_verb_priming": "Pass. High-tier active marketing verbs used.",
    "quantifiable_impact": "Pass. Outcomes are properly quantified.",
    "anti_patterns": "Pass. No generic fluff."
  },
  "status": "Awaiting Human Review"
};

// State Management
let currentStatus = "idle";
let eventSource = null;
let latestDraft = null;

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
    if (!res.ok) throw new Error("API not available");
    const data = await res.json();
    
    if (data.resume_master) {
      try {
        const parsed = JSON.parse(data.resume_master);
        resumeEditor.value = JSON.stringify(parsed, null, 2);
      } catch {
        resumeEditor.value = data.resume_master;
      }
    } else {
      resumeEditor.value = JSON.stringify(DEFAULT_MASTER_RESUME, null, 2);
    }
    
    if (data.job_description) {
      jobEditor.value = data.job_description;
    } else {
      jobEditor.value = DEFAULT_JOB_DESCRIPTION;
    }
  } catch (err) {
    console.log("Statically hosted or backend offline. Using client-side defaults.");
    resumeEditor.value = JSON.stringify(DEFAULT_MASTER_RESUME, null, 2);
    jobEditor.value = DEFAULT_JOB_DESCRIPTION;
  }
}

// 2. API: Save Inputs
async function saveInputs(showAlert = false) {
  try {
    const resumeVal = resumeEditor.value.trim();
    const jobVal = jobEditor.value.trim();
    
    // Client-side JSON format validation
    if (resumeVal) {
      try {
        JSON.parse(resumeVal);
      } catch (je) {
        alert(`Invalid Resume JSON: ${je.message}`);
        return false;
      }
    }
    
    const res = await fetch("/api/inputs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resume_master: resumeVal,
        job_description: jobVal
      })
    });
    
    if (!res.ok) {
      throw new Error("Backend offline");
    }
    
    if (showAlert) {
      appendLog("[System] Inputs saved to staging files successfully.", "system-line");
      alert("Staging inputs saved successfully!");
    }
    return true;
  } catch (err) {
    if (showAlert) {
      appendLog("[System] Running in static/offline sandbox. Staging inputs saved locally.", "system-line");
      alert("Inputs saved to local sandbox.");
    }
    return true; // Return true to allow demo mode flow to run offline
  }
}

// 3. API: Load and Render Results
async function loadResults() {
  try {
    const res = await fetch("/api/results");
    if (!res.ok) throw new Error("API not available");
    const data = await res.json();
    
    latestDraft = data.resume_draft;
    renderRequirements(data.extracted_requirements);
    renderComparison(data.resume_draft, data.resume_master);
    renderScorecard(data.score_card);
  } catch (err) {
    // Statically hosted fallback
    console.log("Statically hosted or no results on backend. Ready for simulation.");
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
      master = typeof masterRaw === "string" ? JSON.parse(masterRaw) : masterRaw;
    } catch {
      // Ignored
    }
  }
  
  if (!master) {
    originalEl.innerText = "Master resume not available or not valid JSON.";
    draftEl.innerText = JSON.stringify(draft, null, 2);
    return;
  }
  
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
  
  let overall = card["Overall Alignment Rating"] || card.overall_alignment_rating;
  if (typeof overall === "object" && overall !== null) {
    overall = overall.score;
  }
  
  const getMetricScore = (name) => {
    let met = card[name] || (card.evaluation_metrics && card.evaluation_metrics[name]);
    if (typeof met === "object" && met !== null) return met.score;
    return met;
  };
  
  const pScore = getMetricScore("ATS Parsing Accuracy") || getMetricScore("ats_parsing_accuracy") || 0;
  const kwScore = getMetricScore("Target Keyword Density") || getMetricScore("target_keyword_density") || 0;
  const indScore = getMetricScore("Industry Terminology and Authenticity") || getMetricScore("industry_terminology_and_authenticity") || getMetricScore("technical_authenticity") || 0;
  
  ratingEl.innerText = overall !== undefined ? overall.toFixed(1) : "—";
  parsingVal.innerText = `${pScore.toFixed(1)}/10`;
  keywordsVal.innerText = `${kwScore.toFixed(1)}/10`;
  industryVal.innerText = `${indScore.toFixed(1)}/10`;
  
  parsingFill.style.width = `${pScore * 10}%`;
  keywordsFill.style.width = `${kwScore * 10}%`;
  industryFill.style.width = `${indScore * 10}%`;
  
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

// Client-Side Simulation (For Offline/Static Netlify deployments)
function runClientSideSimulation() {
  currentStatus = "running";
  updateUIState();
  
  const simulationLines = [
    { text: "\n=== Running Context Hunter ===", delay: 500, style: "hunter-line" },
    { text: "Analyzing job description...", delay: 1200, style: "hunter-line" },
    { text: "Detecting domain category: Marketing / Strategy", delay: 2000, style: "hunter-line" },
    { text: "Isolating core competencies, required tools, and ATS keywords...", delay: 2800, style: "hunter-line" },
    { text: "Context Hunter output:\nSuccessfully extracted requirements and saved to extracted_requirements.json", delay: 3500, style: "hunter-line" },
    
    { text: "\n--- Execution Loop 1 of 1 ---", delay: 4200, style: "system-line" },
    { text: "Waiting 15 seconds to manage API rate limits...", delay: 4500, style: "system-line" },
    
    { text: "\n=== Running Resume Tailor ===", delay: 5500, style: "tailor-line" },
    { text: "Optimizing master resume...", delay: 6200, style: "tailor-line" },
    { text: "Adopting persona: Universal Professional Domain Architect", delay: 7000, style: "tailor-line" },
    { text: "Reframing experience bullet points for marketing seniority...", delay: 7800, style: "tailor-line" },
    { text: "Preserving factual integrity of durations and metrics...", delay: 8600, style: "tailor-line" },
    { text: "Resume Tailor output:\nOptimized resume draft successfully saved to resume_draft.json", delay: 9300, style: "tailor-line" },
    
    { text: "Waiting 15 seconds to manage API rate limits...", delay: 9800, style: "system-line" },
    
    { text: "\n=== Running ATS Critic ===", delay: 10500, style: "critic-line" },
    { text: "Auditing resume draft against target requirements...", delay: 11200, style: "critic-line" },
    { text: "Applying domain-specific grading criteria (Managerial/Marketing)...", delay: 12000, style: "critic-line" },
    { text: "Calculating keyword density and terminology alignment...", delay: 12800, style: "critic-line" },
    { text: "ATS Critic output:\nAudit complete. Score: 9.4/10. Status: Awaiting Human Review", delay: 13500, style: "critic-line" },
    
    { text: "\nLoop 1 Score Card:", delay: 14200, style: "success-line" },
    { text: "  Overall Score: 9.4/10.0", delay: 14500, style: "success-line" },
    { text: "  Status: Awaiting Human Review", delay: 14800, style: "success-line" },
    { text: "Overall score met target (>= 9.0/10.0) and loop succeeded!", delay: 15100, style: "success-line" },
    { text: "\n=== Framework Execution Complete ===", delay: 15600, style: "success-line" },
    { text: "[System] Process finished with exit code: 0", delay: 16000, style: "system-line" }
  ];
  
  simulationLines.forEach(line => {
    setTimeout(() => {
      appendLog(line.text, line.style);
      
      if (line.text.includes("Process finished")) {
        currentStatus = "idle";
        engineStatus.innerText = "Complete";
        engineStatus.className = "badge-status status-complete";
        appendLog("[System] Execution completed successfully. Loading results...", "success-line");
        
        // Render the mock results directly into DOM
        renderRequirements(MOCK_REQUIREMENTS);
        renderComparison(MOCK_DRAFT, JSON.stringify(DEFAULT_MASTER_RESUME));
        renderScorecard(MOCK_SCORECARD);
        latestDraft = MOCK_DRAFT;
        
        updateUIState();
      }
    }, line.delay);
  });
}

// 4. API: Stream Run Logs (Subprocess)
async function runEngine() {
  if (currentStatus === "running") return;
  
  // Save inputs first
  const saveSuccess = await saveInputs(false);
  if (!saveSuccess) return;
  
  const modeSelect = document.getElementById("engine-mode");
  const mode = modeSelect ? modeSelect.value : "demo";
  
  // Detect if running statically (e.g. on Netlify) or in Demo mode
  let isStatic = false;
  try {
    const testRes = await fetch("/api/inputs");
    if (!testRes.ok) isStatic = true;
  } catch {
    isStatic = true;
  }
  
  if (isStatic || mode === "demo") {
    terminalLog.innerHTML = `<div class="system-line">[System] Launching client-side sandboxed demo simulation...</div>`;
    runClientSideSimulation();
    return;
  }
  
  currentStatus = "running";
  updateUIState();
  
  terminalLog.innerHTML = `<div class="system-line">[System] Staged inputs saved. Launching multi-agent optimization loop...</div>`;
  
  // Establish EventSource connection for Live mode
  eventSource = new EventSource(`/api/run?mode=${mode}`);
  
  eventSource.onmessage = (event) => {
    const rawLine = event.data;
    
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

window.copyDraftJson = function() {
  if (!latestDraft) {
    alert("No tailored resume generated yet!");
    return;
  }
  navigator.clipboard.writeText(JSON.stringify(latestDraft, null, 2))
    .then(() => alert("Tailored resume JSON copied to clipboard!"))
    .catch(err => alert("Failed to copy: " + err.message));
};
