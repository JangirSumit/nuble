import { Component } from "react";

class Tile extends Component {
  render() {
    return (
      <div key={t} className="tile" style={{ background: t ? "" : "#5DA8BD" }}>
        {t ? t : " "}
      </div>
    );
  }
}
