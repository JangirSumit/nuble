import React from "react";
import logo from "./logo.svg";
import "./App.css";
import move from "./content/move.png";
import hourglass from "./content/hourglass.png";

function App() {
  let items = [...Array(15).keys()];
  let tiles = [...items.map(t => t + 1), null];
  return (
    <div className="App">
      <div style={{ background: "#F4B323", height: "80px" }}></div>
      <div style={{}}>
        <div
          style={{
            width: "150px",
            height: "300px",
            display: "inline-block",
            marginTop: "100px",
            float: "left",
            marginLeft: "20px"
          }}
        >
          <div
            style={{
              color: "#2582BF",
              padding: "5px 10px",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "left"
            }}
          >
            <img
              alt="move"
              src={move}
              style={{ height: "16px", width: "18px", paddingRight: "5px" }}
            />
            <span>MOVES</span>
          </div>
          <div
            style={{
              color: "#2582BF",
              padding: "5px 10px",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "left"
            }}
          >
            <img
              alt="move"
              src={hourglass}
              style={{ height: "16px", width: "18px", paddingRight: "5px" }}
            />
            TIME
          </div>
          <br></br>
          <button
            style={{
              background: "#F7941D",
              width: "150px",
              color: "#fff",
              marginTop: "15px",
              padding: "10px",
              fontWeight: "bold",
              border: "1px",
              boxShadow: "2px 2px 5px #888"
            }}
          >
            UNDO
          </button>
          <button
            style={{
              background: "#8CC63E",
              width: "150px",
              color: "#fff",
              marginTop: "15px",
              padding: "10px",
              fontWeight: "bold",
              border: "1px",
              boxShadow: "2px 2px 5px #888"
            }}
          >
            NEW GAME
          </button>
          <button
            style={{
              background: "#CF145B",
              width: "150px",
              color: "#fff",
              marginTop: "15px",
              padding: "10px",
              fontWeight: "bold",
              border: "1px",
              boxShadow: "2px 2px 5px #888"
            }}
          >
            AUTO SAVE
          </button>
        </div>
        <div
          style={{
            background: "#65B7CD",
            width: "500px",
            height: "500px",
            display: "inline-block",
            verticalAlign: "top",
            marginTop: "100px",
            borderRadius: "5px"
          }}
        ></div>
        <div
          style={{
            background: "#96E5F4",
            height: "650px",
            width: "400px",
            display: "inline-block",
            verticalAlign: "top",
            float: "right",
            marginTop: "100px",
            marginRight: "20px",
            borderRadius: "5px"
          }}
        >
          <h3 style={{ color: "#2582BF" }}>Your Moves</h3>
        </div>
      </div>
      <div style={{ color: "#72D3F3", display: "inline-block", width: "100%" }}>
        <p
          style={{
            color: "#2584B2",
            textTransform: "uppercase",
            fontWeight: "bold"
          }}
        >
          Difficulty level
        </p>
        <button
          style={{
            background: "#2584B2",
            padding: "10px",
            width: "200px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px",
            border: "1px",
            boxShadow: "2px 2px 5px #888"
          }}
        >
          EASY
        </button>
        <button
          style={{
            background: "#2584B2",
            padding: "10px",
            width: "200px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px",
            border: "1px",
            boxShadow: "2px 2px 5px #888"
          }}
        >
          MEDIUM
        </button>
        <button
          style={{
            background: "#2584B2",
            padding: "10px",
            width: "200px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px",
            border: "1px",
            boxShadow: "2px 2px 5px #888"
          }}
        >
          HARD
        </button>
        <button
          style={{
            background: "#2584B2",
            padding: "10px",
            width: "200px",
            color: "#72D3F3",
            fontWeight: "bold",
            margin: "5px",
            border: "1px",
            boxShadow: "2px 2px 5px #888"
          }}
        >
          CUSTOM
        </button>
      </div>
    </div>
  );
}

export default App;