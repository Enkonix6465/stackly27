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
    title: "Cybersecurity Best Practices for Small Businesses",
    author: "Linda Yang",
    date: "February 28, 2025",
    readTime: "8",
    categories: ["Cybersecurity", "Small Business"],
    paragraphs: [
      "As cyber threats evolve, small businesses are increasingly at risk due to limited resources and expertise. However, by adopting best practices for cybersecurity, small businesses can protect their data, maintain customer trust, and ensure business continuity."
    ],
    sections: [
      {
        heading: "Understanding Your Risks",
        colorIndex: 0,
        content: "Start by assessing your current security posture and identifying critical assets. Knowing what data and systems are most valuable to attackers helps prioritize your defense efforts."
      },
      {
        heading: "Implementing Technical Controls",
        colorIndex: 1,
        points: [
          "Use firewalls and antivirus software to block threats.",
          "Ensure all software is up-to-date with patches.",
          "Use strong passwords and multi-factor authentication.",
          "Regularly back up data and test recovery procedures."
        ]
      },
      {
        heading: "Educating Your Team",
        colorIndex: 2,
        content: "Human error remains one of the biggest vulnerabilities. Conduct regular cybersecurity training to help employees recognize phishing attempts, handle data properly, and follow security policies."
      },
      {
        heading: "Compliance and Policies",
        colorIndex: 3,
        content: "Stay informed about industry-specific regulations and legal requirements around data protection, and develop clear cybersecurity policies for your business."
      }
    ],
    closingParagraph: "By proactively managing cybersecurity, small businesses not only avoid costly incidents but also build a strong foundation for growth and customer confidence.",
    backLinkLabel: "← Back to Blog"
  },
  ar: {
    title: "أفضل ممارسات الأمن السيبراني للشركات الصغيرة",
    author: "ليندا يانغ",
    date: "28 فبراير 2025",
    readTime: "8",
    categories: ["الأمن السيبراني", "الأعمال الصغيرة"],
    paragraphs: [
      "مع تطور التهديدات السيبرانية، تزداد مخاطر الأعمال الصغيرة بسبب محدودية الموارد والخبرات. مع ذلك، من خلال اعتماد أفضل ممارسات الأمن السيبراني، يمكن للأعمال الصغيرة حماية بياناتها، والحفاظ على ثقة العملاء، وضمان استمرارية العمل."
    ],
    sections: [
      {
        heading: "فهم المخاطر الخاصة بك",
        colorIndex: 0,
        content: "ابدأ بتقييم وضع الأمان الحالي وتحديد الأصول الحيوية. معرفة البيانات والأنظمة الأكثر أهمية للمهاجمين يساعد في تحديد أولويات الدفاع."
      },
      {
        heading: "تنفيذ الضوابط التقنية",
        colorIndex: 1,
        points: [
          "استخدام الجدران النارية وبرامج مكافحة الفيروسات لصد التهديدات.",
          "تأكد من تحديث جميع البرامج بأحدث التصحيحات.",
          "استخدام كلمات مرور قوية والمصادقة متعددة العوامل.",
          "النسخ الاحتياطي المنتظم للبيانات واختبار إجراءات الاستعادة."
        ]
      },
      {
        heading: "توعية فريقك",
        colorIndex: 2,
        content: "يبقى الخطأ البشري أحد أكبر نقاط الضعف. قم بتدريب دوري لمساعدة الموظفين على التعرف على محاولات التصيد والتعامل مع البيانات بشكل صحيح واتباع سياسات الأمان."
      },
      {
        heading: "الامتثال والسياسات",
        colorIndex: 3,
        content: "ابقَ على اطلاع على اللوائح التنظيمية والمتطلبات القانونية المتعلقة بحماية البيانات، وضع سياسات أمان واضحة لعملك."
      }
    ],
    closingParagraph: "من خلال إدارة الأمن السيبراني بشكل استباقي، لا تتجنب الأعمال الصغيرة الحوادث المكلفة فحسب، بل تبني أيضاً أساساً قوياً للنمو وثقة العملاء.",
    backLinkLabel: "← الرجوع إلى المدونة"
  },
  he: {
    title: "שיטות אבטחת סייבר לעסקים קטנים",
    author: "לינדה יאנג",
    date: "28 בפברואר 2025",
    readTime: "8",
    categories: ["אבטחת סייבר", "עסקים קטנים"],
    paragraphs: [
      "ככל שנתקלים באיומי סייבר מתפתחים, עסקים קטנים נמצאים בסיכון גבוה יותר בגלל משאבים ומומחיות מוגבלים. עם זאת, באימוץ שיטות אבטחת סייבר מיטביות, עסקים קטנים יכולים להגן על הנתונים שלהם, לשמור על אמון הלקוחות ולהבטיח המשכיות עסקית."
    ],
    sections: [
      {
        heading: "הבנת הסיכונים שלך",
        colorIndex: 0,
        content: "התחל בהערכת מצב האבטחה הנוכחי וזיהוי נכסים קריטיים. לדעת אילו נתונים ומערכות חשובים יותר לתוקפים עוזר לתעדף את המאמצים."
      },
      {
        heading: "יישום בקרות טכניות",
        colorIndex: 1,
        points: [
          "השתמש בחומות אש ותוכנת אנטי-וירוס לחסימת איומים.",
          "ודא שכל התוכנה מעודכנת עם תיקונים.",
          "השתמש בסיסמאות חזקות ואימות רב-שלבי.",
          "בצע גיבוי נתונים באופן קבוע ובחן תהליכי שחזור."
        ]
      },
      {
        heading: "הכשרת הצוות שלך",
        colorIndex: 2,
        content: "שגיאות אנוש נשארות אחת הפגיעויות הגדולות ביותר. קיימו הדרכות אבטחת סייבר קבועות שיעזרו לעובדים לזהות ניסיונות פישינג, להתנהל עם נתונים כראוי ולמלא אחר מדיניות האבטחה."
      },
      {
        heading: "ציות ומדיניות",
        colorIndex: 3,
        content: "הישאר מעודכן בנוגע לתקנות וסייגי חוק ספציפיים לתעשייה בנוגע להגנת מידע, ופיתח מדיניות אבטחת סייבר ברורה לעסק שלך."
      }
    ],
    closingParagraph: "באמצעות ניהול אבטחת סייבר באופן יזום, עסקים קטנים לא רק נמנעים מתקריות יקרות, אלא גם בונים בסיס חזק לצמיחה ואמון לקוחות.",
    backLinkLabel: "← חזרה לבלוג"
  }
};

const Blog1 = () => {
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

export default Blog1;
