import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    heroTitle: "Our Services",
    heroText:
      "From intimate gatherings to grand celebrations, we provide end-to-end event planning, design, and execution to make every occasion unforgettable.",
    heroVideo: "images/services.mp4",
    servicesHeading: "Our IT Services",
    servicesText:
      "We deliver cutting-edge IT services tailored to your business needs—seamlessly merging innovation, security, and scalability. Partner with us to transform your digital infrastructure with confidence and expertise.",
    servicesList: [
      "Cloud Migration & Management",
      "Cybersecurity & Risk Assessment",
      "Custom Software Development",
      "Data Analytics & AI Solutions",
      "24/7 IT Support & Monitoring",
      "DevOps Automation & Consulting",
      "Enterprise Network Architecture",
    ],

    itGridTitle: "What We Offer",
    itGridSubtitle: "Modern IT services designed for transformation and security.",
    itServices: [
      {
        id: 1,
        title: "Cloud Infrastructure",
        color: "#2684ff",
        image: "images/services4.jpg",
        description:
          "Enterprise-grade public, private, and hybrid cloud environments for resilient, scalable business operations.",
        features: ["AWS & Azure Integration", "Cloud Cost Optimization", "Automated Backups"],
        isNew: true,
      },
      {
        id: 2,
        title: "Cybersecurity Solutions",
        color: "#27b47a",
        image: "images/services5.jpg",
        description:
          "Proactive multi-layered protection from threats, covering assessment, prevention, monitoring.",
        features: ["24/7 Threat Detection", "Penetration Testing", "Data Loss Prevention"],
        isNew: true,
      },
      {
        id: 3,
        title: "AI & Automation",
        color: "#815cd3",
        image: "images/services6.jpg",
        description:
          "Streamline processes with cutting-edge AI, intelligent data analysis, and business process automation.",
        features: ["Custom AI Models", "RPA Development", "Predictive Analytics"],
        isNew: true,
      },
      {
        id: 4,
        title: "Business Intelligence",
        color: "#fd7e14",
        image: "images/services7.jpg",
        description:
          "Uncover insights with advanced dashboards, reporting, and actionable analytics for growing enterprises.",
        features: ["Real-Time Dashboards", "ETL/Data Pipelines", "AI-Powered Insights"],
        isNew: true,
      },
      {
        id: 5,
        title: "DevOps & CI/CD Services",
        color: "#39bda7",
        image: "images/services8.jpg",
        description:
          "Accelerate your deployment process with automated pipelines, version control, and best-in-class DevOps.",
        features: ["CI/CD Pipeline Automation", "Infrastructure as Code", "Environment Provisioning"],
        isNew: true,
      },
      {
        id: 6,
        title: "IT Consulting & Support",
        color: "#ff914d",
        image: "images/services9.jpg",
        description:
          "Expert guidance for digital transformation, plus 24/7 support to keep your technology running smoothly.",
        features: ["Digital Transformation Roadmaps", "24x7 Issue Resolution", "IT Infrastructure Audit"],
        isNew: true,
      },
    ],
    portfolioTitle: "Our Portfolio",
    portfolioDesc: "A glimpse of our premium event experiences",
    portfolioFilters: [
      "All",
      "Cloud",
      "Security",
      "Automation",
      "Analytics",
      "DevOps",
      "Infrastructure",
    ],
    portfolioItems: [
      { id: 1, title: "Cloud Migration Project", category: "Cloud", image: "images/services10.jpg" },
      { id: 2, title: "Enterprise Security Audit", category: "Security", image: "images/services11.jpg" },
      { id: 3, title: "AI Automation Deployment", category: "Automation", image: "images/services12.jpg" },
      { id: 4, title: "Business Analytics Platform", category: "Analytics", image: "images/services13.jpg" },
      { id: 5, title: "DevOps Transformation", category: "DevOps", image: "images/services14.jpg" },
      { id: 6, title: "IT Infrastructure Upgrade", category: "Infrastructure", image: "images/services15.jpg" },
    ],
    processTitle: "Our Proven IT Project Methodology",
    processDesc:
      "From vision to optimization, our stepwise approach delivers secure, scalable, and future-ready technology for your enterprise.",
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Assessment',
        description:
          'We thoroughly audit your IT environment and business needs, defining a tailored path forward for innovation and security.',
      },
      {
        step: '02',
        title: 'Solution Design',
        description:
          'Our architects craft robust, scalable solutions—cloud, automation, or cyber—precisely mapped to your requirements.',
      },
      {
        step: '03',
        title: 'Agile Implementation',
        description:
          'Seasoned engineers deploy and integrate next-gen technologies with professional project management and minimal disruption.',
      },
      {
        step: '04',
        title: 'Quality & Security Validation',
        description:
          'Deep-dive testing and compliance checks ensure everything is reliable, secure, and future-proof before launch.',
      },
      {
        step: '05',
        title: 'User Enablement',
        description:
          'We support your teams with clear documentation, hands-on training, and collaborative go-lives for fast adoption.',
      },
      {
        step: '06',
        title: 'Optimization & Support',
        description:
          'Our experts monitor performance, troubleshoot in real time, and refine your IT landscape to unlock sustained value.',
      },
    ],
    ctaTitle: "Ready to Transform Your Business?",
    ctaText:
      "Get started today with a free consultation and discover how we can help you achieve your goals.",
    ctaStartBtn: "Start Your Journey",
    ctaLearnBtn: "Learn More About Us",
  },

  ar: {
    heroTitle: "خدماتنا",
    heroText:
      "من التجمعات الحميمة إلى الاحتفالات الكبرى، نوفر تخطيط وتنفيذ فعاليات متميزة.",
    heroVideo: "images/services.mp4",
    servicesHeading: "خدمات تكنولوجيا المعلومات",
    servicesText:
      "نقدم خدمات تقنية متقدمة مصممة لتلبية احتياجات عملك—نمزج بين الابتكار والأمان والقابلية للتوسعة بسلاسة. شاركنا لتحويل بنيتك الرقمية بثقة وخبرة.",
    servicesList: [
      "الهجرة والإدارة السحابية",
      "تقييم الأمن السيبراني والمخاطر",
      "تطوير البرمجيات حسب الطلب",
      "تحليلات البيانات والذكاء الاصطناعي",
      "الدعم الفني على مدار الساعة",
      "أتمتة واستشارات DevOps",
      "هيكلية الشبكات المؤسسية",
    ],

    itGridTitle: "ما نقدمه",
    itGridSubtitle: "خدمات تكنولوجيا معلومات حديثة للتحول والأمان.",
    itServices: [
      {
        id: 1,
        title: "البنية التحتية السحابية",
        color: "#2684ff",
        image: "images/services4.jpg",
        description:
          "بيئات سحابية عامة وخاصة وهجينة بجودة المؤسسة لعمليات تجارية مرنة وقابلة للتوسع.",
        features: ["تكامل AWS و Azure", "تحسين تكلفة السحابة", "نسخ احتياطية آلية"],
        isNew: true,
      },
      {
        id: 2,
        title: "حلول الأمن السيبراني",
        color: "#27b47a",
        image: "images/services5.jpg",
        description:
          "حماية متعددة الطبقات من التهديدات، تشمل التقييم والوقاية والرصد.",
        features: ["كشف التهديدات على مدار الساعة", "اختبارات الاختراق", "منع فقدان البيانات"],
        isNew: true,
      },
      {
        id: 3,
        title: "الذكاء الاصطناعي والأتمتة",
        color: "#815cd3",
        image: "images/services6.jpg",
        description:
          "تبسيط العمليات باستخدام الذكاء الاصطناعي، وتحليل بيانات ذكي، وأتمتة عمليات الأعمال.",
        features: ["نماذج ذكاء اصطناعي مخصصة", "تطوير RPA", "تحليلات تنبؤية"],
        isNew: true,
      },
      {
        id: 4,
        title: "ذكاء الأعمال",
        color: "#fd7e14",
        image: "images/services7.jpg",
        description:
          "اكتشاف الرؤى من خلال لوحات تحكم وتقارير متقدمة وتحليلات قابلة للتنفيذ للمؤسسات النامية.",
        features: ["لوحات تحكم في الوقت الفعلي", "أنابيب ETL/البيانات", "رؤى مدعومة بالذكاء الاصطناعي"],
        isNew: true,
      },
      {
        id: 5,
        title: "خدمات DevOps و CI/CD",
        color: "#39bda7",
        image: "images/services8.jpg",
        description:
          "تسريع عملية النشر بأتمتة خطوط الأنابيب، وإدارة النسخ، وأفضل ممارسات DevOps.",
        features: ["أتمتة خطوط CI/CD", "البنية التحتية ككود", "تهيئة البيئات"],
        isNew: true,
      },
      {
        id: 6,
        title: "الاستشارات والدعم الفني",
        color: "#ff914d",
        image: "images/services9.jpg",
        description:
          "توجيه خبير للتحول الرقمي ودعم 24/7 للحفاظ على تشغيل تقنيتك بسلاسة.",
        features: [
          "خطط التحول الرقمي",
          "حل المشكلات على مدار الساعة",
          "تدقيق البنية التحتية التقنية",
        ],
        isNew: true,
      },
    ],
    portfolioTitle: "معرض أعمالنا",
    portfolioDesc: "لمحة عن تجاربنا المتميزة",
    portfolioFilters: [
      "الكل",
      "السحابة",
      "الأمن",
      "الأتمتة",
      "التحليلات",
      "ديف أوبس",
      "البنية التحتية",
    ],
    portfolioItems: [
      { id: 1, title: "مشروع هجرة السحابة", category: "السحابة", image: "images/services10.jpg" },
      { id: 2, title: "تدقيق أمني للمؤسسة", category: "الأمن", image: "images/services11.jpg" },
      { id: 3, title: "نشر أتمتة الذكاء الاصطناعي", category: "الأتمتة", image: "images/services12.jpg" },
      { id: 4, title: "منصة تحليلات الأعمال", category: "التحليلات", image: "images/services13.jpg" },
      { id: 5, title: "تحول ديف أوبس", category: "ديف أوبس", image: "images/services14.jpg" },
      { id: 6, title: "ترقية البنية التحتية لتكنولوجيا المعلومات", category: "البنية التحتية", image: "images/services15.jpg" },
    ],
    processTitle: "منهجيتنا الموثوقة لمشروع تكنولوجيا المعلومات",
    processDesc:
      "من الرؤية إلى التحسين، نهجنا المرحلي يقدم تكنولوجيا آمنة وقابلة للتوسع ومجهزة للمستقبل لمؤسستك.",
    processSteps: [
      {
        step: '01',
        title: 'الاكتشاف والتقييم',
        description: 'نقوم بتدقيق شامل لبيئة تكنولوجيا المعلومات واحتياجات العمل، مع تحديد مسار مخصص للابتكار والأمان.',
      },
      {
        step: '02',
        title: 'تصميم الحل',
        description: 'يضع مهندسونا حلولًا قوية وقابلة للتوسع—السحابة، الأتمتة، أو الأمن—مطابقة تمامًا لمتطلباتك.',
      },
      {
        step: '03',
        title: 'التنفيذ المرن',
        description: 'يقوم المهندسون المخضرمون بنشر ودمج التقنيات الحديثة مع إدارة مشاريع احترافية وأقل تعطيل ممكن.',
      },
      {
        step: '04',
        title: 'اختبار الجودة والأمان',
        description: 'الاختبارات العميقة وفحوصات الامتثال تضمن الاعتمادية، الأمان، والاستعداد للمستقبل قبل الإطلاق.',
      },
      {
        step: '05',
        title: 'تمكين المستخدم',
        description: 'ندعم فرقك بوثائق واضحة، تدريب عملي، وتشغيل تعاوني لتبني سريع.',
      },
      {
        step: '06',
        title: 'التحسين والدعم',
        description: 'يراقب خبراؤنا الأداء، ويعالجون القضايا في الوقت الحقيقي، ويطورون بيئة تكنولوجيا المعلومات لتحقيق قيمة مستدامة.',
      },
    ],
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaText:
      "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    ctaStartBtn: "ابدأ رحلتك",
    ctaLearnBtn: "تعرف علينا أكثر",
  },
};

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState("All");

  const filteredItems =
    portfolioFilter === "All"
      ? t.portfolioItems
      : t.portfolioItems.filter((item) => item.category === portfolioFilter);

  useEffect(() => {
    document.documentElement.dir = ["ar", "he", "fa", "ur"].includes(language)
      ? "rtl"
      : "ltr";
  }, [language]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % 3),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const images = ["images/service1.jpg", "images/services2.jpg", "images/services3.jpg"];

  return (
    <div className="services-page" dir={document.documentElement.dir}>
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src={t.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.heroTitle}</h1>
            <p className="hero-paragraph animate-fade-up">{t.heroText}</p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">
              {language === "ar" && "تواصل معنا اليوم"}
              {language !== "ar" && "Reach Out Today"}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-grid">
          {/* Left Slideshow */}
          <div className="services-image slideshow-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`IT Service Slide ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="slide-image"
              />
            </AnimatePresence>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="services-content"
          >
            <h2 className="services-heading">{t.servicesHeading}</h2>
            <p className="services-text">{t.servicesText}</p>
            <ul className="services-list">
              {t.servicesList.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="services-item"
                >
                  <span className="bullet"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="section it-grid-section">
        <div className="container">
          <motion.div
            className="it-section-header align-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t.itGridTitle}</h2>
            <p>{t.itGridSubtitle}</p>
          </motion.div>

          <div className="it-services-flex">
            {t.itServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="it-service-tile"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="it-img-box">
                  <img src={service.image} alt={service.title} />
                  {service.isNew && <span className="it-badge-new">New!</span>}
                </div>
                <div className="it-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="it-feature-list">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="it-feature-row">
                        <FaCheck className="it-check" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/service${service.id}`}
                    className="it-link"
                    style={{ color: service.color }}
                  >
                    {language === "ar" ? "تعرف على المزيد" : "Learn More"} <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header text-center">
          <h2>{t.portfolioTitle}</h2>
          <p>{t.portfolioDesc}</p>
        </div>

        <div className="portfolio-filters">
          {t.portfolioFilters.map((cat) => (
            <button
              key={cat}
              className={portfolioFilter === cat ? "active" : ""}
              onClick={() => setPortfolioFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="vertical-process-section">
        <div className="process-header text-center">
          <h2>{t.processTitle}</h2>
          <p>{t.processDesc}</p>
        </div>
        <div className="vertical-steps-container">
          <div className="vertical-timeline" aria-hidden="true"></div>
          {t.processSteps.map((step) => (
            <div className="vertical-step-card" key={step.step}>
              <div className="vertical-step-number">{step.step}</div>
              <div className="vertical-step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
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
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t.ctaStartBtn} <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  {t.ctaLearnBtn}
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


{/*Our IT services*/}

.services-section {
color: var(--text-color);
  background: var(--bg-color);
  padding: 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.services-heading {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.2rem;
  line-height: 1.1;
  transition: color 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}


.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.services-image img {
  width: 100%;
  height: 450px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  object-fit: cover;
  background: var(--card-bg);
}

.services-content {
  text-align: left;
  justify-content: center;
  color: var(--text-color);
}

.services-text {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.05rem;
  text-align: justify;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-item {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--text-color);
}

.services-item .bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--text-color);
  border-radius: 50%;
  margin-right: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem; /* Reduce gap between cards on mobile */
  }

  .services-section {
    padding: 1rem; /* Reduce section padding for mobile */
  }

  .services-heading {
    font-size: 1.1rem; /* Slightly smaller heading for mobile */
    margin-bottom: 1.5rem; /* Reduce spacing below the heading */
  }

  .services-content {
    text-align: center;
    padding: 0 0.5rem; /* Add horizontal padding for readability */
  }

  .services-text {
    font-size: 0.95rem; /* Decrease paragraph font size */
    margin-bottom: 1rem; /* Decrease space below paragraph */
  }

  .services-item {
    font-size: 0.95rem; /* Decrease feature bullet font size */
    margin-bottom: 0.5rem; /* Reduce margin between items */
  }

  .services-image img {
    height: 240px; /* Reduce image height for mobile */
  }
}




{/* Portfolio Section */}
.portfolio-section {
  position: relative;
  padding: 80px 24px;
  background: var(--bg-color);
  color: var(--text-color);
  overflow: hidden;
  border-radius: 18px;
}

/* Dynamic subtle moving dot background */
.portfolio-section::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(circle at center,
    var(--primary-color) 2px,
    transparent 3px);
  background-size: 40px 40px;
  animation: moveDots 30s linear infinite;
  opacity: 0.15; /* Increased opacity for visibility */
}

@media (prefers-color-scheme: dark) {
  .portfolio-section::before {
    background: radial-gradient(circle at center,
      var(--accent-color) 3px,
      transparent 4px);
    opacity: 0.2; /* Slightly higher in dark mode */
  }
}

@keyframes moveDots {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

/* Header */
.portfolio-header {
  text-align: center;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}
.portfolio-header h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--heading-color);
}
.portfolio-header p {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0;
}

/* Filters */
.portfolio-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}
.portfolio-filters button {
  background: var(--card-bg);
  color: var(--text-color);
  border: 1.8px solid var(--border-color);
  padding: 10px 24px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.portfolio-filters button:hover,
.portfolio-filters button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Portfolio Grid with responsive columns */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  position: relative;
  z-index: 1;
  justify-content: center; /* Center items if fewer than 3 */
}


@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns tablet */
  }
}

@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: 1fr; /* 1 column mobile */
  }
}

/* Portfolio cards */
.portfolio-card {
  background: var(--card-bg);
  border-radius: 22px;
  box-shadow: var(--shadow);
  border: 3px solid transparent;
  background-image: linear-gradient(var(--bg-color), var(--bg-color)),
                    linear-gradient(135deg, var(--primary-color), var(--accent-color));
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-image-source 0.3s ease;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  box-shadow: var(--shadow-hover);
  border-image-slice: 1;
  border-image-source: linear-gradient(315deg, var(--primary-color), var(--accent-color));
  border-radius: 22px;
}

/* Image */
.portfolio-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  transition: transform 0.3s ease;
}

.portfolio-card:hover img {
  transform: scale(1.05);
}

/* Title and Category */
.portfolio-card h3 {
  font-size: 1.28rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 16px 16px 0 16px;
}

.portfolio-card p {
  font-size: 0.95rem;
  font-weight: 500;
  margin: 4px 16px 20px 16px;
  color: var(--text-muted);
}

/* Responsive font size for portfolio header */
@media (max-width: 768px) {
  .portfolio-header h2 {
    font-size: 1.9rem;
  }
  .portfolio-filters {
    gap: 10px;
  }
}



{/* IT services */}

    .it-grid-section {
  background: var(--bg-color);
  padding: 0 0;
}

.it-section-header.align-center {
  text-align: center;
  margin-bottom: 24px;
}
.it-section-header.align-center h2 {
  color: var(--heading-color);
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.it-section-header.align-center p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.it-services-flex {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 10px;
}

.it-service-tile {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(.62,.02,.34,1.03);
  display: flex;
  flex-direction: column;
  position: relative;
}

.it-service-tile:hover {
  box-shadow: var(--shadow-hover);
}

.it-img-box {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}
.it-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(.62,.02,.34,1.03);
}
.it-service-tile:hover .it-img-box img {
  transform: scale(1.08);
}

.it-img-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.36);
  display: flex;
  align-items: center;
  justify-content: center;
}

.it-service-icon {
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.21));
}

.it-badge-new {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255,21,21,0.09);
  color: #e60023;
  border: 1.5px solid #e60023;
  font-weight: 700;
  font-size: 1.07rem;
  padding: 7px 20px 6px 20px;
  border-radius: 1.7em;
  z-index: 2;
  box-shadow: 0 6px 26px 0 rgba(255,0,30,0.07);
  letter-spacing: 1px;
}

.it-card-content {
  padding: 30px 30px 20px 30px;
  background: var(--card-bg);
}
.it-card-content h3 {
  font-size: 1.32rem;
  color: var(--heading-color);
  font-weight: 800;
  margin-bottom: 14px;
}
.it-card-content p {
  color: var(--text-color);
  font-size: 1.07rem;
  line-height: 1.63;
  margin-bottom: 16px;
}
.it-feature-list {
  margin-bottom: 20px;
}
.it-feature-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 7px;
  font-size: 0.97rem;
  color: var(--text-color);
}
.it-check {
  color: var(--accent-color);
  font-size: 0.87rem;
}
.it-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.23s;
}
.it-link:hover {
  transform: translateX(7px);
}

/* Responsive */
@media (max-width: 768px) {
  .it-services-flex {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .it-card-content {
    padding: 20px 16px 18px 16px;
    text-align: left;
  }
  .it-section-header.align-center h2 {
    font-size: 1.6rem;
  }
}


.vertical-process-section {
  padding: 70px 15px 90px 15px;
  background: var(--bg-color);
  border-radius: 20px;
  box-shadow: var(--shadow);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.process-header {
  text-align: center;
  margin-bottom: 57px;
}

.process-header h2 {
  color: var(--heading-color);
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.process-header p {
  color: var(--text-muted);
  font-size: 1.15rem;
}

.vertical-steps-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 700px;
  margin: 0 auto;
}

/* The vertical timeline line */
.vertical-timeline {
  position: absolute;
  left: 46px;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  border-radius: 4px;
  opacity: 0.22;
  z-index: 0;
}

.vertical-step-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 32px 36px 32px 95px;
  background: var(--card-bg);
  border-radius: 15px;
  margin-bottom: 28px;
  box-shadow: var(--shadow);
  border-left: 8px solid transparent;
  transition: box-shadow 0.3s, transform 0.2s, background 0.2s, border-left 0.25s;
  z-index: 1;
}

.vertical-step-card:hover,
.vertical-step-card:focus-within {
  box-shadow: 0 8px 48px 2px var(--primary-color), 0 1px 14px rgba(0,0,0,0.17);
  transform: scale(1.04) translateY(-7px);
  background: rgba(100,150,255,0.05); /* A super subtle blue overlay for both themes */
  border-left: 8px solid var(--primary-color);
}


.vertical-step-number {
  position: absolute;
  left: 18px;
  top: 34px;
  font-size: 2.3rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  z-index: 2;
  line-height: 1;
  letter-spacing: 2px;
}

.vertical-step-content {
  flex: 1;
  z-index: 1;
}

.vertical-step-content h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 6px;
}

.vertical-step-content p {
  color: var(--text-color);
  font-size: 1.07rem;
  line-height: 1.7;
  text-align: justify;
}

/* Responsive */
@media (max-width: 700px) {
  .vertical-step-card {
    flex-direction: column;
    padding: 22px 12px 22px 65px;
  }
  .vertical-step-number {
    font-size: 1.5rem;
    left: 6px;
    top: 25px;
  }
  .vertical-timeline {
    left: 26px;
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

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--heading-color);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .step-number {
            width: auto;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .service-content {
            padding: 20px;
          }

      `}</style>
    </div>
  );
};

export default Services;
