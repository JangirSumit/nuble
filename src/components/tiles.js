import React, { Component } from "react";
import Tile from "./Tile";

class Tiles extends Component {
  handleTileClick(val) {
    this.props.handleTileClick(
      this.props.tiles.indexOf(parseInt(val)),
      parseInt(val)
    );
  }
  render() {
    return (
      <>
        {this.props.tiles.map((t) => {
          return (
            <Tile
              t={t}
              key={t}
              handleTileClick={this.handleTileClick.bind(this)}
              gameTiles={this.props.gameTiles}
            />
          );
        })}
      </>
    );
  }
}

export default Tiles;
