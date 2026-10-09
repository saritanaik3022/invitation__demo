import React, { useState, useEffect } from 'react';
import countflowerleft from '../assets/countflowerleft.svg';
import countflowerright from '../assets/countflowerright.svg';

export default function Countdown({ targetDate = "2026-10-31T11:00:00" }) {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="eng007-countdown-section">
      <div className="eng007-countdown-topleft">
        <img src={countflowerleft} alt="" />
      </div>
      <div className="eng007-countdown-bottomright">
        <img src={countflowerright} alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-countdown-container">
          <p className="eng007-countdown-title">Let the countdown begin</p>

          <div className="eng007-countdown">
            <div className="time-box">
              <span className="num">{timeLeft.days}</span>
              <span className="label">DAYS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.hours}</span>
              <span className="label">HRS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.minutes}</span>
              <span className="label">MINS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.seconds}</span>
              <span className="label">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
