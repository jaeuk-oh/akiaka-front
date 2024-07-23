// GoogleLogin.js

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../../styles/Auth.css';

const GoogleLoginComponent = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // 추가적인 사용자 정보 처리 로직
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      className="google-login-button"
    />
  );
};

export default GoogleLoginComponent;
