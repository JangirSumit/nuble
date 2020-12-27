import React from "react";

function Footer({ onFooterButtonClick }) {
  return (
    <div className="footer" align="center">
      <p
        style={{
          color: "#2584B2",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Difficulty level
      </p>
      <button
        className="footer-buttons"
        onClick={() => onFooterButtonClick("EASY")}
      >
        {" "}
        EASY{" "}
      </button>
      <button
        className="footer-buttons"
        onClick={() => onFooterButtonClick("MEDIUM")}
      >
        {" "}
        MEDIUM{" "}
      </button>
      <button
        className="footer-buttons"
        onClick={() => onFooterButtonClick("HARD")}
      >
        {" "}
        HARD{" "}
      </button>
    </div>
  );
}

export default React.memo(Footer);
