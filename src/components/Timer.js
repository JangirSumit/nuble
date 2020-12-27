import React from "react";
import { millisToMinutesAndSeconds } from "../helper";
import hourglass from "../content/hourglass.png";

function Timer({ time }) {
  return (
    <div className="timer-moves">
      <img
        alt="move"
        src={hourglass}
        style={{ height: "16px", width: "18px", paddingRight: "5px" }}
      />
      TIME: {millisToMinutesAndSeconds(time)}
    </div>
  );
}

export default React.memo(Timer);
