import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">
      <h2>로그인</h2>
      <form>
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <button type="submit">로그인</button>
      </form>
      <div className="signup-link">
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default LoginForm;
