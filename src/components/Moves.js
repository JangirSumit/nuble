import React from "react";
import move from "../content/move.png";

function Moves({ moves }) {
  return (
    <div className="timer-moves">
      <img
        alt="move"
        src={move}
        style={{ height: "16px", width: "18px", paddingRight: "5px" }}
      />
      <span>MOVES: {moves}</span>
    </div>
  );
}

export default React.memo(Moves);
