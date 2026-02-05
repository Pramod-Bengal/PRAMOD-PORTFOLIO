import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Pramod
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              Software Developer | Full Stack Developer
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Udupi, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ pramodbenagal@gmail.com | 📞 +91 9632651044
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Software Developer skilled in Java, Python, Full-Stack Development, and secure REST API design.
              Experienced in React, Angular, Spring Boot, Node.js, and SQL/NoSQL databases with strong focus on
              authentication systems, analytics dashboards, and UI/UX-driven applications.
              Proficient in writing clean, scalable, production-ready code.
            </p>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience
          </h4>
          <div style={{ marginBottom: 16 }}>
            <h5 style={{ fontSize: 18, color: "white", marginBottom: 4 }}>Full-Stack Development Intern</h5>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}>EyeQ Dot Net Pvt Ltd, Mangalore | May 2025 – Aug 2025</p>
            <ul style={{ listStyle: "disc", paddingLeft: 20, margin: 0, lineHeight: 1.6, color: "#ccc" }}>
              <li>Built full-stack modules using Angular, Node.js, Express.js, MySQL.</li>
              <li>Developed and optimized REST APIs, improving performance by ~20%.</li>
              <li>Implemented authentication and role-based access control.</li>
              <li>Worked in Agile sprints, debugging and code reviews.</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech – Computer Science & Engineering</strong> — Srinivas University Institute of Engineering and Technology<br />
              <span style={{ color: "#aaa" }}>2026 | CGPA: 8.49</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#e5e5e5" }}>Online Job Portal Management System</strong> <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>Tech: React, Next.js, Node.js, MySQL, TypeScript</span>
              <p style={{ margin: "4px 0", color: "#bbb" }}>Developed full-stack job portal with custom UI/UX design. Implemented job listings, recruiter workflows, and applications.</p>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#e5e5e5" }}>AgriMarket- Agricultural E-Commerce Platform</strong> <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>Tech: React, Python, Flask, MongoDB, Cloudinary</span>
              <p style={{ margin: "4px 0", color: "#bbb" }}>Comprehensive agricultural marketplace connecting farmers directly with consumers. Features secure authentication, Cloudinary image uploads, and real-time inventory tracking.</p>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#e5e5e5" }}>Smart User Authentication & Management System</strong> <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>Tech: Spring Boot, React, PostgreSQL, JWT</span>
              <p style={{ margin: "4px 0", color: "#bbb" }}>Implemented JWT authentication, BCrypt encryption. Designed layered backend architecture with JPA/Hibernate.</p>
            </li>
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>📜 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>• AWS Academy Cloud Foundations (2025)</li>
            <li>• SQL & Relational Databases – IBM</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java", "Python", "JavaScript", "TypeScript",
              "HTML/CSS/SCSS", "React.js", "Next.js", "Angular",
              "Spring Boot", "Node.js", "Express.js", "FastAPI", "Flask",
              "MySQL", "PostgreSQL", "MongoDB",
              "JWT", "BCrypt",
              "AWS", "Docker", "Git", "Linux"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Pramod-Bengal" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/pramod-naik-8849862a2/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
