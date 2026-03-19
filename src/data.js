export const SKILLS_DATA = [
  { cat: "Languages", tags: ["Python", "Java", "Dart", "JavaScript", "C", "SQL"] },
  { cat: "Frameworks & AI", tags: ["Flutter", "React", "Spring Boot", "Streamlit", "TensorFlow", "OpenCV"] },
  { cat: "Databases & Tools", tags: ["MySQL", "PostgreSQL", "SQLite", "Git", "GitHub", "ServiceNow"] },
  { cat: "Core CS", tags: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"] },
  { cat: "Dev & Design", tags: ["HTML", "CSS", "Figma", "Android Studio", "REST APIs", "JWT", "QR-based Auth"] },
  { cat: "Deploy & Cloud", tags: ["Vercel", "Render", "GitHub Actions"] },
];

export const PROJECTS_DATA = [
  {
    num: "01 / Featured",
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
  },
  {
    num: "02 / Featured",
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
  },
];

export const WIDE_PROJECT = {
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
};

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
  { icon: "🏆", title: "1st Prize — V Hack 2.0 National Hackathon", det: "Smart Helmet: AI accident detection · 2026", highlight: true },
  { icon: "🎖", title: "ServiceNow Virtual Internship & Micro Certification", det: "SmartBridge / AICTE" },
  { icon: "🐍", title: "Complete Python Bootcamp: Zero to Hero", det: "Udemy" },
  { icon: "🗄", title: "SQL (Basic) Certification", det: "HackerRank" },
  { icon: "🌿", title: "Git & GitHub Certification", det: "CodeChef" },
  { icon: "🔷", title: "OOPs Concepts in Python", det: "CodeChef" },
];
