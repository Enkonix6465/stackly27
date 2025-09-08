import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaShieldAlt,
  FaServer,
  FaCloud,
  FaLock,
  FaTools,
  FaQuoteLeft,
  FaArrowRight,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { useLanguage } from "../context.jsx/LanguageContext";

const translations = {
  en: {
    pageTitle: "ForStackly - Professional Business Solutions",
    hero: {
      title: "Creating Unforgettable Experiences",
      paragraph:
        "From weddings and corporate gatherings to private celebrations, we design and manage events that leave lasting impressions. Your vision, our expertise — together we make moments memorable.",
      button: "Reach Out Today",
      videoSrc: "images/home1.mp4",
    },
    servicesPreview: {
      heading: "Our IT & Cloud Solutions",
      paragraph:
        "ForStackly is a leading provider of comprehensive IT and cloud solutions, dedicated to empowering businesses with cutting-edge technology and unparalleled support. With over 15 years of industry experience, we help organizations navigate digital transformation, enhance security, and optimize operations.",
      benefits: [
        "Mission-Driven: Committed to client success and innovation.",
        "Expert Team: Certified professionals with diverse specializations.",
        "Client-Centric Approach: Tailored solutions for unique business needs.",
        "Proven Track Record: Delivering reliable and impactful results.",
        "Future-Focused: Embracing new technologies for sustainable growth.",
        "24/7 Support: Always available to ensure seamless operations.",
      ],
      learnMore: "Learn More About Us",
      imageSrc: "images/home-1.jpg",
      imageAlt: "Our Expert IT Team",
    },
    management: {
      heading: "Management Solutions",
      paragraph:
        "From corporate conferences to grand celebrations, we deliver end-to-end event planning that ensures unforgettable experiences and keeps your guests delighted.",
      list: [
        "Corporate Events & Conferences",
        "Weddings & Social Celebrations",
        "Product Launches & Brand Activations",
        "Exhibitions & Trade Shows",
        "Concerts & Cultural Festivals",
        "Virtual & Hybrid Events",
      ],
      viewAll: "View All Services",
      imageSrc: "images/home-11.jpg",
      imageAlt: "Team collaboration",
    },
    features: {
      heading: "Delivering Exceptional IT Solutions",
      subtitle:
        "We deliver comprehensive business solutions tailored to your unique IT needs",
      items: [
        {
          icon: "FaCloudUploadAlt",
          title: "Cloud Infrastructure Management",
          description:
            "Optimize and securely manage your cloud resources to ensure scalability, availability, and performance across your business.",
          color: "var(--primary-color)",
        },
        {
          icon: "FaLock",
          title: "Cybersecurity Solutions",
          description:
            "Protect your digital assets with next-gen security protocols, real-time threat detection, and compliance management.",
          color: "var(--accent-color)",
        },
        {
          icon: "FaTools",
          title: "IT Automation & DevOps",
          description:
            "Streamline your IT operations using automation, continuous integration, and delivery pipelines to accelerate innovation.",
          color: "var(--secondary-color)",
        },
      ],
    },
    stats: [
      { number: 1200, suffix: "+", label: "Active Servers", icon: "FaServer" },
      { number: 300, suffix: "+", label: "Cloud Deployment", icon: "FaCloud" },
      { number: 1500, suffix: "+", label: "Security Audits", icon: "FaShieldAlt" },
      { number: 500, suffix: "+", label: "Satisfied Clients", icon: "FaUsers" },
    ],
    testimonials: {
      heading: "What Our Clients Say",
      subheading: "Trusted feedback from industry leaders worldwide",
      items: [
        {
          name: "Alex Morgan",
          company: "Tech Innovations Ltd.",
          role: "CTO",
          content:
            "ForStackly’s cloud migration expertise seamlessly transitioned our systems with zero downtime and improved performance significantly.",
          rating: 5,
          image: "images/home-12.jpg",
        },
        {
          name: "Priya Sharma",
          company: "SecureNet Solutions",
          role: "Head of Security",
          content:
            "Their cybersecurity strategies fortified our network against emerging threats; proactive monitoring saved us from potential breaches.",
          rating: 5,
          image: "images/home-13.jpg",
        },
        {
          name: "Jorge Ramirez",
          company: "NextGen Automations",
          role: "DevOps Manager",
          content:
            "Automation workflows and continuous integration setups proposed by ForStackly accelerated our deployment cycles by 40%.",
          rating: 5,
          image: "images/home-14.jpg",
        },
      ],
    },
    cta: {
      heading: "Ready to Transform Your Business?",
      paragraph:
        "Get started today with a free consultation and discover how we can help you achieve your goals.",
      btnStart: "Start Your Journey",
      btnLearnMore: "Learn More About Us",
    },
  },

  ar: {
    pageTitle: "ForStackly - حلول الأعمال المهنية",
    hero: {
      title: "صنع تجارب لا تُنسى",
      paragraph:
        "من حفلات الزفاف والتجمعات الشركاتية إلى الاحتفالات الخاصة، نصمم وندير فعاليات تترك انطباعات دائمة. رؤيتك، خبرتنا - معاً نصنع لحظات لا تُنسى.",
      button: "تواصل معنا اليوم",
      videoSrc: "images/home1.mp4",
    },
    servicesPreview: {
      heading: "حلول تكنولوجيا المعلومات والسحابة لدينا",
      paragraph:
        "ForStackly هي مزود رائد لحلول تكنولوجيا المعلومات والسحابة الشاملة، مكرسة لتمكين الشركات من خلال التكنولوجيا المتقدمة والدعم غير المسبوق. مع أكثر من 15 عامًا من الخبرة في الصناعة، نساعد المؤسسات على التنقل في التحول الرقمي، وتعزيز الأمان، وتحسين العمليات.",
      benefits: [
        "مهمة واضحة: ملتزمون بنجاح العملاء والابتكار.",
        "فريق خبير: محترفون معتمدون بتخصصات متنوعة.",
        "نهج يركز على العميل: حلول مصممة لاحتياجات العمل الفريدة.",
        "سجل حافل: تقديم نتائج موثوقة وفعالة.",
        "مستقبلية: تبني التكنولوجيا الجديدة للنمو المستدام.",
        "دعم على مدار الساعة: دائمًا متاح لضمان العمليات السلسة.",
      ],
      learnMore: "تعرف علينا أكثر",
      imageSrc: "images/home-1.jpg",
      imageAlt: "فريق تكنولوجيا المعلومات الخبير لدينا",
    },
    management: {
      heading: "حلول الإدارة",
      paragraph:
        "من المؤتمرات الشركاتية إلى الاحتفالات الكبرى، نقدم تخطيطًا شاملاً للفعاليات يضمن تجارب لا تنسى ويبقي ضيوفك مبتهجين.",
      list: [
        "فعاليات ومؤتمرات شركاتية",
        "حفلات زفاف واحتفالات اجتماعية",
        "إطلاق منتجات وتنشيط علامات تجارية",
        "معارض وعروض تجارية",
        "حفلات موسيقية ومهرجانات ثقافية",
        "فعاليات افتراضية ومختلطة",
      ],
      viewAll: "شاهد جميع الخدمات",
      imageSrc: "images/home-11.jpg",
      imageAlt: "التعاون الجماعي للفريق",
    },
    features: {
      heading: "تقديم حلول تكنولوجيا معلومات استثنائية",
      subtitle:
        "نقدم حلول أعمال شاملة مُصممة لتلبية احتياجات تكنولوجيا المعلومات الفريدة الخاصة بك",
      items: [
        {
          icon: "FaCloudUploadAlt",
          title: "إدارة البنية التحتية السحابية",
          description:
            "تحسين وإدارة موارد السحابة الخاصة بك بأمان لضمان القابلية للتوسع والتوفر والأداء عبر عملك.",
          color: "var(--primary-color)",
        },
        {
          icon: "FaLock",
          title: "حلول الأمن السيبراني",
          description:
            "حماية أصولك الرقمية من خلال بروتوكولات أمان الجيل التالي والكشف عن التهديدات في الوقت الحقيقي وإدارة الامتثال.",
          color: "var(--accent-color)",
        },
        {
          icon: "FaTools",
          title: "أتمتة تكنولوجيا المعلومات و DevOps",
          description:
            "تبسيط عمليات تكنولوجيا المعلومات الخاصة بك باستخدام الأتمتة والتكامل والتسليم المستمر لتسريع الابتكار.",
          color: "var(--secondary-color)",
        },
      ],
    },
    stats: [
      { number: 1200, suffix: "+", label: "الخوادم النشطة", icon: "FaServer" },
      { number: 300, suffix: "+", label: "نشر السحابة", icon: "FaCloud" },
      { number: 1500, suffix: "+", label: "تدقيقات الأمان", icon: "FaShieldAlt" },
      { number: 500, suffix: "+", label: "عملاء سعداء", icon: "FaUsers" },
    ],
    testimonials: {
      heading: "ماذا يقول عملاؤنا",
      subheading: "تعليقات موثوقة من قادة الصناعة في جميع أنحاء العالم",
      items: [
        {
          name: "أليكس مورغان",
          company: "تكنولوجيات الابتكار",
          role: "كبير موظفي التكنولوجيا",
          content:
            "لقد نقل خبراء ForStackly أنظمتنا إلى السحابة بسلاسة دون توقف وحققوا أداءً محسنًا بشكل كبير.",
          rating: 5,
          image: "images/home-12.jpg",
        },
        {
          name: "بريا شارما",
          company: "حلول الشبكة الآمنة",
          role: "رئيس الأمن",
          content:
            "عززت استراتيجيات الأمن السيبراني لدينا الشبكة ضد التهديدات الناشئة؛ مراقبة استباقية أنقذتنا من الاختراقات المحتملة.",
          rating: 5,
          image: "images/home-13.jpg",
        },
        {
          name: "خورخي راميريز",
          company: "الأتمتة الحديثة",
          role: "مدير DevOps",
          content:
            "سرّعت سير عمل الأتمتة وإعدادات التكامل المستمر التي اقترحتها ForStackly دورات النشر بنسبة 40٪.",
          rating: 5,
          image: "images/home-14.jpg",
        },
      ],
    },
    cta: {
      heading: "هل أنت مستعد لتحويل عملك؟",
      paragraph:
        "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
      btnStart: "ابدأ رحلتك",
      btnLearnMore: "تعرف علينا أكثر",
    },
  },
};

