import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const blogImage = "images/blog6.jpg";

const Blog1 = () => {
  useEffect(() => {
    document.title = "Cybersecurity Best Practices for Small Businesses";
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
            Cybersecurity Best Practices for Small Businesses
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
              alt="Cybersecurity Best Practices"
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
              color: "var(--secondary-color)",
              marginBottom: "14px",
            }}
          >
            <span>By Linda Yang</span>
            <span>•</span>
            <span>February 28, 2025</span>
            <span>•</span>
            <span>8 min read</span>
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
              Cybersecurity
            </span>
            <span
              style={{
                background: "#e74c3c",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem",
              }}
            >
              Small Business
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
            As cyber threats evolve, small businesses are increasingly at risk due to limited resources and expertise. However, by adopting best practices for cybersecurity, small businesses can protect their data, maintain customer trust, and ensure business continuity.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[0],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Understanding Your Risks
          </h2>
          <p>
            Start by assessing your current security posture and identifying critical assets. Knowing what data and systems are most valuable to attackers helps prioritize your defense efforts.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[1],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Implementing Technical Controls
          </h2>
          <ul style={{ paddingLeft: "23px", marginBottom: "25px" }}>
            <li style={{ marginBottom: "11px" }}>Use firewalls and antivirus software to block threats.</li>
            <li style={{ marginBottom: "11px" }}>Ensure all software is up-to-date with patches.</li>
            <li style={{ marginBottom: "11px" }}>Use strong passwords and multi-factor authentication.</li>
            <li style={{ marginBottom: "11px" }}>Regularly back up data and test recovery procedures.</li>
          </ul>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[2],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Educating Your Team
          </h2>
          <p>
            Human error remains one of the biggest vulnerabilities. Conduct regular cybersecurity training to help employees recognize phishing attempts, handle data properly, and follow security policies.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[3],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Compliance and Policies
          </h2>
          <p>
            Stay informed about industry-specific regulations and legal requirements around data protection, and develop clear cybersecurity policies for your business.
          </p>

          <p>
            By proactively managing cybersecurity, small businesses not only avoid costly incidents but also build a strong foundation for growth and customer confidence.
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

export default Blog1;
