import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaPlay, 
  FaRocket, 
  FaUsers, 
  FaAward, 
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaHandshake,
  FaQuoteLeft, 
  FaEye,
  FaUserFriends,
  FaBook,  // For Continuous Learning
} from 'react-icons/fa';

const services = [
  {
    title: "Cloud Infrastructure",
    imgSrc: "images/home-2.jpg",
    desc: "Optimize and secure your cloud resources for scalability and reliability.",
  },
  {
    title: "Cybersecurity Solutions",
    imgSrc: "images/home-21.jpg",
    desc: "Protect your digital assets with advanced security protocols.",
  },
  {
    title: "IT Automation & DevOps",
    imgSrc: "images/home-22.jpg",
    desc: "Accelerate innovation by automating workflows and continuous delivery.",
  },
  {
    title: "IT Consulting",
    imgSrc: "images/home-23.jpg",
    desc: "Expert advice to transform your IT landscape and strategy.",
  },
  {
    title: "Data Analytics & AI",
    imgSrc: "images/home-24.jpg",
    desc: "Leverage data insights and AI-driven solutions to make smarter business decisions.",
  },
  {
    title: "Managed IT Services",
    imgSrc: "images/home-25.jpg",
    desc: "Comprehensive 24/7 support to keep your IT operations running smoothly.",
  },
];


const Home2 = () => {
  const [stats] = useState([
    { number: '500+', label: 'Projects Completed', icon: FaRocket },
    { number: '200+', label: 'Happy Clients', icon: FaUsers },
    { number: '50+', label: 'Awards Won', icon: FaAward },
    { number: '99%', label: 'Success Rate', icon: FaChartLine }
  ]);

  const [features] = useState([
  {
    icon: FaEye, // or FaShieldAlt
    title: 'Integrity & Transparency',
    description: 'We maintain open and honest interactions at all times. Clients always know where they stand, ensuring trust and accountability.'
  },
  {
    icon: FaUserFriends, // or FaHeart
    title: 'Client-Centered Culture',
    description: 'Your goals guide our work. We listen actively, understand your needs, and deliver tailored solutions that put your interests first.'
  },
  {
    icon: FaBook, // or FaRocket
    title: 'Continuous Learning',
    description: 'We’re committed to growth—personally and professionally. Our team consistently embraces new ideas and technologies.'
  }
]);


  const [testimonials] = useState([
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'ForStackly transformed our entire digital infrastructure. Their innovative approach helped us achieve 300% growth in just one year.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The level of expertise and dedication shown by the ForStackly team is exceptional. They delivered beyond our expectations.'
    }
  ]);

const events = [
  {
    img: "images/home-291.jpg",
    badge: "FREE",
    title: "BestSeller Book Bootcamp - Write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 9.30PM",
    location: "ONLINE EVENT - Attend anywhere",
    language: "java",
    technology: "cloud",          // 👈 matches Technology dropdown
    serviceType: "migration",     // 👈 matches Service Type dropdown
    framework: "spring",
    tool: "docker"
  },
  {
    img: "images/home-26.jpg",
    badge: "FREE",
    title: "Creative Marketing Workshop - Boost Your Brand Awareness",
    date: "Sunday, March 19, 10.00AM",
    location: "New York, NY",
    language: "python",
    technology: "ai",
    serviceType: "development",
    framework: "django",
    tool: "git"
  },
  {
    img: "images/home-27.jpg",
    badge: "PAID",
    title: "Tech Startup Pitch Night - Showcase Your Ideas",
    date: "Wednesday, March 22, 6.00PM",
    location: "San Francisco, CA",
    language: "c",
    technology: "devops",
    serviceType: "modernization",
    framework: "none",
    tool: "kubernetes"
  },
  {
    img: "images/home-28.jpg",
    badge: "FREE",
    title: "AI & Machine Learning Hackathon",
    date: "Friday, March 24, 4.00PM",
    location: "Bengaluru, India",
    language: "python",
    technology: "ai",
    serviceType: "automation",
    framework: "tensorflow",
    tool: "aws"
  },
  {
    img: "images/home-29.jpg",
    badge: "PAID",
    title: "Frontend Mastery Bootcamp - React & JavaScript",
    date: "Monday, March 27, 11.00AM",
    location: "London, UK",
    language: "javascript",
    technology: "devops",
    serviceType: "development",
    framework: "react",
    tool: "git"
  },
  {
    img: "images/home-290.jpg",
    badge: "FREE",
    title: "Cloud DevOps Summit - Docker, Kubernetes & More",
    date: "Thursday, March 30, 2.00PM",
    location: "Dubai, UAE",
    language: "c++",
    technology: "cloud",
    serviceType: "automation",
    framework: "none",
    tool: "docker"
  }
];






