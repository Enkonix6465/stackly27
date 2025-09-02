import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRobot,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'AI & Automation - Stackly Solutions',
    hero: {
      title: 'AI & Automation Solutions',
      paragraph:
        'Harness the power of artificial intelligence to transform your business processes and accelerate growth.',
      button: 'Get Started',
      video: 'images/services3.mp4',
    },
    coreServicesTitle: 'Transformative AI Features',
    coreServicesDesc: 'Innovative technology designed to empower and automate your business.',
    aiFeatures: [
      {
        icon: FaRobot,
        title: 'Intelligent Automation',
        description:
          'Streamline your business processes with cutting-edge AI-driven automation solutions.',
      },
      {
        icon: FaCogs,
        title: 'Machine Learning Models',
        description:
          'Leverage custom-designed ML models to gain actionable insights and improve decision-making.',
      },
      {
        icon: FaUsers,
        title: 'User Behavior Analytics',
        description:
          'Analyze customer behavior patterns to personalize experiences and optimize engagement.',
      },
      {
        icon: FaChartLine,
        title: 'Predictive Analytics',
        description:
          'Forecast trends and outcomes using advanced predictive algorithms.',
      },
      {
        icon: FaLightbulb,
        title: 'Innovation & Optimization',
        description:
          'Innovate continuously by applying AI to optimize operations and resource allocation.',
      },
      {
        icon: FaHandshake,
        title: 'Seamless Integration',
        description:
          'Easily incorporate AI and automation into existing systems with expert guidance.',
      },
    ],
    learnMoreBtn: 'Learn More',
    benefitsTitle: 'Why Choose AI & Automation?',
    benefitsDesc:
      'Unlock growth and efficiency with tailored AI and automation strategies designed to future-proof your business.',
    benefitsList: [
      'Increase efficiency and reduce operational costs',
      'Gain deeper insights through data-driven analytics',
      'Improve customer engagement with personalization',
      'Scale operations smoothly with automated workflows',
      'Drive innovation to stay competitive in your industry',
      'Enhance decision-making with AI-powered predictions',
    ],
    benefitsImageAlt: 'AI & Automation Visual',
    galleryTitle: 'Core Cloud Services Visual Gallery',
    gallerySubtitle:
      'Explore our cloud infrastructure through these visuals showcasing our robust solutions.',
    ctaTitle: 'Ready to Innovate with AI?',
    ctaText:
      'Contact us for a personalized consultation to advance your automation journey.',
    ctaStartBtn: 'Start Your Journey',
    ctaLearnBtn: 'Learn More About Us',
  },

  ar: {
    pageTitle: 'الذكاء الاصطناعي والأتمتة - حلول Stackly',
    hero: {
      title: 'حلول الذكاء الاصطناعي والأتمتة',
      paragraph:
        'استفد من قوة الذكاء الاصطناعي لتحويل عمليات عملك وتسريع النمو.',
      button: 'ابدأ الآن',
      video: 'images/services3.mp4',
    },
    coreServicesTitle: 'ميزات الذكاء الاصطناعي التحولية',
    coreServicesDesc: 'تكنولوجيا مبتكرة تهدف لتمكين أعمالك وأتمتتها.',
    aiFeatures: [
      {
        icon: FaRobot,
        title: 'أتمتة ذكية',
        description:
          'تبسيط عمليات عملك بحلول أتمتة مدفوعة بالذكاء الاصطناعي المتقدمة.',
      },
      {
        icon: FaCogs,
        title: 'نماذج التعلم الآلي',
        description:
          'استخدام نماذج تعلم آلي مخصصة للحصول على رؤى قابلة للتنفيذ وتحسين اتخاذ القرار.',
      },
      {
        icon: FaUsers,
        title: 'تحليل سلوك المستخدم',
        description:
          'تحليل أنماط سلوك العملاء لتخصيص التجارب وتحسين التفاعل.',
      },
      {
        icon: FaChartLine,
        title: 'تحليلات تنبؤية',
        description:
          'التنبؤ بالاتجاهات والنتائج باستخدام خوارزميات تنبؤية متقدمة.',
      },
      {
        icon: FaLightbulb,
        title: 'الابتكار والتحسين',
        description:
          'الابتكار المستمر من خلال تطبيق الذكاء الاصطناعي لتحسين العمليات وتخصيص الموارد.',
      },
      {
        icon: FaHandshake,
        title: 'تكامل سلس',
        description:
          'دمج الذكاء الاصطناعي والأتمتة بسهولة في الأنظمة الحالية مع إرشادات خبراء.',
      },
    ],
    learnMoreBtn: 'تعرف أكثر',
    benefitsTitle: 'لماذا تختار الذكاء الاصطناعي والأتمتة؟',
    benefitsDesc:
      'افتح آفاق النمو والكفاءة مع استراتيجيات الذكاء الاصطناعي والأتمتة المصممة لمستقبل أعمالك.',
    benefitsList: [
      'زيادة الكفاءة وتقليل التكاليف التشغيلية',
      'الحصول على رؤى أعمق من خلال تحليلات البيانات',
      'تحسين التفاعل مع العملاء من خلال التخصيص',
      'توسيع العمليات بسلاسة مع سير العمل المؤتمت',
      'تعزيز الابتكار للحفاظ على تنافسية الصناعة',
      'تحسين اتخاذ القرار بتوقعات مدعومة بالذكاء الاصطناعي',
    ],
    benefitsImageAlt: 'صورة الذكاء الاصطناعي والأتمتة',
    galleryTitle: 'معرض صور الخدمات السحابية الأساسية',
    gallerySubtitle:
      'استكشف بنيتنا التحتية السحابية من خلال هذه الصور التي تعرض حلولنا المتينة.',
    ctaTitle: 'هل أنت مستعد للابتكار مع الذكاء الاصطناعي؟',
    ctaText:
      'اتصل بنا للحصول على استشارة مخصصة لتطوير رحلة الأتمتة الخاصة بك.',
    ctaStartBtn: 'ابدأ رحلتك',
    ctaLearnBtn: 'تعرف علينا أكثر',
  },

  he: {
    pageTitle: 'בינה מלאכותית ואוטומציה - פתרונות Stackly',
    hero: {
      title: 'פתרונות בינה מלאכותית ואוטומציה',
      paragraph:
        'נצל את כוח הבינה המלאכותית לשדרוג תהליכי העסק שלך ולהאצת הצמיחה.',
      button: 'התחל עכשיו',
      video: 'images/services3.mp4',
    },
    coreServicesTitle: 'תכונות בינה מלאכותית מעשיות',
    coreServicesDesc: 'טכנולוגיה חדשנית שמעצימה את העסק שלך ומאוטמת אותו.',
    aiFeatures: [
      {
        icon: FaRobot,
        title: 'אוטומציה אינטליגנטית',
        description:
          'ייעול תהליכי העסק שלך עם פתרונות אוטומציה מתקדמים מבוססי בינה מלאכותית.',
      },
      {
        icon: FaCogs,
        title: 'מודלי למידת מכונה',
        description:
          'ניצול מודלים מותאמים אישית לקבלת תובנות ניתנות ליישום ושיפור קבלת החלטות.',
      },
      {
        icon: FaUsers,
        title: 'ניתוח התנהגות משתמשים',
        description:
          'ניתוח דפוסי התנהגות לקוחות להתאמת חוויות והאופטימיזציה של המעורבות.',
      },
      {
        icon: FaChartLine,
        title: 'אנליטיקה חזויה',
        description:
          'חיזוי מגמות ותוצאות באמצעות אלגוריתמים מתקדמים.',
      },
      {
        icon: FaLightbulb,
        title: 'חדשנות ואופטימיזציה',
        description:
          'חדשנות מתמשכת באמצעות בינה מלאכותית לאופטימיזציה של תפעול והקצאת משאבים.',
      },
      {
        icon: FaHandshake,
        title: 'אינטגרציה חלקה',
        description:
          'שילוב קל של בינה מלאכותית ואוטומציה במערכות הקיימות עם ליווי מומחים.',
      },
    ],
    learnMoreBtn: 'למידע נוסף',
    benefitsTitle: 'למה לבחור בבינה מלאכותית ואוטומציה?',
    benefitsDesc:
      'שחרר צמיחה ויעילות עם אסטרטגיות מותאמות אישית לבינה מלאכותית ואוטומציה לעסק העתידי שלך.',
    benefitsList: [
      'הגדלת יעילות והפחתת עלויות תפעול',
      'קבלת תובנות מעמיקות באמצעות ניתוחי נתונים',
      'שיפור מעורבות לקוחות עם התאמה אישית',
      'הרחבת תפעול חלק עם תהליכים מאוטומטים',
      'קידום חדשנות לשמירה על תחרותיות בענף',
      'שיפור קבלת החלטות עם חיזויים מבוססי בינה מלאכותית',
    ],
    benefitsImageAlt: 'תצוגת בינה מלאכותית ואוטומציה',
    galleryTitle: 'גלריית תמונות שירותי ענן מרכזיים',
    gallerySubtitle:
      'חקור את תשתיות הענן שלנו באמצעות תמונות המדגימות את הפתרונות העמידים שלנו.',
    ctaTitle: 'מוכן לחדש עם בינה מלאכותית?',
    ctaText:
      'צור קשר לקבלת ייעוץ מותאם אישית לקידום מסע האוטומציה שלך.',
    ctaStartBtn: 'התחל את המסע שלך',
    ctaLearnBtn: 'למידע נוסף עלינו',
  },
};

