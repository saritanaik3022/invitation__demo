import React from 'react';
import groomleaf from '../assets/groomleaf.svg';
import brideleaf from '../assets/brideleaf.svg';
import countflowerleft from '../assets/countflowerleft.svg';
import wishesflower from '../assets/wishesflower.svg';

export default function Schedule() {
  const events = [
    {
      id: 1,
      eventName: "Ring Ceremony",
      eventTime: "11:00 AM",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="14" r="7" />
          <path d="M12 7l2-3h-4l2 3z" />
          <path d="M10 4l2-2 2 2" />
        </svg>
      )
    },
    {
      id: 2,
      eventName: "Cake Cutting",
      eventTime: "11:30 AM",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v3" />
          <path d="M12 8v3" />
          <path d="M17 8v3" />
          <path d="M7 4h.01" />
          <path d="M12 4h.01" />
          <path d="M17 4h.01" />
        </svg>
      )
    },
    {
      id: 3,
      eventName: "Lunch",
      eventTime: "01:00 PM",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v8" />
          <path d="M6 2v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
          <path d="M8 11v11" />
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
            <h2 className="eng007-schedule-title">Engagement celebration begins</h2>
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
                      <p className="eng007-card-event-time">{event.eventTime}</p>
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
