import React from 'react';
import groomleaf from '../assets/groomleaf.svg';
import brideleaf from '../assets/brideleaf.svg';
import countflowerleft from '../assets/countflowerleft.svg';
import wishesflower from '../assets/wishesflower.svg';

export default function Schedule() {
  const events = [
    {
      id: 1,
      eventName: "Haldi Ceremony",
      eventDate: "28 October 2026",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    },
    {
      id: 2,
      eventName: "Wedding Ceremony / Muhurtham",
      eventDate: "29 October 2026",
      eventTime: "11.58 A.M",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="14" r="5" />
          <circle cx="15" cy="14" r="5" />
          <path d="M12 7l1.5-2.5h-3L12 7z" />
          <path d="M10.5 4.5l1.5-1.5 1.5 1.5" />
        </svg>
      )
    },
    {
      id: 3,
      eventName: "Wedding Reception",
      eventDate: "30 October 2026",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M12 17v5" />
          <path d="M7 3h10l-2 9a3 3 0 0 1-3 2.5A3 3 0 0 1 9 12L7 3z" />
          <path d="M5 7h14" />
        </svg>
      )
    }
  ];

  return (
    <section id="eng007-schedule-section">
      <div className="nimbus-container">
        <div className="eng007-schedule-container">
          <header className="eng007-schedule-header">
            <img src={groomleaf} alt="" className="eng007-schedule-leaf eng007-left" />
            <h2 className="eng007-schedule-title">Wedding celebration begins</h2>
            <img src={brideleaf} alt="" className="eng007-schedule-leaf eng007-right" />
          </header>

          <div className="eng007-schedule-carousel-wrapper">
            <div className="eng007-schedule-cards-grid">
              {events.map((event) => (
                <div key={event.id} className="eng007-schedule-card">
                  <div className="eng007-card-frame"></div>
                  <div className="eng007-card-countdown-flower">
                    <img src={countflowerleft} alt="" />
                  </div>

                  <div className="eng007-card-content-inner">
                    <div className="eng007-card-icon">
                      {event.iconSvg}
                    </div>

                    <div className="eng007-card-event-block">
                      <h3 className="eng007-card-event-name">{event.eventName}</h3>
                      <p className="eng007-card-event-time">
                        {event.eventDate}
                        {event.eventTime && (
                          <span className="eng007-card-event-exact-time">
                            Time: {event.eventTime}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="eng007-card-wishes-flower">
                      <img src={wishesflower} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
