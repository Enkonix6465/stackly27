import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const mainHeadingColors = [
  "#1abc9c", // Turquoise
  "#e67e22", // Orange
  "#3498db", // Blue
  "#9b59b6", // Purple
];

const blogImage = "images/blog8.jpg";

const translations = {
  en: {
    title: "Why DevOps is Essential for Today’s Agile Businesses",
    author: "Max Patel",
    date: "February 15, 2025",
    readTime: "6",
    categories: ["DevOps", "Agile"],
    paragraphs: [
      "DevOps has become a crucial methodology for organizations looking to accelerate their delivery pipelines and foster collaboration across development and operations teams."
    ],
    sections: [
      {
        heading: "Enabling Faster Time-to-Market",
        colorIndex: 0,
        content: "By automating build, test, and deployment processes, DevOps enables organizations to deliver updates and features more rapidly, responding swiftly to market demands and customer feedback."
      },
      {
        heading: "Improving Collaboration and Communication",
        colorIndex: 1,
        content: "DevOps breaks down the traditional silos between teams, fostering a culture of shared responsibility and continuous improvement."
      },
      {
        heading: "Enhancing Reliability and Stability",
        colorIndex: 2,
        content: "Continuous integration and continuous delivery (CI/CD) pipelines help detect issues early, reduce errors, and improve the stability of production environments."
      },
      {
        heading: "Aligning with Business Goals",
        colorIndex: 3,
        content: "DevOps practices ensure technology teams align closely with business objectives, enabling faster innovation and better customer experiences."
      }
    ],
    closingParagraph: "Embracing DevOps is no longer optional but essential for businesses aiming to remain agile and competitive in today's fast-paced digital world.",
    backLinkLabel: "← Back to Blog"
  },
  ar: {
    title: "لماذا يعتبر DevOps ضروريًا للأعمال الرشيقة اليوم",
    author: "ماكس باتيل",
    date: "15 فبراير 2025",
    readTime: "6",
    categories: ["DevOps", "الرشيقة"],
    paragraphs: [
      "أصبح DevOps منهجية حيوية للمؤسسات التي تسعى لتسريع خطوط التسليم وتعزيز التعاون بين فرق التطوير والتشغيل."
    ],
    sections: [
      {
        heading: "تمكين الوصول إلى السوق بشكل أسرع",
        colorIndex: 0,
        content: "من خلال أتمتة عمليات البناء والاختبار والنشر، يمكن لـ DevOps تمكين المؤسسات من تقديم التحديثات والميزات بسرعة، والاستجابة بسرعة لمتطلبات السوق وتعليقات العملاء."
      },
      {
        heading: "تحسين التعاون والتواصل",
        colorIndex: 1,
        content: "يفكك DevOps الحواجز التقليدية بين الفرق، معززًا ثقافة المسؤولية المشتركة والتحسين المستمر."
      },
      {
        heading: "تعزيز الموثوقية والاستقرار",
        colorIndex: 2,
        content: "تساعد خطوط التكامل المستمر والتسليم المستمر (CI/CD) في اكتشاف المشكلات مبكرًا، وتقليل الأخطاء، وتحسين استقرار بيئات الإنتاج."
      },
      {
        heading: "محاذاة مع أهداف العمل",
        colorIndex: 3,
        content: "تضمن ممارسات DevOps أن فرق التكنولوجيا تتماشى بشكل وثيق مع أهداف العمل، مما يمكّن الابتكار الأسرع وتحسين تجربة العملاء."
      }
    ],
    closingParagraph: "لم يعد تبني DevOps خيارًا، بل ضروريًا للشركات التي تهدف إلى البقاء رشيقة وتنافسية في عالم رقمي سريع الخطى.",
    backLinkLabel: "← العودة إلى المدونة"
  },
  he: {
    title: "מדוע DevOps חיוני לעסקים אג’יליים כיום",
    author: "מקס פטל",
    date: "15 בפברואר 2025",
    readTime: "6",
    categories: ["DevOps", "אג’יל"],
    paragraphs: [
      "DevOps הפכה למתודולוגיה קריטית לארגונים המבקשים להאיץ את קווי האספקה ולקדם שיתוף פעולה בין צוותי הפיתוח והתפעול."
    ],
    sections: [
      {
        heading: "מאפשר הגעה מהירה לשוק",
        colorIndex: 0,
        content: "באמצעות אוטומציה של תהליכי בנייה, בדיקה ופריסה, DevOps מאפשר לארגונים לספק עדכונים ותכונות במהירות, ולהגיב במהירות לדרישות השוק ולמשוב הלקוחות."
      },
      {
        heading: "שיפור שיתוף הפעולה והתקשורת",
        colorIndex: 1,
        content: "DevOps מפרק את המחיצות המסורתיות בין צוותים, ומקדם תרבות של אחריות משותפת ושיפור מתמשך."
      },
      {
        heading: "שיפור האמינות והיציבות",
        colorIndex: 2,
        content: "צנרות אינטגרציה רציפה והפצה רציפה (CI/CD) עוזרות לזהות בעיות מוקדם, להפחית שגיאות, ולשפר את יציבות סביבות הייצור."
      },
      {
        heading: "התאמה עם יעדי העסק",
        colorIndex: 3,
        content: "פרקטיקות DevOps מבטיחות שצוותי הטכנולוגיה יישרו קו עם יעדי העסק, מה שמאפשר חדשנות מהירה יותר וחוויית לקוח טובה יותר."
      }
    ],
    closingParagraph: "אימוץ DevOps אינו עוד אפשרות, אלא חיוני לעסקים השואפים להישאר אג’יליים ותחרותיים בעולם הדיגיטלי המהיר של היום.",
    backLinkLabel: "← חזרה לבלוג"
  }
};

