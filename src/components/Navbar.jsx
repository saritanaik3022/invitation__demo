import React from 'react';

export default function Navbar({ activeTab, onTabChange }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleNavClick = (id) => {
    onTabChange(id);
    if (id === 'home') {
      const el = document.getElementById('eng007-hero-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'about') {
      const el = document.getElementById('eng007-about-couple-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'gallery') {
      const el = document.getElementById('eng007-schedule-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="eng007-shared-navbar-container">
      <nav className="eng007-navbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`eng007-navbar-item ${activeTab === item.id ? 'eng007-active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
