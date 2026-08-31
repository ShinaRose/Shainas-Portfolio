import profileImg from "../assets/profile.jpg";

export const profileImage = profileImg;

export const linkedInUrl = "https://www.linkedin.com/in/shina-rose-dsouza-443a63287/";
export const emailUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Portfolio%20Enquiry%20-%20Graduate%20Opportunity";
export const resumeRequestUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Resume%20Request%20-%20Shina%20Rose%20Dsouza";

export const actionLinks = {
  home: "#home",
  work: "#work",
  skills: "#skills",
  about: "#about",
  experience: "#experience",
  resume: "#resume",
  contact: "#contact",
  linkedIn: linkedInUrl,
  resumeFile: resumeRequestUrl,
  email: emailUrl,
};

export const navLinks = [
  { label: "Work", href: actionLinks.work },
  { label: "Skills", href: actionLinks.skills },
  { label: "About", href: actionLinks.about },
  { label: "Experience", href: actionLinks.experience },
  { label: "Resume", href: actionLinks.resume },
  { label: "Contact", href: actionLinks.contact },
];

export const targetRoles = [
  "Data Scientist",
  "Information Systems Manager",
  "IT Project Manager",
  "Database Architect / Administrator",
  "Security Specialist / Cybersecurity Analyst",
  "Supply Chain Analyst",
];

export const employerSnapshot = [
  { label: "Status", value: "MSc graduate, 2.1" },
  { label: "Focus", value: "Data, systems, cybersecurity & supply chain" },
  { label: "Location", value: "Cork, Ireland" },
  { label: "Availability", value: "Open to graduate and entry-level roles" },
];

export const skillGroups = [
  {
    title: "Data Science & Analytics",
    description: "Comfortable turning raw data into dashboards and insight that actually help a decision get made.",
    skills: ["Python", "SQL", "Excel", "Dashboards", "Data visualisation", "Statistical analysis"],
  },
  {
    title: "Information Systems",
    description: "The connective tissue between what a business actually needs and how its systems and data are built.",
    skills: ["Systems analysis", "Database design", "Data modelling", "Requirements gathering", "Process mapping", "Documentation"],
  },
  {
    title: "IT Project & Operations",
    description: "Keeping projects moving through planning and clear communication, and improving the process once you notice what's not working.",
    skills: ["IT project management", "Stakeholder communication", "Risk tracking", "Agile awareness", "Workflow improvement", "Change support"],
  },
  {
    title: "Cybersecurity & Governance",
    description: "Thinking about who should have access to what, and how data gets handled responsibly along the way.",
    skills: ["Cybersecurity awareness", "Access control", "Data privacy", "Risk awareness", "Digital governance", "Compliance"],
  },
  {
    title: "Supply Chain Analysis",
    description: "Looking at inventory, suppliers and lead times through that same data-and-systems lens.",
    skills: ["Inventory analysis", "Forecasting", "Supplier performance", "Lead-time tracking", "Operations metrics", "Process optimisation"],
  },
  {
    title: "Tools & Methods",
    description: "The practical toolkit behind all of it, plus knowing how to explain the results to someone who wasn't in the room.",
    skills: ["Excel", "Python", "SQL", "Dashboards", "Research synthesis", "Business documentation"],
  },
];

