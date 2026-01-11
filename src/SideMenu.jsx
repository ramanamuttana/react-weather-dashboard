import React, { useState } from 'react';

const SideMenu = ({ onMenuItemClick }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'temperature', label: 'Temperature', icon: '🌡️' },
    { id: 'precipitation', label: 'Precipitation', icon: '🌧️' },
    { id: 'sunshine', label: 'Sunshine Hours', icon: '☀️' },
    { id: 'rainydays', label: 'Rainy Days', icon: '🌧️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    onMenuItemClick(itemId);
  };

  return (
    <div className="side-menu">
      <div className="menu-header">
        <h2>Weather</h2>
      </div>
      <nav className="menu-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="menu-footer">
        <p>v 1.2</p>
      </div>
    </div>
  );
};

export default SideMenu;
