// Portfolio Data — Preety Jaiswal

export const personalInfo = {
  name: "Preety Jaiswal",
  title: "Full Stack Developer & AI Enthusiast",
  email: "preetyjaiswal674@gmail.com",
  linkedin: "https://www.linkedin.com/in/preety-jaiswal/",
  github: "https://github.com/PreetyJaiswal555",
  location: "Coimbatore, India",
  resumeUrl: "/MyResume (6).pdf",
  bio: "Passionate Software Developer skilled in building scalable web applications and intelligent AI-driven solutions. I specialize in the MERN stack and love crafting elegant, high-performance applications that make a real impact.",
  aboutDetails: [
    "Expert in MERN stack development — building full-stack applications from ideation to deployment.",
    "Skilled in frontend development with React.js, creating responsive, accessible, and visually rich interfaces.",
    "Proficient in backend development with Node.js and Express.js, designing robust REST APIs.",
    "Passionate about AI/ML and integrating intelligent features into modern web applications.",
    "Strong focus on performance optimization, scalable architecture, and clean code practices.",
    "Collaborative team player with experience in Agile workflows and version control with Git.",
  ],
  stats: [
    { label: "CGPA", value: "8.32", icon: "🎓", suffix: "" },
    { label: "Internship", value: "1", icon: "💼", suffix: "+" },
    { label: "Projects Built", value: "10", icon: "🚀", suffix: "+" },
    { label: "Certifications", value: "3", icon: "🏆", suffix: "" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 78 },
      { name: "Java", level: 72 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 68 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "REST APIs", level: 90 },
      { name: "Responsive Design", level: 92 },
      { name: "Performance Opt.", level: 82 },
      { name: "AI/ML Basics", level: 70 },
    ],
  },
];

export const experience = [
  {
    company: "Motion Cut",
    role: "Software Developer Intern",
    duration: "June 2025 – July 2025",
    upcoming: true,
    description: [
      "Developing reusable UI components using React.js and Tailwind CSS",
      "Integrating REST APIs using Axios for seamless data fetching",
      "Improving rendering performance through code optimization",
      "Building responsive, cross-browser compatible interfaces",
      "Collaborating with Agile teams and maintaining Git workflows",
    ],
    tags: ["React.js", "Tailwind CSS", "Axios", "REST APIs", "Git"],
  },
];

export const projects = [
  {
    id: 1,
    title: "GreenCart",
    subtitle: "MERN Grocery Platform",
    description:
      "Full-stack grocery e-commerce platform with admin dashboard, REST APIs, product management, cart functionality, order tracking, and MongoDB integration for scalable data management.",
    longDescription:
      "GreenCart is a production-ready grocery e-commerce platform built on the MERN stack. Features include an admin dashboard for inventory management, user authentication with JWT, real-time cart updates, product filtering and search, secure checkout, and MongoDB Atlas for cloud database hosting.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "MERN",
    github: "https://github.com/PreetyJaiswal555/greencart",
    live: "#",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "Property Render",
    subtitle: "Real Estate Search Platform",
    description:
      "Dynamic property search platform with advanced filtering, sorting, reusable UI components, and optimized state management for a seamless browsing experience.",
    longDescription:
      "Property Render enables users to search, filter, and sort real estate listings with an intuitive UI. Features include map integration, advanced filter panels, wishlist functionality, and a fully responsive layout using React.js and Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS"],
    category: "React",
    github: "https://github.com/PreetyJaiswal555/property-render",
    live: "#",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "QuickAI",
    subtitle: "AI SaaS Platform",
    description:
      "AI-powered SaaS platform featuring dashboard architecture, lazy loading, React Context API, and AI API integrations for intelligent content generation.",
    longDescription:
      "QuickAI is a SaaS platform that leverages AI APIs for content generation, image creation, and text analysis. Built with React.js and Context API, it features a multi-tool dashboard, lazy loading for performance, subscription management, and a sleek modern UI.",
    tech: ["React.js", "Context API", "AI APIs"],
    category: "AI",
    github: "https://github.com/PreetyJaiswal555/quickai",
    live: "#",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Chat App",
    subtitle: "Real-time Messaging Platform",
    description:
      "Real-time chat application with WebSocket support, user authentication, message history, and a modern glassmorphism UI.",
    longDescription:
      "A full-stack real-time chat application built with Socket.io, Node.js, and React. Features include user authentication with JWT, one-on-one and group messaging, real-time notifications, message history stored in MongoDB, and a sleek dark UI.",
    tech: ["Socket.io", "React.js", "Node.js", "MongoDB"],
    category: "MERN",
    github: "https://github.com/PreetyJaiswal555",
    live: "#",
    color: "from-emerald-500 to-cyan-600",
  },
  {
    id: 5,
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "This very portfolio — a premium, animated developer portfolio built with React, Framer Motion, and a custom design system featuring particles, glassmorphism, and smooth scroll animations.",
    longDescription:
      "A production-grade personal portfolio website crafted with React 19, Framer Motion, and a fully custom design system. Features include animated loader, custom cursor, scroll progress indicator, particle background, section-level animations, filterable project gallery, and a working contact form.",
    tech: ["React.js", "Framer Motion", "Vite"],
    category: "React",
    github: "https://github.com/PreetyJaiswal555",
    live: "#",
    color: "from-cyan-500 to-purple-600",
  },
];

export const certifications = [
  {
    name: "OCI Generative AI Professional",
    issuer: "Oracle",
    description: "Oracle Cloud Infrastructure Generative AI Professional certification demonstrating expertise in GenAI models and LLM integration.",
    badge: "🤖",
    colorFrom: "#ef4444",
    colorTo: "#ea580c",
    glowColor: "rgba(239, 68, 68, 0.3)",
    link: "#",
  },
  {
    name: "OCI Architect Associate",
    issuer: "Oracle",
    description: "Oracle Cloud Infrastructure Architect Associate certification validating cloud architecture design and implementation skills.",
    badge: "☁️",
    colorFrom: "#06b6d4",
    colorTo: "#2563eb",
    glowColor: "rgba(6, 182, 212, 0.3)",
    link: "#",
  },
  {
    name: "OCI Data Science Professional",
    issuer: "Oracle",
    description: "Oracle Cloud Infrastructure Data Science Professional certification covering ML operations, model training, and cloud deployment.",
    badge: "📊",
    colorFrom: "#a855f7",
    colorTo: "#7c3aed",
    glowColor: "rgba(168, 85, 247, 0.3)",
    link: "#",
  },
];

export const education = [
  {
    institution: "KPR Institute of Engineering and Technology",
    degree: "B.E. Computer Science Engineering",
    duration: "2023 – 2027 (Expected)",
    score: "CGPA: 8.32",
    type: "university",
    icon: "🎓",
  },
  {
    institution: "National Infotech Higher Secondary School",
    degree: "12th Grade — Science",
    duration: "2021 – 2023",
    score: "74%",
    type: "school",
    icon: "🏫",
  },
];
