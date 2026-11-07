const projects = [
  {
    id: "intelligent-document-system",
    title: "Intelligent Document Processing System",
    category: "systems",
    featured: true,
    date: "Dec 2025 – Present",
    role: "Lead Systems Architect & Full-Stack",
    description: "An event-driven document processing platform in Go. Files upload directly to MinIO via presigned URLs, then Kafka consumers scan them with ClamAV, extract text and metadata with Apache Tika, and index the results in MongoDB, behind JWT authentication and per-user isolated storage.",
    highlights: [
      "Built an event-driven pipeline with Kafka, decoupling uploads from ClamAV scanning, Tika extraction and indexing, cutting upload response time by 97.5% (800 ms to 20 ms).",
      "Processed documents at 25 docs/min using 3 Kafka consumers, with retries for failed messages.",
      "Implemented JWT authentication with bcrypt-hashed credentials in PostgreSQL, and per-user MinIO isolation enforced by ownership checks on 5 endpoints (401/403 on unauthorized access).",
      "Blocked malware uploads by scanning every file with ClamAV before processing.",
      "Wrote Go unit tests for the auth middleware and cross-user access control."
    ],
    tech: ["Go", "Echo", "Kafka", "PostgreSQL", "MongoDB", "MinIO", "Apache Tika", "ClamAV", "Next.js", "JWT"],
    image: "/projects/IntelligentDocumentSystem/image.png",
    github: "https://github.com/Priyanshu0714/collabsphere/",
    demo: null,
    badge: "Event-Driven Go"
  },
    {
    id: "autonomous-navigation-vision",
    title: "Autonomous Navigation & Computer Vision System",
    category: "ai-robotics",
    featured: true,
    date: "May 2025 – June 2025",
    role: "Autonomous Navigation & Computer Vision Intern @ Rekhi Foundation, MIND Lab",
    description: "A real-time navigation and perception system for a TurtleBot4 in indoor environments. It uses 2D LiDAR and SLAM on ROS2 for mapping and localization, with YOLOv5 object detection and a Tesseract OCR pipeline running alongside.",
    highlights: [
      "Built a real-time navigation system with SLAM and LiDAR on ROS2 for mapping and localization, optimized for low-latency processing.",
      "Developed a YOLOv5 object detection pipeline and an OCR pipeline using Tesseract for text extraction.",
      "Reduced processing overhead by subscribing selectively to only the required ROS2 topics (filtered LiDAR scans and camera frames), cutting latency from 210 ms to 85 ms (~60%)."
    ],
    tech: ["ROS2", "Python", "TurtleBot4", "2D LiDAR", "SLAM", "YOLOv5", "Tesseract", "RViz", "Gazebo"],
    image: "/projects/AutonomousNavigation/image.png",
    github: "https://github.com/Priyanshu0714/TURTLEBOT4-with-LLM-integreation",
    demo: null,
    badge: "Robotics & CV"
  },
  {
    id: "internship-placement-assistant",
    title: "Internship Placement Assistant",
    category: "ai-robotics",
    featured: true,
    date: "Feb 2025 – March 2025",
    role: "ML & Backend Developer",
    description: "An intelligent career discovery tool that aggregates job postings through an automated ETL web scraper and ranks listings according to user resumes using semantic vector similarity.",
    highlights: [
      "Built resilient web scraping ETL pipeline for structured job post ingestion and cleaning.",
      "Engineered recommendation system utilizing Sentence Transformers and PyTorch embeddings.",
      "Created low-latency Django backend APIs handling search filtering and ranking logic."
    ],
    tech: ["Django", "Python", "Sentence Transformers", "PyTorch", "Pandas", "ETL"],
    image: "/projects/InternshipPlacementAssistant/image.png",
    github: "https://github.com/Priyanshu0714/Internship-Placement-Assistant/",
    demo: null,
    badge: "AI & Semantic Search"
  },
  {
  id: "campus-connect",
  title: "Campus Connect V2.0",
  category: "web",
  featured: true,
  date: "Oct 2026 – Nov 2026",
  role: "Full-Stack Developer",
  description: "A full-stack campus social platform with real-time chat, stories, notifications and peer discovery. Redis caching keeps feeds fast, and the backend is secured with bcrypt, Redis-backed sessions and rate limiting.",
  highlights: [
    "Built a full-stack campus social platform with real-time chat, stories, notifications and peer discovery over WebSockets (Socket.io).",
    "Cut feed latency by 97% and story latency by 91% by adding Redis caching with TTL, reducing response times from 450 ms to 11 ms (Postman, 1000 req, local testing).",
    "Designed REST APIs with cursor-based pagination for infinite scroll, Cloudinary media uploads, and MongoDB TTL indexes that auto-expire stories after 24 hours.",
    "Secured the platform with bcrypt password hashing, migration of legacy plaintext passwords, Redis-backed sessions, and rate limiting on endpoints (20 requests per 15 minute window)."
  ],
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Redis",
    "Socket.io",
    "WebSockets",
    "Cloudinary",
    "EJS",
    "Tailwind CSS"
  ],
  image: "/projects/CampusConnect/image.png",
  github: "https://github.com/Priyanshu0714/CampusConnect",
  demo: null,
  badge: "Full-Stack Platform"
},
  {
    id: "travelmate",
    title: "TravelMate",
    category: "web",
    featured: false,
    date: "2025",
    description: "Travel partner discovery platform matching university students traveling on identical routes, featuring CUCHD.in email verification and smart route suggestions.",
    highlights: [
      "Route matching algorithm connecting commuter peers.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "TailwindCSS", "JavaScript"],
    image: "/projects/TravelMate/image.png",
    github: "https://github.com/Priyanshu0714/TravelMate",
    demo: null
  },
  {
    id: "pentoprint-ocr",
    title: "PenToPrint OCR",
    category: "ai-robotics",
    featured: false,
    date: "2025",
    description: "Handwritten note digitization pipeline converting paper forms and handwritten university notes into structured, searchable digital text.",
    highlights: [
      "Image pre-processing with OpenCV (grayscale, thresholding, noise reduction).",
      "Automated optical character recognition via Pytesseract."
    ],
    tech: ["Python", "OpenCV", "Pytesseract", "Flask"],
    image: "/projects/PentoPrint/image.png",
    github: "https://github.com/Priyanshu0714/pentoprint-ocr",
    demo: null
  },
  {
    id: "shopease-react",
    title: "ShopEase React E-Commerce",
    category: "web",
    featured: false,
    date: "2025",
    description: "Modern shopping platform built with React, Fake Store API, and Tailwind CSS, featuring persistent cart storage and responsive product filtering.",
    highlights: [
      "Client-side state management for cart, item count, and checkout preview.",
      "Asynchronous API integration with loading states and error handling."
    ],
    tech: ["React", "TypeScript", "Fake Store API", "TailwindCSS"],
    image: "/projects/ShoppingAppReact/image.png",
    github: "https://github.com/Priyanshu0714/Shopping-Website-Using-React-Fake-Store-API",
    demo: null
  },
  {
    id: "cu-confession",
    title: "CU Confession",
    category: "web",
    featured: false,
    date: "2025",
    description: "Full-stack anonymous discussion board built for university students to share campus thoughts, participate in interactive polls, and vote on community threads.",
    highlights: [
      "Anonymous post submissions with moderation filtering.",
      "Interactive poll voting mechanism with MongoDB persistence."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "TailwindCSS"],
    image: "/projects/CuConfession/image.png",
    github: "https://github.com/Priyanshu0714/Cu-Confession",
    demo: null
  },
  {
    id: "studybuddy",
    title: "StudyBuddy Academic Resource Hub",
    category: "web",
    featured: false,
    date: "2024",
    description: "Free student portal providing organized semester notes, flowchart summaries, and previous years' exam questions for quick exam revision.",
    highlights: [
      "Categorized resource repository sorted by engineering semester.",
      "Instant PDF and document viewer integration."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    image: "/projects/NotesWebsite/image.png",
    github: "https://github.com/Priyanshu0714/StudyBuddy",
    demo: null
  },
  {
    id: "spotify-clone",
    title: "Spotify Web Player Clone",
    category: "web",
    featured: false,
    date: "2024",
    description: "Web music player replicating Spotify's UI and audio streaming experience with interactive seek bars, track playlists, and responsive media controls.",
    highlights: [
      "Custom audio playback controller using HTML5 Audio API.",
      "Dynamic track list rendering and responsive layout."
    ],
    tech: ["JavaScript", "HTML5 Audio", "CSS3"],
    image: "/projects/SpotifyClone/image.png",
    github: "https://github.com/Priyanshu0714/Spotify-Clone",
    demo: null
  },
  {
    id: "video-summarizer",
    title: "Video Summarizer",
    category: "ai-robotics",
    featured: false,
    date: "2024",
    description: "NLP-powered content processing utility that takes long lecture videos and extracts core takeaways into concise bullet-point study summaries.",
    highlights: [
      "Automated transcript extraction and key phrase parsing.",
      "Generates scannable summaries saving study time."
    ],
    tech: ["Python", "NLP", "Transcript API"],
    image: "/projects/VideoSummarizer/image.png",
    github: "https://github.com/Priyanshu0714",
    demo: null
  },
  {
    id: "file-organizer",
    title: "Node.js File Organizer",
    category: "systems",
    featured: false,
    date: "2024",
    description: "CLI utility automating local disk hygiene by classifying unsorted downloads into designated directory trees based on file extensions and MIME headers.",
    highlights: [
      "Recursive directory traversal with Node.js fs module.",
      "Extension-based sorting for documents, media, archives, and code."
    ],
    tech: ["Node.js", "File System API", "Bash"],
    image: "/projects/FileOrganizer/image.png",
    github: "https://github.com/Priyanshu0714/File-Organizer",
    demo: null
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio Platform",
    category: "web",
    featured: false,
    date: "2025",
    description: "Production personal portfolio built with Express, EJS, TailwindCSS, and MongoDB for dynamic message logging and project showcase.",
    highlights: [
      "Server-side rendering with EJS and custom Tailwind design system.",
      "MongoDB database connection for inquiry management."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "TailwindCSS"],
    image: "/projects/MyPortfolio/image.png",
    github: "https://github.com/Priyanshu0714/MyPortfolio-Tailwind",
    demo: "https://new-tailwind-portfolio-0mfi.onrender.com/"
  }
];

module.exports = projects;
