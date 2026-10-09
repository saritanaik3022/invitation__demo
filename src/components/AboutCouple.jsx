import React from 'react';
import texture from '../assets/texture.svg';
import aboutleft from '../assets/aboutleft.svg';
import aboutright from '../assets/aboutright.svg';
import brideside from '../assets/brideside.svg';
import brideleaf from '../assets/brideleaf.svg';
import groomside from '../assets/groomside.svg';
import groomleaf from '../assets/groomleaf.svg';
import ananyaPhoto from '../assets/ananya_portrait.png';
import aaravPhoto from '../assets/aarav_portrait.png';

export default function AboutCouple() {
  return (
    <section id="eng007-about-couple-section">
      <img src={texture} alt="" className="eng007-about-couple-texture" />
      
      <div className="eng007-about-couple-left">
        <img src={aboutleft} alt="" />
      </div>
      <div className="eng007-about-couple-right">
        <img src={aboutright} alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-about-couple-container">
          {/* Ananya Sharma Profile */}
          <div className="eng007-about-couple-bride">
            <div className="eng007-about-couple-bride-img">
              <img src={ananyaPhoto} alt="Ananya Sharma" className="eng007-couple-photo" />
              <img src={brideside} alt="" className="eng007-bride-side" />
            </div>
            <div className="eng007-about-couple-bride-info">
              <h3 className="eng007-couple-name">Ananya Sharma</h3>
              <p className="eng007-couple-parents">D/o Mr. Rajesh & Mrs. Sunita Sharma</p>
              <p className="eng007-couple-desc">
                A free spirit wrapped in grace, Ananya moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.
              </p>
              <img src={brideleaf} alt="" className="eng007-bride-leaf" />
            </div>
          </div>

          {/* Aarav Verma Profile */}
          <div className="eng007-about-couple-groom">
            <div className="eng007-about-couple-groom-info">
              <h3 className="eng007-couple-name">Aarav Verma</h3>
              <p className="eng007-couple-parents">S/o Mr. Anand & Mrs. Kavitha Verma</p>
              <p className="eng007-couple-desc">
                A gentle soul with a poet's heart and an architect's mind, Aarav finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.
              </p>
              <img src={groomleaf} alt="" className="eng007-groom-leaf" />
            </div>
            <div className="eng007-about-couple-groom-img">
              <img src={aaravPhoto} alt="Aarav Verma" className="eng007-couple-photo" />
              <img src={groomside} alt="" className="eng007-groom-side" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
