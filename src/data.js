export const SKILLS_DATA = [
  { cat: "Languages", tags: ["Python", "Java", "Dart", "JavaScript", "C", "SQL"] },
  { cat: "AI & GenAI", tags: ["LangGraph", "LangChain", "Gemini", "Groq AI", "ChromaDB", "RAG"] },
  { cat: "Frameworks", tags: ["Flutter", "React", "FastAPI", "Spring Boot", "Streamlit", "TensorFlow", "OpenCV"] },
  { cat: "Databases & Tools", tags: ["MySQL", "PostgreSQL", "SQLite", "Git", "GitHub", "ServiceNow"] },
  { cat: "Core CS", tags: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"] },
  { cat: "Dev & Design", tags: ["HTML", "CSS", "Next.js", "TypeScript", "Figma", "Android Studio", "REST APIs", "JWT"] },
  { cat: "Deploy & Cloud", tags: ["Vercel", "Render", "GitHub Actions"] },
];

export const PROJECTS_DATA = [
  {
    num: "01 / Featured",
    title: "Kurukshetra AI",
    sub: "AI-Powered Software Battle Arena",
    desc: "Full-stack multi-agent AI platform where LLM agents compete in coding battles. Built with FastAPI + WebSockets + LangGraph for real-time agentic workflows and live score streaming.",
    impacts: [
      "Real-time multi-agent battle engine via WebSockets",
      "LangGraph orchestration for agentic code generation",
      "Gemini-powered AI judge with structured scoring",
    ],
    tags: ["FastAPI", "LangGraph", "Gemini", "React", "PostgreSQL"],
    github: "https://github.com/harshachaluvadi21/Kurukshetra_AI",
    live: "https://kurukshetra-ai-nine.vercel.app/",
    badge: "🤖 GenAI",
  },
  {
    num: "02 / Featured",
    title: "Bank RAG Assistant",
    sub: "LLM + RAG Chatbot for Banking",
    desc: "Retrieval-Augmented Generation chatbot that answers banking policy questions using ChromaDB vector store, Gemini LLM, and LangChain, with contextual document chunking.",
    impacts: [
      "Semantic search over 100+ banking policy docs",
      "ChromaDB vector store with persistent embeddings",
      "Context-aware answers with source citations",
    ],
    tags: ["Python", "LangChain", "ChromaDB", "Gemini", "Streamlit"],
    github: "https://github.com/harshachaluvadi21/Bank_Rag",
    live: "https://bank-rag.vercel.app/",
    badge: "📚 RAG",
  },
  {
    num: "03 / Live Project",
    title: "Rent Loop",
    sub: "Scalable P2P Rental Platform",
    desc: "A scalable peer-to-peer rental marketplace built with Spring Boot + React, featuring JWT auth, role-based access control, and QR-based transaction verification.",
    impacts: [
      "Scalable RESTful APIs with PostgreSQL integration",
      "QR-based booking lifecycle verification for security",
      "JWT + role-based access control (RBAC)",
      "Engineered for high availability & reliability",
    ],
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "RBAC"],
    badge: "🌐 Live",
    github: "https://github.com/harshachaluvadi21/rentloop_frontend",
    githubBackend: "https://github.com/harshachaluvadi21/rentloop_backend",
    live: "https://rentloop-frontend.vercel.app/",
    isWide: true,
  },
  {
    num: "04 / Featured",
    title: "Smart Drive",
    sub: "AI Drowsiness Detection App",
    desc: "Flutter & ML Kit app for real-time driver drowsiness detection with AI voice assistant and automated GPS emergency alerts.",
    impacts: [
      "100% hands-free interface via STT/TTS",
      "Low-latency AI assistant with Groq Llama 3.3",
      "Automated GPS SMS alerts on fatigue events",
    ],
    tags: ["Flutter", "ML Kit", "Groq AI", "Dart"],
    github: "https://github.com/harshachaluvadi21/smart_drive",
    badge: "🚗 Flutter + AI",
  },
  {
    num: "05 / Featured",
    title: "CinemaStudio AI",
    sub: "AI Movie Script & Pitch Generator",
    desc: "GenAI-powered creative studio that generates complete movie scripts, character breakdowns, and investor pitch decks from a single prompt. Built with Gemini + LangChain multi-step pipelines.",
    impacts: [
      "Multi-step LangChain pipeline for structured script generation",
      "Gemini 1.5 Pro for cinematic narrative generation",
      "Exportable PDF pitchdecks with scene-by-scene breakdown",
    ],
    tags: ["Python", "LangChain", "Gemini", "Streamlit", "FastAPI"],
    badge: "🎬 GenAI",
    github: "https://github.com/harshachaluvadi21",
  },
  {
    num: "06 / Featured",
    title: "Face Recognition Attendance",
    sub: "AI Smart Attendance System",
    desc: "Computer vision attendance system using KNN classification with a real-time Streamlit dashboard and automated record management.",
    impacts: [
      "95% accuracy in real-time face detection",
      "50% reduction in manual attendance logging time",
      "25% fewer false positives via optimized KNN tweaks",
      "Automated record tracking with SQLite & CSV export",
    ],
    tags: ["Python", "OpenCV", "KNN", "Streamlit", "SQLite"],
    github: "https://github.com/harshachaluvadi21/smart_attendance1",
    badge: "👁️ Vision",
    isWide: true,
  },
];

export const EXPERIENCE_DATA = [
  {
    type: "💻 Internship",
    role: "Virtual Intern",
    org: "ServiceNow · SmartBridge / AICTE",
    period: "Oct 2025 – Nov 2025",
    bullets: [
      "Reduced manual ticketing by 35% via service catalog config",
      "Identified 3 bottlenecks → improved resolution speed by 28%",
      "Built custom JS business rules with 100% customization",
    ],
  },
  {
    type: "💻 Internship",
    role: "Web Development Intern",
    org: "Prodigy InfoTech · Remote",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Frontend development with HTML, CSS, JavaScript",
      "Responsive design and UI/UX principles",
    ],
  },
  {
    type: "👑 Leadership",
    role: "President, Android Club",
    org: "Anurag University — Android AU",
    period: "Jul 2025 – Present",
    bullets: [
      "Spearheaded 4+ events, 100+ students engaged",
      "Mentored 20+ beginners → 40% proficiency improvement",
      "Grew community participation by 30%",
    ],
  },
];

export const ACHIEVEMENTS_DATA = [
  { icon: "🏆", title: "1st Prize — V Hack 2.0 National Hackathon", det: "IoT-powered helmet · Raspberry Pi · computer vision · GSM emergency alerts · won among 200+ teams", highlight: true },
  { icon: "🎖", title: "ServiceNow Virtual Internship & Micro Certification", det: "SmartBridge / AICTE" },
  { icon: "🐍", title: "Complete Python Bootcamp: Zero to Hero", det: "Udemy" },
  { icon: "🗄", title: "SQL (Basic) Certification", det: "HackerRank" },
  { icon: "🌿", title: "Git & GitHub Certification", det: "CodeChef" },
  { icon: "🔷", title: "OOPs Concepts in Python", det: "CodeChef" },
];

export const CINEMA_PROJECT = PROJECTS_DATA[4];
export const WIDE_PROJECT = PROJECTS_DATA[2];