const iconMap = {
  FaCloudUploadAlt,
  FaLock,
  FaTools,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaUsers,
};

const Home1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language, t.pageTitle]);

  const FaCheckIcon = () => <span className="mock-icon-check">✔️</span>;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src={t.hero.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.hero.title}</h1>
            <p className="hero-paragraph animate-fade-up">{t.hero.paragraph}</p>

            <Link to="/contact" className="hero-button animate-fade-up-delayed">
              {t.hero.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="grid-2">
            <div className="services-visual">
              <div className="services-image">
                <img src={t.servicesPreview.imageSrc} alt={t.servicesPreview.imageAlt} />
              </div>
            </div>

            <div className="services-content">
              <h2>{t.servicesPreview.heading}</h2>
              <p>{t.servicesPreview.paragraph}</p>
              <ul className="benefits-list">
                {t.servicesPreview.benefits.map((item, i) => (
                  <li key={i}>
                    <FaCheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="services-btn-container">
                <Link to="/about" className="btn view-all-btn">
                  {t.servicesPreview.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Preview */}
      <section className="section-preview">
        <div className="container">
          <div className="grid-2">
            <motion.div
              className="services"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>{t.management.heading}</h2>
              <p>{t.management.paragraph}</p>
              <ul className="section-list">
                {t.management.list.map((item, i) => (
                  <li key={i}>
                    <FaCheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="section-btn-container">
                <Link to="/services" className="btn view-all-btn">
                  {t.servicesPreview.learnMore}
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="services-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-image">
                <img src={t.management.imageSrc} alt={t.management.imageAlt} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t.features.heading}</h2>
            <p>{t.features.subtitle}</p>
          </motion.div>

          <div className="features-grid">
            {t.features.items.map((feat, idx) => {
              const Icon = iconMap[feat.icon];
              return (
                <motion.div
                  className="feature-card"
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 12px 40px rgba(0, 123, 255, 0.5)" }}
                >
                  <div className="feature-icon" style={{ backgroundColor: feat.color }}>
                    <Icon />
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                  <Link to="/services" className="feature-link">
                    Learn More <FaArrowRight />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/*
<section className="stats" ref={ref}>
  <div className="container">
    <div className="stats-grid">
      {t.stats.map(({ number, suffix, label, icon }, idx) => {
        const Icon = iconMap[icon];
        return (
          <motion.div
            className="stat-item"
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Icon className="stat-icon" />
            <h3>
              {inView ? (
                <CountUp start={0} end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              {suffix}
            </h3>
            <p>{label}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
*/}


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t.testimonials.heading}</h2>
            <p>{t.testimonials.subheading}</p>
          </motion.div>

          <div className="testimonials-grid">
            {t.testimonials.items.map((item, idx) => (
              <motion.div
                className="testimonial-card-unique"
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="quote-icon-wrap">
                  <FaQuoteLeft className="quote-icon" />
                </div>
                <p className="testimonial-text">"{item.content}"</p>
                <div className="testimonial-author">
                  <img src={item.image} alt={item.name} />
                  <div className="author-info">
                    <h4>{item.name}</h4>
                    <p>
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
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
              <h2>{t.cta.heading}</h2>
              <p>{t.cta.paragraph}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t.cta.btnStart} <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  {t.cta.btnLearnMore}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
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

.features-section {
          background: var(--sidebar-bg);
          padding: 60px 20px;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          margin-bottom: 15px;
          color: var(--heading-color);
        }

        .section-header p {
          font-size: 1.3rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: var(--card-bg);
          color: var(--text-color);
          padding: 40px 30px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          border: 3px solid #000000ff; /* strong black border for visibility */
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
          min-height: 360px;
        }

        .feature-card:hover {
          box-shadow: 0 12px 40px rgba(0, 123, 255, 0.5);
          transform: translateY(-10px);
        }

        .feature-icon {
          font-size: 4rem;
          margin-bottom: 25px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-color);
          filter: drop-shadow(0 0 8px currentColor);
          transition: background-color 0.3s ease, filter 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          filter: drop-shadow(0 0 14px currentColor);
        }

        .feature-card h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: var(--heading-color);
          font-weight: 700;
        }

        .feature-card p {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }

        .feature-link {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease;
        }

        .feature-link:hover {
          transform: translateX(6px);
        }

        /* Dark mode */
        @media (prefers-color-scheme: dark) {
          .feature-card {
            background: var(--card-bg);
            color: var(--text-color);
            border-color: var(--border-color);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          }

          .feature-icon {
            color: var(--bg-color);
          }
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
       .stats {
  background: var(--primary-color);
  color: #fff;
  padding: 40px 0;
  min-height: 320px;         /* Adjust as needed for your design */
  display: flex;
  align-items: center;
}

{/*stats section*/}
.stats {
  background: linear-gradient(135deg, #5058c9ff, #3b77eeff, #2f83e3ff);
  color: #eef2f3;
  padding: 60px 0;
  min-height: 350px;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.1);
  border-radius: 200px;
  padding: 30px 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 36px rgba(255, 255, 255, 0.6);
}

.stat-icon {
  font-size: 4rem;
  color: #000000ff; /* accent green */
  margin-bottom: 20px;
  filter: drop-shadow(0 0 6px #c2c0c0ff);
}

.stat-item h3 {
  font-size: 3.5rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
}

.stat-item p {
  font-size: 1.25rem;
  font-weight: 600;
  color: #d1d9db;
  margin: 0;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 25px;
  }
  .stat-item h3 {
    font-size: 2.5rem;
  }
  .stat-icon {
    font-size: 3rem;
  }
}


{/* Services Section */}

.section.services-preview {
  padding: 40px 0;
  background-color: var(--bg-color); /* Light/Dark adaptive */
  transition: background-color 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Content (right side) */
.services-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--heading-color);
}

.services-content p {
  font-size: 1.1rem;
  line-height: 1.65;
  text-align: justify; /* ✅ better than justify for dark mode readability */
  margin-bottom: 30px;
  color: var(--text-color);
  max-width: 600px; /* ✅ keeps paragraphs readable */
}

/* Benefits List */
.benefits-list {
  list-style: none;
  margin: 0 0 30px 0;
  padding: 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  color: var(--text-color);
  font-size: 1rem;
  transition: color 0.3s ease;
}

.benefits-list li:hover {
  color: var(--accent-color); /* ✅ adds interactive feedback */
}

.benefits-list li .mock-icon-check {
  color: var(--accent-color);
  font-size: 1.2rem;
}

/* Visual (left side) */
.services-visual {
  display: flex;
  justify-content: center;
}

.services-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: box-shadow 0.3s ease;
  height: 600px;
  max-height: 700px;
}

.services-image img {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 20px;
}


/* Button */
.services-btn-container {
  text-align: left;
  margin-top: 24px;
}

.btn {
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.view-all-btn {
  background: var(--primary-color);
  color: var(--bg-color); /* ✅ adaptive instead of #fff */
  border: none;
  box-shadow: var(--shadow-light);
}

.view-all-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

/* ======================
   RESPONSIVE STYLES
   ====================== */

/* Tablet (≤ 992px) */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .services-image img {
    height: 380px; /* slightly smaller for tablets */
  }

  .services-content h2 {
    font-size: 2rem;
    text-align: center;
  }

  .services-content p {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .services-btn-container {
    text-align: center; /* center buttons on tablet */
  }
}

/* Mobile (≤ 600px) */
/* Mobile */
@media (max-width: 600px) {
  .services-content h2 {
    font-size: 1.6rem;
  }

  .services-content p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left; /* ✅ Align left */
  }

  .benefits-list li {
    font-size: 0.95rem;
    text-align: left; /* ✅ Align left */
  }

  .services-image img {
    width: 100%;
    height: 600px; /* ✅ Changed to 600px for proper scaling */
    border-radius: 12px;
  }

  .services-btn-container {
    text-align: left; /* ✅ Align button container left */
  }

  .btn {
    width: 100%;
  }
}

}

@media (min-width: 768px) {
  .section-preview .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
}

/* Container for text content */
.section-preview .services {
  max-width: 600px;
}



/* Section heading */
.section-preview .services h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-heading-color);
  text-align: left; /* Keep heading left-aligned */
}

/* Paragraph text */
.section-preview .services p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--secondary-text-color);
  text-align: justify; /* ✅ Text justified */
}

/* List container */
.section-preview .section-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
}

/* List items */
.section-preview .section-list li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--primary-text-color);
  width: calc(50% - 1rem);
  text-align: left; /* Keep list items aligned left */
}

