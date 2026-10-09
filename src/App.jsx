import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AboutCouple from './components/AboutCouple';
import Wishes from './components/Wishes';
import SendWishes from './components/SendWishes';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const eventData = {
    bride_name: "Ananya Sharma",
    groom_name: "Aarav Verma",
    main_event_date: "2026-10-31T11:00:00",
    venue_name: "Hall Complex",
    venue_address: "Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India"
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const heroEl = document.getElementById('eng007-hero-section');
      const aboutEl = document.getElementById('eng007-about-couple-section');
      const scheduleEl = document.getElementById('eng007-schedule-section');

      if (scheduleEl && scrollPos >= scheduleEl.offsetTop) {
        setActiveTab('gallery');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveTab('about');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="eng007-page-root">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <FloatingControls />
      
      <main id="home">
        <Hero data={eventData} />
        <Countdown targetDate={eventData.main_event_date} />
        <div id="about">
          <AboutCouple />
        </div>
        <Wishes />
        <SendWishes />
        <div id="gallery">
          <Schedule />
        </div>
        <Location />
      </main>

      <Footer />
    </div>
  );
}
