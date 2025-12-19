import React from 'react';
import './TreasureCard.css';

function TreasureCard({ count, total, clueText }) {
  return (
    <div className="treasure-container">
      <div className="counter">{count}/{total}</div>
      
      <div className="content-area">
        <div className="found-message">
          <div className="found-text">
            You have found the first tressure
          </div>
        </div>

        <div className="clue-board">
          <div className="clue-header">
            you next clue:
          </div>
          
          <div className="clue-content">
            <div className="clue-text">
              {clueText}
            </div>
          </div>
        </div>
      </div>

      <div className="foliage-top">
        <img src="/assets/Group.png" alt="" />
      </div>
      <div className="foliage-left">
        <img src="/assets/Group-1.png" alt="" />
      </div>
      <div className="foliage-right">
        <img src="/assets/Group-2.png" alt="" />
      </div>
    </div>
  );
}

export default TreasureCard;

