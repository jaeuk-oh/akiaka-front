import React from 'react';
import '../styles/SignupForm.css';

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>회원가입</h2>
      <form>
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <input type="password" placeholder="비밀번호 확인" required />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupForm;
