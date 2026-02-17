'use client'; // This component uses client-side interactivity

// import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles

const PopupEdit = () => {
  return (
    <div>
      <p>Click the button to open a popup.</p>
      {/* Use the Popup component, triggered by a button */}
      <Popup trigger={<button> Click to open popup </button>} position="right center">
        {/* Content inside the popup */}
        <div>
          <h3>Popup Content</h3>
          <p>This is a simple popup using reactjs-popup.</p>
          {/* Optional: Add a close button here if desired */}
        </div>
      </Popup>
    </div>
  );
};

export default PopupEdit ;

