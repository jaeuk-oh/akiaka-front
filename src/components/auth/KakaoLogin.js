import React, { useEffect } from 'react';
import '../../styles/Auth.css';
import KakaoLogo from '../../assets/btn_kakao 1.svg'; // SVG 파일 임포트

const KakaoLogin = () => {
  useEffect(() => {
    // Kakao SDK 초기화
    const initKakao = () => {
      window.Kakao.init('YOUR_KAKAO_APP_KEY');
    };

    if (!window.Kakao.isInitialized()) {
      initKakao();
    }
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        console.log(authObj);
        // 사용자 정보 요청
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function(res) {
            console.log(res);
          },
          fail: function(error) {
            console.log(error);
          }
        });
      },
      fail: function(err) {
        console.log(err);
      }
    });
  };

  return (
    <button onClick={loginWithKakao} className="kakao-login-button">
      <img src={KakaoLogo} alt="Kakao Logo" className="kakao-logo" />
      Kakao
    </button>
  );
};

export default KakaoLogin;
