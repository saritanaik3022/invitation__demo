import React from 'react';
import topleft from '../assets/topleft.svg';
import topright from '../assets/topright.svg';
import bottomleft from '../assets/bottomleft.svg';
import bottomright from '../assets/bottomright.svg';
import herocouple from '../assets/herocouple.webp';

export default function Hero({ data, onOpenMaps }) {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Shri+Venkataramana+Temple,+Balegadde,+Honnavar,+Uttara+Kannada,+Karnataka,+India";

  return (
    <section id="eng007-hero-section">
      <div className="eng007-hero-border-tilt"></div>
      
      {/* Corner floral decorations */}
      <div className="eng007-hero-topleft">
        <img src={topleft} alt="Floral Top Left" />
      </div>
      <div className="eng007-hero-topright">
        <img src={topright} alt="Floral Top Right" />
      </div>
      <div className="eng007-hero-bottomleft">
        <img src={bottomleft} alt="Floral Bottom Left" />
      </div>
      <div className="eng007-hero-bottomright">
        <img src={bottomright} alt="Floral Bottom Right" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-hero-container">
          <div className="eng007-hero-left">
            <div className="eng007-hero-save-block">
              <p className="eng007-text-accent">Save the date</p>
              <div className="eng007-names">
                <span>{data?.bride_name || "Anita D.N"}</span>
                <span>&</span>
                <span>{data?.groom_name || "Ravi V.N"}</span>
              </div>
            </div>

            <div className="eng007-hero-engaged-block">
              <p className="eng007-text-accent">are getting married on</p>
              <p className="eng007-date">Thursday | 29th Oct | 2026</p>
            </div>

            <div className="eng007-hero-venue-block">
              <p className="eng007-venue-name">{data?.venue_name || "Shri Venkataramana Temple, Balegadde"}</p>
              <p style={{ fontFamily: 'Lora, serif', color: '#697358', fontSize: '1.4rem', margin: '-1rem 0 0' }}>
                Honnavar, Uttara Kannada, Karnataka
              </p>
              <button 
                type="button" 
                className="eng007-maps-btn"
                onClick={() => window.open(mapLink, '_blank')}
              >
                Open in Maps
              </button>
            </div>
          </div>

          <div className="eng007-hero-right">
            <img src={herocouple} alt="Anita and Ravi" />
          </div>
        </div>
      </div>
    </section>
  );
}
