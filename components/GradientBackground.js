// components/GradientBackground.js

import { useEffect } from 'react';

const GradientBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Your mouse move logic here
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="gradient-background"></div>;
};

export default GradientBackground;
