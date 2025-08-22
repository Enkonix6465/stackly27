  import React, { useState,useRef,useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import { useInView } from "react-intersection-observer";
  import { FaEye, FaBullseye, FaCogs, FaCloud,FaRobot,FaShieldAlt, FaHandshake, FaLinkedin, FaTwitter, FaGithub,FaArrowRight } from 'react-icons/fa';

  const AboutUs = () => {
    useEffect(() => {
    document.title = 'About Us - DreamNest Real Estate';
  }, []);

  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const marqueeRef = useRef(null);

  // Add this useEffect block for marquee scrolling:
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleMouseEnter = () => marquee.style.animationPlayState = "paused";
    const handleMouseLeave = () => marquee.style.animationPlayState = "running";

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    // Pause if not in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        marquee.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      }, { threshold: 0.1 }
    );
    observer.observe(marquee);
    

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
    }, []);

    const values = [
  {
    icon: FaCloud,
    title: "Cloud Innovation",
    description: "Leveraging scalable cloud solutions to power your digital transformation."
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Implementing robust security measures to protect your data and assets."
  },
  {
    icon: FaRobot,
    title: "AI & Automation",
    description: "Harnessing artificial intelligence to increase efficiency and reduce errors."
  },
  {
    icon: FaCogs,
    title: "Custom Solutions",
    description: "Tailored software and systems engineered to meet your specific business needs."
  }
];
const team = [
  {
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    bio: '20+ years in IT strategy and transformation for global enterprises.',
    image: 'images/about15.jpg',
    social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
  },
  {
    name: 'Priya Mehta',
    role: 'CTO',
    bio: 'Architect of AI and cloud for sustainable growth. Tech mentor.',
    image: 'images/about13.jpg',
    social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
  },
  {
    name: 'Rahul Verma',
    role: 'Chief Security Officer',
    bio: 'Defender of digital innovation and trust. Securing cloud futures.',
    image: 'images/about16.jpg',
    social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
  },
  {
    name: 'Ananya Iyer',
    role: 'Head of Product',
    bio: 'Building platforms for the next generation of businesses.',
    image: 'images/about14.jpg',
    social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
  }
];
 const [openIndex, setOpenIndex] = useState(-1);

