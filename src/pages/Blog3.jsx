import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const blogImage =
  "images/blog6.jpg";

const Blog3 = () => {
  useEffect(() => {
    document.title = "AI and Machine Learning Applications in IT";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "120px 20px 60px",
        background: "var(--bg-color)",
        minHeight: "100vh",
        color: "var(--text-color)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "40px" }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "var(--heading-color)",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            AI and Machine Learning Applications in IT
          </h1>
          <div
            style={{
              width: "100%",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <img
              src={blogImage}
              alt="AI and Machine Learning"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
                background: "#eaeaea",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              marginBottom: "14px",
            }}
          >
            <span>By Neil Roberts</span>
            <span>•</span>
            <span>February 20, 2025</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                background: "var(--primary-color)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem",
              }}
            >
              Artificial Intelligence
            </span>
            <span
              style={{
                background: "#9b59b6",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem",
              }}
            >
              Machine Learning
            </span>
          </div>
        </motion.header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: "var(--card-bg)",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "var(--shadow)",
            lineHeight: "1.8",
          }}
        >
          <p style={{ marginBottom: "25px", fontSize: "1.1rem" }}>
            Artificial Intelligence and Machine Learning technologies are transforming IT operations, from automating routine tasks to powering advanced analytics and predictive insights.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[0],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Automating IT Processes
          </h2>
          <p>
            AI-driven automation reduces manual work, accelerates incident resolution, and proactively identifies system anomalies, increasing efficiency and uptime.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[1],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Enhanced Decision Making
          </h2>
          <p>
            Machine Learning models analyze vast datasets to uncover patterns, enabling data-driven decisions for capacity planning, security threat detection, and resource optimization.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[2],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            AI in Cybersecurity
          </h2>
          <p>
            AI-based systems continuously monitor and adapt to evolving threats, providing rapid response capabilities and reducing the risk of breaches.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[3],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Future Prospects
          </h2>
          <p>
            As AI and ML mature, IT will see even greater integration of intelligent agents, predictive maintenance, and autonomous networks driving business innovation.
          </p>

          <p>
            Organizations that invest early in AI-powered IT solutions will gain resilience, agility, and competitive advantage in the digital economy.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            ← Back to Blog
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog3;
