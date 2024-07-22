/* 여기나 작업하자.. */

import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="sidebar">
      <h3>마이페이지</h3>
      <ul>
        <li className={selectedTab === '내정보' ? 'active' : ''} onClick={() => setSelectedTab('내정보')}>내정보</li>
        <li className={selectedTab === '내리뷰' ? 'active' : ''} onClick={() => setSelectedTab('내리뷰')}>내리뷰</li>
        <li className={selectedTab === '활동기록' ? 'active' : ''} onClick={() => setSelectedTab('활동기록')}>활동기록</li>
      </ul>
    </div>
  );
}

export default Sidebar;
