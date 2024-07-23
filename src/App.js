// // App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import MainPage from './pages/MainPage';
// import MyPage from './pages/MyPage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import './styles/App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({ username: '' });

//   const handleLogin = (username) => {
//     setIsLoggedIn(true);
//     setUser({ username });
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUser({ username: '' });
//   };

//   return (
//     <Router>
//       <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/mypage/*" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: '' });

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser({ username });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ username: '' });
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage/*" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

