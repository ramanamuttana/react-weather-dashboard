import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const weatherData = [
  { month: 'Jan', avgTemp: 3.0, precipitation: 60, sunHours: 50, rainyDays: 12 },
  { month: 'Feb', avgTemp: 3.7, precipitation: 49, sunHours: 77, rainyDays: 10 },
  { month: 'Mar', avgTemp: 7.3, precipitation: 57, sunHours: 114, rainyDays: 11 },
  { month: 'Apr', avgTemp: 11.0, precipitation: 57, sunHours: 164, rainyDays: 10 },
  { month: 'May', avgTemp: 15.1, precipitation: 65, sunHours: 202, rainyDays: 11 },
  { month: 'Jun', avgTemp: 18.0, precipitation: 74, sunHours: 193, rainyDays: 12 },
  { month: 'Jul', avgTemp: 20.1, precipitation: 76, sunHours: 211, rainyDays: 12 },
  { month: 'Aug', avgTemp: 19.7, precipitation: 73, sunHours: 196, rainyDays: 11 },
  { month: 'Sep', avgTemp: 16.0, precipitation: 62, sunHours: 151, rainyDays: 10 },
  { month: 'Oct', avgTemp: 11.5, precipitation: 59, sunHours: 113, rainyDays: 11 },
  { month: 'Nov', avgTemp: 6.9, precipitation: 62, sunHours: 65, rainyDays: 12 },
  { month: 'Dec', avgTemp: 3.8, precipitation: 66, sunHours: 41, rainyDays: 13 },
];

const BonnWeatherDashboard = ({ activeMenu = 'dashboard' }) => {
  const shouldShowTemperature = activeMenu === 'dashboard' || activeMenu === 'temperature';
  const shouldShowPrecipitation = activeMenu === 'dashboard' || activeMenu === 'precipitation';
  const shouldShowSunshine = activeMenu === 'dashboard' || activeMenu === 'sunshine';
  const shouldShowRainyDays = activeMenu === 'dashboard' || activeMenu === 'rainydays';

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Bonn Weather (2023)</h1>
      
      {activeMenu === 'dashboard' ? (
        <>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {shouldShowTemperature && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3>Average Temperature (°C)</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            
            {shouldShowPrecipitation && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3>Precipitation (mm)</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="precipitation" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {shouldShowSunshine && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3>Sunshine Hours</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="sunHours" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
            
            {shouldShowRainyDays && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3>Rainy Days</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rainyDays" fill="#4a90e2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {shouldShowTemperature && (
            <div style={{ marginBottom: '40px' }}>
              <h3>Average Temperature (°C)</h3>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {shouldShowPrecipitation && (
            <div style={{ marginBottom: '40px' }}>
              <h3>Precipitation (mm)</h3>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="precipitation" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {shouldShowSunshine && (
            <div>
              <h3>Sunshine Hours</h3>
              <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="sunHours" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {shouldShowRainyDays && (
            <div>
              <h3>Rainy Days</h3>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rainyDays" fill="#4a90e2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BonnWeatherDashboard;
