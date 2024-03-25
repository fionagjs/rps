import React, { useState } from "react";
import PopUp from "./PopUp";
const Footer = () => {
  const [popup, setPopUp] = useState(false);

  const toggle = () => {
    setPopUp(!popup);
  };

  return (
    <>
      <footer className="footer">
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {popup ? <PopUp toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
