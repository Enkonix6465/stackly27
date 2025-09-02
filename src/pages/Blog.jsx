import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaClock,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaThumbsUp,
  FaShare,
  FaComment
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Blog',
    welcomeText: 'Welcome to ForStackly’s IT blog—a curated hub of insights, innovation, and expert advice tailored for modern businesses embracing technology.',
    reachOut: 'Reach Out Today',
    searchPlaceholder: 'Search blog posts...',
    allPosts: 'All Posts',
    categoriesTitle: 'Categories',
    recentPostsTitle: 'Recent Posts',
    postsTitle: 'Latest Articles',
    featuredBadge: 'Featured',
    readMore: 'Read More',
    postActions: {
      like: 'Like',
      comment: 'Comment',
      share: 'Share',
      post: 'Post',
    },
    knowledgeHubTitle: 'Knowledge Hub',
    knowledgeHubSubtitle: 'Premium insights at a glance — trends shaping tomorrow’s tech.',
    knowledgeStats: [
      { icon: '💡', stat: '78%', text: 'Businesses now scale faster through cloud adoption.' },
      { icon: '🛡️', stat: '65%', text: 'SMBs faced at least one cybersecurity incident last year.' },
      { icon: '🤖', stat: '92%', text: 'Leaders believe AI will transform industries in 5 years.' }
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaText: 'Get started today with a free consultation and discover how we can help you achieve your goals.',
    ctaStart: 'Start Your Journey',
    ctaLearnMore: 'Learn More About Us',
    posts: [
      {
        id: 1,
        title: 'The Rise of Cloud Computing and Business Transformation',
        excerpt: 'Learn how cloud technologies streamline operations, improve security, and enable innovation for modern enterprises.',
        author: 'Alex Johnson',
        date: '2025-03-10',
        readTime: 7,
        category: 'Cloud Computing',
        image: 'images/blog2.jpg',
        featured: true
      },
      {
        id: 2,
        title: 'Cybersecurity Best Practices for Small Businesses',
        excerpt: 'Protect your business from threats with essential cybersecurity tips tailored for small and medium businesses.',
        author: 'Linda Yang',
        date: '2025-02-28',
        readTime: 8,
        category: 'Cybersecurity',
        image: 'images/blog3.jpg',
        featured: false
      },
      {
        id: 3,
        title: 'AI and Machine Learning Applications in IT',
        excerpt: 'Explore the transformative impact of AI/ML in automating processes and generating actionable insights.',
        author: 'Neil Roberts',
        date: '2025-02-20',
        readTime: 9,
        category: 'Artificial Intelligence',
        image: 'images/blog4.jpg',
        featured: false
      },
      {
        id: 4,
        title: 'Why DevOps is Essential for Today’s Agile Businesses',
        excerpt: 'Discover how DevOps accelerates development cycles and improves collaboration across teams.',
        author: 'Maxine Patel',
        date: '2025-02-15',
        readTime: 6,
        category: 'DevOps',
        image: 'images/blog5.jpg',
        featured: true
      }
    ]
  },
  ar: {
    pageTitle: 'المدونة',
    welcomeText: 'مرحبًا بكم في مدونة فورستاكلي لتكنولوجيا المعلومات - مركز مختار للرؤى والابتكار والنصائح المتخصصة للشركات الحديثة التي تتبنى التكنولوجيا.',
    reachOut: 'تواصل الآن',
    searchPlaceholder: 'ابحث في مقالات المدونة...',
    allPosts: 'كل المشاركات',
    categoriesTitle: 'الفئات',
    recentPostsTitle: 'المشاركات الحديثة',
    postsTitle: 'أحدث المقالات',
    featuredBadge: 'مميز',
    readMore: 'اقرأ المزيد',
    postActions: {
      like: 'إعجاب',
      comment: 'تعليق',
      share: 'مشاركة',
      post: 'نشر',
    },
    knowledgeHubTitle: 'محور المعرفة',
    knowledgeHubSubtitle: 'رؤى متميزة لمحة سريعة - الاتجاهات التي تشكل مستقبل التكنولوجيا.',
    knowledgeStats: [
      { icon: '💡', stat: '78%', text: 'تسريع المؤسسات من خلال تبني السحابة.' },
      { icon: '🛡️', stat: '65%', text: 'واجهت الشركات الصغيرة والمتوسطة حادثة أمان واحدة على الأقل العام الماضي.' },
      { icon: '🤖', stat: '92%', text: 'يعتقد القادة أن الذكاء الاصطناعي سيغير الصناعات في غضون 5 سنوات.' }
    ],
    ctaTitle: 'هل أنت مستعد لتحويل عملك؟',
    ctaText: 'ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك.',
    ctaStart: 'ابدأ رحلتك',
    ctaLearnMore: 'تعرف علينا أكثر',
    posts: [
      {
        id: 1,
        title: 'اتجاهات الحوسبة السحابية في 2025',
        excerpt: 'تعرف على كيفية تسهيل تقنيات السحابة للعمليات، وتحسين الأمان، وتمكين الابتكار للمؤسسات الحديثة.',
        author: 'أليكس جونسون',
        date: '2025-03-10',
        readTime: 7,
        category: 'الحوسبة السحابية',
        image: 'images/blog2.jpg',
        featured: true
      },
      {
        id: 2,
        title: 'أفضل ممارسات الأمن السيبراني للشركات الصغيرة',
        excerpt: 'حماية عملك من التهديدات مع نصائح الأمن السيبراني الضرورية للشركات الصغيرة والمتوسطة.',
        author: 'ليندا يانغ',
        date: '2025-02-28',
        readTime: 8,
        category: 'الأمن السيبراني',
        image: 'images/blog3.jpg',
        featured: false
      },
      {
        id: 3,
        title: 'تطبيقات الذكاء الاصطناعي وتعلم الآلة في تكنولوجيا المعلومات',
        excerpt: 'استكشف التأثير التحويلي للذكاء الاصطناعي وتعلم الآلة في أتمتة العمليات وتوليد رؤى قابلة للتنفيذ.',
        author: 'نيل روبرتس',
        date: '2025-02-20',
        readTime: 9,
        category: 'الذكاء الاصطناعي',
        image: 'images/blog4.jpg',
        featured: false
      },
      {
        id: 4,
        title: 'لماذا DevOps ضروري لأعمال الأعمال الرشيقة اليوم',
        excerpt: 'اكتشف كيف يسرع DevOps دورات التطوير ويحسن التعاون بين الفرق.',
        author: 'ماكسين باتيل',
        date: '2025-02-15',
        readTime: 6,
        category: 'DevOps',
        image: 'images/blog5.jpg',
        featured: true
      }
    ]
  },
  he: {
    pageTitle: 'הבלוג',
    welcomeText: 'ברוכים הבאים לבלוג של ForStackly IT - מרכז מובחר של תובנות, חידושים וייעוץ מומחה לעסקים מודרניים עם טכנולוגיה.',
    reachOut: 'צור קשר היום',
    searchPlaceholder: 'חפש פוסטים בבלוג...',
    allPosts: 'כל הפוסטים',
    categoriesTitle: 'קטגוריות',
    recentPostsTitle: 'פוסטים אחרונים',
    postsTitle: 'המדריכים האחרונים',
    featuredBadge: 'מומלץ',
    readMore: 'קרא עוד',
    postActions: {
      like: 'אהבתי',
      comment: 'תגובה',
      share: 'שיתוף',
      post: 'פרסם',
    },
    knowledgeHubTitle: 'מרכז ידע',
    knowledgeHubSubtitle: 'תובנות פרמיום במבט חטוף – מגמות שישנו את עולם הטכנולוגיה מחר.',
    knowledgeStats: [
      { icon: '💡', stat: '78%', text: 'עסקים מגדילים את ההיקף מהר יותר בזכות אימוץ ענן.' },
      { icon: '🛡️', stat: '65%', text: 'עסקים קטנים ובינוניים חוו לפחות אירוע אבטחה אחד בשנה האחרונה.' },
      { icon: '🤖', stat: '92%', text: 'מנהיגים מאמינים שבינה מלאכותית תהפוך את התעשיות תוך 5 שנים.' }
    ],
    ctaTitle: 'מוכנים לשינוי העסק שלכם?',
    ctaText: 'התחילו היום עם ייעוץ חינם וגלו כיצד נוכל לעזור לכם.',
    ctaStart: 'התחילו את המסע',
    ctaLearnMore: 'למידע נוסף עלינו',
    posts: [
      {
        id: 1,
        title: 'מגמות מחשוב ענן ב-2025',
        excerpt: 'למד כיצד טכנולוגיות ענן משפרות את התפעול, האבטחה ומאפשרות חדשנות לעסקים מודרניים.',
        author: 'אלכס ג’ונסון',
        date: '2025-03-10',
        readTime: 7,
        category: 'מחשוב ענן',
        image: 'images/blog2.jpg',
        featured: true
      },
      {
        id: 2,
        title: 'שיטות אבטחת סייבר לעסקים קטנים',
        excerpt: 'הגן על העסק שלך מפני איומים עם טיפים חיוניים לאבטחת סייבר לעסקים קטנים ובינוניים.',
        author: 'לינדה יאנג',
        date: '2025-02-28',
        readTime: 8,
        category: 'אבטחת סייבר',
        image: 'images/blog3.jpg',
        featured: false
      },
      {
        id: 3,
        title: 'יישומי בינה מלאכותית ולמידת מכונה ב-IT',
        excerpt: 'חקור את ההשפעה המשנה של בינה מלאכותית ולמידת מכונה באוטומציה ויצירת תובנות.',
        author: 'ניל רוברטס',
        date: '2025-02-20',
        readTime: 9,
        category: 'בינה מלאכותית',
        image: 'images/blog4.jpg',
        featured: false
      },
      {
        id: 4,
        title: 'מדוע DevOps חיוני לעסקים אג’יליים כיום',
        excerpt: 'גלה כיצד DevOps מאיץ מחזורי פיתוח ומשפר שיתוף פעולה בין צוותים.',
        author: 'מקסין פטאל',
        date: '2025-02-15',
        readTime: 6,
        category: 'DevOps',
        image: 'images/blog5.jpg',
        featured: true
      }
    ]
  }
};

