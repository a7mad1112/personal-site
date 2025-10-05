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
      date: "06/2025 - present",
      tag: "AI / Speech Processing",
      image: "senior_project.svg",
      description: `
      Jawed AI is an intelligent learning system that teaches and assesses Quranic recitation with real-time Tajweed feedback. It leverages Arabic ASR (Whisper / Wav2Vec2) to analyze recitation, detects rule violations (e.g., Idgham, Idhhar, Iqlab), and delivers visual/audio cues plus haptic feedback via a wearable bracelet. The solution focuses on accessibility for visually impaired learners and combines AI, embedded systems, and cloud services for an inclusive experience.
    `,
      technologies: [
        "Python",
        "Hugging Face Transformers",
        "Whisper / Wav2Vec2",
        "Flask API",
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
          "Established baseline ASR pipeline (Whisper/Wav2Vec2) and alignment",
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
      title: "Farm Go",
      date: "04/25",
      tag: "React",
      image: "/farm-go.jpg",
      description:
        "A farm management dashboard for tracking livestock, resources, and transactions in an intuitive React interface.",
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
