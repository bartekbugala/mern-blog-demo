import React from 'react';
import NavBar from '../../features/Navbar/NavBar';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar />
      {children}
    </PageContainer>
  </div>
);

export default MainLayout;
