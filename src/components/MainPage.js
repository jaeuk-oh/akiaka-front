import React from 'react';
import '../styles/MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <h2>웃긴 작품</h2>
      <div className="works">
        <img src="work1.jpg" alt="작품1" />
        <img src="work2.jpg" alt="작품2" />
        <img src="work3.jpg" alt="작품3" />
        <img src="work4.jpg" alt="작품4" />
      </div>
      <h2>무서운 작품</h2>
      <div className="works">
        <img src="work1.jpg" alt="작품1" />
        <img src="work2.jpg" alt="작품2" />
        <img src="work3.jpg" alt="작품3" />
        <img src="work4.jpg" alt="작품4" />
      </div>
      <h2>액션 작품</h2>
      <div className="works">
        <img src="work1.jpg" alt="작품1" />
        <img src="work2.jpg" alt="작품2" />
        <img src="work3.jpg" alt="작품3" />
        <img src="work4.jpg" alt="작품4" />
      </div>
    </div>
  );
}

export default MainPage;
