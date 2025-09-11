import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { FaEye, FaBullseye, FaCogs, FaCloud, FaRobot, FaShieldAlt, FaHandshake, FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    documentTitle: 'About Us - DreamNest Real Estate',
    heroTitle: "About Us",
    heroParagraph: "Our mission is rooted in trust, transparency, and delivering value at every step of your property journey.",
    heroCta: "Reach Out Today",
    aboutSection: {
      heading: "Empowering Your Digital Vision",
      paragraphs: [
        "Since 2015, we have fueled organizations’ ambitions through future-proof IT services. Our expertise covers cloud transformation, cybersecurity, DevOps, and enterprise support—making us a partner of choice for innovators and industry leaders alike.",
        "We believe technology must be accessible and strategic. Our transparent, client-first approach ensures every solution is not just secure and scalable, but tailored to your unique goals.",
      ],
      images: [
        { src: "images/about-1.jpg", alt: "Client discussion in modern office" },
        { src: "images/about12.jpg", alt: "IT teamwork environment" }
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To pioneer digital transformation by integrating innovation, intelligence, and security—empowering businesses to scale seamlessly from Point A to Point B in their technology journey, ensuring efficiency and sustainability."
    },
    mission: {
      title: "Our Mission",
      description: "To deliver premium IT Services—from cloud solutions, cybersecurity, and data analytics, to intelligent platforms. We guide organizations from ideation to execution with transparent consulting, agile development, and superior support."
    },
    values: {
      heading: "Our Core Values",
      subheading: "The principles driving IT success",
      valuesList: [
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
      ]
    },
    team: {
      heading: "Leadership",
      subheading: "Innovation driven by dedicated leaders",
      members: [
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
      ]
    },
    milestones: {
      heading: "Our Journey",
      subheading: "Key milestones in our growth",
      events: [
        { year: "2015", event: "Company Founded", description: "Established with a vision to drive digital transformation for enterprise clients." },
        { year: "2017", event: "Cloud Solutions Launch", description: "Introduced scalable cloud infrastructure services tailored for modern businesses." },
        { year: "2019", event: "Cybersecurity Expansion", description: "Expanded offerings with advanced cybersecurity protocols to protect critical assets." },
        { year: "2021", event: "AI & Automation Rollout", description: "Deployed AI-driven automation platforms to streamline operational workflows." },
        { year: "2023", event: "Global Client Network", description: "Achieved presence across continents with a diverse portfolio of international clients." },
      ]
    },
    cta: {
      title: "Ready to Transform Your Business?",
      paragraph: "Get started today with a free consultation and discover how we can help you achieve your goals.",
      startJourneyText: "Start Your Journey",
      learnMoreText: "Learn More About Us"
    }
  },
  ar: {
    documentTitle: 'حولنا - دريم نيست للعقارات',
    heroTitle: "معلومات عنا",
    heroParagraph: "مهمتنا متجذرة في الثقة والشفافية وتقديم القيمة في كل خطوة من رحلتك العقارية.",
    heroCta: "تواصل الآن",
    aboutSection: {
      heading: "تمكين رؤيتك الرقمية",
      paragraphs: [
        "منذ عام 2015، قمنا بدعم طموحات المؤسسات من خلال خدمات تقنية المعلومات المستقبلية. تغطي خبرتنا التحول السحابي والأمن السيبراني و DevOps والدعم المؤسسي، مما يجعلنا شريكًا مفضلًا للمبتكرين وقادة الصناعة.",
        "نؤمن بأن التكنولوجيا يجب أن تكون متاحة واستراتيجية. نهجنا الشفاف والمركز على العميل يضمن أن كل حل ليس فقط آمن وقابل للتوسع، بل مصمم خصيصًا لأهدافك الفريدة.",
      ],
      images: [
        { src: "images/about-1.jpg", alt: "مناقشة العميل في مكتب حديث" },
        { src: "images/about12.jpg", alt: "بيئة عمل تقنية المعلومات" }
      ]
    },
    vision: {
      title: "رؤيتنا",
      description: "الريادة في التحول الرقمي من خلال دمج الإبداع والذكاء والأمان - تمكين الشركات من التوسع بسلاسة من النقطة أ إلى النقطة ب في رحلة التكنولوجيا الخاصة بها، مع ضمان الكفاءة والاستدامة."
    },
    mission: {
      title: "مهمتنا",
      description: "تقديم خدمات تقنية معلومات مميزة - من الحلول السحابية، والأمن السيبراني، وتحليلات البيانات، إلى المنصات الذكية. نحن نوجه المؤسسات من الفكرة إلى التنفيذ مع استشارات شفافة، وتطوير رشيق، ودعم ممتاز."
    },
    values: {
      heading: "قيمنا الجوهرية",
      subheading: "المبادئ التي تدفع نجاح تقنية المعلومات",
      valuesList: [
        {
          icon: FaCloud,
          title: "ابتكار السحابة",
          description: "الاستفادة من حلول السحابة القابلة للتوسع لدعم التحول الرقمي الخاص بك."
        },
        {
          icon: FaShieldAlt,
          title: "الأمن السيبراني",
          description: "تنفيذ تدابير أمان قوية لحماية بياناتك وأصولك."
        },
        {
          icon: FaRobot,
          title: "الذكاء الاصطناعي والأتمتة",
          description: "استغلال الذكاء الاصطناعي لزيادة الكفاءة وتقليل الأخطاء."
        },
        {
          icon: FaCogs,
          title: "حلول مخصصة",
          description: "برامج وأنظمة مصممة خصيصًا لتلبية الاحتياجات الخاصة بمؤسستك."
        }
      ]
    },
    team: {
      heading: "القيادة",
      subheading: "الابتكار بقيادة قادة م Dedicated",
      members: [
        {
          name: 'آراف شارما',
          role: 'المؤسس والرئيس التنفيذي',
          bio: 'أكثر من 20 سنة في استراتيجية تقنية المعلومات والتحول للمؤسسات العالمية.',
          image: 'images/about15.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'بريا ميتا',
          role: 'الرئيس التنفيذي للتقنية',
          bio: 'مهندسة الذكاء الاصطناعي والسحابة للنمو المستدام. مرشدة تقنية.',
          image: 'images/about13.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'راهول فيرما',
          role: 'رئيس قسم الأمن',
          bio: 'مدافع عن الابتكار والثقة الرقمية. تأمين مستقبل السحابة.',
          image: 'images/about16.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'أنانيا آير',
          role: 'رئيس المنتج',
          bio: 'بناء منصات للجيل القادم من الشركات.',
          image: 'images/about14.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        }
      ]
    },
    milestones: {
      heading: "رحلتنا",
      subheading: "معالم رئيسية في نموّنا",
      events: [
        { year: "2015", event: "تأسست الشركة", description: "تم التأسيس بهدف قيادة التحول الرقمي لعملاء المؤسسات." },
        { year: "2017", event: "إطلاق حلول السحابة", description: "تم تقديم خدمات بنية تحتية سحابية قابلة للتوسع مصممة للأعمال الحديثة." },
        { year: "2019", event: "توسيع الأمن السيبراني", description: "تم توسيع العروض ببروتوكولات أمن متقدمة لحماية الأصول الهامة." },
        { year: "2021", event: "نشر الذكاء الاصطناعي والأتمتة", description: "تم نشر منصات أتمتة مدفوعة بالذكاء الاصطناعي لتحسين سير العمل." },
        { year: "2023", event: "شبكة العملاء العالمية", description: "تحقيق حضور في القارات مع محفظة متنوعة من عملاء دوليين." },
      ]
    },
    cta: {
      title: "هل أنت مستعد لتحويل عملك؟",
      paragraph: "ابدأ اليوم مع استشارة مجانية واكتشف كيف نساعدك على تحقيق أهدافك.",
      startJourneyText: "ابدأ رحلتك",
      learnMoreText: "تعرف علينا أكثر"
    }
  },
  he: {
    documentTitle: 'עלינו - DreamNest נדל"ן',
    heroTitle: "עלינו",
    heroParagraph: "המשימה שלנו מבוססת על אמון, שקיפות ומסירת ערך בכל שלב במסע הנדל\"ן שלך.",
    heroCta: "צור קשר",
    aboutSection: {
      heading: "מאפשרים את החזון הדיגיטלי שלך",
      paragraphs: [
        "מאז 2015, תמכנו בשאיפות ארגוניות באמצעות שירותי IT מתקדמים. התמחותנו כוללת טרנספורמציה בענן, אבטחת סייבר, דבופס ותמיכה ארגונית, והופכים לשותף מועדף לחדשנים ומובילים בענף.",
        "אנו מאמינים שטכנולוגיה צריכה להיות נגישה ואסטרטגית. הגישה השקופה שלנו, המתמקדת בלקוח, מבטיחה שכל פתרון לא רק בטוח ומדרגי אלא מותאם במיוחד למטרות הייחודיות שלך.",
      ],
      images: [
        { src: "images/about-1.jpg", alt: "דיון לקוח במשרד מודרני" },
        { src: "images/about12.jpg", alt: "סביבת צוות IT" }
      ]
    },
    vision: {
      title: "החזון שלנו",
      description: "להוביל טרנספורמציה דיגיטלית על ידי שילוב חדשנות, אינטיליגנציה ואבטחה – להעצים עסקים להרחיב בקלות מנקודה א' לנקודה ב' במסע הטכנולוגיה שלהם, תוך הבטחת יעילות וקיימות."
    },
    mission: {
      title: "המשימה שלנו",
      description: "לספק שירותי IT ברמה הגבוהה ביותר - החל מפתרונות ענן, אבטחת סייבר וניתוח נתונים ועד לפלטפורמות אינטיליגנטיות. אנו מדריכים ארגונים מהרעיונאות ועד להוצאה לפועל באמצעות ייעוץ שקוף, פיתוח אג'ילי ותמיכה מצוינת."
    },
    values: {
      heading: "הערכים שלנו",
      subheading: "העקרונות המובילים להצלחה בתחום ה-IT",
      valuesList: [
        {
          icon: FaCloud,
          title: "חדשנות ענן",
          description: "מנצלים פתרונות ענן מדרגיים כדי להניע את הטרנספורמציה הדיגיטלית שלך."
        },
        {
          icon: FaShieldAlt,
          title: "אבטחת סייבר",
          description: "מיישמים אמצעי אבטחה חזקים להגנה על הנתונים והנכסים שלך."
        },
        {
          icon: FaRobot,
          title: "אוטומציה ובינה מלאכותית",
          description: "מניעים אינטיליגנציה מלאכותית להגדלת היעילות והפחתת שגיאות."
        },
        {
          icon: FaCogs,
          title: "פתרונות מותאמים אישית",
          description: "תוכנה ומערכות המותאמות במיוחד לצרכי העסק הספציפיים שלך."
        }
      ]
    },
    team: {
      heading: "מנהיגות",
      subheading: "חדשנות מונעת על ידי מנהיגים מסורים",
      members: [
        {
          name: 'ארב שרמה',
          role: 'מייסד ומנכ"ל',
          bio: '20+ שנות ניסיון באסטרטגיית IT וטרנספורמציה לארגונים גלובליים.',
          image: 'images/about15.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'פריה מיתה',
          role: 'CTO',
          bio: 'אדריכל AI וענן לצמיחה בת קיימא. מנטור טכנולוגי.',
          image: 'images/about13.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'רחול ורמה',
          role: 'קצין אבטחה ראשי',
          bio: 'מגן על חדשנות ואמון דיגיטלי. מאבטח עתיד הענן.',
          image: 'images/about16.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        },
        {
          name: 'אנניה אייר',
          role: 'ראש מוצר',
          bio: 'בונה פלטפורמות לדור הבא של עסקים.',
          image: 'images/about14.jpg',
          social: { linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/login', github: 'https://github.com/' }
        }
      ]
    },
    milestones: {
      heading: "המסע שלנו",
      subheading: "אבני דרך משמעותיות בצמיחתנו",
      events: [
        { year: "2015", event: "הקמת החברה", description: "הוקמה עם חזון להוביל טרנספורמציה דיגיטלית ללקוחות ארגוניים." },
        { year: "2017", event: "השקת פתרונות ענן", description: "הושקו שירותי תשתית ענן מדרגתיים המיועדים לעסקים מודרניים." },
        { year: "2019", event: "הרחבת אבטחת סייבר", description: "הרחבת ההצעות עם פרוטוקולי אבטחה מתקדמים להגנה על נכסים קריטיים." },
        { year: "2021", event: "השקת AI ואוטומציה", description: "השקת פלטפורמות אוטומציה מבוססות AI לייעול זרימות עבודה." },
        { year: "2023", event: "רשת לקוחות גלובלית", description: "השגת נוכחות בין-יבשתית עם תיק מגוון של לקוחות בינלאומיים." },
      ]
    },
    cta: {
      title: "מוכן לשדרג את העסק שלך?",
      paragraph: "התחל היום עם ייעוץ חינם וגלה כיצד נוכל לסייע לך להשיג את המטרות שלך.",
      startJourneyText: "התחל את המסע שלך",
      learnMoreText: "למידע נוסף עלינו"
    }
  }
};

const AboutUs = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const marqueeRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(-1);
  const items = [...t.values.valuesList, ...t.values.valuesList]; // Marquee items duplicated

  useEffect(() => {
    document.title = t.documentTitle;
  }, [t.documentTitle]);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleMouseEnter = () => { marquee.style.animationPlayState = "paused"; };
    const handleMouseLeave = () => { marquee.style.animationPlayState = "running"; };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

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

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="images/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.heroTitle}</h1>
            <p className="hero-paragraph animate-fade-up">{t.heroParagraph}</p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">{t.heroCta}</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="aboutit-section">
        <div className="aboutit-grid">
          <div className="aboutit-image-stack">
            <div className="aboutit-card-main">
              <img src={t.aboutSection.images[0].src} alt={t.aboutSection.images[0].alt} />
            </div>
            <div className="aboutit-card-small">
              <img src={t.aboutSection.images[1].src} alt={t.aboutSection.images[1].alt} />
            </div>
          </div>
          <div className="aboutit-content">
            <h2>{t.aboutSection.heading}</h2>
            {t.aboutSection.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref} className={`vision-mission-row ${inView ? "active" : ""}`}>
        <div className="media-card video-card">
          <video autoPlay muted loop playsInline poster="/videos/poster.jpg" className={inView ? "active" : ""}>
            <source src="images/about.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content-card">
          <motion.div className="vision-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
            <div className="card-header">
              <FaEye className="card-icon" />
              <h3>{t.vision.title}</h3>
            </div>
            <p className="justified-text">{t.vision.description}</p>
          </motion.div>
          <motion.div className="mission-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
            <div className="card-header">
              <FaBullseye className="card-icon" />
              <h3>{t.mission.title}</h3>
            </div>
            <p className="justified-text">{t.mission.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section (Marquee) */}
      <section className="values-section full-width">
        <div className="sectionss-header text-center">
          <h2>{t.values.heading}</h2>
          <p>{t.values.subheading}</p>
        </div>
        <div className="values-marquee-outer">
          <div className="values-marquee-inner" ref={marqueeRef}>
            {items.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div className="value-card" key={idx}>
                  <Icon className="value-icon" />
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section full-width">
        <div className="sections-header text-center">
          <h2>{t.team.heading}</h2>
          <p>{t.team.subheading}</p>
        </div>
        <div className="team-grid">
          {t.team.members.map((member, index) => (
            <div
              className="team-card leader-card"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="team-image leader-image">
                <img src={member.image} alt={member.name} />
                <div className={'leader-overlay' + (openIndex === index ? ' open' : '')}>
                  <div className="leader-overlay-content">
                    <h4>{member.name}</h4>
                    <span className="team-role">{member.role}</span>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-social">
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
   <section className="section timeline-section full-width">
  <motion.div className="section-header text-center">
    <h2>{t.milestones.heading}</h2>
    <p>{t.milestones.subheading}</p>
  </motion.div>
  <div className="timeline">
    {t.milestones.events.map((milestone, index) => (
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
              <h2>{t.cta.title}</h2>
              <p>{t.cta.paragraph}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t.cta.startJourneyText} <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  {t.cta.learnMoreText}
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

@media (min-width: 600px) and (max-width: 992px) {
  .aboutit-grid {
    display: flex;
    flex-direction: column; /* Stack vertically */
    align-items: center;    /* Center horizontally */
    gap: 30px;
    padding: 20px;
  }

  .aboutit-image-stack {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 36px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .aboutit-card-main img {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    display: block;
    box-shadow: 0 4px 24px rgba(0,0,0,0.09);
  }

  .aboutit-card-small {
    position: absolute;
    left: 50%;
    top: 70%; /* Adjust this value for more/less overlap */
    transform: translate(-50%, 0);
    width: 65%;   /* Make small image narrower for better proportion */
    max-width: 260px;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    z-index: 2;
  }

  .aboutit-card-small img {
    width: 100%;
    border-radius: 16px;
    display: block;
  }

  .aboutit-content {
    text-align: left;
    max-width: 90vw;
  }

  .aboutit-content h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .aboutit-content p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}



@media (max-width: 600px) {
  .aboutit-grid {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutit-image-stack {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    position: relative;
  }

  .aboutit-card-main img {
    max-width: 300px;
    width: 100%;
    border-radius: 16px;
  }

  .aboutit-card-small {
    position: absolute;
    bottom: -20px;
    right: 50%;
    transform: translateX(50%); /* ✅ keeps small image centered */
    width: 80%;
  }

  .aboutit-card-small img {
    width: 100%;
    border-radius: 16px;
  }

  .aboutit-content {
    text-align: center;
    padding: 0 15px;
  }

  .aboutit-content h2 {
    font-size: 1.5rem;
  }

  .aboutit-content p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

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

@media (min-width: 600px) and (max-width: 992px) {
  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
    justify-items: center;
    max-width: 820px;
    margin: 0 auto;
  }
  .team-card.leader-card {
    width: 100%;
    max-width: 330px;
    background: var(--card-bg, #181e32);
    border-radius: 22px;
    box-shadow: 0 6px 32px rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: auto;
    min-height: unset;
    margin: 0;
    padding: 0;
    position: relative;
    transition: box-shadow 0.2s, transform 0.22s;
  }
  .team-image.leader-image {
    width: 100%;
    height: 220px;
    background: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .team-image.leader-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px 22px 0 0;
    display: block;
    background: none;
  }
  .leader-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(16,24,40,0.02) 30%, rgba(34,62,154,0.38) 100%);
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;                      /* Hidden by default */
    transition: opacity 0.3s;
    border-radius: 22px 22px 0 0;
    pointer-events: none;
  }
  .team-card.leader-card:hover .leader-overlay,
  .team-card.leader-card:focus-within .leader-overlay,
  .team-card.leader-card .leader-overlay.open {
    opacity: 1;                      /* Shown on hover or when 'open' class present */
    pointer-events: all;
  }
  .leader-overlay-content {
    width: 100%;
    padding: 24px 18px 18px 18px;
    text-align: center;
  }
  .leader-overlay-content h4 {
    font-size: 1.1rem;
    margin-bottom: 7px;
    font-weight: 700;
  }
  .leader-overlay-content .team-role {
    color: #83c1fc;
    font-size: 0.98rem;
    letter-spacing: 0.02em;
    font-weight: 500;
    margin-bottom: 12px;
    display: block;
  }
  .leader-overlay-content .team-bio {
    font-size: 0.97rem;
    color: #f4f6fa;
    margin-bottom: 16px;
    line-height: 1.48;
  }
  .team-social {
    margin-top: 6px;
  }
  .team-social a {
    margin: 0 6px;
    font-size: 1.18rem;
    color: #fff;
    opacity: 0.92;
    transition: color 0.16s;
  }
  .team-social a:hover {
    color: #3acead;
    opacity: 1;
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

@media (max-width: 600px) {
  .aboutit-section {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .aboutit-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;   /* Align to top, not center */
    min-height: unset !important;  /* Remove any enforced vh full-height */
    margin-top: 0 !important;
    padding-top: 0 !important;
    gap: 0 !important;             /* Remove gap just in case */
  }

  .aboutit-image-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 32px; /* Adjust the value as needed */
    margin-bottom: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    position: relative;
    width: 100%;
  }

  .aboutit-card-main img, .aboutit-card-small img {
    display: block;
    margin: 0 auto;
    vertical-align: bottom;
  }

  .aboutit-card-small {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    bottom: -20px;
    z-index: 1;
  }

  .aboutit-content {
    text-align: justify;
    text-justify: inter-word;
    padding: 0 15px;
    margin-top: 40px;
  }

  .aboutit-content h2 {
    font-size: 1.5rem;
    text-align: left;
  }

  .aboutit-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
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
 /* Timeline container */

 .timeline-section,
.timeline,
.timeline * {
  direction: ltr !important;
}

 
.timeline {
  position: relative;
  width: 100%;
  padding: 20px 0;
}

/* Vertical center line */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--secondary-color);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 1;
}

/* Timeline items */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  z-index: 2;
}

/* Left aligned items */
.timeline-item.left {
  left: 0;
  text-align: right;
}

/* Right aligned items */
.timeline-item.right {
  left: 50%;
  text-align: left;
}

/* Timeline dots */
.timeline-item::after {
  content: '';
  position: absolute;
  top: 30px; /* align with content */
  width: 20px;
  height: 20px;
  background: var(--accent-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  box-shadow: var(--shadow);
  transition: background 0.3s, border-color 0.3s;
  z-index: 3;
}

.timeline-item.left::after {
  right: -10px; /* position on right side of left item */
}

.timeline-item.right::after {
  left: -10px; /* position on left side of right item */
}

/* Content boxes */
.timeline-content {
  background: var(--card-bg);
  color: var(--text-color);
  padding: 20px 25px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  max-width: 500px;
  position: relative;
  display: inline-block;
  border: none;
  transition: all 0.3s ease;
}

/* Year badge */
.timeline-year {
  background: var(--primary-color);
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 14px;
  font-size: 0.9rem;
}

/* Responsive for smaller screens */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px; /* line aligned left */
  }

  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding-left: 60px;
    padding-right: 20px;
    margin-bottom: 30px;
  }

  .timeline-item::after {
    left: 10px !important;
    right: auto !important;
  }

  .timeline-content {
    max-width: 100%;
  }
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
