
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaFingerprint,
  FaNetworkWired,
  FaLaptopCode,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Cybersecurity Solutions - Stackly Security',
    hero: {
      title: 'Comprehensive Cybersecurity Solutions',
      paragraph:
        'Safeguard your digital assets with tailored cybersecurity services designed for modern threats.',
      button: 'Get Protected',
      video: 'images/services2.mp4',
    },
    coreServicesTitle: 'Our Cybersecurity Services',
    coreServicesDesc:
      'Helping you secure your infrastructure with advanced protection and expert guidance.',
    cybersecurityFeatures: [
      {
        icon: FaShieldAlt,
        title: 'Advanced Threat Protection',
        description: 'Defend your infrastructure with intelligent threat detection and automated responses.',
      },
      {
        icon: FaUserShield,
        title: 'Identity & Access Management',
        description: 'Secure user access with multi-factor authentication and role-based permissions.',
      },
      {
        icon: FaLock,
        title: 'Encryption Solutions',
        description: 'Protect sensitive data with robust encryption technologies across all devices.',
      },
      {
        icon: FaFingerprint,
        title: 'Biometric Security',
        description: 'Leverage fingerprint and facial recognition for next-generation user authentication.',
      },
      {
        icon: FaNetworkWired,
        title: 'Network Security',
        description: 'Prevent unauthorized access and secure communications with advanced firewalls.',
      },
      {
        icon: FaLaptopCode,
        title: 'Security Automation',
        description: 'Automate monitoring and incident response to maintain continuous protection.',
      },
    ],
    learnMoreBtn: 'Learn More',
    benefitsTitle: 'Why Partner with Us for Cybersecurity?',
    benefitsDesc:
      'We deliver comprehensive protection, expert consulting, and proactive monitoring to keep your data safe.',
    benefitsList: [
      'Comprehensive protection tailored to your business',
      'Cutting-edge technologies for threat detection',
      'Regulatory compliance and risk management',
      'Continuous monitoring and rapid incident response',
      'User-centric identity and access control',
      'Expert cybersecurity consulting and support',
    ],
    benefitsImageAlt: 'Cybersecurity Solutions',
    galleryTitle: 'Cybersecurity Solutions Visual Gallery',
    gallerySubtitle:
      'Explore our cybersecurity infrastructure through these visuals showcasing our robust solutions.',
    ctaTitle: 'Secure Your Future Today',
    ctaText: 'Contact us to learn how we can strengthen your cybersecurity posture.',
    ctaStartBtn: 'Get Started',
    ctaLearnBtn: 'Learn More About Us',
  },
  ar: {
    pageTitle: 'حلول الأمن السيبراني - Stackly Security',
    hero: {
      title: 'حلول الأمن السيبراني الشاملة',
      paragraph: 'حافظ على أصولك الرقمية مع خدمات أمان مصممة لمواجهة التهديدات الحديثة.',
      button: 'احمِ نفسك',
      video: 'images/services2.mp4',
    },
    coreServicesTitle: 'خدماتنا في الأمن السيبراني',
    coreServicesDesc:
      'نساعدك على تأمين بنيتك التحتية بحماية متقدمة وإرشادات خبراء.',
    cybersecurityFeatures: [
      {
        icon: FaShieldAlt,
        title: 'حماية متقدمة من التهديدات',
        description: 'دافع عن بنيتك التحتية باستخدام كشف ذكي وإجراءات استجابة آلية.',
      },
      {
        icon: FaUserShield,
        title: 'إدارة الهوية والصلاحيات',
        description: 'تأمين وصول المستخدمين باستخدام المصادقة متعددة العوامل وصلاحيات مستندة إلى الدور.',
      },
      {
        icon: FaLock,
        title: 'حلول التشفير',
        description: 'حماية البيانات الحساسة بتقنيات تشفير قوية عبر جميع الأجهزة.',
      },
      {
        icon: FaFingerprint,
        title: 'الأمن البيومتري',
        description: 'الاستفادة من التعرف على بصمة الإصبع والوجه لمصادقة المستخدم من الجيل التالي.',
      },
      {
        icon: FaNetworkWired,
        title: 'أمن الشبكات',
        description: 'منع الوصول غير المصرح به وتأمين الاتصالات بجدران نارية متقدمة.',
      },
      {
        icon: FaLaptopCode,
        title: 'أتمتة الأمان',
        description: 'أتمتة المراقبة والاستجابة للحوادث للحفاظ على حماية مستمرة.',
      },
    ],
    learnMoreBtn: 'تعرف أكثر',
    benefitsTitle: 'لماذا تشاركنا للأمن السيبراني؟',
    benefitsDesc:
      'نوفر حماية شاملة، استشارات خبراء، ومراقبة استباقية للحفاظ على سلامة بياناتك.',
    benefitsList: [
      'حماية شاملة مصممة لأعمالك',
      'تقنيات متطورة لكشف التهديدات',
      'الامتثال للمعايير وإدارة المخاطر',
      'مراقبة مستمرة واستجابة سريعة للحوادث',
      'تحكم مركز على الهوية والوصول',
      'استشارات ودعم احترافي في الأمن السيبراني',
    ],
    benefitsImageAlt: 'حلول الأمن السيبراني',
    galleryTitle: 'معرض صور حلول الأمن السيبراني',
    gallerySubtitle: 'استكشف بنيتنا التحتية الأمنية من خلال الصور التي توضح حلولنا المتينة.',
    ctaTitle: 'أمّن مستقبلك اليوم',
    ctaText: 'اتصل بنا لتتعرف على كيفية تعزيز موقفك الأمني السيبراني.',
    ctaStartBtn: 'ابدأ الآن',
    ctaLearnBtn: 'تعرف علينا أكثر',
  },
  he: {
    pageTitle: 'פתרונות סייבר - Stackly Security',
    hero: {
      title: 'פתרונות אבטחה מקיפים',
      paragraph: 'הגן על הנכסים הדיגיטליים שלך עם שירותי אבטחה מותאמים לאיומים מודרניים.',
      button: 'הגן על עצמך',
      video: 'images/services2.mp4',
    },
    coreServicesTitle: 'שירותי הסייבר שלנו',
    coreServicesDesc:
      'אנו מסייעים לך לאבטח את התשתית עם הגנה מתקדמת והכוונה מקצועית.',
    cybersecurityFeatures: [
      {
        icon: FaShieldAlt,
        title: 'הגנה מתקדמת מפני איומים',
        description: 'הגן על התשתית שלך באמצעות זיהוי איומים חכם ותגובה אוטומטית.',
      },
      {
        icon: FaUserShield,
        title: 'ניהול זהויות והרשאות',
        description: 'אבטח גישה למשתמשים עם אימות רב-שלבי והרשאות מבוססות תפקידים.',
      },
      {
        icon: FaLock,
        title: 'פתרונות הצפנה',
        description: 'הגן על נתונים רגישים עם טכנולוגיות הצפנה חזקות בכל המכשירים.',
      },
      {
        icon: FaFingerprint,
        title: 'אבטחה ביומטרית',
        description: 'נצל זיהוי טביעות אצבע והכרה פנים לאימות משתמשים דור הבא.',
      },
      {
        icon: FaNetworkWired,
        title: 'אבטחת רשת',
        description: 'מנע גישה לא מורשית ואבטח תקשורת עם חומות אש מתקדמות.',
      },
      {
        icon: FaLaptopCode,
        title: 'אוטומציה באבטחה',
        description: 'אוטומציה של ניטור ותגובה לאירועים לשמירה על הגנה רציפה.',
      },
    ],
    learnMoreBtn: 'למידע נוסף',
    benefitsTitle: 'למה לבחור בנו לאבטחת סייבר?',
    benefitsDesc:
      'אנו מספקים הגנה מקיפה, ייעוץ מקצועי ומעקב יזום לשמירת בטחון הנתונים.',
    benefitsList: [
      'הגנה מקיפה המותאמת לעסק שלך',
      'טכנולוגיות מתקדמות לזיהוי איומים',
      'ציות לנורמות וניהול סיכונים',
      'ניטור רציף ותגובה מהירה לאירועים',
      'שליטה מבוססת זהות וגישה',
      'ייעוץ ותמיכה מקצועית באבטחת סייבר',
    ],
    benefitsImageAlt: 'פתרונות אבטחת סייבר',
    galleryTitle: 'גלריית תמונות לפתרונות הסייבר שלנו',
    gallerySubtitle: 'חקור את תשתית האבטחה שלנו דרך תמונות המציגות את הפתרונות העמידים שלנו.',
    ctaTitle: 'אבטח את עתידך היום',
    ctaText: 'צור קשר כדי ללמוד כיצד נוכל לחזק את עמדת האבטחה שלך.',
    ctaStartBtn: 'התחל עכשיו',
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
              <h1 className="hero-title animate-slide-in">{t.hero.title}</h1>
              <p className="hero-paragraph animate-fade-up">{t.hero.paragraph}</p>
              <Link to="/contact" className="hero-button animate-fade-up-delayed">
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
              {t.cybersecurityFeatures.map((feature, index) => (
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
                    ? 'ابدأ الآن'
                    : language === 'he'
                    ? 'התחל עכשיו'
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
                  <img src="images/services28.jpg" alt={t.benefitsImageAlt || 'Cybersecurity Solutions'} />
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
