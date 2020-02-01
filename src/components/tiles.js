import { Component } from "react";
import { Tile } from "./tile";

class Tiles extends Component {
  render() {
    return (
      <>
        {this.props.tiles.map(t => {
          return <Tile t={t}></Tile>;
        })}
      </>
    );
  }
}
