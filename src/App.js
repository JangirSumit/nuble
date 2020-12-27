import React, { Component } from "react";
import "./App.css";
import {
  shuffle,
  calculate2dPosition,
  changePositionWithBlank,
  checkGameCompleted,
} from "./helper";
import Timer from "./components/Timer";
import Moves from "./components/Moves";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import RightBox from "./components/RightBox";
import LeftBox from "./components/LeftBox";

class App extends Component {
  constructor() {
    super();
    let gameTiles = window.localStorage.getItem("gameTiles") || 4;
    this.state = {
      gameState: [this.getTiles(gameTiles)],
      history: [],
      moves: [],
      time: 0,
      start: 0,
      isOn: false,
      showRightSideBox: true,
      gameTiles: gameTiles,
    };
  }

  componentDidMount() {
    const gameState = window.localStorage.getItem("gameState");

    if (gameState) {
      this.setState({ ...JSON.parse(gameState) });
    }
  }

  getTiles(gameTiles) {
    let items = [
      ...Array(parseInt(gameTiles) * parseInt(gameTiles) - 1).keys(),
    ];
    items = shuffle(items);
    let tiles = [...items.map((t) => t + 1), null];
    return tiles;
  }

  handleNewGame = () => {
    alert("Game will be lost after this.");
    window.localStorage.removeItem("gameState");
    window.location.reload();
  };

  handleUndo = () => {
    if (this.state.moves && this.state.moves.length) {
      let gameStates = this.state.gameState;
      gameStates.pop();

      let moves = this.state.moves;
      moves.pop();

      this.setState({
        gameState: [...gameStates],
        moves: [...moves],
      });
    }
  };

  handleTileClick = (position, val) => {
    let currentPosition = calculate2dPosition(this.state.gameTiles, position);
    if (currentPosition[0] !== -1 && currentPosition[1] !== -1) {
      let currentGameState = this.state.gameState[
        this.state.gameState.length - 1
      ];
      let newGameState = changePositionWithBlank(
        currentGameState,
        currentPosition,
        this.state.gameTiles
      );

      let currentMoves = this.state.moves;
      let gameStates = this.state.gameState;
      let newStates = [...gameStates, newGameState];
      currentMoves = [
        ...currentMoves,
        {
          from: currentPosition,
          to: calculate2dPosition(4, newGameState.indexOf(val)),
          val: val,
        },
      ];

      this.setState({
        moves: currentMoves,
        gameState: newStates,
      });

      if (!this.state.isOn) {
        this.startTimer();
      }

      if (checkGameCompleted(newGameState)) {
        alert("Game Over!!!!!");
      }
    }
  };

  showRightBox = () => {
    this.setState({
      showRightSideBox: !this.state.showRightSideBox,
    });
  };

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
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

  onFooterButtonClick = (button) => {
    let gameTiles = 4;

    switch (button) {
      case "EASY":
        gameTiles = 3;
        break;
      case "MEDIUM":
        gameTiles = 4;
        break;
      case "HARD":
        gameTiles = 5;
        break;
      default:
        gameTiles = 4;
    }
    this.stopTimer();
    this.setState({
      gameTiles: gameTiles,
      gameState: [this.getTiles(gameTiles)],
      history: [],
      moves: [],
      time: 0,
      start: 0,
      isOn: false,
    });

    window.localStorage.setItem("gameTiles", gameTiles);
  };

  saveGameState = () => {
    window.localStorage.setItem("gameState", JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="App">
        {/* Top Header */}
        <LeftBox showRightBox={this.showRightBox} />
        {/* First Block */}
        <div className="left-side-box">
          <Moves moves={this.state.moves.length} />
          <Timer time={this.state.time} />
          <br></br>
          <Buttons
            handleUndo={this.handleUndo}
            handleNewGame={this.handleNewGame}
            saveGameState={this.saveGameState}
          />
        </div>
        {/* Third Block */}
        {this.state.showRightSideBox && <RightBox moves={this.state.moves} />}
        {/* Center block */}
        <Body
          tiles={this.state.gameState[this.state.gameState.length - 1]}
          handleTileClick={this.handleTileClick}
          gameTiles={this.state.gameTiles}
        />
        {/* Bottom block */}
        <Footer onFooterButtonClick={this.onFooterButtonClick} />
      </div>
    );
  }
}

export default App;
