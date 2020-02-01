import React, { Component } from "react";

class Tile extends Component {
  handleClick(event) {
    this.props.handleTileClick(event.target.innerText);
  }

  render() {
    let t = this.props.t;
    return (
      <div
        className="tile"
        style={{ background: t ? "" : "#5DA8BD" }}
        onClick={this.handleClick.bind(this)}
      >
        {t ? t : " "}
      </div>
    );
  }
}

export default Tile;
