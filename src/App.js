import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ background: "#F4B323", height: "80px" }}></div>
      <div style={{}}>
        <div
          style={{
            background: "#65B7CD",
            width: "500px",
            height: "500px",
            display: "inline-block",
            verticalAlign: "top"
          }}
        ></div>
        <div
          style={{
            background: "#96E5F4",
            height: "650px",
            width: "400px",
            display: "inline-block",
            verticalAlign: "top"
          }}
        >
          <h3 style={{ color: "#2582BF" }}>Your Moves</h3>
        </div>
      </div>
      <div style={{ color: "#72D3F3", display: "inline-block" }}>
        <p>Difficulty level</p>
        <button
          style={{
            background: "#B9E7F7",
            padding: "10px",
            width: "120px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px"
          }}
        >
          EASY
        </button>
        <button
          style={{
            background: "#B9E7F7",
            padding: "10px",
            width: "120px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px"
          }}
        >
          MEDIUM
        </button>
        <button
          style={{
            background: "#B9E7F7",
            padding: "10px",
            width: "120px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px"
          }}
        >
          HARD
        </button>
        <button
          style={{
            background: "#B9E7F7",
            padding: "10px",
            width: "120px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px"
          }}
        >
          CUSTOM
        </button>
      </div>
    </div>
  );
}

export default App;
