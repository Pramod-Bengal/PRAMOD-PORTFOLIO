import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import "../CSS/Contact.css"
import '../index.css'

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_id'; // Get this from EmailJS dashboard
    const TEMPLATE_ID = 'template_id'; // Get this from EmailJS dashboard
    const PUBLIC_KEY = 'public_key'; // Get this from EmailJS dashboard

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", contact: "", subject: "", message: "" });
      }, (error) => {
        console.log(error.text);
        setStatus("❌ Failed to send. Please try again later.");
      });
  };

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/Pramod-Bengal" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/pramod-naik-8849862a2/" },
    { img: "/gmail.png", title: "Email", link: "mailto:pramodbenagal@gmail.com" },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button type="submit" className="contact-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          🚀 Send Message
        </motion.button>

        {status && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="contact-status">{status}</motion.p>}
      </motion.form>
    </section>
  );
}
