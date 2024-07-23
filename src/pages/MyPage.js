// MyPage.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MyInfo from './MyInfo';
import MyReview from './MyReview';
import MyRecord from './MyRecord';
import '../styles/MyPage.css';

const MyPage = () => {
  return (
    <div className="mypage-body">
      <Sidebar />
      <div className="mypage-container">
        <Routes>
          <Route path="my_info" element={<MyInfo />} />
          <Route path="my_review" element={<MyReview />} />
          <Route path="my_record" element={<MyRecord />} />
        </Routes>
      </div>
    </div>
  );
};

export default MyPage;