const Blog4 = () => {
  const { language } = useLanguage();

  const dir = ["ar", "he", "fa", "ur"].includes(language) ? "rtl" : "ltr";

  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      dir={dir}
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
          style={{ marginBottom: 40 }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {t.title}
          </h1>

          <div
            style={{
              width: "100%",
              borderRadius: 15,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <img
              src={blogImage}
              alt={t.title}
              style={{
                width: "100%",
                height: 230,
                objectFit: "cover",
                display: "block",
                borderRadius: 12,
                background: "#eaeaea",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: "0.95rem",
              color: "var(--secondary-color)",
              marginBottom: 14,
              flexWrap: "wrap",
            }}
          >
            <span>{`By ${t.author}`}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{`${t.readTime} min read`}</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap"
            }}
          >
            {t.categories.map((cat, idx) => (
              <span
                key={idx}
                style={{
                  background: mainHeadingColors[idx % mainHeadingColors.length],
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.85rem"
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: "var(--card-bg)",
            borderRadius: 12,
            padding: 40,
            boxShadow: "var(--shadow)",
            lineHeight: 1.8
          }}
        >
          {t.paragraphs.map((p, idx) => (
            <p key={idx} style={{ marginBottom: 25, fontSize: "1.1rem" }}>
              {p}
            </p>
          ))}

          {t.sections.map((section, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  color: mainHeadingColors[section.colorIndex % mainHeadingColors.length],
                  marginTop: idx === 0 ? 35 : 50,
                  marginBottom: 20,
                }}
              >
                {section.heading}
              </h2>
              {section.points ? (
                <ul style={{ paddingLeft: 23, marginBottom: 25 }}>
                  {section.points.map((point, pi) => (
                    <li key={pi} style={{ marginBottom: 11 }}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginBottom: 25 }}>{section.content}</p>
              )}
            </div>
          ))}
          <p>{t.closingParagraph}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 40, textAlign: dir === "rtl" ? "right" : "left" }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
          >
            {t.backLinkLabel}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog4;