const Service1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.dir = ['ar', 'he'].includes(language) ? 'rtl' : 'ltr';
  }, [language, t.pageTitle]);

  return (
    <div className="service-page" dir={document.documentElement.dir}>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src={t.hero.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-paragraph">{t.hero.paragraph}</p>
              <Link to="/contact" className="hero-button">
                {t.hero.button}
              </Link>
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
              <h2>{t.coreServicesTitle}</h2>
              <p>{t.coreServicesDesc}</p>
            </motion.div>

            <div className="features-grid">
              {t.aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card premium-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="btn-learn-wrapper">
              <Link to="/contact" className="btn-learn">
                {t.learnMoreBtn || 'Learn More'} <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits-section">
          <div className="container">
            <div className="grid-2">
              <motion.div
                className="benefits-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>{t.benefitsTitle}</h2>
                <p>{t.benefitsDesc}</p>

                <div className="benefits-list">
                  {t.benefitsList.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaCheck className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-primary">
                  {language === 'ar'
                    ? 'اتصل بخبرائنا'
                    : language === 'he'
                    ? 'צור קשר עם המומחים שלנו'
                    : 'Contact Our Experts'}{' '}
                  <FaArrowRight />
                </Link>
              </motion.div>

              <motion.div
                className="benefits-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="benefits-image">
                  <img src="images/services29.jpg" alt={t.benefitsImageAlt || 'AI & Automation Visual'} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section gallery-wrapper">
          <div className="container">
            <motion.div
              className="gallery-header"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="gallery-title">{t.galleryTitle || ''}</h2>
              <p className="gallery-subtitle">{t.gallerySubtitle || ''}</p>
            </motion.div>

            <div className="gallery-container">
              {/* First Row */}
              <div className="gallery-row">
                <div className="gallery-big">
                  <img
                    src="images/services5.jpg"
                    alt={
                      language === 'ar'
                        ? 'نظرة عامة على البنية التحتية السحابية'
                        : language === 'he'
                        ? 'סקירת תשתיות ענן'
                        : 'Cloud infrastructure overview'
                    }
                  />
                </div>
                <div className="gallery-grid">
                  <img
                    src="images/services16.jpg"
                    alt={language === 'ar' ? 'إدارة الخادم' : language === 'he' ? 'ניהול שרת' : 'Server management'}
                  />
                  <img
                    src="images/services17.jpg"
                    alt={language === 'ar' ? 'أمان السحابة' : language === 'he' ? 'אבטחת ענן' : 'Cloud security'}
                  />
                  <img
                    src="images/services18.jpg"
                    alt={language === 'ar' ? 'إدارة الخادم' : language === 'he' ? 'ניהול שרת' : 'Server management'}
                  />
                  <img
                    src="images/services19.jpg"
                    alt={language === 'ar' ? 'أمان السحابة' : language === 'he' ? 'אבטחת ענן' : 'Cloud security'}
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="gallery-row reverse">
                <div className="gallery-big">
                  <img
                    src="images/services20.jpg"
                    alt={language === 'ar' ? 'خريطة الشبكة العالمية' : language === 'he' ? 'מפת רשת עולמית' : 'Global network map'}
                  />
                </div>
                <div className="gallery-grid">
                  <img
                    src="images/services21.jpg"
                    alt={language === 'ar' ? 'الامتثال والحكم' : language === 'he' ? 'ציות ומשילות' : 'Compliance and Governance'}
                  />
                  <img
                    src="images/services22.jpg"
                    alt={language === 'ar' ? 'حلول سحابية مخصصة' : language === 'he' ? 'פתרונות ענן מותאמים' : 'Custom cloud solutions'}
                  />
                  <img
                    src="images/services23.jpg"
                    alt={language === 'ar' ? 'إدارة الخادم' : language === 'he' ? 'ניהול שרת' : 'Server management'}
                  />
                  <img
                    src="images/services24.jpg"
                    alt={language === 'ar' ? 'أمان السحابة' : language === 'he' ? 'אבטחת ענן' : 'Cloud security'}
                  />
                </div>
              </div>
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
                <h2>{t.ctaTitle || (language === 'ar' ? 'هل أنت مستعد للابتكار مع الذكاء الاصطناعي؟' : language === 'he' ? 'מוכן לחדש עם בינה מלאכותית?' : 'Ready to Innovate with AI?')}</h2>
                <p>{t.ctaText || (language === 'ar' ? 'اتصل بنا للحصول على استشارة مخصصة لتطوير رحلة الأتمتة الخاصة بك.' : language === 'he' ? 'צור קשר לקבלת ייעוץ מותאם לקידום מסע האוטומציה שלך.' : 'Contact us for a personalized consultation to advance your automation journey.')}</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-large">
                    {t.ctaStartBtn || (language === 'ar' ? 'ابدأ رحلتك' : language === 'he' ? 'התחל את המסע שלך' : 'Start Your Journey')}{' '}
                    <FaArrowRight />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-large">
                    {t.ctaLearnBtn || (language === 'ar' ? 'تعرف علينا أكثر' : language === 'he' ? 'למידע נוסף עלינו' : 'Learn More About Us')}
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

             @media (max-width: 480px) {
              html, body, #root, .home-page, .aboutit-section, .aboutit-grid, .hero-section, .hero-overlay {
                width: 100vw !important;
                max-width: 100vw !important;
                overflow-x: hidden !important;
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
              }
              .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
              header { left: 0; right: 0; width: 100vw !important; max-width: 100vw !important; }
    html, body, #root, .home-page, .aboutit-section, .aboutit-grid, .hero-section, .hero-overlay {
      width: 100vw !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      box-sizing: border-box !important;
    }
    .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
    header { left: 0; right: 0; width: 100vw !important; max-width: 100vw !important; }
  }
    
  .features-section {
    background: var(--sidebar-bg);
    padding: 80px 0;
  }

 .features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* always 3 columns */
  gap: 30px;
  margin-top: 60px;
}

    .feature-card {
    background: var(--card-bg, #111);
    border: 1px solid rgba(0, 123, 255, 0.4);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;   /* Center horizontally */
    justify-content: flex-start; /* Keep content top-aligned */
  }

  .feature-card.premium-card {
    position: relative;
    background: rgba(20, 20, 20, 0.9);
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
    color: #fff;
    z-index: 1;
  }

  .feature-card.premium-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(270deg, #4f9fff, #a855f7, #4f9fff);
    background-size: 600% 600%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderMove 6s linear infinite;
    z-index: -1;
  }

  @keyframes borderMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .feature-icon {
    font-size: 3rem;
    color: #4f9fff;
    margin-bottom: 20px;
  }

  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #fff;
  }

  .feature-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #bbb;
  }

  .btn-learn {
    margin-top: 40px;
  }
  .btn-learn-wrapper {
    display: flex;
    justify-content: center;  /* horizontal center */
    align-items: center;      /* vertical center */
    width: 100%;
    margin-top: 20px;         /* optional spacing */
  }

  .btn-learn {
    background: linear-gradient(90deg, #3b82f6, #a855f7);
    color: #fff;
    padding: 12px 28px;
    border: none;
    border-radius: 9999px;  /* pill shape */
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;               /* spacing between text & arrow */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-learn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
        }



        .benefits-section {
          background: var(--bg-color);
        }

        .benefits-content h2 {
          font-size: 2.5rem;
          color: var(--heading-color);
          margin-bottom: 20px;
        }

        .benefits-content p {
  font-size: 1.02rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: justify;                /* Justified paragraph */
  letter-spacing: 0.1px;              /* Slight letter spacing for professionalism */
}


        .benefits-list {
          margin-bottom: 40px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 1rem;
          color: var(--text-color);
        }

       .check-icon {
  color: var(--accent-color, #28a745);
  font-size: 1.15rem;                 /* Slightly larger for visibility */
  background: var(--accent-bg, #e0f7e9); /* Soft green for light mode */
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-color, #28a745); /* Glow/silhouette effect */
  transition: background 0.3s, color 0.3s;
}

  /* Light theme (optional, if you use a root variable) */
  :root {
  --accent-color: #111;     /* Black for icon color */
  --accent-bg: #eaeaea;     /* Light grey for background dot */
}


/* Dark theme (assuming body.dark is toggled for dark mode) */
body.dark .check-icon {
  color: #5cffb1;                          /* Bright green for dark */
  background: rgba(40,167,69,0.22);        /* Slightly brighter dot */
  box-shadow: 0 0 8px #5cffb1;
}


        .benefits-image {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .benefits-image img {
          width: 100%;
          height: 570px;
          object-fit: cover;
          border-radius: 50px;
        }

        .gallery-wrapper {
  background: var(--sidebar-bg); /* Uses sidebar background for both themes */
  padding: 80px 40px;
  font-family: "Segoe UI", sans-serif;
  transition: background-color 0.3s ease; /* Smooth transition on theme change */
}


.gallery-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 15px;
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
}


.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
}

.gallery-row.reverse {
  flex-direction: row-reverse;
}

.gallery-big img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1;
}

.gallery-grid img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 992px) {
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column;
  }
  .gallery-big img {
    height: 350px;
  }
  .gallery-grid img {
    height: 180px;
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




        .faq-section {
          background: var(--sidebar-bg);
          padding: 0 0;
          padding-bottom: 40px;
          margin-top:-40px;
        }

        .faq-list {
          max-width: 800px;
          margin: 60px auto 0;
        }

        .faq-item {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .faq-item h4 {
          color: var(--heading-color);
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .faq-item p {
          color: var(--text-color);
          line-height: 1.6;
          margin: 0;
        }

       src/pages/Home2.jsx

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: auto;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
                      .gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
  margin-bottom: 40px; /* Adds space between rows */
}
.gallery-row.reverse {
  flex-direction: row-reverse;
  padding-top: 20px; /* Adds top padding for reverse rows */
}
      `}</style>
      </div>
    </div>
  );
};

export default Service1;
