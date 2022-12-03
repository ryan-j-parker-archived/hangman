import React from 'react';

export default function Popup() {
  return (
    <div className="popup-container" id="popup-container">
      <div className="popup">
        <h2 id="final-message"></h2>
        <h3 id="final-message-reveal-word"></h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  );
}
