import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const blogImage = "images/blog1.jpg";

const translations = {
  en: {
    title: "The Rise of Cloud Computing and Business Transformation",
    author: "Alex Johnson",
    date: "March 10, 2025",
    readTime: "7",
    categories: ["Cloud Computing", "Business Transformation"],
    paragraphs: [
      "Cloud computing has redefined the way businesses operate, enabling flexibility, scalability, and on-demand resources like never before. As organizations shift to the cloud, transformation isn't just technical—it's a deep reimagining of business models and customer value."
    ],
    sections: [
      {
        heading: "The Core Benefits of Cloud Adoption",
        colorIndex: 0,
        points: [
          "Scalability: Instantly adjust resources based on demand, from storage to computing power.",
          "Cost Efficiency: Shift from capital expenses to flexible, usage-based pricing with reduced hardware investments.",
          "Global Accessibility: Connect teams and customers from anywhere with minimal latency.",
          "Security & Reliability: Benefit from world-class security frameworks and robust disaster recovery."
        ]
      },
      {
        heading: "Transforming Business Models",
        colorIndex: 1,
        content: "Cloud platforms empower organizations to quickly roll out new services, support innovation, and pivot in response to market changes. Subscription models, pay-as-you-go services, and rapid integration with third-party applications allow companies to respond faster and thrive in competitive landscapes."
      },
      {
        heading: "Overcoming Challenges",
        colorIndex: 2,
        content: "Migration can bring challenges in security, compliance, and change management. Successful transformations focus on upskilling teams and evolving organizational culture. Vendors and managed service partners ease this transition with expertise in best practices and governance."
      },
      {
        heading: "The Road Ahead",
        colorIndex: 3,
        content: "The future belongs to businesses that harness cloud for agility, resilience, and innovation. Technologies like AI, IoT, and edge computing power this growth. Cloud adoption is a continuous journey of improvement and growth."
      }
    ],
    backLinkLabel: "← Back to Blog"
  },
  ar: {
    title: "صعود الحوسبة السحابية والتحول التجاري",
    author: "أليكس جونسون",
    date: "10 مارس 2025",
    readTime: "7",
    categories: ["الحوسبة السحابية", "التحول التجاري"],
    paragraphs: [
      "أعادت الحوسبة السحابية تعريف طريقة عمل الشركات، حيث توفر المرونة وقابلية التوسع والموارد حسب الطلب. مع انتقال المؤسسات إلى السحابة، يصبح التحول ليس مجرد تقنية بل إعادة تصور عميقة للنماذج التجارية وقيمة العملاء."
    ],
    sections: [
      {
        heading: "الفوائد الأساسية لاعتماد السحابة",
        colorIndex: 0,
        points: [
          "القابلية للتوسع: ضبط الموارد فورياً حسب الطلب، من التخزين إلى قوة الحوسبة.",
          "الكفاءة في التكلفة: تحويل النفقات الرأسمالية إلى تسعير مرن يعتمد على الاستخدام.",
          "الوصول العالمي: ربط الفرق والعملاء أينما كانوا بأقل تأخير.",
          "الأمان والموثوقية: الاستفادة من أطر أمان عالمية والتعافي من الكوارث."
        ]
      },
      {
        heading: "تحويل نماذج الأعمال",
        colorIndex: 1,
        content: "تمكن منصات السحابة المؤسسات من طرح خدمات بسرعة، دعم الابتكار والتكيف مع تغييرات السوق. نماذج الاشتراك والتكلفة حسب الاستخدام والتكامل السريع مع التطبيقات الخارجية تمكن الشركات من المنافسة بفعالية."
      },
      {
        heading: "التغلب على التحديات",
        colorIndex: 2,
        content: "تواجه عملية الترحيل تحديات أمنية وتنظيمية وتغييرات إدارية. يركز النجاح على تطوير مهارات الفرق وتطوير الثقافة التنظيمية، مع دعم الشركاء المتخصصين في أفضل الممارسات."
      },
      {
        heading: "المستقبل",
        colorIndex: 3,
        content: "ينتمي المستقبل للأعمال التي تستفيد من السحابة للمرونة والابتكار. تقنيات مثل الذكاء الاصطناعي وإنترنت الأشياء والحوسبة الحدية تدفع هذا النمو. يعد اعتماد السحابة رحلة مستمرة للتحسين."
      }
    ],
    backLinkLabel: "← الرجوع إلى المدونة"
  },
  he: {
    title: "עליית מחשוב הענן והטרנספורמציה העסקית",
    author: "אלכס ג'ונסון",
    date: "10 במרץ 2025",
    readTime: "7",
    categories: ["מחשוב ענן", "טרנספורמציה עסקית"],
    paragraphs: [
      "מחשוב ענן שינה את אופן הפעילות של עסקים, ומאפשר גמישות, גדילה וקבלת משאבים לפי דרישה. ככל שארגונים עוברים לענן, הטרנספורמציה היא לא רק טכנולוגית אלא שינוי עמוק באופי העסק והערך ללקוח."
    ],
    sections: [
      {
        heading: "יתרונות מרכזיים של אימוץ ענן",
        colorIndex: 0,
        points: [
          "סקיילביליות: התאמת משאבים מיידית לפי הביקוש, מאחסון ועד כוח מחשוב.",
          "יעילות בעלויות: מעבר מהוצאות הון למחירים גמישים לפי שימוש.",
          "נגישות גלובאלית: חיבור צוותים ולקוחות מכל מקום עם השהייה מינימלית.",
          "אבטחה ואמינות: שימוש במסגרת אבטחה עולמית ושחזור מאסון."
        ]
      },
      {
        heading: "המרת מודלים עסקיים",
        colorIndex: 1,
        content: "פלטפורמות ענן מאפשרות לארגונים להשיק שירותים במהירות, לתמוך בחדשנות ולהגיב לשינויים בשוק. מודלים של מנוי ותשלום לפי שימוש, ואינטגרציה מהירה מאפשרים התקדמות מול התחרות."
      },
      {
        heading: "התגברות על אתגרים",
        colorIndex: 2,
        content: "המעבר כולל אתגרים באבטחה, בקפדנות ושליטה. הצלחה דורשת פיתוח מיומנויות וצמיחה תרבותית, בשילוב תמיכה ממומחי ספקים ושותפים."
      },
      {
        heading: "הדרך לעתיד",
        colorIndex: 3,
        content: "העתיד שייך לעסקים המנצלים ענן לגמישות ולחדשנות. טכנולוגיות כמו AI, IoT ומחשוב בקצה יתרמו לצמיחה זו. אימוץ ענן הוא מסע מתמשך לשיפור וצמיחה."
      }
    ],
    backLinkLabel: "← חזרה לבלוג"
  }
};


const Blog1 = () => {
  const { language } = useLanguage();

  // Set text direction based on language for proper RTL/LTR support
  const dir = ["ar", "he", "fa", "ur"].includes(language) ? "rtl" : "ltr";

  // Select translations for current language
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
            <span>{t.author}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime} min read</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 4,
            }}
          >
            {t.categories.map((category, index) => (
              <span
                key={index}
                style={{
                  background: mainHeadingColors[index % mainHeadingColors.length],
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                }}
              >
                {category}
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
                      <b>{point.split(":")[0]}:</b>{point.split(":")[1]}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginBottom: 25 }}>{section.content}</p>
              )}
            </div>
          ))}
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
              transition: "all 0.3s",
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
