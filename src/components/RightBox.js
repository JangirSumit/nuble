import React from "react";

function RightBox({ moves }) {
  return (
    <div className="right-side-box">
      <h3 style={{ color: "#2582BF" }}>Your Moves</h3>
      {moves.map((m, i) => {
        return (
          <p key={i} style={{ fontSize: "16px", fontWeight: "bold" }}>
            {i + 1}
            {"."} ({m.val}){":"} [{m.from[0] + 1}
            {" , "}
            {m.from[1] + 1}]{"->"} [{m.to[0] + 1}
            {" , "}
            {m.to[1] + 1}]
          </p>
        );
      })}
    </div>
  );
}

export default React.memo(RightBox);
