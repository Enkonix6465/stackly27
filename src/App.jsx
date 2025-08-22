import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import Services from './pages/Services';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import Service5 from './pages/Service5';
import Service6 from './pages/Service6';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogList from './pages/BlogList';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';


function AppContent() {
  const location = useLocation();

  // paths where we don't want header/footer
const hideLayout = ['/', '/login', '/signup', '/forgot-password','/admin-dashboard'].includes(location.pathname);


  return (
    <div className="App">
      {!hideLayout && <Header />}
       {/* {!hideLayout && <ThemeToggle />} */}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
  {/* Default route goes to Login */}
  <Route path="/" element={<Login />} />

  {/* Keep login available separately too */}
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/admin-dashboard" element={<AdminDashboard />} /> 

  {/* Other routes */}
  <Route path="/home1" element={<Home1 />} />
  <Route path="/home2" element={<Home2 />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/services" element={<Services />} />
  <Route path="/service1" element={<Service1 />} />
  <Route path="/service2" element={<Service2 />} />
  <Route path="/service3" element={<Service3 />} />
  <Route path="/service4" element={<Service4 />} />
  <Route path="/service5" element={<Service5 />} />
  <Route path="/service6" element={<Service6 />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog-list" element={<BlogList />} />
  <Route path="/blog1" element={<Blog1 />} />
  <Route path="/blog2" element={<Blog2 />} />
  <Route path="/blog3" element={<Blog3 />} />
  <Route path="/blog4" element={<Blog4 />} />
</Routes>

      </motion.main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
