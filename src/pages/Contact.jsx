import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaArrowRight, FaInstagram
} from "react-icons/fa";
import { useLanguage } from "../context.jsx/LanguageContext";


// Animated icons
const AnimatedCall = () => (
  <span className="detail-icon ring-anim"><FaPhone /></span>
);
const AnimatedAddress = () => (
  <span className="detail-icon float-anim"><FaMapMarkerAlt /></span>
);
const AnimatedClock = () => (
  <span className="detail-icon alarm-anim"><FaClock /></span>
);
const AnimatedMail = () => (
  <span className="detail-icon mail-anim"><FaEnvelope /></span>
);

const translations = {
  en: {
    heroTitle: "Connect with Our Team",
    heroParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing vipu elit. Ut spelataras tellus luctus neullamcorper mattis, pibus leo dotu.",
    contactTitle: "Get in Touch",
    contactSuccess: "We received your message. We'll get back to you shortly.",
    contactDetailsTitle: "Contact Details",
    contactDescription: "We are here to help—reach out with any questions.",
    addressTitle: "Address",
    addressLine1: "221B Baker Street,",
    addressLine2: "London, NW1 6XE",
    addressLine3: "United Kingdom",
    mobileTitle: "Mobile",
    mobileNumber: "+44 20 7946 0958",
    availabilityTitle: "Availability",
    availabilityTime: "Mon-Fri: 9am - 6pm",
    emailTitle: "Email",
    emailAddress: "support@forstackly.com",
    socialMediaLabel: "Social Media:",
    liveChatTitle: "Live Chat",
    liveChatText: "Need assistance? Chat with our team for quick help.",
    liveChatButton: "Start Chat",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      { q: "What services do you offer?", a: "We provide tailored event planning and management services to create unforgettable experiences." },
      { q: "How much does event planning cost?", a: "Cost varies by event type and scale. Contact us for a personalized quote." },
      { q: "When should I book?", a: "Booking at least 3 months in advance is recommended to ensure availability." },
      { q: "Can I customize my package?", a: "Absolutely! We are happy to create bespoke packages to fit your needs." }
    ],
    resourcesTitle: "Resources",
    resourcesItems: [
      { name: "Event Planning Guide", link: "#" },
      { name: "Client Portal", link: "#" },
      { name: "Knowledge Base", link: "#" },
      { name: "Support Center", link: "#" }
    ],
    ctaTitle: "Ready to Transform Your Business?",
    ctaParagraph: "Get started today with a free consultation and discover how we can help you achieve your goals.",
    sendBtn: "Send Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message"
  },
  ar: {
    heroTitle: "تواصل مع فريقنا",
    heroParagraph: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسكينغ فيبو إليت. أند اسبلاتاراس تيليوس لوكتوس نيللامكوربر ماتيس، بيبوس ليو دوتو.",
    contactTitle: "تواصل معنا",
    contactSuccess: "لقد استلمنا رسالتك. سنعود إليك قريبًا.",
    contactDetailsTitle: "تفاصيل الاتصال",
    contactDescription: "نحن هنا للمساعدة - تواصل معنا لأي استفسارات.",
    addressTitle: "العنوان",
    addressLine1: "221B شارع بيكر،",
    addressLine2: "لندن، NW1 6XE",
    addressLine3: "المملكة المتحدة",
    mobileTitle: "الهاتف المحمول",
    mobileNumber: "+44 20 7946 0958",
    availabilityTitle: "ساعات العمل",
    availabilityTime: "من الإثنين إلى الجمعة: 9 صباحًا - 6 مساءً",
    emailTitle: "البريد الإلكتروني",
    emailAddress: "support@forstackly.com",
    socialMediaLabel: "وسائل التواصل الاجتماعي:",
    liveChatTitle: "الدردشة الحية",
    liveChatText: "هل تحتاج مساعدة؟ تحدث مع فريقنا للمساعدة السريعة.",
    liveChatButton: "ابدأ الدردشة",
    faqTitle: "الأسئلة الشائعة",
    faqItems: [
      { q: "ما هي الخدمات التي تقدمونها؟", a: "نقدم خدمات تخطيط وإدارة الأحداث المصممة لإنشاء تجارب لا تُنسى." },
      { q: "ما هي تكلفة تخطيط الحدث؟", a: "تعتمد التكلفة على نوع الحدث وحجمه. اتصل بنا لعرض أسعار مخصص." },
      { q: "متى يجب أن أحجز؟", a: "ينصح بالحجز قبل 3 أشهر على الأقل لضمان التوفر." },
      { q: "هل يمكنني تخصيص الحزمة الخاصة بي؟", a: "بالطبع! نحن سعداء بإنشاء حزم مخصصة لتناسب احتياجاتك." }
    ],
    resourcesTitle: "الموارد",
    resourcesItems: [
      { name: "دليل تخطيط الحدث", link: "#" },
      { name: "بوابة العملاء", link: "#" },
      { name: "قاعدة المعرفة", link: "#" },
      { name: "مركز الدعم", link: "#" }
    ],
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaParagraph: "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    sendBtn: "إرسال الرسالة",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "رسالتك"
  },
  he: {
    heroTitle: "צרו קשר עם הצוות שלנו",
    heroParagraph: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסקינג ויפו אליט. אונד אספלטראס טיילוס לוקטוס נילמאקורפר מאטיס, פיבוס ליו דוטו.",
    contactTitle: "צור קשר",
    contactSuccess: "קיבלנו את ההודעה שלך. נחזור אליך בקרוב.",
    contactDetailsTitle: "פרטי יצירת קשר",
    contactDescription: "אנחנו כאן לעזור - פנה אלינו עם כל שאלה.",
    addressTitle: "כתובת",
    addressLine1: "221B רחוב בייקר,",
    addressLine2: "לונדון, NW1 6XE",
    addressLine3: "הממלכה המאוחדת",
    mobileTitle: "טלפון נייד",
    mobileNumber: "+44 20 7946 0958",
    availabilityTitle: "שעות פעילות",
    availabilityTime: "יום א'-ה': 9:00 - 18:00",
    emailTitle: "אימייל",
    emailAddress: "support@forstackly.com",
    socialMediaLabel: "רשתות חברתיות:",
    liveChatTitle: "צ’אט חי",
    liveChatText: "זקוקים לעזרה? שוחחו עם הצוות שלנו לקבלת סיוע מהיר.",
    liveChatButton: "התחל צ’אט",
    faqTitle: "שאלות נפוצות",
    faqItems: [
      { q: "אילו שירותים אתם מציעים?", a: "אנו מספקים שירותי תכנון וניהול אירועים מותאמים ליצירת חוויות בלתי נשכחות." },
      { q: "כמה עולה תכנון אירועים?", a: "המחיר משתנה בהתאם לסוג וגודל האירוע. צרו קשר לקבלת הצעת מחיר מותאמת." },
      { q: "מתי כדאי להזמין?", a: "מומלץ להזמין לפחות 3 חודשים מראש כדי להבטיח זמינות." },
      { q: "האם אפשר להתאים אישית את החבילה שלי?", a: "בהחלט! נשמח ליצור חבילות מותאמות לצרכים שלכם." }
    ],
    resourcesTitle: "משאבים",
    resourcesItems: [
      { name: "מדריך לתכנון אירועים", link: "#" },
      { name: "פורטל הלקוחות", link: "#" },
      { name: "מרכז ידע", link: "#" },
      { name: "מרכז תמיכה", link: "#" }
    ],
    ctaTitle: "מוכנים לשנות את העסק שלכם?",
    ctaParagraph: "התחילו היום בייעוץ חינם וגלו כיצד נוכל לעזור לכם להשיג את מטרותיכם.",
    sendBtn: "שלח הודעה",
    namePlaceholder: "שמך",
    emailPlaceholder: "האימייל שלך",
    subjectPlaceholder: "נושא",
    messagePlaceholder: "ההודעה שלך"
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const dir = ["ar", "he", "fa", "ur"].includes(language) ? "rtl" : "ltr";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const old = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    localStorage.setItem("contactMessages", JSON.stringify([...old, form]));
    setStatus(t.contactSuccess);
    setShowForm(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => {
      setStatus("");
      setShowForm(true);
    }, 5000);
  };

  const faqData = t.faqItems;
  const resources = t.resourcesItems;

  return (
    <div dir={dir}>
      {/* Hero */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="/images/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-paragraph">{t.heroParagraph}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section" style={{ background: "var(--background-main)" }}>
        <div className="contact-container">
          <div className="contact-row">
            {/* Left: Form */}
            <div className="contact-card" style={{ background: "var(--card-bg)", color: "var(--text-color)", border: "1.5px solid var(--border-color)" }}>
              <h2 className="contact-title" style={{ color: "var(--heading-color)" }}>{t.contactTitle}</h2>
              {showForm ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <input type="text" name="name" required placeholder={t.namePlaceholder} value={form.name} onChange={handleChange} />
                    <input type="email" name="email" required placeholder={t.emailPlaceholder} value={form.email} onChange={handleChange} />
                  </div>
                  <input type="text" name="subject" required placeholder={t.subjectPlaceholder} value={form.subject} onChange={handleChange} />
                  <textarea name="message" required placeholder={t.messagePlaceholder} rows={4} value={form.message} onChange={handleChange} />
                  <button type="submit" className="send-btn">{t.sendBtn}</button>
                </form>
              ) : (
                <div className="form-success">{status}</div>
              )}
            </div>

            {/* Right: Contact Details */}
            <div className="contact-card" style={{ background: "var(--card-bg)", color: "var(--text-color)", border: "1.5px solid var(--border-color)" }}>
              <h2 className="contact-title" style={{ color: "var(--heading-color)" }}>{t.contactDetailsTitle}</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "14px" }}>{t.contactDescription}</p>
              <div className="contact-details-grid">
                <div className="detail-card">
                  <AnimatedAddress />
                  <div>
                    <strong>{t.addressTitle}</strong>
                    <div>
                      {t.addressLine1}<br />
                      {t.addressLine2}<br />
                      {t.addressLine3}
                    </div>
                  </div>
                </div>
                <div className="detail-card">
                  <AnimatedCall />
                  <div>
                    <strong>{t.mobileTitle}</strong>
                    <div>{t.mobileNumber}</div>
                  </div>
                </div>
                <div className="detail-card">
                  <AnimatedClock />
                  <div>
                    <strong>{t.availabilityTitle}</strong>
                    <div>{t.availabilityTime}</div>
                  </div>
                </div>
                <div className="detail-card">
                  <AnimatedMail />
                  <div>
                    <strong>{t.emailTitle}</strong>
                    <div>{t.emailAddress}</div>
                  </div>
                </div>
              </div>
              <div className="contact-social">
                <span>{t.socialMediaLabel}</span>
                <a href="https://www.facebook.com"><FaFacebook /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://www.linkedin.com"><FaLinkedin /></a>
                <a href="https://www.instagram.com"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat */}
      <section className="live-chat-section container">
        <h3>{t.liveChatTitle}</h3>
        <div className="chat-box">
          <p>{t.liveChatText}</p>
          <button className="btn btn-chat" onClick={() => alert("Chat feature coming soon!")}>{t.liveChatButton}</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <h3>{t.faqTitle}</h3>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Google Map */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6816935951437!2d-73.98835178517922!3d40.75854307932519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854a9c3eabf%3A0x7d52aa2922d5b92d!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1665000000000!5m2!1sen!2sus"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Company Location"
        ></iframe>
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
              <p>{t.ctaParagraph}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        :root {
          --background-main: #f5f6fa;
          --card-bg: #ededed;
          --input-bg: #fff;
          --border-color: #d2d2d2;
          --heading-color: #222;
          --text-color: #222;
          --text-muted: #555;
          --primary-color: #007bff;
          --primary-hover: #0056b3;
        }
        [data-theme="dark"] {
          --background-main: #181a1f;
          --card-bg: #23242a;
          --input-bg: #2c2e35;
          --border-color: #444857;
          --heading-color: #f0f0f5;
          --text-color: #e5e7eb;
          --text-muted: #a3a6ae;
          --primary-color: #4da1ff;
          --primary-hover: #0056b3;
        }

        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--background-main);
          color: var(--text-color);
        }
        .container {
          max-width: 1140px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
        }
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

  

        /* Contact Section */
        .contact-main-section {
          background-color: var(--background-main);
          padding: 60px 0 80px;
        }
        .contact-row {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .contact-card {
          background-color: var(--card-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          padding: 32px 40px;
          flex: 1 1 480px;
          display: flex;
          flex-direction: column;
        }
        .contact-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 28px;
          color: var(--heading-color);
        }
        .contact-form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        input[type="text"],
        input[type="email"],
        textarea {
          font-size: 1rem;
          font-family: inherit;
          color: var(--text-color);
          background-color: var(--input-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 12px;
          padding: 14px 16px;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }
        textarea {
          resize: vertical;
          min-height: 100px;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 5px var(--primary-color);
        }
        .send-btn {
          font-size: 1.125rem;
          font-weight: 700;
          background-color: var(--primary-color);
          color: #fff;
          border: none;
          border-radius: 48px;
          padding: 16px;
          width: 100%;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(0, 123, 255, 0.4);
          transition: background-color 0.3s ease;
          margin-top: auto;
        }
        .send-btn:hover {
          background-color: var(--primary-hover);
        }
        .form-success {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-color);
          text-align: center;
          min-height: 140px;
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Contact Details */
       .contact-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

        .detail-card {
          display: flex;
          align-items: center;
          background-color: var(--input-bg);
          padding: 20px 18px;
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          gap: 15px;
        }
        .detail-card .detail-icon {
          width: 46px;
          height: 46px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 18px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(0,123,255,0.6);
        }
        .contact-social {
          display: flex;
          gap: 20px;
          align-items: center;
          font-size: 1rem;
          color: var(--text-muted);
        }
        .contact-social span {
          font-weight: 600;
          margin-right: 12px;
        }
        .contact-social a {
          display: flex;
          width: 38px;
          height: 38px;
          border-radius: 14px;
          background-color: var(--input-bg);
          color: var(--primary-color);
          font-size: 1.6rem;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .contact-social a:hover {
          background-color: var(--primary-color);
          color: white;
        }

        /* FAQ */
        .faq-list details {
          background-color: var(--input-bg);
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 5px 14px rgba(0,0,0,0.07);
          cursor: pointer;
        }
        .faq-list summary {
          font-weight: 700;
          font-size: 1.1rem;
          outline: none;
        }
        .faq-list p {
          margin-top: 10px;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Resources */
        .resources-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .resources-list li {
          margin-bottom: 14px;
        }
        .resources-list li a {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .resources-list li a:hover {
          text-decoration: underline;
          color: var(--primary-hover);
        }

        /* Live Chat */
        .chat-box {
          background-color: var(--input-bg);
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .chat-box p {
          font-size: 1.125rem;
          color: var(--text-color);
          flex: 1 1 60%;
          margin: 0;
        }
        .btn-chat {
          padding: 14px 36px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          font-size: 1.125rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          flex: 1 1 35%;
          max-width: 200px;
          transition: background-color 0.3s ease;
        }
        .btn-chat:hover {
          background-color: var(--primary-hover);
        }

        /* Map */
        .map-section iframe {
          width: 100vw !important;
          height: 420px;
          border: none;
          display: block;
          border-radius: 16px 16px 0 0;
        }

        /* CTA */
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
}
