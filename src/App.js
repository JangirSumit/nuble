import React, { Component } from "react";
import "./App.css";
import { shuffle } from "./helper";
import move from "./content/move.png";
import hourglass from "./content/hourglass.png";
import nuble from "./content/nuble-logo.png";

class App extends Component {
  render() {
    let items = [...Array(15).keys()];
    items = shuffle(items);
    let tiles = [...items.map(t => t + 1), null];

    return (
      <div className="App">
        {/* Top Header */}
        <div
          style={{
            background: "#F4B323",
            height: "80px",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#fff",
            display: "inline-block"
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
              paddingRight: "10px"
            }}
          ></img>
          <span style={{ verticalAlign: "middle" }}>NUBLE</span>
        </div>
        {/* First Block */}
        <div
          style={{
            width: "150px",
            height: "300px",
            float: "left",
            position: "absolute",
            left: "25px",
            top: "170px"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
            }}
          >
            AUTO SAVE
          </button>
        </div>
        {/* Third Block */}
        <div
          style={{
            background: "#96E5F4",
            height: "650px",
            width: "400px",
            verticalAlign: "top",
            borderRadius: "5px",
            position: "absolute",
            top: "170px",
            right: "25px"
          }}
        >
          <h3 style={{ color: "#2582BF" }}>Your Moves</h3>
        </div>

        {/* Center block */}
        <div align="center">
          {/* Second Block */}
          <div
            style={{
              background: "#65B7CD",
              width: "500px",
              height: "500px",
              display: "inline-flex",
              verticalAlign: "top",
              marginTop: "100px",
              borderRadius: "5px",
              flexWrap: "wrap"
            }}
          >
            {tiles.map(t => {
              return (
                <div
                  key={t}
                  className="tile"
                  style={{ background: t ? "" : "#5DA8BD" }}
                >
                  {t ? t : " "}
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom block */}
        <div
          style={{
            color: "#72D3F3",
            position: "absolute",
            bottom: "50px",
            width: "100%"
          }}
        >
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
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
              boxShadow: "2px 2px 5px #888",
              cursor: "pointer"
            }}
          >
            CUSTOM
          </button>
        </div>
      </div>
    );
  }
}

export default App;