const milestones = [
  {
    year: "2015",
    event: "Company Founded",
    description:
      "Established with a vision to drive digital transformation for enterprise clients.",
  },
  {
    year: "2017",
    event: "Cloud Solutions Launch",
    description:
      "Introduced scalable cloud infrastructure services tailored for modern businesses.",
  },
  {
    year: "2019",
    event: "Cybersecurity Expansion",
    description:
      "Expanded offerings with advanced cybersecurity protocols to protect critical assets.",
  },
  {
    year: "2021",
    event: "AI & Automation Rollout",
    description:
      "Deployed AI-driven automation platforms to streamline operational workflows.",
  },
  {
    year: "2023",
    event: "Global Client Network",
    description:
      "Achieved presence across continents with a diverse portfolio of international clients.",
  },
];
    const items = [...values, ...values];

    return (
      <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        >
          <source src="images/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">About Us</h1>
            <p className="hero-paragraph animate-fade-up">
              Our mission is rooted in trust, transparency, and delivering value at every step of your property journey.
            </p>

            <Link
              to="/contact"
              className="hero-button animate-fade-up-delayed"
            >
              Reach Out Today
            </Link>
          </div>
        </div>
      </section>


      {/*about story */}
      <section className="aboutit-section">
  <div className="aboutit-grid">
    <div className="aboutit-image-stack">
      <div className="aboutit-card-main">
        <img src="images/about-1.jpg" alt="Client discussion in modern office" />
      </div>
      <div className="aboutit-card-small">
        <img src="images/about12.jpg" alt="IT teamwork environment" />
      </div>
    </div>
    <div className="aboutit-content">
      <h2>Empowering Your Digital Vision</h2>
      <p>
        Since 2015, we have fueled organizations’ ambitions through future-proof IT services. Our expertise covers cloud transformation, cybersecurity, DevOps, and enterprise support—making us a partner of choice for innovators and industry leaders alike.
      </p>
      <p>
        We believe technology must be accessible and strategic. Our transparent, client-first approach ensures every solution is not just secure and scalable, but tailored to your unique goals.
      </p>
    </div>
  </div>
</section>



        {/*vission section*/}
    <section ref={ref} className={`vision-mission-row ${inView ? "active" : ""}`}>
      {/* Left Card: Video in Card Box */}
      <div className="media-card video-card">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/poster.jpg"
          className={inView ? "active" : ""}
        >
          <source src="images/about.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Card: Vision & Mission */}
      <div className="content-card">
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="card-header">
            <FaEye className="card-icon" />
            <h3>Our Vision</h3>
          </div>
          <p className="justified-text">
            To pioneer digital transformation by integrating innovation, intelligence, 
            and security—empowering businesses to scale seamlessly from 
            Point A to Point B in their technology journey, ensuring efficiency and sustainability.
          </p>
        </motion.div>
        <motion.div
          className="mission-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="card-header">
            <FaBullseye className="card-icon" />
            <h3>Our Mission</h3>
          </div>
          <p className="justified-text">
            To deliver premium IT Services—from cloud solutions, cybersecurity, and data analytics, to intelligent platforms.  
            We guide organizations from ideation to execution with transparent consulting, agile development, and superior support.
          </p>
        </motion.div>
      </div>
    </section>


        {/* Values (Full Width) */}
      <section className="values-section full-width">
      <div className="sectionss-header text-center">
        <h2>Our Core Values</h2>
        <p>The principles driving IT success</p>
      </div>
      <div className="values-marquee-outer">
        <div className="values-marquee-inner" ref={marqueeRef}>
          {items.map((value, idx) => (
            <div className="value-card" key={idx}>
              <value.icon className="value-icon" />
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Team (Full Width) */}
  <section className="section team-section full-width">
      <div className="sections-header text-center">
        <h2>Leadership</h2>
        <p>Innovation driven by dedicated leaders</p>
      </div>
      <div className="team-grid">
        {team.map((member, index) => (
          <div
            className="team-card leader-card"
            key={index}
            // On mobile: tap toggles overlay. On desktop: click or hover (for demo, using click/tap for all)
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="team-image leader-image">
              <img src={member.image} alt={member.name} />
              <div
                className={
                  'leader-overlay' + (openIndex === index ? ' open' : '')
                }
              >
                <div className="leader-overlay-content">
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-social">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

        {/* Timeline (Full Width) */}
    <section className="section timeline-section full-width">
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Our Journey</h2>
        <p>Key milestones in our growth</p>
      </motion.div>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-year">{milestone.year}</div>
              <h4>{milestone.event}</h4>
              <p>{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

          {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-overlay">
            <div className="container">
              <motion.div
                className="cta-content text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>Ready to Transform Your Business?</h2>
                <p>
                  Get started today with a free consultation and discover how we can help you achieve your goals.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-large">
                    Start Your Journey <FaArrowRight />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-large">
                    Learn More About Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        

      
        <style jsx>{`
          /* ===== Base & Utilities ===== */
          .full-width { width: 100%; }
          .text-center { text-align: center; }
          .about-page { padding-top: 80px; background: var(--page-bg, #fff); }
          .section { padding: 80px 24px; }

          .home-page {
            padding-top: 80px;
          }

        .hero-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   /* ensures vertical centering inside overlay */
    text-align: center;
    color: #fff;
    max-width: 800px;
    z-index: 2;
    gap: 28px; /* space between title, text, and button */
  }

  .hero-title {
    color: #fff; /* ✅ force white text so it’s visible on dark video background in light mode */
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0;
    opacity: 0;
    animation: slideIn 1s ease-out forwards 0.5s;
  }


  .hero-paragraph {
    font-size: 1.25rem;
    margin: 0;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards 1s;
  }

  .hero-button {
    margin-top: 0;
    padding: 14px 36px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background-color: #224DB7;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards 1.5s;
  }

  .hero-button:hover {
    background-color: #000;
    transform: scale(1.05);
  }

  /* Responsive adjustments */
  @media (max-width: 700px) {
    .hero-content {
      max-width: 95vw;
      padding: 0 10px;
      gap: 18px;
    }
    .hero-title {
      font-size: 2rem;
    }
    .hero-paragraph {
      font-size: 1rem;
    }
    .hero-button {
      font-size: 1rem;
    }
  }

  /* Animations */
  @keyframes slideIn {
    0% { opacity: 0; transform: translateY(-20px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px);}
    100% { opacity: 1; transform: translateY(0);}
  }

          .hero-text h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            color: white;
          }

          .gradient-text {
            background: linear-gradient(45deg, #ffd700, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-text p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 30px;
            opacity: 0.9;
          }

          .hero-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .hero-visual {
            position: relative;
          }

          .hero-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            border-radius: 200px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .hero-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .card-icon {
            font-size: 2rem;
            color: var(--primary-color);
          }

          .card-content h4 {
            color: var(--heading-color);
            margin: 0 0 5px 0;
            font-size: 1rem;
          }

          .card-content p {
            color: var(--text-muted);
            margin: 0;
            font-size: 0.9rem;
          }

          {/*about story */}
          :root {
  --aboutit-bg: #fff;
  --aboutit-card-bg: #f4f8fb;
  --aboutit-sidebar-bg: #f0f1fa;
  --aboutit-shadow: 0 2px 16px 0 rgba(40,52,80,.10);
  --aboutit-shadow-hover: 0 8px 32px rgba(30,58,138,0.15), 0 1.5px 10px rgba(40,52,80,0.11);
  --aboutit-heading: #1e2b5c;
  --aboutit-text: #16181f;
}
[data-theme="dark"] {
  --aboutit-bg: #171923;
  --aboutit-card-bg: #24263b;
  --aboutit-sidebar-bg: #181c29;
  --aboutit-shadow: 0 2px 16px 0 rgba(10,20,40,.22);
  --aboutit-shadow-hover: 0 8px 32px rgba(100,130,200,0.22), 0 1.5px 10px rgba(20,29,50,0.2);
  --aboutit-heading: #e3ebfc;
  --aboutit-text: #e2e6f3;
}

.aboutit-section {
  background: var(--aboutit-bg);
  padding-bottom: 60px;
  margin: 0 auto 58px auto;
  max-width: 1600px;
  transition: background 0.3s, color 0.3s;
}
.aboutit-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 56px;
  background: var(--aboutit-card-bg);
  border-radius: 28px;
  box-shadow: var(--aboutit-shadow);
  padding: 0 40px;
  margin-bottom: 30px;
  position: relative;
  min-height: 500px;
}

.aboutit-image-stack {
  position: relative;
  min-width: 340px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.aboutit-card-main {
  position: absolute;
  width: 450px;
  height: 410px;
  left: 0;
  top: 0;
  box-shadow: var(--aboutit-shadow-hover);
  border-radius: 24px;
  background: var(--aboutit-card-bg);
  overflow: hidden;
  animation: aboutit-float-main 5s ease-in-out infinite;
}
.aboutit-card-small {
  position: absolute;
  width: 410px;
  height: 335px;
  left: 200px;
  top: 190px;
  z-index: 2;
  box-shadow: var(--aboutit-shadow-hover);
  border-radius: 18px;
  background: var(--aboutit-card-bg);
  overflow: hidden;
  
  animation: aboutit-float-small 7.5s ease-in-out infinite;
}
.aboutit-card-main img,
.aboutit-card-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  background: var(--aboutit-card-bg);
}
@keyframes aboutit-float-main {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-24px);}
}
@keyframes aboutit-float-small {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(18px);}
}

.aboutit-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 24px;
  max-width: 540px;
  padding-left: 10px;
  z-index: 2;
}
.aboutit-content h2 {
  font-size: 2.1rem;
  color: var(--aboutit-heading);
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.15;
  transition: color 0.25s;
}
.aboutit-content p {
  font-size: 1.11rem;
  color: var(--aboutit-text);
  line-height: 1.8;
  margin-bottom: 0;
  transition: color 0.25s;
}

/* Responsive for tablet/mobile */
@media (max-width: 1024px) {
  .aboutit-grid {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 32px 8px;
  }
  .aboutit-image-stack {
    min-width: unset;
    min-height: 300px;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .aboutit-card-main { width: 92vw; max-width: 320px; height: 36vw; max-height: 320px;}
  .aboutit-card-small { width: 46vw; max-width: 178px; height: 22vw; max-height: 88px; left: 62px; top: 130px;}
  .aboutit-content { padding: 0;}
}
@media (max-width: 600px) {
  .aboutit-section { padding: 0; }
  .aboutit-card-main {min-width: 140px; width: 88vw; height: 29vw; max-width: 200px; max-height: 130px;}
  .aboutit-card-small {min-width: 80px; width: 40vw; height: 17vw; max-width: 78px; max-height: 40px; left: 30px; top: 62px;}
  .aboutit-content h2 {font-size: 1.22rem;}
  .aboutit-content p {font-size: 0.97rem;}
}

          <section className="about-story">
            <h2>Our Story</h2>
            <p>
              At ForStackly, we believe in the power of technology to transform businesses. Our journey began in 2015 with a vision to provide innovative IT solutions that drive success. Over the years, we have evolved into a trusted partner for organizations seeking to navigate the digital landscape.
            </p>
            <p>
              Our team of experts is passionate about leveraging the latest technologies to deliver tailored solutions that meet the unique needs of each client. We take pride in our collaborative approach, working closely with stakeholders to ensure alignment and achieve desired outcomes.
            </p>
          </section>

        /* ===== Two Column Grid (equal height) ===== */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 48px;
    background: var(--card-bg);              /* Card background for both themes */
    border-radius: 24px;
    box-shadow: var(--shadow);               /* Soft shadow for premium look */
    padding: 0 40px;
    margin-bottom: 40px;
  }

  .story-section {
    background: var(--card-bg);           /* Uses your theme variable *
    box-shadow: var(--shadow);
    padding: 0 0;
    margin: 0 auto 56px auto;
    max-width: 1600px;                    /* Optional: constrain max width */
    transition: background 0.3s, color 0.3s;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 28px;
    padding-right: 20px;
  }

  .story-content h2 {
    font-size: 2.4rem;
    color: var(--heading-color);
    margin-bottom: 18px;
    font-weight: 800;
    line-height: 1.15;
  }

  .story-content p {
    font-size: 1.15rem;
    color: var(--text-color);
    line-height: 1.8;
    margin-bottom: 0;
    max-width: 560px;
  }

  .story-visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image {
    width: 100%;
    min-height: 500px;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-hover);
    background: var(--sidebar-bg);            /* subtle background for image area in both themes */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
  }

  /* Responsive: stack columns on tablet/mobile */
  @media (max-width: 1024px) {
    .grid-2 {
      grid-template-columns: 1fr;
      padding: 32px 14px;
      min-height: unset;
      border-radius: 16px;
    }
    .story-content {
      padding-right: 0;
    }
    .story-image {
      min-height: 340px;
      margin-top: 24px;
    }
  }
  @media (max-width: 768px) {
    .story-content h2 { font-size: 1.7rem; }
    .story-content p { font-size: 1rem; }
    .story-image { min-height: 200px; }
  }


  /* ===Vission Section (Theme-Based) ===== */
.vision-mission-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  background: var(--bg-color);
  padding: 2rem 0;
}

.media-card {
  flex: 1.1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border-radius: 22px;
  box-shadow: var(--shadow);
  overflow: hidden;
  min-width: 320px;
  max-width: 500px;
  min-height: 340px;
  margin: 0 0 0 2rem;
}

.media-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: none;
  border-radius: 0;
  transition: filter 0.4s;
  background: var(--card-bg);
}

.content-card {
  flex: 1.28 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vision-card,
.mission-card {
  background: var(--card-bg);
  border-radius: 18px;
  box-shadow: var(--shadow);
  border: 1.5px solid var(--border-color);
  margin-bottom: 1.6rem;
  padding: 2rem 2.8rem;
  transition: box-shadow 0.3s;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.card-header h3 {
  margin-left: 0.7rem;
  font-size: 1.4rem;
  color: var(--heading-color);
  font-weight: 600;
}
.card-icon {
  font-size: 1.6rem;
  color: var(--primary-color);
}
.justified-text {
  text-align: justify;
  color: var(--text-color);
  line-height: 1.7;
  font-size: 1.07rem;
}

/* ============= RESPONSIVE: Vision & Mission Section ============= */

/* Tablet (≤1024px) */
@media (max-width: 1024px) {
  .vision-mission-row {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .media-card {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    min-height: 300px;
  }

  .content-card {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
  }

  .vision-card,
  .mission-card {
    padding: 1.8rem 2rem;
    margin-bottom: 1.5rem;
  }

  .card-header h3 {
    font-size: 1.3rem;
  }

  .justified-text {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
  }
}

/* Mobile (≤768px) */
@media (max-width: 768px) {
  .vision-mission-row {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }

  .media-card {
    width: 100%;
    max-width: 100%;
    margin: 0;
    min-height: 220px;
    border-radius: 16px;
  }

  .content-card {
    width: 100%;
    text-align: left;
  }

  .vision-card,
  .mission-card {
    padding: 1.5rem;
    border-radius: 14px;
  }

  .card-header h3 {
    font-size: 1.2rem;
  }

  .card-icon {
    font-size: 1.4rem;
  }

  .justified-text {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: justify;
  }
}

/* Small Mobile (≤480px) */
@media (max-width: 480px) {
  .vision-mission-row {
    gap: 1rem;
    padding: 1rem;
  }

  .vision-card,
  .mission-card {
    padding: 1.2rem;
  }

  .card-header h3 {
    font-size: 1.1rem;
  }

  .card-icon {
    font-size: 1.2rem;
  }

  .justified-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}





          /* ===== Values Section (Theme-Based) ===== */
.values-section {
  background: var(--card-bg);
  padding: 80px 24px;
  overflow: hidden;
}

.section-header h2 {
  margin: 0 0 6px;
  font-size: 2rem;
  color: var(--heading-color);
}

.section-header p {
  color: var(--text-color);
  margin: 0 0 24px;
}

/* Marquee container */
.values-marquee-outer {
  width: 100vw;
  overflow: hidden;
  margin: 0 -32px;
  padding: 10px 0;
  position: relative;
}
.values-marquee-inner {
  display: flex;
  gap: 32px;
  animation: marquee-scroll 32s linear infinite;
  will-change: transform;
}
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.values-marquee-inner:hover {
  animation-play-state: paused;
}

/* Value card styling */
.value-card {
  flex: 0 0 340px;
  background: var(--card-bg);
  padding: 32px 22px;
  border-radius: 18px;
  text-align: center;
  box-shadow: var(--shadow);
  border: 2.5px solid transparent;
  background-clip: padding-box;
  margin-bottom: 10px;
  min-height: 240px;
  transition: 
    transform 0.28s cubic-bezier(.45,.03,.44,1.01), 
    box-shadow .28s, 
    border .38s;
  position: relative;
}
.value-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-10px) scale(1.038);
  border: 2.5px solid var(--primary-color);
  z-index: 2;
}
.value-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  color: var(--primary-color);
  margin-bottom: 16px;
  width: 100%;
  height: 48px;
}
.value-card h4 {
  font-size: 1.22rem;
  color: var(--heading-color);
  margin-bottom: 8px;
  margin-top: 0;
  font-weight: bold;
}
.value-card p {
  color: var(--text-color);
  margin: 0;
  font-size: 1.1rem;
}

/* SCROLLBAR for Marquee */
.values-marquee-outer::-webkit-scrollbar,
.values-marquee-inner::-webkit-scrollbar {
  height: 8px;
  background: var(--card-bg);
}
.values-marquee-inner::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 6px;
}
.values-marquee-inner::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* Responsive: shrink card width and icon size */
@media (max-width: 700px) {
  .value-card { flex-basis: 240px; padding: 20px 10px; min-height: 200px;}
  .value-icon { font-size: 2.1rem; height: 36px; }
  .section-header h2 { font-size: 1.18rem;}
}


          /* ===== Team ===== */
/* ===================== TEAM SECTION ===================== */
.team-section {
  background: var(--sidebar-bg, #f7f8f9);
  padding: 40px 0;
  margin-top: -70px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.leader-card {
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  position: relative;
  cursor: pointer;
}

.leader-image {
  position: relative;
  width: 100%;
  height: 330px;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s;
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  border-radius: 18px;
  filter: brightness(0.97);
  transition: filter 0.28s;
}

.leader-card:hover .leader-image,
.leader-card:active .leader-image {
  box-shadow: var(--shadow-hover);
}

.leader-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(15,24,32,0.92), rgba(31,41,51,0.95), rgba(0,120,240,0.65));
  color: #fff;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.38s cubic-bezier(.81,-0.02,.18,1.04);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.leader-overlay.open {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.25s cubic-bezier(.85,.03,.45,.96);
}

.leader-overlay-content {
  text-align: center;
  padding: 0 15px;
}

.leader-overlay h4 {
  color: #fff;
  font-size: 1.25rem;
  margin: 0 0 7px 0;
  font-weight: 700;
}

.leader-overlay .team-role {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}

.leader-overlay .team-bio {
  color: #fff;
  font-size: 0.98rem;
  margin: 7px 0 21px 0;
  line-height: 1.6;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 13px;
  margin-top: 10px;
}

.team-social a {
  color: #fff;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.26rem;
  transition: background 0.18s, color 0.18s;
}

.team-social a:hover {
  background: var(--primary-color, #0b5e2b);
  color: #fff;
}

/* ========== TABLET (≤1024px) ========== */
@media (max-width: 1024px) {
  .team-section {
    padding: 30px 0;
  }

  .team-grid {
    gap: 20px;
  }

  .leader-image {
    height: 280px;
  }

  .leader-overlay h4 {
    font-size: 1.15rem;
  }

  .leader-overlay .team-role {
    font-size: 1rem;
  }

  .leader-overlay .team-bio {
    font-size: 0.95rem;
  }
}

/* ========== MOBILE (≤768px) ========== */
@media (max-width: 768px) {
  .team-section {
    padding: 20px 0;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .leader-image {
    height: 250px;
    border-radius: 14px;
  }

  .leader-overlay-content {
    padding: 0 10px;
  }

  .leader-overlay h4 {
    font-size: 1.1rem;
  }

  .leader-overlay .team-role {
    font-size: 0.95rem;
  }

  .leader-overlay .team-bio {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .team-social a {
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
  }
}

/* ========== SMALL MOBILE (≤480px) ========== */
@media (max-width: 480px) {
  .leader-image {
    height: 220px;
  }

  .leader-overlay h4 {
    font-size: 1rem;
  }

  .leader-overlay .team-role {
    font-size: 0.88rem;
  }

  .leader-overlay .team-bio {
    font-size: 0.85rem;
  }

  .team-social a {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
}


        /* ===== Timeline ===== */
  .timeline-section {
  background: #ffffff; /* fixed white background overrides var(--bg-color) */
  padding: 80px 0;
  border-radius: 24px;
  box-shadow: var(--shadow);
  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: relative;
}
.section-header.text-center h2 {
  color: #000000;
  transition: color 0.19s ease;
}

.section-header.text-center p {
  color: #000000;
  transition: color 0.3s ease;
}




/* Vertical timeline line */
.timeline {
  position: relative;
  width: 100%;
  padding: 10px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: var(--secondary-color);
  top: 20px;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 2px;
}

/* Timeline items */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 30px 50px;
  box-sizing: border-box;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
  text-align: left;
}

/* Timeline dots */
.timeline-item::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--accent-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  top: 30px;
  box-shadow: var(--shadow);
  transition: background 0.3s, border-color 0.3s;
}

.timeline-item.left::after {
  right: -13px;
}

.timeline-item.right::after {
  left: -13px;
}

/* Card container */
.timeline-content {
  position: relative;
  background: var(--card-bg);       /* Theme-aware: white (light) or dark card (dark mode) */
  color: var(--text-color);         /* Theme-aware */
  padding: 30px 28px;
  border-radius: 20px;
  box-shadow: var(--shadow-light);  /* Theme-aware shadow */
  display: inline-block;
  max-width: 600px;
  border: none;
  z-index: 1;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
}

.timeline-content::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2.5px; /* border thickness */
  border-radius: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color), var(--secondary-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
  pointer-events: none;
  transition: background 0.3s;
}


/* Year badge */
.timeline-year {
  background: var(--primary-color);
  color: #fff;
  padding: 8px 18px;
  border-radius: 28px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-size: 1rem;
}

/* Title */
.timeline-content h4 {
  color: var(--heading-color);
  margin: 0 0 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

/* Description */
.timeline-content p {
  color: var(--text-muted);
  margin: 0;
  line-height: 1.65;
  font-size: 1.05rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .timeline::before {
    left: 24px;
  }
  .timeline-item {
    width: 100%;
    padding-left: 72px;
    padding-right: 24px;
    text-align: left;
  }
  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }
  .timeline-item::after {
    left: 15px;
    right: auto;
  }
}

{/* CTA Section */}
        .cta-section {
  position: relative;
  background: url('/images/agent1.jpg') center/cover no-repeat fixed; /* fixed background */
  padding: 0 0;
  color: white;
}

  .cta-overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
    padding: 100px 0;
  }

  .cta-content {
    max-width: 700px;
    margin: auto;
    color:#fff;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color:#fff;
  }

  .cta-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .btn {
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
  }
    .btn-primary, .btn-outline, .btn-large {
    display: inline-flex;           /* Ensures horizontal layout! */
    align-items: center;            /* Vertically centers content */
    justify-content: center;        /* Centers content horizontally */
    gap: 8px;                       /* Space between text and icon */
  }

  .btn-primary svg {
    font-size: 1.3rem;
    vertical-align: middle;
  }


  .btn-primary {
    background: #ff6600;
    color: white;
  }

  .btn-primary:hover {
    background: #e65c00;
  }

  .btn-outline {
    border: 2px solid white;
    color: white;
  }

  .btn-outline:hover {
    background: white;
    color: black;
  }


  .btn {
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
  }

  .btn-primary {
    background: #224DB7;
    color: white;
  }

  .btn-primary:hover {
    background: #224DB7;
  }

  .btn-outline {
    border: 2px solid white;
    color: white;
  }

  .btn-outline:hover {
    background: white;
    color: black;
  }


          @media (max-width: 768px) {
            .hero-content {
              grid-template-columns: 1fr;
              text-align: center;
            }
              .services-content h2 {
            font-size: 0.9rem;
            margin-bottom: 20px;
            margin-left: -20px;
          }

          .services-content p {
            font-size: 0.9rem;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 30px;
            color: var(--text-color);
          }

            .hero-text h1 {
              font-size: 2.5rem;
            }
              .section-header h2 {
            font-size: 1.9rem;
            margin-bottom: 15px;
          }
            .cta-content h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color:#fff;
  }
        `}</style>
      </div>
    );
  };

  export default AboutUs;
