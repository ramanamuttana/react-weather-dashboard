import React, { useState } from 'react';
import BonnWeatherDashboard from './BonnWeatherDashboard';
import SideMenu from './SideMenu';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  return (
    <div className="App">
      <SideMenu onMenuItemClick={setActiveMenuItem} />
      <div className="main-content">
        <BonnWeatherDashboard activeMenu={activeMenuItem} />
      </div>
    </div>
  );
}

export default App;
