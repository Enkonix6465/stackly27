import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();


  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);


  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });


  // Forgot password additional state for "verify" mode
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');
  const [forgotConfirm, setForgotConfirm] = useState('');
  const [forgotStep, setForgotStep] = useState(1); // 1: verify email, 2: new password fields
  const [error, setError] = useState('');


  useEffect(() => {
    document.title = 'Login - ForStackly Business Solutions';
  }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === 'admin@enkonix.in' && loginPassword === 'admin123') {
      localStorage.setItem('firstname', 'admin');
      localStorage.setItem('lastname', 'dashboard');
      localStorage.setItem('email', loginEmail);
      navigate('/admin-dashboard');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      localStorage.setItem('firstname', user.firstName || '');
      localStorage.setItem('lastname', user.lastName || '');
      localStorage.setItem('email', user.email || '');
      navigate('/home1');
    } else {
      setError('Invalid email or password.');
    }
  };


  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.email === signupData.email)) {
      setError('Email already registered.');
      return;
    }
    const now = new Date();
    const newUser = {
      ...signupData,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toISOString().slice(0, 10),  // Change: Storing date in YYYY-MM-DD format
      signupTimestamp: now.toISOString(),          // Change: Full timestamp including date/time/year in ISO format
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    setShowSignup(false);
    setSignupData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
  };


  // ---- ENHANCED "FORGOT PASSWORD" FLOW ----
  // Step 1: Verify email exists
  const handleForgotVerify = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex((u) => u.email === forgotEmail.trim());
    if (idx === -1) {
      setError('Email not found. Redirecting to login...');
      setTimeout(() => {
        setError('');
        setShowForgot(false);
        setForgotStep(1);
        setForgotEmail('');
        setForgotPassword('');
        setForgotConfirm('');
        navigate('/');
      }, 1500);
      return;
    }
    setError('');
    setForgotStep(2);
  };


  // Step 2: Set new password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      setError('Passwords do not match.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex((u) => u.email === forgotEmail.trim());
    if (idx === -1) {
      setError('Session expired. Try again.');
      setShowForgot(false);
      setForgotStep(1);
      setForgotEmail('');
      setForgotPassword('');
      setForgotConfirm('');
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Password updated successfully!');
    setShowForgot(false);
    setForgotStep(1);
    setForgotEmail('');
    setForgotPassword('');
    setForgotConfirm('');
    setError('');
    navigate('/');
  };


  const EyeSVG = ({ hidden }) => (
    hidden ? (
      <svg height="24" width="24" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="4"
          fill="#182d3b" stroke="#10a4ff" strokeWidth="2.3"/>
        <path d="M7.5 7.5L14.5 14.5" stroke="#10a4ff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.5 7.5L7.5 14.5" stroke="#10a4ff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ) : (
      <svg height="24" width="24" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="4"
          fill="#182d3b" stroke="#10a4ff" strokeWidth="2.3"/>
        <ellipse cx="11" cy="11" rx="5" ry="5" stroke="#10a4ff" strokeWidth="2"/>
        <circle cx="11" cy="11" r="1.7" fill="#10a4ff"/>
      </svg>
    )
  );


  return (
    <div className="glass-login-bg">
      <motion.div
        className={`glass-login-card${showSignup && !showForgot ? " signup-active" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="form-container">
          {error && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >{error}</motion.div>
          )}


          {/* LOGIN MODE */}
          {!showSignup && !showForgot && (
            <>
              <div className="form-header">
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account</p>
              </div>
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group glass-login-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group glass-login-field">
                  <label>Password</label>
                  <div style={{position:'relative'}}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="glass-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      tabIndex="-1"
                    >
                      <EyeSVG hidden={showPassword} />
                    </button>
                  </div>
                </div>
                <div className="form-options">
                  <button
                    type="button"
                    className="forgot-link"
                    onClick={() => { setError(''); setShowForgot(true); setForgotStep(1); }}>
                    Forgot Password?
                  </button>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >Sign In</motion.button>
              </form>
              <div className="signup-link">
                <p>
                  Don&apos;t have an account?{' '}
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => { setError(''); setShowSignup(true); }}
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </>
          )}


          {/* SIGNUP MODE */}
          {showSignup && !showForgot && (
            <>
              <div className="signup-header">
                <h2 className="signup-header-main">Create your account</h2>
                <p className="signup-header-sub">It only takes a minute</p>
              </div>
              <form onSubmit={handleSignup} className="login-form signup-form">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={signupData.firstName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={signupData.lastName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={signupData.phone}
                    onChange={(e) =>
                      setSignupData({ ...signupData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={signupData.confirmPassword}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >Sign Up</motion.button>
              </form>
              <div className="signup-link">
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => { setError(''); setShowSignup(false); }}
                  >
                    Login
                  </button>
                </p>
              </div>
            </>
          )}


          {/* FORGOT PASSWORD MODE (ENHANCED FLOW) */}
          {showForgot && (
            <>
              <div className="form-header">
                <h2>Reset Password</h2>
                <p>Enter your email and a new password</p>
              </div>
              <form
                className="login-form"
                onSubmit={forgotStep === 1 ? handleForgotVerify : handleForgotPassword}
              >
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                    disabled={forgotStep === 2}
                  />
                </div>
                {forgotStep === 1 && (
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >Verify</button>
                )}
                {forgotStep === 2 && (
                  <>
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={forgotPassword}
                        onChange={(e) => setForgotPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={forgotConfirm}
                        onChange={(e) => setForgotConfirm(e.target.value)}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >Reset Password</motion.button>
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-block"
                  onClick={() => {
                    setError('');
                    setShowForgot(false);
                    setForgotStep(1);
                    setForgotEmail('');
                    setForgotPassword('');
                    setForgotConfirm('');
                  }}
                >Cancel</button>
              </form>
            </>
          )}
        </div>
        {/* All your styles remain unchanged here */}
        <style>{`
          /* Keep your existing styles */
          .glass-login-bg {
            min-height: 100vh;
            background: radial-gradient(circle at 60% 15%, #1849b9 0%, #223953 50%, #0f121b 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .glass-login-card {
            background: rgba(28, 39, 60, 0.75);
            border-radius: 28px;
            box-shadow: 0 0 56px 12px #2798ee44, 0 0 24px #11d0fa30;
            padding: 30px 15px 18px 15px;
            max-width: 400px;
            min-width: 300px;
            width: 100%;
            margin: auto;
            backdrop-filter: blur(18px) saturate(145%);
            border: 2.1px solid #14cdff49;
          }
          .glass-login-card.signup-active {
            padding: 18px 10px 10px 10px;
            max-width: 510px;
          }
          .signup-header-main {
            font-size: 2.3rem;
            font-weight: 900;
            color: #eaf8ff;
            text-align: center;
            letter-spacing: 0.5px;
            margin-top: 0;
            font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
            margin-bottom: 2px;
          }
          .signup-header-sub {
            color: #aad9ff;
            font-size: 1.14rem;
            font-weight: 400;
            text-align: center;
            margin-bottom: 16px;
            margin-top: 0;
            letter-spacing: 0.04em;
          }
          .signup-form .form-group { margin-bottom: 7px; }
          .signup-form { padding-bottom: 4px; }
          @media (max-width: 530px) {
            .signup-header-main { font-size: 1.38rem; }
            .signup-header-sub { font-size: 0.89rem; }
          }
          .form-header h2 { color: #eaf8ff; text-align: center; font-size: 2.2rem; font-weight: 800; margin-bottom: 8px;}
          .form-header p { color: #77d7fc; text-align: center; margin-bottom: 16px; font-size: 1.08rem;}
          .form-group { margin-bottom: 10px;}
          .form-group label { color: #b2e7ff; font-size: 0.96rem; margin-bottom: 5px; font-weight: 500;}
          .form-control {
            width: 100%;
            padding: 6.2px 11px;
            font-size: 0.97rem;
            border-radius: 8px;
            background: rgba(33, 70, 120, 0.14);
            color: #e6f4ff;
            border: 1.07px solid #0abaff35;
            box-sizing: border-box;
          }
          .form-control:focus {
            border-color: #18d8fd;
            background: rgba(75, 205, 255, 0.09);
          }
          .glass-login-field { margin-bottom: 12px; }
          .glass-password-toggle {
            position: absolute;
            top: 50%;
            right: 7px;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 7px;
            box-shadow: 0 0 6px #12b3ff38, 0 1.5px 7px #20e8ff25;
            transition: box-shadow 0.2s, border-color 0.18s;
          }
          .glass-password-toggle:focus { outline: 2px solid #12b3ff; }
          .glass-password-toggle svg { display: block; }
          .btn, .btn-primary, .btn-block {
            width: 100%;
            font-family: inherit;
            font-size: 0.98rem;
            font-weight: 700;
            border: none;
            outline: none;
            cursor: pointer;
            border-radius: 10px;
            padding: 8.5px 0 7px 0;
            background: linear-gradient(98deg, #26acff 5%, #3745f3 100%);
            color: #f6feff;
            box-shadow: 0 1px 7px #18c8ff33, 0 0 3px #2b5cff35;
            letter-spacing: 1.1px;
            margin-top: 10px;
            transition: background 0.13s, box-shadow 0.11s, filter 0.13s;
            position: relative;
            z-index: 1;
          }
          .btn + .btn, .btn-block + .btn-block, .btn-primary + .btn-primary {
            margin-top: 7px;
          }
          .btn:hover, .btn-primary:hover, .btn-block:hover {
            background: linear-gradient(92deg, #35c5ff 0%, #2940e6 100%);
            filter: brightness(1.055);
            box-shadow: 0 5px 18px #17e3ff40, 0 0 12px #2b5cff77;
          }
          .btn:active, .btn-primary:active, .btn-block:active {
            filter: brightness(0.98);
            box-shadow: 0 2px 8px #008cff45;
          }
          .signup-link, .form-header p { color: #b2e7ff; }
          .inline-link, .forgot-link {
            background: none; border: none; color: #1ee1ff; text-decoration: underline; font-weight: 700; cursor: pointer; transition: color 0.16s;
          }
          .inline-link:hover, .forgot-link:hover { color: #eafdff; }
          .error-message {
            background: rgba(36, 0, 38, 0.65);
            color: #fe4a7a;
            border: 1px solid #fe4a7a55;
            border-radius: 10px;
            padding: 9px 14px;
            margin-bottom: 8px;
            text-align: center;
          }
          @media (max-width: 530px) {
            .glass-login-card { padding: 11px 2.5vw 9px 2.5vw; min-width: 0; border-radius: 14px; }
            .form-header h2 { font-size: 1.23rem;}
            .form-header p { font-size: .93rem; }
          }
        `}</style>
      </motion.div>
    </div>
  );
};


export default Login;
