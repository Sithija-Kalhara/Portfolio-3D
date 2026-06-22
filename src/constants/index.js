import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  Full_Stack_Developer,
  eyerone,
  gaming,
  nextjs,
  Expressjs,
  GitHub,
  Cloudflare,
  hologram,
  zeylonJourney,
  link,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // 🔹 Frontend
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  // 🔹 Backend
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: Expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // 🔹 3D & Interactive
  {
    name: "Three.js",
    icon: threejs,
  },

  // 🔹 Tools & DevOps
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },

  // 🔹 Future Direction
  {
    name: "Cloudflare",
    icon: Cloudflare,
  },
];

const experiences = [
  {
    title: "Founder & Full-Stack Developer",
    company_name: "Eyerone",
    icon: eyerone,
    iconBg: "#0f172a",
    date: "2023 - Present",
    points: [
      "Architecting and developing a scalable social media & streaming platform.",
      "Building modern frontend systems using React & Next.js.",
      "Designing backend APIs with Node.js and MongoDB.",
      "Optimizing performance and implementing secure authentication systems.",
    ],
  },
  {
    title: "AI & Data Science Student",
    company_name: "AI & Data Science Program",
    icon: ai,
    iconBg: "#1e293b",
    date: "2026 - Present",
    points: [
      "Studying machine learning, data analytics, and AI system design.",
      "Developing predictive models and real-world AI applications.",
      "Strengthening knowledge in algorithms and data structures.",
      "Working on hands-on AI-driven technical projects.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Personal Projects",
    icon: Full_Stack_Developer,
    iconBg: "#111827",
    date: "2023 - Present",
    points: [
      "Developing interactive 3D web applications using Three.js.",
      "Creating responsive UI systems with Tailwind CSS.",
      "Implementing real-time animations and motion effects.",
      "Focusing on clean architecture and user-centered design.",
    ],
  },
  {
    title: "Gaming & Tech Systems Developer",
    company_name: "Independent Projects",
    icon: gaming,
    iconBg: "#1f2937",
    date: "2022 - Present",
    points: [
      "Building performance-optimized gaming-related systems.",
      "Developing streaming and content production workflows.",
      "Experimenting with hardware-software integrations.",
      "Continuously improving system efficiency and scalability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Building scalable full-stack applications with clean architecture and performance optimization.",
    name: "Full Stack Engineering",
    designation: "React • Node • MongoDB",
    company: "Web Systems",
    image: Full_Stack_Developer,
  },
  {
    testimonial:
      "Designing modern, responsive interfaces with smooth animations and interactive 3D experiences.",
    name: "Frontend & 3D Development",
    designation: "React • Three.js • Tailwind",
    company: "UI Systems",
    image: web,
  },
  {
    testimonial:
      "Exploring AI, data-driven systems, and intelligent automation for real-world problem solving.",
    name: "AI & Data Science",
    designation: "Machine Learning • Analytics",
    company: "Future Technologies",
    image: ai,
  },
];

const projects = [
  {
    name: "Eyerone – Social Media Platform",
    description:
      "A full-stack social media platform with authentication, post system, media uploads, and real-time interactions. Built with modern scalable architecture.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "cloudflare", color: "blue-text-gradient" },
    ],
    image: eyerone,
    source_code_link: "https:eyerone.com",
  },

  {
    name: "CartoonLK – Streaming Website",
    description:
      "Video streaming platform with categorized content, search functionality, optimized delivery, and CDN integration for performance.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "cloudflare", color: "pink-text-gradient" },
    ],
    image: gaming,
    source_code_link: "https://cartoonlk.com",
  },

  {
    name: "Gesture-Controlled 3D Hologram Interface",
    description:
      "An advanced real-time 3D hologram interface combining WebGL particle systems (35,000+ particles) with AI-powered gesture tracking via MediaPipe. Implements physics-based motion smoothing, additive blending effects, and dynamic shape transformations.",

    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "threejs", color: "pink-text-gradient" },
      { name: "mediapipe", color: "blue-text-gradient" },
      { name: "webgl", color: "green-text-gradient" },
    ],

    image: hologram,
    source_code_link:
      "https://github.com/Sithija-Kalhara/Gesture-Controlled-Interactive-3D-Hologram-Interface/blob/main/Gesture-Controlled%20Interactive%203D%20Hologram%20Interface.html",
  },

  {
    name: "Zeylon Journey – Travel Experience Platform",
    description:
      "A full-featured travel discovery and booking website showcasing Sri Lankan destinations with rich visuals, dynamic UI, and seamless navigation. Built with modern web technologies to deliver an engaging experience for users planning trips.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "web-ux", color: "blue-text-gradient" },
    ],
    image: zeylonJourney,
    source_code_link: "https://zeylonjourney.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
