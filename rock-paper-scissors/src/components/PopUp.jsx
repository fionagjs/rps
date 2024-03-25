import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const PopUp = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" srcset="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcset="" />
      </div>
    </div>,
    document.getElementById("popup")
  );
};

export default PopUp;
