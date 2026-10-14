import React from 'react';
import texture from '../assets/texture.svg';
import aboutleft from '../assets/aboutleft.svg';
import aboutright from '../assets/aboutright.svg';
import brideside from '../assets/brideside.svg';
import brideleaf from '../assets/brideleaf.svg';
import groomside from '../assets/groomside.svg';
import groomleaf from '../assets/groomleaf.svg';
import anitaPhoto from '../assets/ananya_portrait.png';
import raviPhoto from '../assets/aarav_portrait.png';

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
          {/* Anita D.N Profile */}
          <div className="eng007-about-couple-bride">
            <div className="eng007-about-couple-bride-img">
              <img src={anitaPhoto} alt="Anita D.N" className="eng007-couple-photo" />
              <img src={brideside} alt="" className="eng007-bride-side" />
            </div>
            <div className="eng007-about-couple-bride-info">
              <h3 className="eng007-couple-name">Anita D.N</h3>
              <p className="eng007-couple-desc">
                A free spirit wrapped in grace, Anita moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.
              </p>
              <img src={brideleaf} alt="" className="eng007-bride-leaf" />
            </div>
          </div>

          {/* Ravi V.N Profile */}
          <div className="eng007-about-couple-groom">
            <div className="eng007-about-couple-groom-info">
              <h3 className="eng007-couple-name">Ravi V.N</h3>
              <p className="eng007-couple-desc">
                A gentle soul with a warm heart and steadfast dedication, Ravi brings calm reassurance, integrity, and warmth to every moment shared together.
              </p>
              <img src={groomleaf} alt="" className="eng007-groom-leaf" />
            </div>
            <div className="eng007-about-couple-groom-img">
              <img src={raviPhoto} alt="Ravi V.N" className="eng007-couple-photo" />
              <img src={groomside} alt="" className="eng007-groom-side" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
