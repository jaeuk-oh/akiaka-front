// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>mypage</h2>
      <ul>
        <li>
          <Link to="/mypage/my_info">info</Link>
        </li>
        <li>
          <Link to="/mypage/my_review">review</Link>
        </li>
        <li>
          <Link to="/mypage/my_record">record</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
