import React from 'react';
import Navbar from '../../features/Navbar/Navbar';

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default MainLayout;
