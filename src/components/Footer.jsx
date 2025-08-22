import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';
// Use public folder path for logo
const logo = 'images/logo.png';

const Footer = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  return (
    <footer
      className="bg-[var(--card-bg)] text-[var(--text-color)] transition-colors duration-300"
      style={{ borderTop: '1px solid var(--border-color)' }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 min-[768px]:grid-cols-4 gap-16 justify-between">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="STACKLY" className="h-8 w-auto" />
            </div>
            <h3 className="text-[var(--primary-color)] font-semibold text-lg">
              Online Training Platform
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Empowering learners worldwide with interactive courses and expert instructors.
            </p>
<div className="flex space-x-3 pt-2">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-200"
  >
    <FaLinkedin className="w-5 h-5 text-[var(--primary-color)] hover:text-white transition-colors duration-200" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-200"
  >
    <FaTwitter className="w-5 h-5 text-[var(--primary-color)] hover:text-white transition-colors duration-200" />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-200"
  >
    <FaFacebook className="w-5 h-5 text-[var(--primary-color)] hover:text-white transition-colors duration-200" />
  </a>
  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-200"
  >
    <FaPinterest className="w-5 h-5 text-[var(--primary-color)] hover:text-white transition-colors duration-200" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[var(--primary-color)] font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Services</Link></li>
              <li><Link to="/blog" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-[var(--primary-color)] font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/service1" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Cloud Infrastructure</Link></li>
              <li><Link to="/service2" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Cybersecurity Solutions</Link></li>
              <li><Link to="/service3" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">AI & Automation</Link></li>
              <li><Link to="/service4" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Business Intelligence</Link></li>
              <li><Link to="/service5" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">DevOps & CI/CD Services</Link></li>
              <li><Link to="/service6" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">IT Consulting & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-[var(--primary-color)] font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
                <span className="text-[var(--text-muted)]">+44 20 7946 0958</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
                <span className="text-[var(--text-muted)]">support@forstackly.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
                <span className="text-[var(--text-muted)]">United States</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
                <span className="text-[var(--text-muted)]">Mon - Fri: 9am - 6pm</span>
              </div>
            </div>
            <Link to="/contact" className="block w-full bg-[var(--primary-color)] text-white py-3 rounded-lg text-center hover:bg-[var(--hover-color)] transition-colors duration-200">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--text-muted)] text-sm">© 2025 Finance & Accounting Company. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--hover-color)] transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
