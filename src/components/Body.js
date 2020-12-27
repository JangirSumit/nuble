import React from "react";
import Tiles from "./Tiles";

function Body({ tiles, handleTileClick, gameTiles }) {
  return (
    <div align="center">
      <div className="center">
        {
          <Tiles
            tiles={tiles}
            handleTileClick={handleTileClick}
            gameTiles={gameTiles}
          />
        }
      </div>
    </div>
  );
}

export default React.memo(Body);
