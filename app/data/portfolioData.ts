export type PersonalInfo = {
  fullName: string
  headline: string
  email: string
  github: string
  linkedin: string
  resume: string
  openTo: string
  githubBio?: string
}

export type Project = {
  id: number
  title: string
  tagline: string
  description: string
  techStack: string[]
  github: string | null
  liveDemo?: string | null
}

export type Education = {
  degree: string
  year?: string
  duration?: string
  college: string
  coursework: string[]
  note?: string
  cgpa?: number
  percentage?: string
}

export const personalInfo: PersonalInfo = {
  fullName: "Kunal Yelgate",
  headline: "3rd Year B.Tech CS Student | Web Developer & AI/ML Enthusiast & Cloud Enthusiast",
  email: "yelgatekunal@gmail.com",
  github: "https://github.com/kunal-yelgate",
  linkedin: "https://linkedin.com/in/kunal-yelgate",
  resume: "https://drive.google.com/file/d/1Bk3MUgU-4CZukAPjR8-FPbdX_pJ3i0Ls/view?usp=drive_link",
  openTo: "Internships & Collaborations",
}

export const heroContent = {
  greeting: "Hey, I'm Kunal Yelgate",
  tagline:
    "I build full-stack web apps, explore AI/ML, and ship real-world solutions with clean code and cloud power.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Download Resume",
}

export const aboutContent: string[] = [
  "I'm Kunal Janardhan Yelgate a 3rd year B.Tech Computer Science student (2025–2028) with a deep curiosity for how things work under the hood. My journey into tech started with a simple fascination for problem-solving, and it quickly grew into a full-blown obsession with building things that live on the web.",
  "I specialize in full-stack web development — from crafting responsive UIs with React and Tailwind to architecting backends with Node.js and Express. I'm equally at home training ML models with Python and OpenCV as I am deploying containers on Google Cloud Platform. What drives me isn't just writing code — it's shipping projects that solve real problems for real people.",
  "Right now, I'm diving deep into System Design, DSA, and Backend Architecture while sharpening my skills in Machine Learning. I'm actively looking for internships and collaboration opportunities where I can learn from experienced teams and contribute meaningfully. If you're building something cool, I want in.",
]

export const skills = {
  groups: [
    {
      label: "Languages",
      items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "#60a5fa",
    },
    {
      label: "Frontend",
      items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
      color: "#f472b6",
    },
    {
      label: "Backend & Cloud",
      items: ["Node.js", "Express.js", "Google Cloud Platform (GCP)", "Docker"],
      color: "#34d399",
    },
    {
      label: "Database & Services",
      items: ["MongoDB", "Firebase"],
      color: "#fbbf24",
    },
    {
      label: "Tools & Others",
      items: ["Git", "GitHub"],
      color: "#a78bfa",
    },
  ],
  currentlyLearning: [
    "Advanced JavaScript",
    "Backend Development & System Design",
    "Machine Learning Fundamentals",
    "Data Structures & Algorithms",
  ],
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ContactApp",
    tagline: "Smart desktop contact manager with CSV persistence",
    description:
      "A Java Swing desktop application for managing personal and professional contacts with CSV-based persistent storage. Features include add/delete contacts, real-time search by name, favorite toggle with ★ prefix, auto-sort A→Z, CSV export/download, input validation for 10-digit mobile and valid email, and automatic load/save on startup.",
    techStack: ["Java", "Java Swing", "CSV file storage"],
    github: "https://github.com/kunal-yelgate/ContactApp",
    liveDemo: null,
  },
  {
    id: 2,
    title: "White Board",
    tagline: "Real-time collaborative drawing canvas",
    description:
      "A collaborative whiteboard and drawing application built with TypeScript and React. Users can draw, sketch, and collaborate in real-time on a shared canvas — perfect for brainstorming sessions, remote teaching, or quick visual notes. Features smooth drawing strokes, canvas state management, and an intuitive interface.",
    techStack: ["TypeScript", "React", "Socket.IO"],
    github: "https://github.com/kunal-yelgate/White_Board",
    liveDemo: "https://whiteboard-demo.example.com",
  },
  {
    id: 3,
    title: "Taskflow Automation",
    tagline: "WhatsApp Business API automation toolkit",
    description:
      "Automation tools and scripts designed to simplify daily operations, task scheduling, and workflow management. The core script (Chat.py) is a WhatsApp Business API bulk & single message sender — supporting individual or multiple recipients with configurable delays, an interactive CLI, input validation, and real-time send summaries. Integrates with the Meta/WhatsApp Business API via Python.",
    techStack: ["Python", "WhatsApp Business API", "Meta Graph API", "REST APIs"],
    github: "https://github.com/kunal-yelgate/Taskflow-Automation",
    liveDemo: null,
  },
  {
    id: 4,
    title: "Portfolio NextJS",
    tagline: "This portfolio built with Next.js 13",
    description:
      "A personal portfolio site built with Next.js 13, App Router, and modern CSS. The site demonstrates responsive layouts, reusable components, and deployable artifacts with CI/CD.",
    techStack: ["Next.js", "React", "CSS","Typescript","Node.js"],
    github: "https://github.com/kunal-yelgate/my_profile",
    liveDemo: "https://my-profile-three-roan.vercel.app/",
  },
  {
    id: 5,
    title: "GitHUB Repo Analyzer",
    tagline: "Small-scale ML experiments and deployments",
    description:
      "it is a Collection of small machine learning experiments, model training notebooks, and simple Flask-based deployments showcasing pipelines for data preprocessing and model serving.",
    techStack: ["Python", "scikit-learn", "Flask"],
    github: "https://github.com/kunal-yelgate/MiniML",
    liveDemo: null,
  },
]

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    year: "3rd Year",
    duration: "2025 – 2028",
    cgpa: 8.0,
    college: "Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Web Development",
      "Database Management Systems",
      "Machine Learning Fundamentals",
    ],
    note: "Currently pursuing B.Tech and actively building projects",
  },
  {
    degree: "Diploma in Electronic And Telecommunication",
    year: "Completed",
    duration: "2022 - 2025",
    percentage: "92.06%",
    college: "VDF School of Polytechnic, Latur",
    coursework: ["Networking",
         "Electronics Components", 
         "Communication"],
    note: "High school completion details — add your board and percentage",
  },
]

export const contactContent = {
  heading: "Get In Touch",
  subtext:
    "Whether you have an internship opportunity, a cool project idea, or just want to connect — my inbox is always open. Let's build something great together.",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message",
  },
}

export const footerContent = {
  credit: "Designed & built by Kunal Yelgate",
  copyright: "© 2026 Kunal Yelgate. All rights reserved.",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
}
