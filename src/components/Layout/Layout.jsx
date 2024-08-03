import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
