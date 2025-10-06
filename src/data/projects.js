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
      id: "t5",
      title: "Typing Speed Test Game",
      date: "08/2022",
      tag: "Game / Vanilla JS",
      image: "training-projects/speed_typing.svg",
      repo: "https://github.com/a7mad1112/Typing-Speed-Test-Game",
      overview:
        "Interactive typing game to test and improve speed & accuracy across multiple difficulty levels.",
      levels: [
        "Easy — simple words & short sentences",
        "Normal — mixed words & longer sentences",
        "Hard — complex words & extended sentences",
      ],
      features: [
        "Multiple difficulty modes",
        "Real-time accuracy/pace challenge",
        "Clean, engaging UI for practice",
      ],
    },
    {
      id: "t6",
      title: "The-7 Website",
      date: "05/2022",
      tag: "HTML/CSS",
      image: "training-projects/the_7.svg",
      repo: "https://github.com/a7mad1112/The-7-Website",
      overview:
        "A modern, responsive website focused on mastering layout, components, and clean visual design.",
      features: [
        "Sleek, contemporary aesthetic",
        "Responsive layout across devices",
        "Customizable components",
      ],
    },
    {
      id: "t7",
      title: "iDonor App",
      date: "05/2022",
      tag: "HTML / CSS",
      image: "training-projects/idonor.svg",
      repo: "https://github.com/a7mad1112/idonor",
      overview:
        "iDonor is a donation-focused web application designed to practice UI layout, responsive design, and accessibility fundamentals in HTML and CSS.",
      features: [
        "User-friendly and intuitive interface",
        "Responsive design across all screen sizes",
        "Donation platform simulation for user contributions",
        "Clean, visually appealing aesthetic",
      ],
    },
    {
      id: "t8",
      title: "Fastest Growing App",
      date: "11/2023",
      tag: "Next.js / Full Stack",
      image: "training-projects/threads.svg",
      repo: "https://github.com/a7mad1112/threads",
      overview:
        "Fastest Growing App is a full-stack social web application built with Next.js and TypeScript, allowing users to create and interact with threads. The project highlights strong React, Tailwind CSS, and Clerk authentication integration.",
      features: [
        "Home page displaying recent threads with pagination",
        "User search with real-time results and pagination",
        "Activity feed showing thread interactions and replies",
        "Profile pages with bio, images, and user threads",
        "Thread creation and nested commenting system",
        "Clerk authentication (Email, GitHub SSO)",
        "Responsive, SEO-friendly, and accessible design",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Clerk Authentication",
        "MongoDB",
        "Git / GitHub",
      ],
    },
    {
      id: "t9",
      title: "React To-Do App",
      date: "04/2023",
      tag: "React / Productivity App",
      image: "training-projects/todo.svg",
      repo: "https://github.com/a7mad1112/FTS-Task-React-TODO",
      overview:
        "FTS-Task-To-Do is a modern and accessible task management web app built with React. It helps users organize their daily and weekly activities with ease, featuring dark/light mode, task priorities, and a clean responsive interface.",
      features: [
        "Add, edit, delete, and mark tasks as complete or pending",
        "Dedicated sections for Today’s Tasks and Next 7 Days",
        "Priority indicator with color-coded levels",
        "Dark / Light mode toggle with persistence",
        "Task count indicators and real-time search with debounce",
        "Assignee support and past-due highlighting",
        "Custom modals built from scratch using Promises",
        "Accessibility and SEO-optimized structure",
        "Deployed on Netlify with GitHub version control",
      ],
      technologies: [
        "React.js",
        "CSS Modules",
        "JavaScript (ES6+)",
        "Netlify",
        "Git / GitHub",
      ],
    },
    {
      id: "t10",
      title: "Tasty Treat — Food Ordering",
      date: "10/2022",
      tag: "React / E-commerce",
      image: "training-projects/tasty-treat.svg",
      repo: "https://github.com/a7mad1112/tasty-treat",
      overview:
        "A React-based food ordering app with category browsing, product lists, cart & checkout. Built to practice state management, UI patterns, and e-commerce flows.",
      features: [
        "Hero with CTA (Order Now / See all foods)",
        "Category filters (Fast Food, Pizza, Asian, Meat)",
        "Popular foods grid with price & Add to Cart",
        "Cart with quantity & totals; checkout flow",
        "Profile page and user navigation",
        "Benefit highlights (No shipping charge, secure checkout)",
        "Responsive layout with React-Bootstrap components",
      ],
      pages: ["Home", "Foods", "Cart", "Checkout", "Profile"],
      technologies: [
        "React",
        "Redux Toolkit",
        "React-Bootstrap",
        "JavaScript (ES6+)",
        "CSS",
      ],
    },
    {
      id: "t11",
      title: "Rent Car — Rental Listings",
      date: "10/2022",
      tag: "React / Listings UI",
      image: "training-projects/rent-car.svg",
      repo: "https://github.com/a7mad1112/rent-car",
      overview:
        "A React-based car rental interface featuring car catalogs, details pages, and basic content sections. Built to practice component composition, state management, and responsive UI.",
      features: [
        "Car catalog with categories/listing",
        "Individual car details page",
        "Informational pages (About, Contact)",
        "Blog section for updates/articles",
        "Responsive layout via React-Bootstrap",
        "Redux Toolkit for state management",
      ],
      pages: ["Home", "About", "Cars", "Car Details", "Blog", "Contact"],
      technologies: [
        "React",
        "Redux Toolkit",
        "React-Bootstrap",
        "JavaScript (ES6+)",
        "CSS",
      ],
    },
    {
      id: "t12",
      title: "ShoppingHup — E-commerce",
      date: "05/2023",
      tag: "React / E-commerce",
      image: "training-projects/shopping-hub.svg",
      repo: "https://github.com/a7mad1112/FTS-Task-Shoppiing-Hup",
      overview:
        "ShoppingHup is a responsive e-commerce web app with product browsing, search & sort, cart, and checkout. Built to practice storefront UX, state handling, and component composition in React.",
      features: [
        "Product grid with images, names, and prices",
        "Add/remove items to cart with total price",
        "Checkout flow with shipping & totals",
        "Search and sort (by name/price, asc/desc)",
        "Product detail pages with related items",
        "Login/Register simple forms",
        "Notifications for cart actions",
        "Accessible and SEO-friendly structure",
        "Responsive layout for all devices",
      ],
      pages: [
        "Home",
        "All Products",
        "Product Details",
        "Cart",
        "Checkout",
        "Login",
        "Register",
      ],
      technologies: [
        "React",
        "JavaScript (ES6+)",
        "Bootstrap / Reactstrap",
        "HTML",
        "CSS",
        "npm",
      ],
    },
  ],
};
