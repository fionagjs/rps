import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);

  // Randomize the items
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors","lizard","spock"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  //Game Function
  const Result = () => {
    if (
      (myChoice === "rock" && (house === "scissors" || house === "lizard")) ||
      (myChoice === "scissors" && (house === "paper" || house === "lizard")) ||
      (myChoice === "paper" && (house === "rock" || house === "spock")) ||
      (myChoice === "lizard" && (house === "spock" || house === "paper")) ||
      (myChoice === "spock" && (house === "scissors" || house === "rock"))
    ) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (
      (myChoice === "rock" && (house === "paper" || house === "spock")) ||
      (myChoice === "scissors" && (house === "rock" || house === "spock")) ||
      (myChoice === "paper" && (house === "scissors" || house === "lizard")) ||
      (myChoice === "lizard" && (house === "rock" || house === "scissors")) ||
      (myChoice === "spock" && (house === "paper" || house === "lizard"))
    ) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };
  

  //Counter
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 300)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  //Body
  return (
    <div className="game">
      <div className="picks-container">
      <div className="you_picked">
        <span className="text">You Picked</span>
        <div className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
          }`}></div>
      </div>
      <div className="result">
        <span className="text">{playerWin === "win" ? "You Win" : playerWin === "lose" ? "You Lose" : "Draw"}</span>
        <Link to="/" className="again-btn" onClick={newHousePick}>
          Play Again
        </Link>
      </div>
      <div className="house_picked">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Game;
