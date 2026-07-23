# 💻 Pramod Naik — Portfolio Website

A modern, responsive, aesthetic developer portfolio built with **React**, **Vite**, **Framer Motion**, and **Node.js/Express**. Designed to showcase projects, skills, certificates, experience, and contact details with fluid animations and a dark-themed UI.

🌐 **GitHub Repository:** [Pramod-Bengal/PRAMOD-PORTFOLIO](https://github.com/Pramod-Bengal/PRAMOD-PORTFOLIO)

---

## ✨ Features

- 🎨 **Modern Aesthetic UI/UX**: Dark mode theme with sleek glassmorphism effects and custom gradient highlights.
- ⚡ **Interactive Animations**: Smooth page transitions, hover states, and dynamic elements powered by **Framer Motion**.
- 🛠️ **Full Stack Portfolio**: Showcases projects, technical skills, certificates, resume, gallery, and blog posts.
- 📬 **Functional Contact Backend**: Integrated Express.js backend server with Nodemailer for direct email inquiries.
- 📱 **Fully Responsive**: Optimized for seamless viewing on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Category | Technologies / Libraries |
| --- | --- |
| **Frontend** | React 18, Vite, JavaScript (ES6+), HTML5, CSS3 |
| **Animation & Icons** | Framer Motion, Lucide React, React Icons |
| **Routing** | React Router DOM v6 |
| **Backend & Services** | Node.js, Express.js, Nodemailer, EmailJS |
| **Tools & Build** | Vite, npm, Git, GitHub |

---

## 📁 Project Structure

```
PRAMOD-PORTFOLIO/
├── public/                 # Static assets & public images
├── server/
│   └── server.js           # Express backend for Nodemailer contact form
├── src/
│   ├── components/         # Navigation & reusable UI components
│   ├── pages/              # Page components (Home, About, Skills, Projects, etc.)
│   ├── CSS/                # Component & page styles
│   ├── App.jsx             # Main application router layout
│   ├── main.jsx            # React root entry point
│   └── index.css           # Global design system & CSS custom properties
├── package.json            # Project dependencies and scripts
└── vite.config.mjs         # Vite configuration
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pramod-Bengal/PRAMOD-PORTFOLIO.git
cd PRAMOD-PORTFOLIO
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables (Optional for Contact Backend)

Create a `.env` file in the root folder if running the contact backend server:

```env
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=pramodbenagal@gmail.com
```

### 4️⃣ Start Development Server

Run Vite frontend:
```bash
npm run dev
```
Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

*(Optional)* Run Email Backend Server:
```bash
npm run server
```

---

## 📬 Contact & Links

- 📧 **Email:** [pramodbenagal@gmail.com](mailto:pramodbenagal@gmail.com)
- 💼 **LinkedIn:** [Pramod Naik](https://www.linkedin.com/in/pramod-naik-8849862a2/)
- 🐙 **GitHub:** [@Pramod-Bengal](https://github.com/Pramod-Bengal)
- 📍 **Location:** Udupi, India

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
