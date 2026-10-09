import React, { useState } from 'react';
import wishesleft from '../assets/wishesleft.svg';
import wishesright from '../assets/wishesright.svg';
import wishestop from '../assets/wishestop.svg';
import wishesbottom from '../assets/wishesbottom.svg';
import quotes from '../assets/quotes.svg';
import wishesflower from '../assets/wishesflower.svg';

const initialWishes = [
  {
    id: 1,
    message: "Congratulations on your engagement! May this lovely chapter be filled with love, laughter, unforgettable moments, and beautiful dreams. Wishing you both a lifetime of happiness and togetherness ahead.",
    authorName: "Adithya"
  },
  {
    id: 2,
    message: "May your engagement be the start of a beautiful journey where love grows deeper, laughter becomes sweeter, and each shared dream brings you ever closer. Wishing you endless happiness and joy together.",
    authorName: "Manya"
  },
  {
    id: 3,
    message: "May your engagement mark the beginning of a lifetime filled with love, joy, and unforgettable moments together.",
    authorName: "Mahesh"
  }
];

export default function Wishes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? initialWishes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === initialWishes.length - 1 ? 0 : prev + 1));
  };

  const currentWish = initialWishes[currentIndex];

  return (
    <section id="eng007-wishes-section" style={{ overflow: 'hidden' }}>
      <img src={wishesleft} alt="" className="eng007-wishes-border-left" />
      <img src={wishesright} alt="" className="eng007-wishes-border-right" />
      <img src={wishestop} alt="" className="eng007-wishes-border-top" />
      <img src={wishesbottom} alt="" className="eng007-wishes-border-bottom" />

      <div className="nimbus-container">
        <div className="eng007-wishes-container">
          <div className="eng007-wishes-header">
            <img src={quotes} alt="" className="eng007-wishes-quotation" />
            <h2 className="eng007-wishes-title">Wishes For The Couple</h2>
          </div>

          <div className="eng007-wishes-shared-wrapper">
            <div className="eng007-wishes-container-message-wrapper">
              <p className="eng007-wishes-message">{currentWish.message}</p>
              <p className="eng007-wishes-author">— {currentWish.authorName}</p>
            </div>

            <div className="eng007-wishes-dots">
              <button 
                type="button" 
                className="eng007-change-btn" 
                onClick={handlePrevious}
                aria-label="Previous wish"
              >
                &larr;
              </button>
              <span>{currentIndex + 1} / {initialWishes.length}</span>
              <button 
                type="button" 
                className="eng007-change-btn" 
                onClick={handleNext}
                aria-label="Next wish"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="eng007-wishes-flower-wrapper">
            <img src={wishesflower} alt="" className="eng007-wishes-flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
