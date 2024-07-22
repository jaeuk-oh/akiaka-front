/* 여기나 작업하자.. */

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/MyPage.css';

function MyPage() {
  const [selectedTab, setSelectedTab] = useState('내정보');

  return (
    <div className="mypage">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        {selectedTab === '내정보' && <div>내정보 내용</div>}
        {selectedTab === '내리뷰' && <div>내리뷰 내용</div>}
        {selectedTab === '활동기록' && <div>활동기록 내용</div>}
      </div>
    </div>
  );
}

export default MyPage;
