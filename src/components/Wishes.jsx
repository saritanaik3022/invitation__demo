import React, { useState } from 'react';
import wishesleft from '../assets/wishesleft.svg';
import wishesright from '../assets/wishesright.svg';
import wishestop from '../assets/wishestop.svg';
import wishesbottom from '../assets/wishesbottom.svg';
import quotes from '../assets/quotes.svg';
import wishesflower from '../assets/wishesflower.svg';
import wishesCouple from '../assets/wishes_couple.png';

const weddingBlessings = [
  "May your journey together be filled with endless love, happiness, and beautiful memories.",
  "Wishing you both a lifetime of love, laughter, and joy as you embark on this wonderful new chapter together.",
  "May each day of your married life bring deeper companionship, warm smiles, and everlasting happiness."
];

export default function Wishes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? weddingBlessings.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === weddingBlessings.length - 1 ? 0 : prev + 1));
  };

  const currentBlessing = weddingBlessings[currentIndex];

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

          {/* Centered Couple Photo/Illustration */}
          <div className="eng007-wishes-couple-frame">
            <img 
              src={wishesCouple} 
              alt="Anita & Ravi" 
              className="eng007-wishes-couple-img" 
            />
          </div>

          <div className="eng007-wishes-shared-wrapper">
            <div className="eng007-wishes-container-message-wrapper">
              <p className="eng007-wishes-message">“{currentBlessing}”</p>
            </div>

            <div className="eng007-wishes-dots">
              <button 
                type="button" 
                className="eng007-change-btn" 
                onClick={handlePrevious}
                aria-label="Previous blessing"
              >
                &larr;
              </button>
              <span>{currentIndex + 1} / {weddingBlessings.length}</span>
              <button 
                type="button" 
                className="eng007-change-btn" 
                onClick={handleNext}
                aria-label="Next blessing"
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
