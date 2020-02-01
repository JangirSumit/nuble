import React, { Component } from "react";
import Tile from "./tile";

class Tiles extends Component {
  handleTileClick(val) {
    handleTileClick(this.props.tiles.indexOf(parseInt(val)));
  }
  render() {
    return (
      <>
        {this.props.tiles.map(t => {
          return (
            <Tile
              t={t}
              key={t}
              handleTileClick={this.handleTileClick.bind(this)}
            />
          );
        })}
      </>
    );
  }
}

export default Tiles;
