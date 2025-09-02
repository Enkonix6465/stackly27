import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const blogImage = "images/blog6.jpg";

const translations = {
  en: {
    title: "AI and Machine Learning Applications in IT",
    author: "Neil Roberts",
    date: "February 20, 2025",
    readTime: "9",
    categories: ["Artificial Intelligence", "Machine Learning"],
    paragraphs: [
      "Artificial Intelligence and Machine Learning technologies are transforming IT operations, from automating routine tasks to powering advanced analytics and predictive insights."
    ],
    sections: [
      {
        heading: "Automating IT Processes",
        colorIndex: 0,
        content: "AI-driven automation reduces manual work, accelerates incident resolution, and proactively identifies system anomalies, increasing efficiency and uptime."
      },
      {
        heading: "Enhanced Decision Making",
        colorIndex: 1,
        content: "Machine Learning models analyze vast datasets to uncover patterns, enabling data-driven decisions for capacity planning, security threat detection, and resource optimization."
      },
      {
        heading: "AI in Cybersecurity",
        colorIndex: 2,
        content: "AI-based systems continuously monitor and adapt to evolving threats, providing rapid response capabilities and reducing the risk of breaches."
      },
      {
        heading: "Future Prospects",
        colorIndex: 3,
        content: "As AI and ML mature, IT will see even greater integration of intelligent agents, predictive maintenance, and autonomous networks driving business innovation."
      }
    ],
    closingParagraph: "Organizations that invest early in AI-powered IT solutions will gain resilience, agility, and competitive advantage in the digital economy.",
    backLinkLabel: "← Back to Blog"
  },
  ar: {
    title: "تطبيقات الذكاء الاصطناعي وتعلم الآلة في تكنولوجيا المعلومات",
    author: "نيل روبرتس",
    date: "20 فبراير 2025",
    readTime: "9",
    categories: ["الذكاء الاصطناعي", "تعلم الآلة"],
    paragraphs: [
      "تكنولوجيا الذكاء الاصطناعي وتعلم الآلة تُحوّل عمليات تكنولوجيا المعلومات، من أتمتة المهام الروتينية إلى تفعيل التحليلات المتقدمة والرؤى التنبؤية."
    ],
    sections: [
      {
        heading: "أتمتة عمليات تكنولوجيا المعلومات",
        colorIndex: 0,
        content: "تقلل الأتمتة المدفوعة بالذكاء الاصطناعي العمل اليدوي، تسرع حل الحوادث، وتكشف عن الشذوذات بشكل استباقي، مما يزيد الكفاءة والمدة المتاحة للنظام."
      },
      {
        heading: "تعزيز اتخاذ القرار",
        colorIndex: 1,
        content: "تحلل نماذج تعلم الآلة مجموعات بيانات ضخمة لاكتشاف الأنماط، مما يتيح اتخاذ قرارات مدعومة بالبيانات لتخطيط الطاقة وأمن الشبكة وتحسين الموارد."
      },
      {
        heading: "الذكاء الاصطناعي في الأمن السيبراني",
        colorIndex: 2,
        content: "تراقب أنظمة الذكاء الاصطناعي باستمرار وتتكيّف مع التهديدات المتغيرة، مما يوفر إمكانيات استجابة سريعة ويقلل من مخاطر الاختراقات."
      },
      {
        heading: "آفاق المستقبل",
        colorIndex: 3,
        content: "مع نضوج الذكاء الاصطناعي وتعلم الآلة، נראה אינטגרציה מתקדמת של סוכנים אינטליגנטיים, תחזוקה חיזוי ורשתות אוטונומיות שמניעות חדשנות עסקית."
      }
    ],
    closingParagraph: "إن الشركات التي تستثمر مبكراً في حلول تكنولوجيا المعلومات المدعومة بالذكاء الاصطناعي ستكتسب مقاومة ومرونة وتفوقاً تنافسياً في الاقتصاد الرقمي.",
    backLinkLabel: "← العودة إلى المدونة"
  },
  he: {
    title: "יישומי בינה מלאכותית ולמידת מכונה ב-IT",
    author: "ניל רוברטס",
    date: "20 בפברואר 2025",
    readTime: "9",
    categories: ["בינה מלאכותית", "למידת מכונה"],
    paragraphs: [
      "טכנולוגיות בינה מלאכותית ולמידת מכונה משנות את תפעול ה-IT, מאוטומציה של משימות שגרתיות ועד להנעת אנליטיקה מתקדמת ותובנות חזויות."
    ],
    sections: [
      {
        heading: "אוטומציה בתהליכי IT",
        colorIndex: 0,
        content: "אוטומציה מונעת AI מפחיתה עבודה ידנית, מזרזת פתרון תקלות ומזהה אנומליות בזמן אמת, ומשפרת יעילות וזמינות."
      },
      {
        heading: "שיפור קבלת החלטות",
        colorIndex: 1,
        content: "מודלים של למידת מכונה מנתחים כמויות גדולות של נתונים לאיתור תבניות, ומאפשרים החלטות מבוססות נתונים לתכנון קיבולת, איתור איומי אבטחה ואופטימיזציה של משאבים."
      },
      {
        heading: "AI באבטחת סייבר",
        colorIndex: 2,
        content: "מערכות מבוססות AI עוקבות ומותאמות באופן מתמיד לאיומים המשתנים, ומספקות יכולות תגובה מהירה ומפחיתות סיכוני פרצות."
      },
      {
        heading: "הסתכלות אל העתיד",
        colorIndex: 3,
        content: "כש-AI ו-ML מתפתחות, נראה אינטגרציה נרחבת יותר של סוכנים אינטליגנטיים, תחזוקה חזויה ורשתות אוטונומיות שמניעות חדשנות עסקית."
      }
    ],
    closingParagraph: "ארגונים שמשקיעים מוקדם בפתרונות IT מונעי AI ירוויחו גמישות, עמידות ויתרון תחרותי בכלכלה הדיגיטלית.",
    backLinkLabel: "← חזרה לבלוג"
  }
};

const Blog3 = () => {
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
              color: "var(--text-secondary)",
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
              flexWrap: "wrap",
              marginBottom: 4,
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
                  fontSize: "0.85rem",
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
            lineHeight: 1.8,
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
                  fontWeight: 700,
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
          style={{
            marginTop: 40,
            textAlign: dir === "rtl" ? "right" : "left",
          }}
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

export default Blog3;
