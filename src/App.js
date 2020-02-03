import React, { Component } from "react";
import "./App.css";
import {
  shuffle,
  calculate2dPosition,
  millisToMinutesAndSeconds,
  changePositionWithBlank,
  checkGameCompleted
} from "./helper";
import Tiles from "./components/tiles";
import move from "./content/move.png";
import hourglass from "./content/hourglass.png";
import nuble from "./content/nuble-logo.png";
import menuIcon from "./content/menu.png";

class App extends Component {
  constructor() {
    super();
    let items = [...Array(15).keys()];
    items = shuffle(items);
    let tiles = [...items.map(t => t + 1), null];

    this.state = {
      gameState: [tiles],
      history: [],
      moves: [],
      time: 0,
      start: 0,
      isOn: false
    };
  }

  handleNewGame() {
    alert("Game will be lost after this.");
    window.location.reload();
  }

  handleUndo() {
    if (this.state.moves && this.state.moves.length) {
      let gameStates = this.state.gameState;
      gameStates.pop();

      let moves = this.state.moves;
      moves.pop();

      this.setState({
        gameState: gameStates,
        moves: moves
      });
    }
  }

  handleTileClick(position, val) {
    let currentPosition = calculate2dPosition(4, position);
    if (currentPosition[0] !== -1 && currentPosition[1] !== -1) {
      let currentGameState = this.state.gameState[
        this.state.gameState.length - 1
      ];
      let newGameState = changePositionWithBlank(
        currentGameState,
        currentPosition
      );

      let currentMoves = this.state.moves;
      let gameStates = this.state.gameState;
      let newStates = [...gameStates, newGameState];
      currentMoves = [
        ...currentMoves,
        {
          from: currentPosition,
          to: calculate2dPosition(4, newGameState.indexOf(val)),
          val: val
        }
      ];

      this.setState({
        moves: currentMoves,
        gameState: newStates
      });

      if (!this.state.isOn) {
        this.startTimer();
      }

      if (checkGameCompleted(newGameState)) {
        alert("Game Over!!!!!");
      }
    }
  }

  showRightBox(){
    let rightBox = document.getElementsByClassName("right-side-box")[0];
    rightBox.style.display = rightBox.style.display === "none"?"block":"none";
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0 });
  }

  render() {
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
          <img
            alt="nuble"
            src={menuIcon}
            className="mobile-menu"
            onClick={this.showRightBox.bind(this)}
            style={{
              width: "45px",
              height: "40px",
              marginTop: "20px",
              verticalAlign: "middle",
              marginRight: "10px",
              float:"right",
              display:"none"
            }}
          ></img>
        </div>
        {/* First Block */}
        <div
          className="left-side-box"
        >
          <div className="timer-moves" >
            <img
              alt="move"
              src={move}
              style={{ height: "16px", width: "18px", paddingRight: "5px" }}
            />
            <span>MOVES: {this.state.moves.length}</span>
          </div>
          <div className="timer-moves">
            <img
              alt="move"
              src={hourglass}
              style={{ height: "16px", width: "18px", paddingRight: "5px" }}
            />
            TIME: {millisToMinutesAndSeconds(this.state.time)}
          </div>
          <br></br>
          <button className="left-side-box-buttons"
            onClick={this.handleUndo.bind(this)}
            style={{
              background: "#F7941D"
            }}
          >
            UNDO
          </button>
          <button className="left-side-box-buttons"
            onClick={this.handleNewGame.bind(this)}
            style={{
              background: "#8CC63E"
            }}
          >
            NEW GAME
          </button>
          <button className="left-side-box-buttons"
            style={{
              background: "#CF145B"
            }}
          >
            AUTO SAVE
          </button>
        </div>
        {/* Third Block */}
        <div className="right-side-box">
          <h3 style={{ color: "#2582BF" }}>Your Moves</h3>
          {this.state.moves.map((m, i) => {
            return (
              <p key={i} style={{ fontSize: "16px", fontWeight: "bold" }}>
                {i + 1}
                {"."} ({m.val}){":"} [{m.from[0] + 1}
                {" , "}
                {m.from[1] + 1}]{"->"} [{m.to[0] + 1}
                {" , "}
                {m.to[1] + 1}]
              </p>
            );
          })}
        </div>

        {/* Center block */}
        <div align="center">
          {/* Second Block */}
          <div
            className="center"
          >
            {
              <Tiles
                tiles={this.state.gameState[this.state.gameState.length - 1]}
                handleTileClick={this.handleTileClick.bind(this)}
              />
            }
          </div>
        </div>
        {/* Bottom block */}
        <div className="footer" align="center">
          <p
            style={{
              color: "#2584B2",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Difficulty level
          </p>
          <button className="footer-buttons"> EASY </button>
          <button className="footer-buttons"> MEDIUM </button>
          <button className="footer-buttons"> HARD </button>
          <button className="footer-buttons"> CUSTOM </button>
        </div>
      </div>
    );
  }
}

export default App;
