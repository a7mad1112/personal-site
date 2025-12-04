# 🌐 Ahmed Alawneh — Personal Portfolio

<img width="7680" height="4320" alt="personal-site-cover_v1" src="https://github.com/user-attachments/assets/0f4dac11-f8c1-4966-9d37-676972db8579" />

**Live Demo:** [https://ahmedalawneh.me/](https://ahmedalawneh.me/)

This is the official portfolio website of **Ahmed Alawneh**, a passionate Front-End Developer specializing in **React.js** and **modern UI/UX**.  
It showcases professional projects, client collaborations, testimonials, and a detailed overview of training and senior work.

---

## 🚀 Tech Stack

| Area | Technologies |
|------|---------------|
| **Framework** | [React.js (Vite)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Render](https://render.com/) |
| **Package Manager** | npm |

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── layout/         # Reusable layout elements (Container, SectionHeader, Footer, Navbar)
 │    ├── sections/       # Main portfolio sections (Hero, Services, Projects, Testimonials, etc.)
 │    ├── ui/             # Generic UI elements (Cards, Buttons, Modals, Waves, SpotlightCard)
 │
 ├── data/
 │    ├── projects.js     # Client, Senior, and Training projects data
 │    ├── testimonials.js # Feedback and role data (RTL/LTR support)
 │
 ├── utils/
 │    ├── scroll.js       # Smooth scrolling logic
 │
 ├── assets/
 │    ├── icons, images, and svg elements
 │
 ├── main.jsx             # App entry point
 ├── App.jsx              # Root component
 └── index.css            # Tailwind and global theme variables
```

---

## ✨ Key Features

- ⚡ **Vite-based React setup** for fast development and builds  
- 🎨 **Dynamic theme system** with accent & surface variables  
- 🌊 **Animated waves & spotlight effects** for a modern aesthetic  
- 🎥 **Smooth section animations** using Framer Motion  
- 🧠 **Smart “Testimonials” direction support** (`dir="ltr" | "rtl"`)  
- 📱 Fully **responsive layout** for mobile and desktop  
- 🔗 **Smooth scroll navigation** between sections  
- 📂 Modular and clean component architecture  

---

## 🧩 Sections Overview

- **Hero:** Intro, title, and social links  
- **Services:** Overview of skills and offerings  
- **Client Projects:** Real-world apps and team work  
- **Senior Project:** *Jawed AI* — Intelligent Quran Recitation Feedback  
- **Training Projects:** Hands-on learning projects with modal previews  
- **Testimonials:** Client and colleague feedback (LTR + RTL support)  
- **Contact:** Reach-out form and social media links  
- **Footer:** Quick navigation and credits  

---

## 🛠️ Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/a7mad1112/personal-site.git
cd personal-site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

### 4. Build for production
```bash
npm run build
```
Output is located in the `/dist` directory.

---

## 🌍 Deployment

Deployed on **Render** with the following settings:

| Setting | Value |
|----------|--------|
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Branch** | `master` |

---

## 🧑‍💻 Author

**Ahmed Alawneh**  
Front-End Developer | React.js Enthusiast  
📫 [LinkedIn](https://www.linkedin.com/in/ahmedalalawneh/) · [GitHub](https://github.com/a7mad1112)

---

## 📜 License
This project is licensed under the **MIT License** — feel free to use and adapt with attribution.
