import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const mainHeadingColors = [
  "#1abc9c", // Turquoise
  "#e67e22", // Orange
  "#3498db", // Blue
  "#9b59b6", // Purple
];

const blogImage =
  "images/blog8.jpg";

const Blog4 = () => {
  useEffect(() => {
    document.title = "Why DevOps is Essential for Today’s Agile Businesses";
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
              lineHeight: "1.2"
            }}
          >
            Why DevOps is Essential for Today’s Agile Businesses
          </h1>

          <div
            style={{
              width: "100%",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "20px"
            }}
          >
            <img
              src={blogImage}
              alt="DevOps Principles"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
                background: "#eaeaea"
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
              marginBottom: "14px"
            }}
          >
            <span>By Max Patel</span>
            <span>•</span>
            <span>February 15, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >
            <span
              style={{
                background: "var(--primary-color)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem"
              }}
            >
              DevOps
            </span>
            <span
              style={{
                background: "#e67e22",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.85rem"
              }}
            >
              Agile
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
            lineHeight: "1.8"
          }}
        >
          <p style={{ marginBottom: "25px", fontSize: "1.1rem" }}>
            DevOps has become a crucial methodology for organizations looking to accelerate their delivery pipelines and foster collaboration across development and operations teams.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[0],
              marginTop: "35px",
              marginBottom: "20px"
            }}
          >
            Enabling Faster Time-to-Market
          </h2>
          <p>
            By automating build, test, and deployment processes, DevOps enables organizations to deliver updates and features more rapidly, responding swiftly to market demands and customer feedback.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[1],
              marginTop: "35px",
              marginBottom: "20px"
            }}
          >
            Improving Collaboration and Communication
          </h2>
          <p>
            DevOps breaks down the traditional silos between teams, fostering a culture of shared responsibility and continuous improvement.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[2],
              marginTop: "35px",
              marginBottom: "20px"
            }}
          >
            Enhancing Reliability and Stability
          </h2>
          <p>
            Continuous integration and continuous delivery (CI/CD) pipelines help detect issues early, reduce errors, and improve the stability of production environments.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: mainHeadingColors[3],
              marginTop: "35px",
              marginBottom: "20px"
            }}
          >
            Aligning with Business Goals
          </h2>
          <p>
            DevOps practices ensure technology teams align closely with business objectives, enabling faster innovation and better customer experiences.
          </p>

          <p>
            Embracing DevOps is no longer optional but essential for businesses aiming to remain agile and competitive in today's fast-paced digital world.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "40px",
            textAlign: "center"
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
              textDecoration: "none"
            }}
          >
            ← Back to Blog
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog4;