// ✅ Add states
const [selectedLanguage, setSelectedLanguage] = useState('');
const [selectedTechnology, setSelectedTechnology] = useState(''); // 👈 added
const [selectedService, setSelectedService] = useState('');        // serviceType
const [visibleCount, setVisibleCount] = useState(6);


// ✅ Filter logic (match if ANY filter matches)
const filteredEvents = events.filter(evt => {
  const byLang = selectedLanguage ? evt.language === selectedLanguage : true;
  const byTech = selectedTechnology ? evt.technology === selectedTechnology : true;
  const byService = selectedService ? evt.serviceType === selectedService : true;
  return byLang && byTech && byService;
});

const visibleEvents = filteredEvents.slice(0, visibleCount);


// ✅ Load more handler
const handleLoadMore = () => {
  if (visibleCount >= filteredEvents.length) {
    alert("No more events to show.");
    return;
  }
  setVisibleCount(prev => Math.min(prev + 3, filteredEvents.length));
};



  useEffect(() => {
    document.title = 'Home Alternative - ForStackly Business Solutions';
  }, []);

  return (
    <div className="home2-page">
      {/* Hero Section */}
       <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        >
          <source src="images/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">Designing Events, Creating Memories</h1>
<p className="hero-paragraph animate-fade-up">
  We are a passionate team of event planners dedicated to crafting seamless, stylish, 
  and stress-free celebrations. From concept to execution, we handle every detail so you 
  can focus on enjoying the moment.
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

<section className="services-section">
    <div className="services-container">
      <h2 className="section-title">Our IT Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.imgSrc} alt={service.title} className="service-image" />
            <div className="overlay">
              <h3 className="overlay-title">{service.title}</h3>
              <p className="overlay-desc">{service.desc}</p>
              <Link to="/services" className="overlay-link">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>


<section className="upcoming-events-section">
  <div className="upcoming-events-container">
    <div className="upcoming-events-title">
      <span className="events-main-title">Explore Our</span>
      <span className="events-highlight-title">Services</span>
    </div>

   <div className="events-filters">
  {/* Language */}
  {/* Language */}
  <div className="filter-card">
    <select
      className="filter-select"
      aria-label="Select Language"
      value={selectedLanguage}
      onChange={e => setSelectedLanguage(e.target.value)}
    >
      <option value="">Language</option>
      <option value="java">Java</option>
      <option value="c">C</option>
      <option value="c++">C++</option>
      <option value="python">Python</option>
      <option value="javascript">JavaScript</option>
    </select>
  </div>

  {/* Technology */}
  <div className="filter-card">
    <select
      className="filter-select"
      aria-label="Select Technology"
      value={selectedTechnology}
      onChange={e => setSelectedTechnology(e.target.value)}
    >
      <option value="">Technology</option>
      <option value="cloud">Cloud</option>
      <option value="ai">Artificial Intelligence</option>
      <option value="security">Cybersecurity</option>
      <option value="devops">DevOps</option>
      <option value="blockchain">Blockchain</option>
    </select>
  </div>

  {/* Service */}
  <div className="filter-card">
    <select
      className="filter-select"
      aria-label="Select Service"
      value={selectedService}
      onChange={e => setSelectedService(e.target.value)}
    >
      <option value="">Service Type</option>
      <option value="migration">Cloud Migration</option>
      <option value="modernization">Application Modernization</option>
      <option value="automation">Automation</option>
      <option value="compliance">Compliance</option>
      <option value="development">Web/Mobile Development</option>
    </select>
  </div>
</div>
  </div>
</section>


