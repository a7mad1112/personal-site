export const projectTabs = [
  "All",
  "Senior Project",
  "Client Projects",
  "Training Projects",
];

export const projects = {
  senior: [
    {
      id: "s1",
      title: "Jawed AI – Intelligent Quran Recitation Feedback System",
      date: "03/2025 - present",
      tag: "AI / Speech Processing",
      image: "senior_project.svg",
      description: `
      Jawed AI is an intelligent learning system that teaches and assesses Quranic recitation with real-time Tajweed feedback. It leverages Arabic ASR (Wav2Vec2) to analyze recitation, detects rule violations (e.g., Idgham, Idhhar, Iqlab), and delivers visual cues plus haptic feedback via a wearable bracelet. The solution prioritizes accessibility for visually impaired learners, combining AI, embedded systems, and cloud services to create an inclusive experience.
    `,
      technologies: [
        "Python",
        "Hugging Face Transformers",
        "Wav2Vec2",
        "Flutter",
        "ESP32 (BLE)",
        "Google Cloud Vertex AI",
      ],
      team: [
        { name: "Ahmed Alawneh" },
        { name: "Laeth Nueirat" },
        { name: "Khalid Nidal" },
      ],
      supervisors: ["Dr. Mahmoud Obaid", "Dr. Thaer Thaher"],

      achievements: {
        current: [
          "Curated initial Arabic recitation dataset with Tajweed annotations",
          "Established baseline ASR pipeline(Wav2Vec2) and alignment",
          "Built rule-checking prototype for core Tajweed rules",
          "Implemented Flutter mobile prototype + BLE comms with ESP32 wearable",
          "Scaffolded Flask inference API and cloud deployment draft",
        ],
        nextMilestones: [
          "Fine-tune ASR models on domain-specific data and evaluate WER/CER",
          "Improve real-time latency & streaming inference",
          "Expand Tajweed rule coverage and false-positive reduction",
          "Haptic feedback mapping refinements and user study for accessibility",
          "Staging → production deployment plan and monitoring",
        ],
      },
    },
  ],

  clients: [
    {
      id: "c1",
      title: "Farm Go – Smart Farm Management System",
      date: "05/2025 - present",
      tag: "Full-Stack (React + ASP.NET Core)",
      image: "farm_go.webp",
      description: `
        Farm Go is a comprehensive farm management platform designed to streamline daily agricultural operations, including livestock tracking, employee management, resources, financial transactions, and production monitoring. The system provides real-time dashboards for administrators and supports multi-role access for farmers, veterinarians, and finance officers. It integrates intuitive analytics, automated record handling, and a modern responsive UI optimized for tablets and desktop.
    `,
      technologies: [
        "React (MUI + React Query)",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server",
        "JWT Authentication",
        "Clean Architecture",
      ],

      features: [
        "Animal lifecycle tracking (cows, bulls, calves, etc.)",
        "Group and breeding management",
        "Employee profiles with roles and permissions",
        "Resources & transactions with real-time financial overview",
        "Dynamic dashboards and summary widgets",
        "Responsive UI with RTL support for Arabic users",
      ],

      team: [
        { name: "Ahmed Alawneh" },
        { name: "Obada Yahya" },
        { name: "Basil Adra" },
        { name: "Salam Qarish" },
      ],

      achievements: {
        current: [
          "Developed full-stack architecture using React and ASP.NET Core following Clean Architecture principles",
          "Implemented CRUD modules for Animals, Groups, Employees, and Resources",
          "Integrated React Query for caching, pagination, and real-time UI updates",
          "Built custom reusable components and hooks (e.g., usePost, usePut, useDeleteBody)",
          "Established consistent Arabic RTL UI/UX across all pages",
        ],
        nextMilestones: [
          "Implement transaction payment linking and accounting summary",
          "Add PDF/Excel export for reports and analytics",
          "Deploy production version to cloud environment (Azure / AWS)",
          "Introduce offline-first mobile support via PWA or React Native bridge",
        ],
      },
    },
  ],

  training: [
    {
      id: "t1",
      title: "Landing – Product",
      date: "04/25",
      tag: "Landing Pages",
      image: "/assets/training1.jpg",
    },
    {
      id: "t2",
      title: "Dashboard – Sales",
      date: "06/25",
      tag: "Dashboards",
      image: "/assets/training2.jpg",
    },
    {
      id: "t3",
      title: "UI Challenge #12",
      date: "05/25",
      tag: "Challenges",
      image: "/assets/training3.jpg",
    },
    {
      id: "t4",
      title: "React – Blog",
      date: "03/25",
      tag: "React",
      image: "/assets/training4.jpg",
    },
  ],
};