/* Icon inside list item */
.section-preview .section-list li svg {
  color: var(--accent-color);
  margin-right: 0.5rem;
  flex-shrink: 0;
}

/* Responsive full width list items on small screens */
@media (max-width: 576px) {
  .section-preview .section-list li {
    width: 100%;
    text-align: left;
  }
}

/* Button container */
.section-preview .section-btn-container {
  margin-top: 2rem;
  text-align: left;
}

/* Button style */
.section-preview .btn,
.section-preview .view-all-btn,
.section-preview .view-btn {
  background-color: var(--primary-color);
  color: var(--bg-color); /* adaptive text color */
  padding: 0.8rem 2rem;
  border-radius: 0px;
  text-decoration: none;
  font-weight: 600;
  border: none;
  transition:
    background-color 0.2s ease,
    transform 0.16s cubic-bezier(.19,1,.22,1),
    box-shadow 0.18s;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.10);
  cursor: pointer;
}

/* Button hover and focus */
.section-preview .btn:hover,
.section-preview .view-all-btn:hover,
.section-preview .view-btn:hover,
.section-preview .btn:focus,
.section-preview .view-all-btn:focus,
.section-preview .view-btn:focus {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  color: var(--bg-color);
  outline: none;
}

/* Visual container for image */
.section-preview .services-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image wrapper */
.section-preview .section-image {
  width: 100%;
  max-width: 550px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

/* Image hover effect */
.section-preview .section-image:hover {
  transform: scale(1.02);
}

/* Image itself */
.section-preview .section-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* ============= RESPONSIVE ============= */

/* Tablet (≤ 992px) */
@media (max-width: 992px) {
  .section-preview .services h2 {
    text-align: left; /* Keep heading left-aligned */
  }

  .section-preview .services p {
    text-align: justify; /* Maintain justified text */
    margin-left: auto;
    margin-right: auto;
  }

  .section-preview .section-btn-container {
    text-align: left;
  }
}

/* Mobile (≤ 576px) */
@media (max-width: 576px) {
  .section-preview .services h2 {
    font-size: 1.6rem;
    text-align: left; /* Heading left-aligned */
  }

  .section-preview .services p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify; /* Maintain justified text */
  }

  .section-preview .section-btn-container {
    text-align: left;
  }

  .section-preview .section-list li {
    width: 100%;
    text-align: left;
  }
}


