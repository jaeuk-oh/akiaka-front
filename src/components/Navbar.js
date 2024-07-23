// // Navbar.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = ({ isLoggedIn, user, onLogout }) => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const handleMyPageClick = () => {
//     navigate('/mypage');
//   };
  
//   // 버튼에 onClick 이벤트 추가
//   <button onClick={handleMyPageClick}>My Page</button>
  

//   return (
//     <nav className="navbar">
//       <ul className="navbar-left">
//         <li>
//           <button onClick={() => handleNavigation('/')}>O늘의 meta</button>
//         </li>
//       </ul>
//       <ul className="navbar-right">
//         {isLoggedIn ? (
//           <>
//             <li>
//               <span>{user.username}</span>
//             </li>
//             <li>
//               <button onClick={handleMyPageClick}>마이페이지</button>
//             </li>
//             <li>
//               <button onClick={onLogout}>로그아웃</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <button onClick={() => handleNavigation('/login')}>로그인</button>
//             </li>
//             <li>
//               <button onClick={() => handleNavigation('/signup')}>회원가입</button>
//             </li>
//             <li>
//               <button onClick={handleMyPageClick}>마이페이지</button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, user, onLogout }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMyPageClick = () => {
    navigate('/mypage/my_info');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>
          <button onClick={() => handleNavigation('/')}>O늘의 meta</button>
        </li>
      </ul>
      <ul className="navbar-right">
        {isLoggedIn ? (
          <>
            <li>
              <span>{user.username}</span>
            </li>
            <li>
              <button onClick={handleMyPageClick}>My Page</button>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => handleNavigation('/login')}>Login</button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/signup')}>Sign Up</button>
            </li>
            <li>
              <button onClick={handleMyPageClick}>My Page</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;