<section className="event-section">
  <div className="event-grid">
    {visibleEvents.length > 0 ? (
      visibleEvents.map((event, idx) => (
        <div className="event-card" key={idx}>
          <img src={event.img} alt={event.title} className="event-img" />

          <div className="event-content">
            <span className={`badge ${event.badge.toLowerCase()}`}>
              {event.badge}
            </span>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="no-events">
        <img src="images/home.jpg" alt="No Results" className="no-results-img" />
        <p>No matching services found. Try a different filter.</p>
      </div>
    )}
  </div>

  <div style={{ textAlign: "center", marginTop: "24px" }}>
    <button onClick={handleLoadMore} className="load-more-btn">
      Load More
    </button>
  </div>
</section>






   {/* Features Section */}
<section className="features-section">
  <div className="container">
    {/* Bubble container with multiple bubbles */}
    <div className="bubbles">
      {[...Array(15)].map((_, i) => (
        <span key={i} className="bubble" />
      ))}
    </div>

    <motion.div
      className="section-header text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2>Company Values</h2>
      <p>We believe in honest communication and ethical business, building trust at every step.</p>
    </motion.div>
    <div className="features-grid">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="feature-icon">
            <feature.icon />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
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
        .home2-page {
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

{/*service styles*/}
.services-section {
        width: 100%;
        background: var(--bg-color);
        padding: 60px 20px;
      }

      .services-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--heading-color);
        margin-bottom: 40px;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
      }

      .service-card {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 15px;
        box-shadow: var(--shadow);
      }

      .service-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        transition: transform 0.4s ease;
        border-radius: 15px;
      }

      .service-card:hover .service-image {
        transform: scale(1.05);
      }

      /* Overlay */
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--overlay-bg);
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        transition: opacity 0.4s ease;
        border-radius: 15px;
        text-align: center;
      }

      .service-card:hover .overlay {
        opacity: 1;
      }

      .overlay-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 15px;
        color: #000 !important;
      }

      .overlay-desc {
        font-size: 1rem;
        margin-bottom: 20px;
        line-height: 1.4;
        color: #000 !important;
      }

      .overlay-link {
        color: var(--primary-color);
        font-weight: 700;
        text-decoration: underline;
        font-size: 1rem;
      }

      /* Light theme */
      @media (prefers-color-scheme: light) {
        .overlay {
          background-color: rgba(0, 0, 0, 0.6);
          color: var(--bg-color);
        }

        .overlay-link {
          color: var(--primary-color);
        }
      }

      /* Dark theme */
      @media (prefers-color-scheme: dark) {
        .overlay {
          background-color: rgba(255, 255, 255, 0.85);
          color: var(--text-color);
        }

        .overlay-link {
          color: var(--secondary-color);
        }
      }

      @media (max-width: 600px) {
        .service-image {
          height: 200px;
        }

        .overlay-title {
          font-size: 1.5rem;
        }

        .overlay-desc {
          font-size: 0.9rem;
        }
      }

{/*Filter section*/}

:root {
  --bg-primary: #f5f7fa;
  --bg-card: #ffffff;
  --text-primary: #1a1a1a;
  --text-accent: #224DB7;
  --border-color: #d1d5db;
  --shadow-color: rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  --bg-primary: #0e1a34;
  --bg-card: #111827;
  --text-primary: #f5f5f5;
  --text-accent: #3b82f6;
  --border-color: #374151;
  --shadow-color: rgba(255, 255, 255, 0.08);
}

.upcoming-events-section {
  width: 100%;
  background: var(--primary-color);
  padding: 20px 0;
  color: var(--text-primary);
  transition: all 0.3s ease-in-out;
}

