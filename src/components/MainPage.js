import React, { useState, useEffect } from 'react';
import '../styles/MainPage.css';

const movieItems = [
  { id: 1, content: '영화 1' },
  { id: 2, content: '영화 2' },
  { id: 3, content: '영화 3' },
  { id: 4, content: '영화 4' },
  { id: 5, content: '영화 5' },
  { id: 6, content: '영화 6' },
];

const musicItems = [
  { id: 1, content: '음악 1' },
  { id: 2, content: '음악 2' },
  { id: 3, content: '음악 3' },
  { id: 4, content: '음악 4' },
  { id: 5, content: '음악 5' },
  { id: 6, content: '음악 6' },
];

const bookItems = [
  { id: 1, content: '책 1' },
  { id: 2, content: '책 2' },
  { id: 3, content: '책 3' },
  { id: 4, content: '책 4' },
  { id: 5, content: '책 5' },
  { id: 6, content: '책 6' },
];

const Carousel = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsToShow(1);
      } else if (window.innerWidth < 900) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 실행
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (currentIndex < items.length - itemsToShow) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <button className="carousel-button prev-button" onClick={prev}>◀</button>
      <div className="carousel-container">
        <div className="carousel-items">
          {items.slice(currentIndex, currentIndex + itemsToShow).map(item => (
            <div key={item.id} className="carousel-item">
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next-button" onClick={next}>▶</button>
      <div className="dots">
        {Array.from({ length: Math.ceil(items.length / itemsToShow) }).map((_, index) => (
          <span key={index} className={`dot ${index === Math.floor(currentIndex / itemsToShow) ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="main-container">
      <Carousel title="영화" items={movieItems} />
      <Carousel title="음악" items={musicItems} />
      <Carousel title="책" items={bookItems} />
    </div>
  );
};

export default MainPage;
