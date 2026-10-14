import React, { useState } from 'react';
import texture from '../assets/texture.svg';
import quotes from '../assets/quotes.svg';
import bordershort from '../assets/bordershort.svg';
import borderlong from '../assets/borderlong.svg';
import wishesflower from '../assets/wishesflower.svg';
import countflowerleft from '../assets/countflowerleft.svg';

export default function SendWishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please provide your name and heartfelt wishes.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="eng007-sendwishes-section">
      <img src={texture} alt="" className="eng007-sendwishes-texture" />
      
      <div className="eng007-sendwishes-leftflower">
        <img src={countflowerleft} alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-sendwishes-container">
          {/* Left Text */}
          <div className="eng007-sendwishes-left">
            <img src={quotes} alt="" className="eng007-sendwishes-quotation" />
            <h2 className="eng007-sendwishes-title">Send your wishes</h2>
            <p className="eng007-sendwishes-subtitle">
              “Leave your blessings and spread a little more love”
            </p>
          </div>

          {/* Right Form Card */}
          <div className="eng007-sendwishes-right">
            <div className="eng007-sendwishes-box">
              <div className="eng007-sendwishes-border-top">
                <img src={bordershort} alt="" />
              </div>
              <div className="eng007-sendwishes-border-right">
                <img src={borderlong} alt="" />
              </div>
              <div className="eng007-sendwishes-border-bottom">
                <img src={bordershort} alt="" />
              </div>
              <div className="eng007-sendwishes-border-left">
                <img src={borderlong} alt="" />
              </div>

              <div className="eng007-shared-sendwishes">
                {submitted ? (
                  <div className="sendwishes-success-msg">
                    <p style={{ fontFamily: 'Lora, serif', color: '#697358', fontSize: '1.4rem', textAlign: 'center', margin: '2rem 0' }}>
                      ✨ Thank you for sending your warm blessings to Anita &amp; Ravi!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="sendwishes-form">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="sendwishes-input"
                      />
                    </div>
                    <div className="input-group">
                      <textarea
                        placeholder="Your Wishes"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="sendwishes-textarea"
                      />
                    </div>
                    {error && (
                      <p style={{ color: '#b91c1c', fontSize: '0.9rem', margin: '0.5rem 0', textAlign: 'center' }}>
                        {error}
                      </p>
                    )}
                    <button type="submit" className="sendwishes-submit-btn">
                      Submit
                    </button>
                  </form>
                )}
              </div>

              <img src={wishesflower} alt="" className="eng007-sendwishes-wishesflower" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