.upcoming-events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.upcoming-events-title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.events-main-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.events-highlight-title {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.events-filters {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-card {
  background: var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 4px 14px;
  transition: box-shadow 0.25s, border-color 0.3s;
}

.filter-card:hover {
  border-color: var(--border-color);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.filter-select {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  padding: 10px 36px 10px 12px;
  border-radius: 6px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3csvg fill='%23aaa' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
}

.filter-select option {
  background: var(--bg-primary);
  color: var(--text-primary);
}

@media (max-width: 990px) {
  .upcoming-events-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .events-filters {
    margin-top: 18px;
    gap: 16px;
  }
   .filter-select:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
  
  .filter-card {
    min-width: 100%;
  }
    
}/* === Theme Variables === */
:root {
  --bg: #111;
  --text: #f9f9f9;
}

body.light {
  --bg: #f9f9f9;
  --text: #111;
}

/* === Event Section === */
/* === Event Section === */
.event-section {
  padding: 60px 20px;
  background: var(--bg);
  transition: background 0.4s ease, color 0.4s ease;
}

/* === Grid Layout === */
.event-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* === Card Layout === */
.event-card {
  background: var(--card-bg);
  color: var(--text-color);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, background 0.4s ease, color 0.4s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

/* === Image === */
.event-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

/* === Content === */
.event-content {
  padding: 16px;
}

.event-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.event-date {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 6px;
}

.event-location {
  font-size: 14px;
  color: var(--muted-text);
}

/* === Badges === */
.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 10px;
}

.badge.free {
  background: #0072ff;
  color: #fff;
}

.badge.paid {
  background: #ff5722;
  color: #fff;
}

/* === Light & Dark Theme === */
body.light {
  --bg: #f9f9f9;
  --card-bg: #fff;
  --text-color: #111;
  --accent-color: #0072ff;
  --muted-text: #555;
}

body.dark {
  --bg: #121212;
  --card-bg: #1e1e1e;
  --text-color: #f1f1f1;
  --accent-color: #00c6ff;
  --muted-text: #aaa;
}

.load-more-btn {
  background: #007bff;           /* Primary blue */
  color: #fff;                   /* White text */
  padding: 12px 28px;
  border: none;
  border-radius: 30px;           /* Rounded pill look */
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.3);
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: #0056b3;           /* Darker blue */
  transform: translateY(-2px);   /* Lift on hover */
  box-shadow: 0 8px 20px rgba(0, 86, 179, 0.4);
}

.load-more-btn:active {
  transform: translateY(0);      /* Reset on click */
  box-shadow: 0 4px 12px rgba(0, 86, 179, 0.3);
}

@media (max-width: 600px) {
  /* Layout changes: stack items vertically */
  .event-grid {
    grid-template-columns: 1fr !important;  /* single column */
    gap: 12px;
  }
  
  /* Smaller card heights */
  .event-card {
    max-height: 350px;  /* shorter height for mobile */
  }
  
  /* Smaller images */
  .event-img {
    height: 180px;
  }
  
  /* Adjust text spacing */
  .event-content {
    padding: 12px;
  }
  
  .event-title {
    font-size: 1.1rem;
  }
  
  .event-date,
  .event-location {
    font-size: 0.9rem;
  }
  
  /* Buttons and badges resize */
  .badge {
    font-size: 10px;
    padding: 3px 8px;
  }
  
  /* Adjust load more button for smaller screens */
  .load-more-btn {
    width: 100%;
    padding: 14px 0;
    font-size: 1rem;
  }
}

@media (max-width: 990px) {
  /* 2 columns instead of 3 on tablets */
  .event-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  /* Slightly smaller images */
  .event-img {
    height: 210px;
  }
  
  /* Text size tweaks */
  .event-title {
    font-size: 1.2rem;
  }
  
  .event-date,
  .event-location {
    font-size: 1rem;
  }
  
  /* Responsive adjustments to badge size */
  .badge {
    font-size: 11px;
    padding: 3px 9px;
  }
  
  /* Load more button size adjustment */
  .load-more-btn {
    padding: 12px 28px;
    font-size: 1rem;
    max-width: 250px;
    margin: 0 auto;
  }
  
  /* Flex direction for filters on smaller widths */
  .upcoming-events-container {
    flex-direction: column;
  }
  
  .events-filters {
    gap: 12px;
    margin-top: 20px;
  }
  
  .filter-card {
    width: 100%; /* full width filters on tablet */
  }
}




{/* Features Section */}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.feature-card {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a, #60a5fa); /* blue gradient */
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
  color: white;
  cursor: default;
  transition: transform 0.3s ease;
  border: 4px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.feature-card:nth-child(1) {
  border-radius: 20px 60px 20px 60px;
  background: 
    linear-gradient(135deg, #111, #111) padding-box, 
    linear-gradient(135deg, #3b82f6, #0c4a6e) border-box;
}

.feature-card:nth-child(2) {
  border-radius: 60px 20px 60px 20px;
  background: 
    linear-gradient(135deg, #000, #000) padding-box, 
    linear-gradient(135deg, #2563eb, #1e40af) border-box;
}

.feature-card:nth-child(3) {
  border-radius: 30px 30px 60px 60px;
  background: 
    linear-gradient(135deg, #111, #111) padding-box, 
    linear-gradient(135deg, #60a5fa, #0284c7) border-box;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(30, 58, 138, 0.5);
}

/* Icon style */
.feature-icon {
  width: 80px;
  height: 80px;
  background: rgba(255 255 255 / 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2.4rem;
  color: white;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

/* Headings & paragraphs */
.feature-card h3 {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.feature-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  user-select: none;
}
  .features-section {
  position: relative;
  overflow: hidden; /* Important so bubbles don’t overflow */
  padding-bottom: 50px; /* Keep your existing padding */
  background: var(--card-bg);
}

.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So bubbles don’t block clicks */
  overflow: hidden;
  z-index: 0; /* Behind content */
}

.bubble {
  position: absolute;
  bottom: -100px;
  background-color: rgba(34, 77, 183, 0.15); /* Soft blue bubble */
  border-radius: 50%;
  opacity: 0.7;
  animation-name: bubbleRise;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.bubble:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.08); /* subtle white bubbles */
}

/* Different bubble sizes and horizontal positions for randomness */
.bubble:nth-child(n) {
  width: 30px;
  height: 30px;
  left: 10%;
  animation-duration: 10s;
  animation-delay: 0s;
}
.bubble:nth-child(2n) {
  width: 45px;
  height: 45px;
  left: 30%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}
.bubble:nth-child(3n) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 8s;
  animation-delay: 3s;
}
.bubble:nth-child(4n) {
  width: 35px;
  height: 35px;
  left: 65%;
  animation-duration: 11s;
  animation-delay: 2.5s;
}
.bubble:nth-child(5n) {
  width: 40px;
  height: 40px;
  left: 80%;
  animation-duration: 9s;
  animation-delay: 1s;
}

/* Animate bubbles rising */
@keyframes bubbleRise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-120vh) scale(1.2);
    opacity: 0;
  }
}


        

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
  .btn-primary, .btn-outline, .btn-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary svg {
  font-size: 1.3rem;
  vertical-align: middle;
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

export default Home2;