const Blog = () => {
  const { language } = useLanguage();
  const dir = ['ar', 'he', 'fa', 'ur'].includes(language) ? 'rtl' : 'ltr';
  const t = translations[language] || translations.en;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [postInteractions, setPostInteractions] = useState(() => {
    try {
      const stats = JSON.parse(localStorage.getItem('blogInteractions') || '{}');
      return stats;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  useEffect(() => {
    localStorage.setItem('blogInteractions', JSON.stringify(postInteractions));
  }, [postInteractions]);

  const categories = ['all', 'Cloud Computing', 'Cybersecurity', 'Artificial Intelligence', 'DevOps', 'Networking', 'IT Support'];

  function formatDate(dateString) {
    if (!dateString) return '';
    const d = new Date(dateString);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function getBlogReadInfo(postId, defaultReadTime, defaultDate) {
    try {
      const stats = JSON.parse(localStorage.getItem('blogInteractions') || '{}');
      const post = stats[postId] || {};
      return {
        lastViewed: post.lastViewed,
        readTime: post.readTime || defaultReadTime,
        date: defaultDate
      };
    } catch {
      return { lastViewed: null, readTime: defaultReadTime, date: defaultDate };
    }
  }

  // Filter posts according to search and category
  const filteredPosts = t.posts.filter(post => {
    const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Get featured post determination
  const getFeaturedPost = () => {
    const maxLikes = Math.max(...Object.values(postInteractions).map(stat => stat.likes || 0), 0);
    const candidates = t.posts.filter(post => (postInteractions[post.id]?.likes || 0) === maxLikes);
    if (candidates.length === 1) return candidates[0];
    let mostRecent = null;
    let latest = 0;
    const stats = JSON.parse(localStorage.getItem('blogInteractions') || '{}');
    candidates.forEach(post => {
      const lastViewed = stats[post.id]?.lastViewed;
      const viewTime = lastViewed ? new Date(lastViewed).getTime() : 0;
      if (viewTime > latest) {
        latest = viewTime;
        mostRecent = post;
      }
    });
    return mostRecent || candidates[0];
  };

  const featuredPost = (selectedCategory === 'all' && searchTerm === '') ? getFeaturedPost() : null;
  const regularPosts = filteredPosts.filter(post => !featuredPost || post.id !== featuredPost.id);

  // Interaction handlers
  const handleLike = postId => setPostInteractions(prev => ({
    ...prev,
    [postId]: {...(prev[postId] || {}), likes: (prev[postId]?.likes || 0) + 1 }
  }));

  const handleShare = postId => setPostInteractions(prev => ({
    ...prev,
    [postId]: {...(prev[postId] || {}), shares: (prev[postId]?.shares || 0) + 1 }
  }));

  const toggleCommentInput = postId => setPostInteractions(prev => ({
    ...prev,
    [postId]: {...(prev[postId] || {}), showCommentInput: !prev[postId]?.showCommentInput }
  }));

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {...(prev[postId] || {}), comments: (prev[postId]?.comments || 0) + 1, showCommentInput: false }
    }));
  };


  return (
    <div className="blog-page" dir={dir}>
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="/images/blog.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{t.pageTitle}</h1>
            <p className="hero-paragraph">{t.welcomeText}</p>
            <Link to="/contact" className="hero-button">{t.reachOut}</Link>
          </div>
        </div>
      </section>

      <div className="blog-main container">
        <div className="blog-grid">

          {/* Sidebar */}
          <motion.aside className="blog-sidebar" initial={{opacity: 0, x: -50}} animate={{opacity:1, x:0}} transition={{duration: 0.8}}>
            <div className="search-widget">
              <h3>{t.pageTitle}</h3>
              <div className="search-box">
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
            </div>
            <div className="categories-widget">
              <h3>{t.categoriesTitle}</h3>
              <div className="categories-list">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <FaFilter className="category-icon" />
                    {cat === 'all' ? t.allPosts : cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="recent-widget">
              <h3>{t.recentPostsTitle}</h3>
              <div className="recent-list">
                {t.posts.slice(0, 3).map(post => (
                  <div key={post.id} className="recent-item">
                    <div className="recent-link">
                      <img src={post.image} alt={post.title} />
                      <div className="recent-content">
                        <h4>{post.title}</h4>
                        <span className="recent-date">{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main className="blog-content" initial={{opacity: 0, x: 50}} animate={{opacity: 1, x:0}} transition={{duration: 0.8}}>

            {/* Featured Post */}
            {featuredPost && (
              <motion.article
                className="featured-post"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="featured-badge">{t.featuredBadge}</div>
                <div className="post-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className="post-overlay">
                    <div className="post-category">{featuredPost.category}</div>
                  </div>
                </div>
                <div className="post-content">
                  {(() => {
                    const info = getBlogReadInfo(featuredPost.id, featuredPost.readTime, featuredPost.date);
                    return (
                      <div className="post-meta">
                        <span className="post-author"><FaUser /> {featuredPost.author}</span>
                        <span className="post-date"><FaCalendar /> {info.lastViewed ? formatDate(info.lastViewed) : info.date}</span>
                        <span className="post-read-time"><FaClock /> {info.readTime} min read</span>
                      </div>
                    );
                  })()}
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <div className="post-actions">
                    <Link to={`/blog${featuredPost.id}`} className="btn btn-primary">
                      {t.readMore} <FaArrowRight />
                    </Link>
                    <div className="post-buttons">
                      <button className="action-btn" onClick={() => handleLike(featuredPost.id)} title={t.postActions.like}>
                        <FaThumbsUp /> {postInteractions[featuredPost.id]?.likes || 0}
                      </button>
                      <button className="action-btn" onClick={() => toggleCommentInput(featuredPost.id)} title={t.postActions.comment}>
                        <FaComment /> {postInteractions[featuredPost.id]?.comments || 0}
                      </button>
                      <button className="action-btn" onClick={() => handleShare(featuredPost.id)} title={t.postActions.share}>
                        <FaShare /> {postInteractions[featuredPost.id]?.shares || 0}
                      </button>
                    </div>
                    {postInteractions[featuredPost.id]?.showCommentInput && (
                      <form onSubmit={e => handleCommentSubmit(featuredPost.id, e)} className="comment-form">
                        <input type="text" placeholder={t.postActions.post} required className="comment-input" />
                        <button type="submit" className="btn btn-primary btn-small">{t.postActions.post}</button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.article>
            )}

            {/* Regular Posts */}
            <div className="posts-section">
              <div className="section-header">
                <h2>{selectedCategory === 'all' ? t.postsTitle : `${selectedCategory} Articles`}</h2>
                <p>{regularPosts.length} articles found</p>
              </div>
              <div className="posts-grid">
                {regularPosts.map((post, idx) => {
                  const interaction = postInteractions[post.id] || {};
                  const info = getBlogReadInfo(post.id, post.readTime, post.date);
                  return (
                    <motion.article
                      key={post.id}
                      className="post-card"
                      initial={{opacity: 0, y: 50}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{duration: 0.6, delay: idx * 0.1}}
                      viewport={{once: true}}
                      whileHover={{y: -10}}
                    >
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="post-overlay">
                          <div className="post-category"><FaTag /> {post.category}</div>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-author"><FaUser /> {post.author}</span>
                          <span className="post-date"><FaCalendar /> {info.lastViewed ? formatDate(info.lastViewed) : info.date}</span>
                          <span className="post-read-time"><FaClock /> {info.readTime} min read</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="post-actions">
                          <Link to={`/blog${post.id}`} className="read-more btn btn-primary">
                            {t.readMore} <FaArrowRight />
                          </Link>
                          <div className="post-buttons">
                            <button className="action-btn" onClick={() => handleLike(post.id)} title={t.postActions.like}>
                              <FaThumbsUp /> {interaction.likes || 0}
                            </button>
                            <button className="action-btn" onClick={() => toggleCommentInput(post.id)} title={t.postActions.comment}>
                              <FaComment /> {interaction.comments || 0}
                            </button>
                            <button className="action-btn" onClick={() => handleShare(post.id)} title={t.postActions.share}>
                              <FaShare /> {interaction.shares || 0}
                            </button>
                          </div>
                        </div>
                        {interaction.showCommentInput && (
                          <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="comment-form">
                            <input type="text" placeholder={t.postActions.post} required className="comment-input" />
                            <button type="submit" className="btn btn-primary btn-small">{t.postActions.post}</button>
                          </form>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

          </motion.main>
        </div>
      </div>

      {/* Knowledge Hub */}
      <section className="knowledge-hub">
        <motion.h2
          className="knowledge-title"
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          {t.knowledgeHubTitle}
        </motion.h2>
        <motion.p
          className="knowledge-subtitle"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
          viewport={{once: true}}
        >
          {t.knowledgeHubSubtitle}
        </motion.p>
        <div className="knowledge-grid">
          {t.knowledgeStats.map(({icon, stat, text}, idx) => (
            <motion.div
              key={idx}
              className={`knowledge-card ${(idx === 0 ? 'left' : idx === 1 ? 'center' : 'right')}`}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2 + idx*0.2}}
              viewport={{once: true}}
              whileHover={{rotateX: 6, rotateY: -6}}
            >
              <div className="icon-badge">{icon}</div>
              <h3 className="knowledge-stat">{stat}</h3>
              <p className="knowledge-text">{text}</p>
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
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t.ctaStart} <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  {t.ctaLearnMore}
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

  

        .blog-main {
          background: var(--bg-color);
          padding: 80px 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
        }

        .blog-sidebar {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .search-widget,
        .categories-widget,
        .recent-widget {
          margin-bottom: 40px;
        }

        .search-widget h3,
        .categories-widget h3,
        .recent-widget h3 {
          color: var(--heading-color);
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .search-box {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 15px;
          border: 2px solid var(--border-color);
          border-radius: 25px;
          background: var(--input-bg);
          color: var(--text-color);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .search-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: none;
          border-radius: 8px;
          background: var(--sidebar-bg);
          color: var(--text-color);
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--primary-color);
          color: white;
        }

        .category-icon {
          font-size: 0.8rem;
        }

        .recent-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .recent-item {
          background: var(--sidebar-bg);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .recent-item:hover {
          background: var(--bg-color);
        }

        .recent-link {
          display: flex;
          gap: 12px;
          padding: 12px;
          text-decoration: none;
          color: var(--text-color);
        }

        .recent-item img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
        }

        .recent-content h4 {
          font-size: 0.9rem;
          color: var(--heading-color);
          margin-bottom: 5px;
          line-height: 1.3;
        }

        .recent-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .featured-post {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          margin-bottom: 60px;
          position: relative;
        }

        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--accent-color);
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }

        .featured-post .post-image {
          height: 300px;
          position: relative;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .post-category {
          background: var(--primary-color);
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .featured-post .post-content {
          padding: 30px;
        }

        .post-content {
          padding: 25px;
        }

        .post-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .post-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .featured-post h2 {
          font-size: 2rem;
          color: var(--heading-color);
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .post-card h3 {
          font-size: 1.3rem;
          color: var(--heading-color);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .post-content p {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .post-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-more {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          transform: translateX(5px);
        }

        .post-buttons {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border: 2px solid var(--border-color);
          border-radius: 50%;
          background: var(--card-bg);
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .posts-section {
          margin-top: 40px;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2rem;
          color: var(--heading-color);
          margin-bottom: 5px;
        }

        .section-header p {
          color: var(--text-muted);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .post-card {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .post-card:hover {
          box-shadow: var(--shadow-hover);
        }

        .post-card .post-image {
          height: 200px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .blog-sidebar {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .post-meta {
            gap: 15px;
          }

          .categories-list {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }


{/* trending section */}
.trending-section {
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 40px;
}

.trending-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: var(--text-primary); /* theme-friendly */
}

.trending-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.trending-card {
  background: var(--card-bg);
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.08);
  padding: 20px;
  transition: all 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 12px 28px rgba(0,0,0,0.15);
}

.trending-card img {
  width: 100%;
  height: 200px; /* same structure */
  object-fit: cover; /* keeps cover style */
  border-radius: 12px;
  margin-bottom: 16px;
}

.trending-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.trending-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Theme Variables */
:root {
  --text-primary: #222;
  --text-secondary: #555;
  --card-bg: #fff;
}

[data-theme="dark"] {
  --text-primary: #f5f5f5;
  --text-secondary: #bbb;
  --card-bg: #1e1e1e;
}
  .cta-section {
  position: relative;
  background: url('/images/agent.jpg') center/cover no-repeat fixed; /* fixed background */
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


.action-btn {
          border:none;
          background: transparent;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 8px;
          border-radius: 8px;
          transition: background-color 0.2s, color 0.2s;
        }
        .action-btn:hover {
          color: var(--primary-color);
          background-color: rgba(0,123,255,0.1);
        }
        .comment-form {
          margin-top: 8px;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .comment-input {
          flex: 1;
          padding: 10px 16px;
          border-radius: 12px;
          border: 1.5px solid var(--card-border);
          font-size: 1rem;
          outline-offset: 2px;
        }
        .comment-input:focus {
          border-color: var(--primary-color);
          outline: none;
        }
        .btn-small {
          padding: 10px 22px;
          font-size: 0.95rem;
          border-radius: 32px;
          font-weight: 700;
        }

        .post-meta {
  display: flex;
  gap: 32px;
  align-items: center;
  font-size: 1.08rem;
  color: #ddd;
  margin-top: 8px;
  margin-bottom: 18px;
  letter-spacing: 0.02em;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
  font-weight: 400;
}
.post-meta svg {
  font-size: 1em;
  margin-right: 5px;
}
.post-meta span {
  display: flex;
  align-items: center;
}
.reading-modal {
  position: fixed;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  padding: 38px 34px;
  background: #23262b;
  color: #fff;
  z-index: 1003;
  border-radius: 18px;
  text-align: center;
  border: 2px solid #007bff;
  box-shadow: 0 8px 44px rgba(40,40,40,0.26);
  font-size: 1.18rem;
}
.btn-small {
  font-size: 0.96rem;
  padding: 6px 16px;
  border-radius: 25px;
  margin-left: 6px;
}
.comment-form {
  margin-top: 10px;
  display: flex;
  gap: 8px;
}
.comment-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 1rem;
}
.section-header h2 { font-size: 2rem; }
.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #ff6600;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}
.post-meta {
          display: flex;
          gap: 32px;
          align-items: center;
          font-size: 1.08rem;
           color: var(--text-color);
          margin-top: 8px;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
          font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
          font-weight: 400;
        }
        .post-meta svg {
          font-size: 1em;
          margin-right: 5px;
        }
        .post-meta span {
          display: flex;
          align-items: center;
        }

        /* Knowledge Hub Section */

        /* Animate Left Card */
.knowledge-card.left {
  animation: bubbleLeft 6s ease-in-out infinite;
}

@keyframes bubbleLeft {
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  40% {
    transform: translateX(60px) scale(1.05, 0.95); /* squish while moving */
  }
  50% {
    transform: translateX(80px) scale(0.95, 1.05); /* touch center card */
  }
  60% {
    transform: translateX(60px) scale(1.05, 0.95);
  }
}

/* Animate Right Card */
.knowledge-card.right {
  animation: bubbleRight 6s ease-in-out infinite;
}

@keyframes bubbleRight {
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  40% {
    transform: translateX(-60px) scale(1.05, 0.95);
  }
  50% {
    transform: translateX(-80px) scale(0.95, 1.05);
  }
  60% {
    transform: translateX(-60px) scale(1.05, 0.95);
  }
}

/* Center Card - pulse slightly when touched */
.knowledge-card.center {
  animation: pulseCenter 6s ease-in-out infinite;
}

@keyframes pulseCenter {
  0%, 35%, 65%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* small bounce when touched */
  }
}
/* =========================
   Knowledge Hub Section
   ========================= */
.knowledge-hub {
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  padding: 40px 20px;
}

.knowledge-title {
  font-size: 2.6rem;
  font-weight: 900;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.knowledge-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 50px;
}

/* ==== FLEX LAYOUT FOR DYNAMIC CENTERED CARDS ==== */
.knowledge-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.knowledge-card {
  position: relative;
  border-radius: 22px;
  padding: 50px 30px 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  width: 350px;
  min-height: 280px;
}

.knowledge-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(135deg, #6a11cb, #2575fc, #ff7eb3);
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  animation: borderShift 6s linear infinite;
}

@keyframes borderShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.knowledge-card:hover {
  transform: translateY(-12px) scale(1.04);
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
}

/* ==== ICON STYLES ==== */
.icon-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  margin: 0 auto 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
}

.knowledge-stat {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.knowledge-text {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;
}

/* ==== MOTION EFFECTS FOR DYNAMIC CARDS ==== */
.knowledge-card.left {
  animation: bubbleLeft 5s ease-in-out infinite;
}

.knowledge-card.center {
  animation: pulseCenter 5s ease-in-out infinite;
  z-index: 2;
}

.knowledge-card.right {
  animation: bubbleRight 5s ease-in-out infinite;
}

@keyframes bubbleLeft {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(25px); }
}

@keyframes bubbleRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-25px); }
}

@keyframes pulseCenter {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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

export default Blog;