import React, { Component } from 'react'

import Player from "./player";

const weapons = ["rock", "paper", "scissors"];

export default class main extends Component {

  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "it's a Draw!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };

  render() {
    const { playerOne, playerTwo, winner } = this.state;

    return (
      <main role="main" class="inner cover">
        <div className='row'>
          <div className='col-6'>
            <Player weapon={playerOne} />
            <p>Player 1</p>
          </div>
          <div className='col-6'>
            <Player weapon={playerTwo} />
            <p>Player 2</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-4'>
            <button
              className="btn btn-primary"
              onClick={() => this.selectWeapon("rock")}
            >
              Rock
          </button>
          </div>
          <div className='col-4'>
            <button
              className="btn btn-primary"
              onClick={() => this.selectWeapon("paper")}
            >
              Paper
          </button>
          </div>
          <div className='col-4'>
            <button
              className="btn btn-primary"
              onClick={() => this.selectWeapon("scissors")}
            >
              Scissor
          </button>
          </div>
        </div>

        <br />Output : <div class='alert-success'>{winner ? this.selectWinner() : null}</div> <br />
        <button type="button" className='btn btn-success' onClick={this.startGame}>
          Start!
        </button>

      </main>
    )
  }
}
