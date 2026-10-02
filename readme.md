# 🚀 Portfolio

[![Live](https://img.shields.io/badge/Live-priyanshuchoudhary.tech-blue?style=for-the-badge&logo=google-chrome)](https://priyanshuchoudhary.tech)
[![GitHub](https://img.shields.io/badge/GitHub-Priyanshu0714-black?style=for-the-badge&logo=github)](https://github.com/Priyanshu0714)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/priyanshu-choudhary-93b68128b/)

> A personal portfolio website built with Node.js, Express, EJS, Tailwind CSS, and MongoDB showcasing my skills, projects, and professional journey.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contact](#contact)

---

## Overview

This is a full-stack personal portfolio website designed to present my skills, selected projects, and professional background in a clean, responsive, and visually engaging format. The backend is powered by Node.js and Express with EJS templating, while the frontend uses Tailwind CSS for styling. Contact form submissions are stored in MongoDB Atlas.

---

## ✨ Features

- **Responsive Design** — Fully optimized for all screen sizes (mobile, tablet, desktop)
- **Projects Showcase** — Dynamically rendered project cards with live demo and GitHub links
- **Contact Form** — Submissions are saved to MongoDB Atlas with validation; supports both JSON and redirect responses
- **Resume Viewer** — Inline PDF resume viewer via a dedicated `/pdfview` route
- **Dynamic Content** — JavaScript-driven smooth transitions and interactive UI elements
- **Google Search Console Verified** — Verified domain ownership included

---

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | HTML, Tailwind CSS v3, JavaScript    |
| Templating | EJS (Embedded JavaScript)            |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB Atlas (via Mongoose)         |
| Hosting    | Render                               |

---

## 📁 Project Structure

```
new portfolio/
├── app.js                  # Main Express server
├── originalscript.js       # Original/backup script
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json
├── data/
│   └── projects.js         # Static projects data
├── public/
│   ├── script.js           # Client-side JavaScript
│   ├── resume.pdf          # Resume file
│   ├── images/             # Static images
│   ├── projects/           # Per-project static files
│   └── src/                # Tailwind CSS source & output
└── views/
    ├── index.ejs           # Main portfolio page
    └── pdfview.ejs         # Resume PDF viewer page
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Priyanshu0714/MyPortfolio-Tailwind.git
cd MyPortfolio-Tailwind

# 2. Install dependencies
npm install

# 3. Start the server
node app.js
```

The server will start on **http://localhost:3001** by default.

---

## 📜 Scripts

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `node app.js` | Start the Express server                         |
| `npm run build` | Build Tailwind CSS (watches for changes)       |

To watch and rebuild Tailwind CSS during development:

```bash
npm run build
```

---

## 📬 Contact

Feel free to reach out through the contact form on the portfolio or connect with me directly:

- 🌐 **Website:** [priyanshu.works](https://www.priyanshuchoudhary.tech)
- 📧 **Email:** choudhary.priyanshu1401@gmail.com
- 💻 **GitHub:** [Priyanshu0714](https://github.com/Priyanshu0714)
- 💼 **LinkedIn:** [priyanshu-choudhary-93b68128b](https://www.linkedin.com/in/priyanshu-choudhary-93b68128b/)

---

<p align="center">Made with ❤️ by Priyanshu Choudhary</p>
