import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCheck,
  FaArrowRight,
  FaLightbulb,
  FaHandshake,
  FaCameraRetro,
  FaPalette,
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Business Intelligence - Stackly Solutions',
    hero: {
      title: 'Business Intelligence Solutions',
      paragraph:
        'Empower your organization with data-driven strategies and impactful insights.',
      button: 'Get Started',
      video: 'images/services4.mp4',
    },
    coreServicesTitle: 'Key Features of Our BI Services',
    coreServicesDesc:
      'Unlock the power of your data with our comprehensive BI offerings.',
    biFeatures: [
      {
        icon: FaChartLine,
        title: 'Data Visualization',
        description:
          'Turn complex data into insightful, interactive visual reports for easier decision-making.',
      },
      {
        icon: FaUsers,
        title: 'Customer Analytics',
        description:
          'Gain deep understanding of your customer behavior and preferences using advanced analytics.',
      },
      {
        icon: FaCogs,
        title: 'Automated Reporting',
        description:
          'Simplify your reporting with automated dashboards and real-time updates.',
      },
      {
        icon: FaLightbulb,
        title: 'Predictive Insights',
        description:
          'Leverage AI-powered predictions to forecast sales, trends, and risk factors.',
      },
      {
        icon: FaHandshake,
        title: 'Strategic Consulting',
        description:
          'Expert guidance to align BI initiatives with your business goals.',
      },
      {
        icon: FaCameraRetro,
        title: 'Data Storytelling',
        description:
          'Create compelling narratives with your data to engage stakeholders.',
      },
    ],
    learnMoreBtn: 'Learn More',
    benefitsTitle: 'Benefits of Business Intelligence',
    benefitsDesc:
      'Drive better outcomes with insights that accelerate growth, reduce risks, and enhance customer engagement.',
    benefitsList: [
      'Make data-driven decisions confidently',
      'Increase business agility with timely insights',
      'Identify growth opportunities through analytics',
      'Enhance customer satisfaction with targeted actions',
      'Reduce costs with improved operational efficiency',
      'Empower teams with accessible business data',
    ],
    benefitsImageAlt: 'Business Intelligence Visual',
    galleryTitle: 'Core Cloud Services Visual Gallery',
    gallerySubtitle:
      'Explore our cloud infrastructure through these visuals showcasing our robust solutions.',
    ctaTitle: 'Ready to Unlock Your Data Potential?',
    ctaText:
      'Get in touch with our experts to start your Business Intelligence transformation.',
    ctaStartBtn: 'Contact Us',
    ctaLearnBtn: 'Learn More About Us',
  },
  ar: {
    pageTitle: 'ذكاء الأعمال - حلول Stackly',
    hero: {
      title: 'حلول ذكاء الأعمال',
      paragraph:
        'تمكين مؤسستك من خلال استراتيجيات مستندة إلى البيانات ورؤى مؤثرة.',
      button: 'ابدأ الآن',
      video: 'images/services4.mp4',
    },
    coreServicesTitle: 'الميزات الرئيسية لخدمات ذكاء الأعمال لدينا',
    coreServicesDesc:
      'افتح قوة بياناتك مع عروض BI الشاملة لدينا.',
    biFeatures: [
      {
        icon: FaChartLine,
        title: 'تصور البيانات',
        description:
          'تحويل البيانات المعقدة إلى تقارير تفاعلية وبصرية لفهم أفضل وسهولة اتخاذ القرار.',
      },
      {
        icon: FaUsers,
        title: 'تحليلات العملاء',
        description:
          'اكتساب فهم عميق لسلوك العملاء وتفضيلاتهم باستخدام تحليلات متقدمة.',
      },
      {
        icon: FaCogs,
        title: 'التقارير الآلية',
        description:
          'تبسيط التقارير الخاصة بك باستخدام لوحات تحكم آلية وتحديثات في الوقت الحقيقي.',
      },
      {
        icon: FaLightbulb,
        title: 'رؤى تنبؤية',
        description:
          'الاستفادة من التنبؤات المدعومة بالذكاء الاصطناعي لتوقع المبيعات والاتجاهات وعوامل المخاطر.',
      },
      {
        icon: FaHandshake,
        title: 'الاستشارات الاستراتيجية',
        description:
          'إرشادات خبراء لمواءمة مبادرات BI مع أهداف عملك.',
      },
      {
        icon: FaCameraRetro,
        title: 'سرد البيانات',
        description:
          'إنشاء سرد جذاب باستخدام بياناتك لجذب أصحاب المصلحة.',
      },
    ],
    learnMoreBtn: 'تعرف أكثر',
    benefitsTitle: 'فوائد ذكاء الأعمال',
    benefitsDesc:
      'تحقيق نتائج أفضل مع رؤى تسرع النمو، تقلل المخاطر، وتعزز تفاعل العملاء.',
    benefitsList: [
      'اتخاذ قرارات مستندة إلى البيانات بثقة',
      'زيادة مرونة الأعمال بالرؤى الفورية',
      'تحديد فرص النمو من خلال التحليلات',
      'تعزيز رضا العملاء بالإجراءات المستهدفة',
      'تقليل التكاليف بتحسين الكفاءة التشغيلية',
      'تمكين الفرق بالوصول السهل لبيانات الأعمال',
    ],
    benefitsImageAlt: 'صورة ذكاء الأعمال',
    galleryTitle: 'معرض صور خدمات السحابة الأساسية',
    gallerySubtitle:
      'استكشف بنيتنا التحتية السحابية من خلال هذه الصور التي تعرض حلولنا المتينة.',
    ctaTitle: 'مستعد لإطلاق العنان لإمكانات بياناتك؟',
    ctaText:
      'تواصل مع خبرائنا لبدء تحول ذكاء الأعمال الخاص بك.',
    ctaStartBtn: 'اتصل بنا',
    ctaLearnBtn: 'تعرف علينا أكثر',
  },
  he: {
    pageTitle: 'בינה עסקית - פתרונות Stackly',
    hero: {
      title: 'פתרונות בינה עסקית',
      paragraph:
        'העצם את הארגון שלך עם אסטרטגיות מבוססות נתונים ותובנות בעלות השפעה.',
      button: 'התחל עכשיו',
      video: 'images/services4.mp4',
    },
    coreServicesTitle: 'תכונות מרכזיות של שירותי הבינה העסקית שלנו',
    coreServicesDesc:
      'נצל את כוח הנתונים שלך עם הצעות BI מקיפות שלנו.',
    biFeatures: [
      {
        icon: FaChartLine,
        title: 'המחשת נתונים',
        description:
          'הפוך נתונים מורכבים לדוחות חזותיים אינטראקטיביים לתהליך קבלת החלטות קל יותר.',
      },
      {
        icon: FaUsers,
        title: 'אנליטיקת לקוחות',
        description:
          'קבל הבנה עמוקה של התנהגות והעדפות הלקוחות שלך באמצעות אנליטיקה מתקדמת.',
      },
      {
        icon: FaCogs,
        title: 'דיווח אוטומטי',
        description:
          'פשט את הדיווח עם לוחות מחוונים אוטומטיים ועדכונים בזמן אמת.',
      },
      {
        icon: FaLightbulb,
        title: 'תובנות חזויות',
        description:
          'השתמש בחיזויים מבוססי בינה מלאכותית לחיזוי מכירות, מגמות וסיכונים.',
      },
      {
        icon: FaHandshake,
        title: 'יעוץ אסטרטגי',
        description:
          'הכוונה מקצועית ליישר את יוזמות BI עם מטרות העסק שלך.',
      },
      {
        icon: FaCameraRetro,
        title: 'סיפור סיפורי נתונים',
        description:
          'צור נרטיבים משכנעים עם הנתונים שלך כדי למשוך בעלי עניין.',
      },
    ],
    learnMoreBtn: 'למידע נוסף',
    benefitsTitle: 'יתרונות הבינה העסקית',
    benefitsDesc:
      'הנעה לתוצאות טובות יותר עם תובנות שמאיצות צמיחה, מפחיתות סיכונים ומשפרות את המעורבות עם הלקוחות.',
    benefitsList: [
      'קבלת החלטות מבוססות נתונים בביטחון',
      'הגברת גמישות עסקית עם תובנות בזמן',
      'זיהוי הזדמנויות צמיחה באמצעות אנליטיקה',
      'שיפור שביעות רצון הלקוחות עם פעולות ממוקדות',
      'הפחתת עלויות עם יעילות תפעולית משופרת',
      'העצמת צוותים עם נתוני עסק נגישים',
    ],
    benefitsImageAlt: 'תצוגת בינה עסקית',
    galleryTitle: 'גלריית תמונות לשירותי ענן מרכזיים',
    gallerySubtitle:
      'חקור את תשתיות הענן שלנו באמצעות תמונות המציגות את הפתרונות החזקים שלנו.',
    ctaTitle: 'מוכן לשחרר את הפוטנציאל של הנתונים שלך?',
    ctaText: 'צור קשר עם המומחים שלנו כדי להתחיל את טרנספורמציית הבינה העסקית שלך.',
    ctaStartBtn: 'צור קשר',
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
              {t.biFeatures.map((feature, index) => (
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
                {t.learnMoreBtn} <FaArrowRight />
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
                    ? 'اتصل بنا'
                    : language === 'he'
                    ? 'צור קשר'
                    : 'Contact Us'}{' '}
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
                  <img src="images/services30.jpg" alt={t.benefitsImageAlt || 'Business Intelligence Visual'} />
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
                <h2>{t.ctaTitle || (language === 'ar' ? 'هل أنت مستعد لإطلاق العنان لإمكانات بياناتك؟' : language === 'he' ? 'מוכן לשחרר את הפוטנציאל של הנתונים שלך?' : 'Ready to Unlock Your Data Potential?')}</h2>
                <p>{t.ctaText || (language === 'ar' ? 'تواصل مع خبرائنا لبدء تحول ذكاء الأعمال الخاص بك.' : language === 'he' ? 'צור קשר עם המומחים שלנו כדי להתחיל את טרנספורמציית הבינה העסקית שלך.' : 'Get in touch with our experts to start your Business Intelligence transformation.')}</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-large">
                    {t.ctaStartBtn || (language === 'ar' ? 'اتصل بنا' : language === 'he' ? 'צור קשר' : 'Contact Us')}{' '}
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
