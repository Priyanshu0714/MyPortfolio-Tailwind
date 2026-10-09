const projects = [
  {
    id: "intelligent-document-system",
    title: "Intelligent Document Indexing & Query System",
    category: "systems",
    featured: true,
    date: "Dec 2025 – March 2026",
    role: "Lead Systems Architect & Full-Stack",
    description: "A distributed document processing pipeline built to ingest multi-format files, extract structured entities with Apache Tika, index metadata into MinIO, MySQL, and MongoDB, and serve an NLP-powered semantic query engine.",
    highlights: [
      "Designed microservices architecture separating ingestion, document processing, and query services.",
      "Engineered asynchronous processing pipeline for high-concurrency document uploads.",
      "Optimized query latency via indexed metadata storage across hybrid databases.",
      "Integrated NLP-driven query engine enabling automated summary and report generation."
    ],
    tech: ["Go", "Echo", "MinIO", "MySQL", "MongoDB", "Apache Tika", "Docker"],
    image: "/projects/IntelligentDocumentSystem/image.jpeg",
    github: "https://github.com/Priyanshu0714/collabsphere/",
    demo: null,
    badge: "Go Microservices"
  },
  {
    id: "autonomous-navigation-vision",
    title: "Autonomous Navigation & Computer Vision System",
    category: "ai-robotics",
    featured: true,
    date: "May 2025 – June 2025",
    role: "Intern @ Rekhi Foundation, MIND Lab",
    description: "Real-time navigation and perception system developed for TurtleBot4 in dynamic indoor environments. Leveraged 2D LiDAR and SLAM for sub-second mapping and localization alongside YOLOv5 vision inference.",
    highlights: [
      "Engineered real-time SLAM and LiDAR mapping pipeline for obstacle avoidance and path planning.",
      "Optimized sensor stream execution to minimize latency during live robot navigation runs.",
      "Deployed YOLOv5 computer vision model for real-time indoor object recognition.",
      "Implemented automated text and sign OCR extraction using OpenCV and Tesseract."
    ],
    tech: ["ROS2", "Python", "TurtleBot4", "LiDAR", "SLAM", "YOLOv5", "OpenCV", "Gazebo"],
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
  title: "Campus Connect v2.0",
  category: "web",
  featured: true,
  date: "Sep 2026 – Present",
  role: "Full-Stack Developer",
  description: "A full-stack campus social platform featuring real-time communication, student networking, and campus event discovery.",
  highlights: [
    "Implemented bcrypt password hashing, legacy migration, rate limiting, and persistent sessions.",
    "Integrated Socket.io for real-time messaging and MongoDB TTL indexes for 24-hour stories.",
    "Built REST APIs, infinite scrolling, activity notifications, and event RSVP functionality."
  ],
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "EJS",
    "Tailwind CSS",
    "Cloudinary"
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
