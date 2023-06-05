import React, { useEffect } from 'react';
import ModelViewer from '@metamask/logo';

const Signuplogo = ({ logoImage, logoColor, logoSize, logoPosition }) => {
  useEffect(() => {
    const viewer = ModelViewer({
      pxNotRatio: true,
      width: 90,
      height: 90,
      followMouse: true,
      slowDrift: false,

      // Customize logo appearance
      logo: {
        // Choose the desired logo: 'mmCircle', 'mmLetterCircle', 'mmLetterSquare'
        image: logoImage || 'mmLetterCircle',

        // Adjust color of the logo
        color: logoColor || '#0000', // Use your preferred color code
        scale: 2, // Adjust the scale based on the logo size
      },
    });

    const container = document.getElementById('logo-container');
    container.appendChild(viewer.container);

    viewer.lookAt({
      x: 10,
      y: 10,
    });

    viewer.setFollowMouse(true);

    // Set the logo size using CSS
    container.style.width = `${100}px`;
    container.style.height = `${100}px`;

    // Set the logo position using CSS
    container.style.position = 'absolute';
    container.style.left = `${47}vw`;
    container.style.top = `${12}vh`;

    return () => {
      container.removeChild(viewer.container);
    };
  }, [logoImage, logoColor, logoSize, logoPosition]);

  return <div id="logo-container"></div>;
};

export default Signuplogo;