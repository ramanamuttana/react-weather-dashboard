import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const weatherData = [
  { month: 'Jan', avgTemp: 3.0, precipitation: 60, sunHours: 50 },
  { month: 'Feb', avgTemp: 3.7, precipitation: 49, sunHours: 77 },
  { month: 'Mar', avgTemp: 7.3, precipitation: 57, sunHours: 114 },
  { month: 'Apr', avgTemp: 11.0, precipitation: 57, sunHours: 164 },
  { month: 'May', avgTemp: 15.1, precipitation: 65, sunHours: 202 },
  { month: 'Jun', avgTemp: 18.0, precipitation: 74, sunHours: 193 },
  { month: 'Jul', avgTemp: 20.1, precipitation: 76, sunHours: 211 },
  { month: 'Aug', avgTemp: 19.7, precipitation: 73, sunHours: 196 },
  { month: 'Sep', avgTemp: 16.0, precipitation: 62, sunHours: 151 },
  { month: 'Oct', avgTemp: 11.5, precipitation: 59, sunHours: 113 },
  { month: 'Nov', avgTemp: 6.9, precipitation: 62, sunHours: 65 },
  { month: 'Dec', avgTemp: 3.8, precipitation: 66, sunHours: 41 },
];

const BonnWeatherDashboard = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Bonn Weather (2023)</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h3>Average Temperature (°C)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weatherData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" activeDot={{ r: 8 }} />  # data key will take one value from the given chart of data 
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h3>Precipitation (mm)</h3>
        <ResponsiveContainer width="100%" height={300}>
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
      
      <div>
        <h3>Sunshine Hours</h3>
        <ResponsiveContainer width="100%" height={300}>
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
    </div>
  );
};

export default BonnWeatherDashboard;
