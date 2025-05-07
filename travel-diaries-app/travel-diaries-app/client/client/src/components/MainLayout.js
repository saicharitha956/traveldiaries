// src/components/MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
