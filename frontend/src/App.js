import React from 'react';
import './App.css'; // Local styles for App component
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './global.css'; // Import global styles here to apply globally

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container"> 
        <Outlet /> 
      </div>
    </>
  );
}

export default App;
