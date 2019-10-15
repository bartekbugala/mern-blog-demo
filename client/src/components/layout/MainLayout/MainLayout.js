import React from 'react';
import NavBar from '../../features/Navbar/NavBar';

const MainLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default MainLayout;