{/* Testimonials Section */}

        .testimonials-section {
        background: var(--bg-color);
        padding: 60px 20px;
        color: var(--text-color);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .section-header {
        margin-bottom: 50px;
      }

      .section-header h2 {
        font-size: 2.8rem;
        color: var(--heading-color);
        margin-bottom: 12px;
      }

      .section-header p {
        font-size: 1.2rem;
        color: var(--text-muted);
        max-width: 600px;
        margin: 0 auto;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 28px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .testimonial-card-unique {
        background: var(--card-bg);
        border: 1.5px solid var(--border-color);
        box-shadow:
          inset 0 2px 5px rgba(255, 255, 255, 0.25),
          0 8px 20px rgba(0, 0, 0, 0.12);
        padding: 30px 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: box-shadow 0.4s ease, transform 0.3s ease;
        cursor: default;
        border-radius: 12px;
      }

      .testimonial-card-unique:hover {
        box-shadow:
          inset 0 3px 8px rgba(255, 255, 255, 0.4),
          0 12px 30px rgba(0, 123, 255, 0.4);
        transform: translateY(-6px);
        border-color: var(--primary-color);
      }

      .quote-icon-wrap {
        background: var(--primary-color);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 15px var(--primary-color);
        margin-bottom: 20px;
      }

      .quote-icon {
        color: var(--bg-color);
        font-size: 28px;
      }

      .testimonial-text {
        font-size: 1.1rem;
        line-height: 1.7;
        font-style: italic;
        color: var(  --text-color);
        flex-grow: 1;
      }

      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .testimonial-author img {
        width: 56px;
        height: 56px;
        border-radius: 8px;
        object-fit: cover;
        flex-shrink: 0;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
      }

      .author-info h4 {
        margin: 0;
        font-weight: 700;
        color: var(--heading-color);
        font-size: 1.05rem;
      }

      .author-info p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-muted);
      }

      @media (max-width: 600px) {
        .testimonial-author {
          gap: 12px;
        }
        .testimonial-author img {
          width: 48px;
          height: 48px;
        }
        .testimonial-text {
          font-size: 1rem;
        }
      }


{/* cta section */}

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

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .hero-buttons,
          .cta-buttons {
            justify-content: center;
          }

          .services-content {
            text-align: center;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home1;
