import React from 'react';
import topleft from '../assets/topleft.svg';
import bottomright from '../assets/bottomright.svg';

export default function Location() {
  const venueAddress = "Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India";
  const venueLink = "https://www.google.com/maps?q=Hall+Complex,+1st+B+Cross+Road,+7th+Block,+Koramangala,+Bengaluru,+Karnataka,+India";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(venueAddress)}&output=embed`;

  return (
    <section id="eng007-location-section">
      <div className="eng007-location-decoration eng007-schedule-topleft-decoration">
        <img src={topleft} alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-bottomright-decoration">
        <img src={bottomright} alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-topright-decoration">
        <img src={topleft} alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-bottomleft-decoration">
        <img src={bottomright} alt="" />
      </div>

      <div className="nimbus-container">
        <h2 className="eng007-location-main-title">Location</h2>
        
        <div className="eng007-location-container">
          {/* Map Embed Column */}
          <div className="eng007-location-map-wrapper">
            <div className="eng007-location-map-frame"></div>
            <iframe
              title="Venue Location Map"
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="eng007-location-map"
            ></iframe>
          </div>

          {/* Details Card Column */}
          <div className="eng007-location-card">
            <div className="eng007-location-card-frame"></div>
            <p className="eng007-location-date">31ST OCTOBER, 2026</p>
            <h3 className="eng007-location-name">Hall Complex</h3>
            <p className="eng007-location-description">{venueAddress}</p>
            <button
              type="button"
              onClick={() => window.open(venueLink, '_blank')}
              className="eng007-location-maps"
            >
              <div className="eng007-location-maps-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="eng007-location-maps-text">Open in Maps</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
