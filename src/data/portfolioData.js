export const profileImage = "https://media.licdn.com/dms/image/v2/D4D03AQHiiYinDm8YFg/profile-displayphoto-scale_400_400/B4DZwu2hZbIYAg-/0/1770312571104?e=1779321600&v=beta&t=Jh7OJg4RIIVSGBq_hIWUGqmRIgCKpm-7xgPA2iVreH4";

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
  { label: "Status", value: "Current MSc student" },
  { label: "Focus", value: "Data, systems, cybersecurity & supply chain" },
  { label: "Location", value: "Cork, Ireland" },
  { label: "Availability", value: "Open to graduate and entry-level roles" },
];

export const skillGroups = [
  {
    title: "Data Science & Analytics",
    description: "Analysing data, building dashboards and turning business information into useful decisions.",
    skills: ["Python", "SQL", "Excel", "Dashboards", "Data visualisation", "Statistical analysis"],
  },
  {
    title: "Information Systems",
    description: "Connecting business needs, system requirements and data quality through structured analysis.",
    skills: ["Systems analysis", "Database design", "Data modelling", "Requirements gathering", "Process mapping", "Documentation"],
  },
  {
    title: "IT Project & Operations",
    description: "Supporting technology-enabled change through planning, communication and process improvement.",
    skills: ["IT project management", "Stakeholder communication", "Risk tracking", "Agile awareness", "Workflow improvement", "Change support"],
  },
  {
    title: "Cybersecurity & Governance",
    description: "Applying security-aware thinking to data handling, access, privacy and digital governance.",
    skills: ["Cybersecurity awareness", "Access control", "Data privacy", "Risk awareness", "Digital governance", "Compliance"],
  },
  {
    title: "Supply Chain Analysis",
    description: "Using data and systems thinking to understand inventory, suppliers, lead times and operations performance.",
    skills: ["Inventory analysis", "Forecasting", "Supplier performance", "Lead-time tracking", "Operations metrics", "Process optimisation"],
  },
  {
    title: "Tools & Methods",
    description: "Using practical tools to analyse, organise, communicate and present work clearly.",
    skills: ["Excel", "Python", "SQL", "Dashboards", "Research synthesis", "Business documentation"],
  },
];

export const featuredWork = [
  {
    title: "Commingled to Independent: The Art of Uncoupling – An IS Perspective of How IT Teams Experience a Corporate Spin-Off: The Aptiv-Versigent Case",
    label: "MSc research dissertation · Qualitative case study",
    role: "Researcher (Information Systems)",
    tools: ["Qualitative research", "Semi-structured interviews", "Thematic analysis", "Case study design"],
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
    outcome: "A working career recommendation app that demonstrates Python, data analysis, machine learning similarity scoring and practical decision-support thinking.",
    contribution: "Built the app structure, career matching logic, CSV data model and recommendation output.",
    icon: "chart",
  },
  {
    title: "Student Services Data & Systems Improvement Concept",
    label: "Information systems case study",
    role: "Business Systems Analyst",
    tools: ["Systems analysis", "Process mapping", "Data quality", "Requirements"],
    problem: "Students need quick access to important support, course and service information, but digital journeys can become difficult when information is scattered, duplicated or not clearly connected to the right service process.",
    approach: [
      "Reviewed the student service journey and identified where information gaps or process confusion could slow users down.",
      "Grouped content by service need and mapped how information should flow between students, support teams and systems.",
      "Proposed a clearer structure focused on data quality, service visibility and faster decision-making.",
    ],
    outcome: "A clearer student-facing concept that demonstrates systems thinking, information organisation, process improvement and business analysis.",
    contribution: "Owned the process review, information structure, requirements thinking and improvement rationale.",
    icon: "systems",
  },
  {
    title: "Business Decision Support Dashboard",
    label: "Data analytics project",
    role: "Data Analyst",
    tools: ["Excel", "SQL", "Dashboard design", "KPIs", "Business decision support"],
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
    problem: "A business process can become inefficient when operational steps, system requirements and data ownership are not clearly connected.",
    approach: [
      "Mapped the current-state process and identified pain points.",
      "Translated business needs into clearer system and workflow requirements.",
      "Proposed a future-state process focused on data quality, clarity and operational improvement.",
    ],
    outcome: "A structured case study demonstrating how business analysis and systems thinking can support better digital service delivery.",
    contribution: "Analysed the process, identified improvement opportunities and documented practical recommendations.",
    icon: "systems",
  },
  {
    title: "Supply Chain Performance Dashboard Concept",
    label: "Supply chain analytics",
    role: "Supply Chain Analyst",
    tools: ["Excel", "Forecasting", "Inventory KPIs", "Supplier metrics", "Operations analysis"],
    problem: "Operations teams need visibility into inventory, supplier performance and lead-time issues before they become service or cost problems.",
    approach: [
      "Defined practical supply chain KPIs for inventory, supplier performance and fulfilment visibility.",
      "Designed a dashboard structure to highlight bottlenecks, delays and performance exceptions.",
      "Connected operational metrics to business decisions around planning, supplier review and process improvement.",
    ],
    outcome: "A supply chain analytics concept that shows how data can support better forecasting, supplier review and operational control.",
    contribution: "Created the KPI structure, dashboard concept and business rationale.",
    icon: "chart",
  },
];
export const educationHighlights = [
  {
    title: "MSc Information Systems for Business Performance",
    meta: "University College Cork · Current student",
    description: "Current MSc study focused on business performance, information systems, analytics, databases, digital governance, project management and technology-enabled improvement.",
    tags: ["Business Decision Support", "BI, Analytics & AI", "Systems Analysis", "Database Design", "IT Project Management"],
  },
  {
    title: "Retail Operations Experience",
    meta: "SuperValu · Customer-facing and operations exposure",
    description: "Practical exposure to customer service, teamwork, stock awareness and day-to-day retail processes. This supports my interest in operations, supply chain visibility, data-informed decisions and process improvement.",
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
    description: "I focus on turning information into clear, useful insight for business decisions.",
  },
  {
    icon: "systems",
    title: "Systems-minded",
    description: "I connect processes, people, data and technology through structured analysis.",
  },
  {
    icon: "shield",
    title: "Security-conscious",
    description: "I consider data privacy, access and governance when thinking about digital systems.",
  },
  {
    icon: "target",
    title: "Operations-focused",
    description: "I am interested in how analytics improves supply chain and everyday business performance.",
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
