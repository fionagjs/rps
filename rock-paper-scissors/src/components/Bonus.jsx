import React from "react";
import { Link } from "react-router-dom";
import Pentagon from "../images/bg-pentagon.svg";

const Bonus = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="bonus">
      <img src={Pentagon} alt="" className="pentagon" />
      <div className="items">
      <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
            style={{transform: "translateX(17rem) translateY(0rem)"}}
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="lizard"
            onClick={setChoice}
            className="icon icon--lizard"
            style={{transform: "translateX(1rem) translateY(7rem)"}}
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
            style={{transform: "translateX(8rem) translateY(7rem)"}}
          ></div>
        </Link>
      
        <Link to="/game">
          <div
            data-id="spock"
            onClick={setChoice}
            className="icon icon--spock"
            style={{transform: "translateX(-14rem) translateY(17rem)"}}
          ></div>
        </Link>
        
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
            style={{transform: "translateX(-11rem) translateY(17rem)"}}
          ></div>
        </Link>
        
      </div>
    </div>
  );
};

export default Bonus;