export const featuredWork = [
  {
    title: "Commingled to Independent: The Art of Uncoupling – An IS Perspective of How IT Teams Experience a Corporate Spin-Off: The Aptiv-Versigent Case",
    label: "MSc research dissertation · Qualitative case study",
    role: "Researcher (Information Systems)",
    tools: ["Qualitative research", "Semi-structured interviews", "Thematic analysis", "Case study design"],
    videoUrl: "https://drive.google.com/file/d/1XHLoVXVJh4OFVJXX_jj9CtBpqF5Qyufv/preview",
    problem: "When a business unit spins off from its parent company, legal separation doesn't mean operational independence. Aptiv's 2026 spin-off of its EDS division into Versigent left IT teams still sharing systems, data and processes under a Transition Service Agreement, but little research explores how employees actually experience that day-to-day, rather than the deal itself.",
    approach: [
      "Designed a single embedded case study of the Aptiv-Versigent spin-off, conducting eight semi-structured interviews with IT team members across both organisations.",
      "Applied thematic analysis to surface how people, process and technology were each affected by the separation.",
      "Investigated relationship ambiguity between companies, decisions to keep or change processes, and shared-system, access and technical-gap issues.",
    ],
    outcome: "Identified how employees informally negotiated cross-company relationships, adapted processes around commingled data and undocumented knowledge, and worked around shared-system and access gaps that the original separation plan hadn't fully accounted for. Produced practical recommendations for managing the people and process side of future corporate spin-offs, alongside academic contributions to the IS literature on organisational separation.",
    contribution: "Co-authored the research design, interview data collection and thematic analysis as part of a four-person research team, with academic mentorship from UCC and industry mentors at Aptiv and Versigent.",
    award: "Most Engaging Presentation Award – UCC MSc ISBP",
    icon: "systems",
  },
  {
    title: "AI Career Path Recommender",
    label: "Streamlit data app",
    role: "Data Analyst / App Developer",
    tools: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Cosine similarity"],
    liveUrl: "https://ai-career-path-recommender-ymk2wre3xhybtxigottkqw.streamlit.app/",
    problem: "Students exploring IT and data careers may not know which roles match their current skills or what skills to improve next.",
    approach: [
      "Built an interactive Streamlit app where users rate skills such as Python, SQL, communication, problem solving, cybersecurity interest and data visualisation.",
      "Compared the user profile with career profiles using cosine similarity.",
      "Ranked career matches and displayed recommended skills, certifications and a 30-day action plan.",
    ],
    outcome: "A working app that turns a student's skill ratings into real career suggestions. It is hands-on proof of the Python and data analysis work behind it, not just the theory.",
    contribution: "Built the app structure, career matching logic, CSV data model and recommendation output.",
    icon: "chart",
  },
  {
    title: "Cloud & SaaS Spend Intelligence",
    label: "FinOps analytics · Streamlit app",
    role: "FinOps / Data Analyst",
    tools: ["Python", "Streamlit", "Pandas", "Anomaly detection", "Cost forecasting"],
    liveUrl: "https://finops-spend-intelligence.streamlit.app/",
    problem: "Cloud and SaaS spend tends to grow unmanaged: idle resources, unused licences and untagged cost sit scattered across accounts, and a single monthly total doesn't tell anyone what to actually go and fix.",
    approach: [
      "Built a Streamlit app that turns raw cost data into a findings report instead of a single spend number, covering idle resources, licence reclamation and unit economics.",
      "Added anomaly detection on daily cost lines, comparing observed cost against an expected baseline, so spend spikes get flagged instead of only showing up at month end.",
      "Built a tag-inference model that predicts which team owns an untagged cloud resource from its usage pattern and evidence, so chargeback reporting doesn't just default to 'unknown'.",
    ],
    outcome: "A working FinOps tool spanning findings, forecasting, anomalies, idle resources, licence reclamation, unit economics, chargeback and tag inference, the kind of view a FinOps or platform team would use to decide what to cut first.",
    contribution: "Designed the FinOps data model and built the app end to end: the anomaly detection, forecasting, idle-resource and licence-reclamation logic, unit economics, chargeback, and the tag-inference classifier.",
    icon: "target",
  },
  {
    title: "IT Service Reliability Analytics",
    label: "SRE analytics · Streamlit app",
    role: "Site Reliability / IT Operations Analyst",
    tools: ["Python", "Streamlit", "SLOs & error budgets", "DORA metrics", "Scenario simulation"],
    liveUrl: "https://it-service-reliability-analytics-npsqhdpz2sqycuy8wubcqy.streamlit.app/",
    problem: "Engineering leadership usually sees reliability as a single uptime percentage, which hides how much error budget a team has actually burned, what incidents cost the business, and whether on-call load is heading toward burnout.",
    approach: [
      "Built SLO and error-budget tracking so teams can see how much budget they've spent, not just whether they hit an SLA target.",
      "Connected reliability data to financial impact and on-call health, so downtime and on-call load show up as business and people costs, not just a dashboard.",
      "Added a Real World DORA view and a What If scenario sandbox so teams can benchmark performance and test the effect of a process change before committing to it.",
    ],
    outcome: "A working reliability analytics tool spanning SLOs, financial impact, on-call health, structural analytics, DORA benchmarking and scenario simulation: the kind of tool an SRE or platform team would use to decide where to put reliability effort next.",
    contribution: "Built the app end to end: the reporting pipeline behind each view, the SLO and error-budget model, and the what-if scenario sandbox.",
    icon: "shield",
  },
  {
    title: "Student Services Data & Systems Improvement Concept",
    label: "Information systems case study",
    role: "Business Systems Analyst",
    tools: ["Systems analysis", "Process mapping", "Data quality", "Requirements"],
    liveUrl: "demos/student-services.html",
    problem: "Students need quick access to important support, course and service information, but digital journeys can become difficult when information is scattered, duplicated or not clearly connected to the right service process.",
    approach: [
      "Reviewed the student service journey and identified where information gaps or process confusion could slow users down.",
      "Grouped content by service need and mapped how information should flow between students, support teams and systems.",
      "Proposed a clearer structure focused on data quality, service visibility and faster decision-making.",
    ],
    outcome: "A clearer concept for how student services could work, built around systems thinking, information organisation and practical business analysis.",
    contribution: "Owned the process review, information structure, requirements thinking and improvement rationale.",
    icon: "systems",
  },
  {
    title: "Business Decision Support Dashboard",
    label: "Data analytics project",
    role: "Data Analyst",
    tools: ["Excel", "SQL", "Dashboard design", "KPIs", "Business decision support"],
    liveUrl: "demos/business-dashboard.html",
    problem: "Business users need data presented in a way that supports quick understanding rather than overwhelming them with raw information.",
    approach: [
      "Selected the most useful business metrics for a dashboard view.",
      "Structured information into sections so insights were easier to compare.",
      "Focused on readable labels, useful summaries and practical performance indicators.",
    ],
    outcome: "A dashboard-style project showing how data can be transformed into useful insight for non-technical business users.",
    contribution: "Prepared the data structure, dashboard layout, KPI presentation and insight summary.",
    icon: "chart",
  },
  {
    title: "Information Systems Process Improvement Case Study",
    label: "Systems analysis case study",
    role: "Business Systems Analyst",
    tools: ["Systems analysis", "Process mapping", "Requirements", "Documentation"],
    liveUrl: "demos/process-improvement.html",
    problem: "A business process can become inefficient when operational steps, system requirements and data ownership are not clearly connected.",
    approach: [
      "Mapped the current-state process and identified pain points.",
      "Translated business needs into clearer system and workflow requirements.",
      "Proposed a future-state process focused on data quality, clarity and operational improvement.",
    ],
    outcome: "A structured case study showing how the right business analysis and systems thinking can smooth out digital service delivery.",
    contribution: "Analysed the process, identified improvement opportunities and documented practical recommendations.",
    icon: "systems",
  },
  {
    title: "Supplier Performance Scorecard",
    label: "Supply chain analytics · Real dataset",
    role: "Supply Chain Analyst / Data Analyst",
    tools: ["Python", "Pandas", "OTIF & KPI design", "Weighted scoring models", "Risk flagging"],
    liveUrl: "demos/supplier-scorecard.html",
    problem: "Procurement teams need a repeatable way to see which suppliers are actually underperforming on delivery, consistency, quality and cost, before it becomes a service or cost problem, not just a gut feeling from the last late shipment.",
    approach: [
      "Built a Python (pandas) pipeline that scores every supplier on OTIF, lead-time mean and variance against schedule, defect rate and price variance, using the real DataCo Smart Supply Chain dataset from Kaggle (180,519 order lines), not a mocked-up sample.",
      "Since the dataset has no supplier ID, QC field or contract price table, I defined and documented explicit proxies for each rather than pretending the data was cleaner than it is.",
      "Combined the four metrics into a weighted composite score and calibrated risk flags (Critical, Watch, Preferred) to the dataset's own distribution instead of an unmeetable fixed SLA target.",
    ],
    outcome: "A working, reproducible scorecard that ranked all 11 supplier groups and surfaced something the raw numbers alone wouldn't show: late delivery in this dataset is driven far more by shipping mode (0-60% on-time) than by any individual supplier (37-41.5%). That's the kind of root-cause distinction that changes what a procurement team should actually act on.",
    contribution: "Built the full pipeline (metric design, scoring model, risk-flag calibration, tests) and the scorecard demo end to end.",
    icon: "chart",
  },
];
export const educationHighlights = [
  {
    title: "MSc Information Systems for Business Performance",
    meta: "University College Cork · MSc graduate, 2.1 (Second Class Honours, Upper Division)",
    description: "Completed studies in business performance, information systems, analytics, databases, digital governance and project management. All point toward the same goal: using technology to make things run better.",
    tags: ["Business Decision Support", "BI, Analytics & AI", "Systems Analysis", "Database Design", "IT Project Management"],
  },
  {
    title: "Retail Operations Experience",
    meta: "SuperValu · Customer-facing and operations exposure",
    description: "Hands-on customer service and teamwork experience, plus a ground-level view of stock and day-to-day retail operations. This exposure feeds directly into my interest in supply chain visibility and process improvement.",
    tags: ["Customer service", "Teamwork", "Operations", "Stock awareness", "Process improvement"],
  },
];

export const courseFocus = [
  "Business Decision Support",
  "BI, Analytics & AI",
  "AI for Business Transformation",
  "Systems Analysis",
  "Database Analysis & Design",
  "IT Project Management",
  "Digital Governance & Compliance",
  "Supply Chain & Operations Interest",
];

export const valueProps = [
  {
    icon: "chart",
    title: "Data-aware",
    description: "Good data should make a decision easier, not harder. That's the standard I hold my own work to.",
  },
  {
    icon: "systems",
    title: "Systems-minded",
    description: "Processes, people, data, technology: I care about how they all connect, not just one piece of the puzzle.",
  },
  {
    icon: "shield",
    title: "Security-conscious",
    description: "Privacy, access and governance aren't an afterthought for me. They're part of how I think about any system from the start.",
  },
  {
    icon: "target",
    title: "Operations-focused",
    description: "Analytics only matters if it actually changes how a supply chain or a business runs day to day.",
  },
];

export const softSkills = [
  "Clear communicator",
  "Collaborative team member",
  "Detail-oriented",
  "Fast learner",
  "Structured thinker",
  "Self-motivated",
];
