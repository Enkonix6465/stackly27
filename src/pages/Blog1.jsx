import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const blogImage =
  "images/blog1.jpg";

const Blog1 = () => {
  useEffect(() => {
    document.title = "The Rise of Cloud Computing and Business Transformation";
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
            The Rise of Cloud Computing and Business Transformation
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
              alt="Cloud Transformation"
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
            <span>By Alex Johnson</span>
            <span>•</span>
            <span>March 10, 2025</span>
            <span>•</span>
            <span>7 min read</span>
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
              Cloud Computing
            </span>
            <span
              style={{
                background: "#16a085",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem",
              }}
            >
              Business Transformation
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
            Cloud computing has redefined the way businesses operate, enabling flexibility, scalability, and on-demand resources like never before. As organizations shift to the cloud, transformation isn't just technical—it's a deep reimagining of business models and customer value.
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
            The Core Benefits of Cloud Adoption
          </h2>
          <ul style={{ paddingLeft: "23px", marginBottom: "25px" }}>
            <li style={{ marginBottom: "11px" }}>
              <b>Scalability:</b> Instantly adjust resources based on demand, from storage to computing power.
            </li>
            <li style={{ marginBottom: "11px" }}>
              <b>Cost Efficiency:</b> Shift from capital expenses to flexible, usage-based pricing with reduced hardware investments.
            </li>
            <li style={{ marginBottom: "11px" }}>
              <b>Global Accessibility:</b> Connect teams and customers from anywhere with minimal latency.
            </li>
            <li style={{ marginBottom: "11px" }}>
              <b>Security & Reliability:</b> Benefit from world-class security frameworks and robust disaster recovery.
            </li>
          </ul>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[1],
              marginTop: "35px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Transforming Business Models
          </h2>
          <p style={{ marginBottom: "25px" }}>
            Cloud platforms empower organizations to quickly roll out new services, support innovation, and pivot in response to market changes. Subscription models, pay-as-you-go services, and rapid integration with third-party applications allow companies to respond faster and thrive in competitive landscapes.
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
            Overcoming Challenges
          </h2>
          <p style={{ marginBottom: "25px" }}>
            Migration can bring challenges in security, compliance, and change management. Successful transformations focus not only on technology but also on upskilling teams and evolving organizational culture. Vendors and managed service partners can ease this transition with expertise in best practices and governance.
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
            The Road Ahead
          </h2>
          <p style={{ marginBottom: "25px" }}>
            The future belongs to businesses that harness cloud for agility, resilience, and innovation. With technologies like AI, IoT, and edge computing increasingly powered by the cloud, the potential for digital transformation is limitless.
          </p>
          <p>
            Cloud adoption is not a destination, but a continuous journey of improvement, insight, and business growth in an ever-digital world.
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
