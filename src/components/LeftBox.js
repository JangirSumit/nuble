import React from "react";
import nuble from "../content/nuble-logo.png";
import menuIcon from "../content/menu.png";

function LeftBox({ showRightBox }) {
  return (
    <div
      style={{
        background: "#F4B323",
        height: "80px",
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        color: "#fff",
        display: "inline-block",
      }}
    >
      <img
        alt="nuble"
        src={nuble}
        style={{
          width: "64px",
          height: "64px",
          paddingTop: "10px",
          verticalAlign: "middle",
          paddingRight: "10px",
        }}
      ></img>
      <span style={{ verticalAlign: "middle" }}>NUBLE</span>
      <img
        alt="nuble"
        src={menuIcon}
        className="mobile-menu"
        onClick={() => showRightBox()}
        style={{
          width: "45px",
          height: "40px",
          marginTop: "20px",
          verticalAlign: "middle",
          marginRight: "10px",
          float: "right",
          display: "none",
        }}
      ></img>
    </div>
  );
}

export default React.memo(LeftBox);
