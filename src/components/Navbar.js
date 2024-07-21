import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const isLoggedIn = false; // Replace with actual login state
  const username = 'user123'; // Replace with actual username if logged in

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">나의 웹서비스</Link>
      <div className="navbar-links">
        {isLoggedIn ? (
          <span>{username}</span>
        ) : (
          <Link to="/login">로그인 / 회원가입</Link>
        )}
        <Link to="/mypage">마이페이지</Link>
      </div>
    </nav>
  );
}

export default Navbar;
