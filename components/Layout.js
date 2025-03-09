// components/Layout.js

import React, { useEffect } from 'react';
import Navbar from './NavBar';
import WindowSizeLogger from './WindowSizeLogger';
import Footer from './Footer';
import GradientBackground from './GradientBackground';
import NightmodeButton from './NightModeButton';

const Layout = ({ children }) => {
  useEffect(() => {
    // Client-side initialization logic here

    // Example: Add a console log to verify if this block runs on the client side
  }, []);

  return (
    <>
    {/* <GradientBackground /> */}
      <Navbar />
      <WindowSizeLogger />
      <NightmodeButton />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
