// WindowSizeLogger.js

import React, { useEffect, useState } from 'react';

const WindowSizeLogger = ({ onResize, children, noModal, closeModal }) => {
    // const windowWidth = props.windowSize.width;
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    const newSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // if width is greater than 768 at any time, dismount the modal.
    if (window.innerWidth > 768) {
        noModal();
      }

    setWindowSize(newSize);

    // Callback to notify the parent component about the resize
    onResize && onResize(newSize);
  };

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      // Initial size
      handleResize();

      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <>{children}</>;
};

export default WindowSizeLogger;
