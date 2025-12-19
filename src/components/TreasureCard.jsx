import React from "react";
import "./TreasureCard.css";

function TreasureCard({ count, total, clueText }) {
  return (
    <div className="treasure-container">
      <div className="counter">
        {count}/{total}
      </div>

      <div className="content-area">
        <div className="found-message">
          <img
            src="/assets/found-treasure.png"
            alt="You have found a tressure"
            className="found-text"
          />
        </div>

        <div className="clue-board">
          <img
            src="/assets/next-clue.png"
            alt="your next clue:"
            className="clue-header"
          />

          <div className="clue-content">
            <img src={clueText} alt="Clue text" className="clue-text" />
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
