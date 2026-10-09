import React from 'react';
import topleft from '../assets/topleft.svg';
import topright from '../assets/topright.svg';
import bottomleft from '../assets/bottomleft.svg';
import bottomright from '../assets/bottomright.svg';
import herocouple from '../assets/herocouple.webp';

export default function Hero({ data, onOpenMaps }) {
  const mapLink = "https://maps.google.com/?q=Hall+Complex+1st+B+Cross+Road+7th+Block+Koramangala+Bengaluru";

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
                <span>{data?.bride_name || "Ananya Sharma"}</span>
                <span>&</span>
                <span>{data?.groom_name || "Aarav Verma"}</span>
              </div>
            </div>

            <div className="eng007-hero-engaged-block">
              <p className="eng007-text-accent">are getting engaged on</p>
              <p className="eng007-date">Saturday | 31st Oct | 2026</p>
            </div>

            <div className="eng007-hero-venue-block">
              <p className="eng007-venue-name">{data?.venue_name || "Hall Complex"}</p>
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
            <img src={herocouple} alt="Ananya and Aarav" />
          </div>
        </div>
      </div>
    </section>
  );
}
