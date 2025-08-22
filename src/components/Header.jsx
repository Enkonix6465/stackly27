import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Use public folder path for logo
const logo = 'images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }
  }, []);

  const [initials, setInitials] = useState("?");

useEffect(() => {
  const firstname = (localStorage.getItem("firstname") || "").trim();
  const lastname = (localStorage.getItem("lastname") || "").trim();
  let newInitials = "";
  if (firstname.length > 0) newInitials += firstname[0].toUpperCase();
  if (lastname.length > 0) newInitials += lastname[0].toUpperCase();  // ✅ only first letter
  if (!newInitials) newInitials = "?";
  setInitials(newInitials);
}, []);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

useEffect(() => {
  const updateInitials = () => {
    const firstname = (localStorage.getItem("firstname") || "").trim();
    const lastname = (localStorage.getItem("lastname") || "").trim();
    let newInitials = "";
    if (firstname.length > 0) newInitials += firstname[0].toUpperCase();
    if (lastname.length > 0) newInitials += lastname[0].toUpperCase();
    if (!newInitials) newInitials = "?";
    setInitials(newInitials);
  };

  updateInitials(); // run on mount
  window.addEventListener("storage", updateInitials);
  window.addEventListener("theme-changed", updateInitials);

  return () => {
    window.removeEventListener("storage", updateInitials);
    window.removeEventListener("theme-changed", updateInitials);
  };
}, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 bg-[var(--card-bg)] border-b border-[var(--border-color)]`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current);
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/home1')}
                className={`flex items-center text-[var(--text-color)] hover:text-[var(--hover-color)] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                Home
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 bg-[var(--sidebar-bg)] border-[var(--border-color)]`}>
                  <Link
                    to="/home1"
                    className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`}
                    onClick={() => setIsHomeDropdownOpen(false)}
                  >
                    Home 1
                  </Link>
                  <Link
                    to="/home2"
                    className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`}
                    onClick={() => setIsHomeDropdownOpen(false)}
                  >
                    Home 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-[var(--text-color)] hover:text-[var(--hover-color)] transition-colors duration-200`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center text-[var(--text-color)] hover:text-[var(--hover-color)] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 bg-[var(--sidebar-bg)] border-[var(--border-color)]`}>
                  <Link to="/services" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>All Services</Link>
                  <Link to="/service1" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>Cloud Infrastructure</Link>
                  <Link to="/service2" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>Cybersecurity Solutions</Link>
                  <Link to="/service3" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>AI & Automation</Link>
                  <Link to="/service4" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>Business Intelligence</Link>
                  <Link to="/service5" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>FDevOps & CI/CD Services</Link>
                  <Link to="/service6" className={`block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]`} onClick={() => setIsServicesDropdownOpen(false)}>IT Consulting & Support</Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-[var(--text-color)] hover:text-[var(--hover-color)] transition-colors duration-200`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`text-[var(--text-color)] hover:text-[var(--hover-color)] transition-colors duration-200`}
            >
              Contact
            </Link>

        {/* Avatar Dropdown */}
<div className="relative">
  <button
    className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold focus:outline-none"
    onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
  >
    {initials}
  </button>
  {isAvatarDropdownOpen && (
    <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg border py-2 bg-[var(--sidebar-bg)] border-[var(--border-color)]">
      <button
        className="block w-full text-left px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]"
        onClick={() => {
          setIsAvatarDropdownOpen(false);
          navigate("/login"); // Navigate to login page on logout
          // Optionally clear any stored auth tokens/localStorage items here
        }}
      >
        Logout
      </button>
    </div>
  )}
</div>



{/* Theme Toggle */}
<button
  className={`w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-colors duration-200 bg-[var(--card-bg)] hover:bg-[var(--hover-bg)]`}
  onClick={toggleTheme}
  aria-label="Toggle Theme"
>
  {theme === 'light' ? (
    <svg className="w-6 h-6 text-[var(--text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71" />
    </svg>
  ) : (
    <svg className="w-6 h-6 text-[var(--text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-9-9" />
    </svg>
  )}
</button>

          </div>
          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            <button
              className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-colors duration-200 bg-[var(--card-bg)] hover:bg-[var(--hover-bg)]"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg className="w-6 h-6 text-[var(--text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-[var(--text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-9-9" />
                </svg>
              )}
            </button>
            <div className="relative">
              {(() => {
                const firstname = (localStorage.getItem("firstname") || "").trim();
                const lastname = (localStorage.getItem("lastname") || "").trim();
                const email = (localStorage.getItem("email") || "").trim();
                let initials = "";
                if (firstname.length > 0) initials += firstname[0].toUpperCase();
                if (lastname.length > 0) initials += lastname[0].toUpperCase();
                if (!initials) initials = "?";

                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold"
                      onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 bg-[var(--sidebar-bg)] border-[var(--border-color)]">
                        {email === "admin@enkai.com" && (
                          <button
                            className="block w-full text-left px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]"
                            onClick={() => {
                              setIsAvatarDropdownOpen(false);
                              navigate("/admindashboard");
                            }}
                          >
                            Back to Admin Dashboard
                          </button>
                        )}
                        {email && email !== "admin@enkai.com" && (
                          <button
                            className="block w-full text-left px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]"
                            onClick={() => {
                              setIsAvatarDropdownOpen(false);
                              navigate("/userdashboard");
                            }}
                          >
                            User Dashboard
                          </button>
                        )}
                        <button
                          className="block w-full text-left px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)]"
                          onClick={() => {
                            setIsAvatarDropdownOpen(false);
                            navigate("/welcome");
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-colors duration-200 bg-[var(--card-bg)] hover:bg-[var(--hover-bg)] min-[480px]:hidden"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 text-[var(--text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="min-[480px]:hidden border-t border-[var(--border-color)] bg-[var(--card-bg)]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <button
                onClick={toggleHomeDropdown}
                className="flex items-center justify-between w-full px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md"
              >
                Home
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <a href="/" className="block px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>Home 1</a>
                  <a href="/home2" className="block px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>Home 2</a>
                </div>
              )}
            </div>
            <Link to="/about" className="block px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsMobileMenuOpen(false) }}>
              About
            </Link>

            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center justify-between w-full px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/services" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>All Services</Link>
                  <Link to="/service1" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Artificial Intelligence and machine learning</Link>
                  <Link to="/service2" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>web Development</Link>
                  <Link to="/service3" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Data Science and Analytics</Link>
                  <Link to="/service4" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Blockchain and Cryptocurrency</Link>
                  <Link to="/service5" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>cybersecurity and Ethical Hacking</Link>
                  <Link to="/service6" className="block px-4 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Cloud Computing and DevOps</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="block px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsMobileMenuOpen(false) }}>
              Blog
            </Link>

            <Link to="/contact" className="block px-3 py-2 text-[var(--text-color)] hover:bg-[var(--hover-bg)] rounded-md" onClick={() => { setIsMobileMenuOpen(false) }}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
