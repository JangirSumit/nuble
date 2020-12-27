import React from "react";

function Buttons({ handleUndo, handleNewGame, saveGameState }) {
  return (
    <>
      <button
        className="left-side-box-buttons"
        onClick={() => handleUndo()}
        style={{
          background: "#F7941D",
        }}
      >
        UNDO
      </button>
      <button
        className="left-side-box-buttons"
        onClick={() => handleNewGame()}
        style={{
          background: "#8CC63E",
        }}
      >
        NEW GAME
      </button>
      <button
        className="left-side-box-buttons"
        style={{
          background: "#CF145B",
        }}
        onClick={() => saveGameState()}
      >
        SAVE
      </button>
    </>
  );
}

export default React.memo(Buttons);
