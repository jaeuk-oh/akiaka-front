// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../components/auth/KakaoLogin';
import GoogleLoginComponent from '../components/auth/GoogleLogin';
import '../styles/LoginForm.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 로직을 여기에 추가합니다.
    onLogin(email);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>회원이 아니신가요? <span onClick={() => navigate('/signup')}>회원가입</span></p>
      </div>
      <div className="social-login">
        <KakaoLogin />
        <GoogleLoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
