import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Start from "./components/Start.jsx";
import Bonus from "./components/Bonus.jsx";
import Game from "./components/Game.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Logo from "./images/logo.svg";
import LogoBonus from "./images/logo-bonus.svg";

function HeaderWithContent({ children, score, logo, path }) {
  return (
    <>
      <Header score={score} logo={logo} path={path} />
      {children}
    </>
  );
}

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
        
          <Route
            path="/"
            element={
              <HeaderWithContent score={score} logo={Logo}>
                <Start setMyChoice={setMyChoice} />
              </HeaderWithContent>
            }
          />

         
          <Route
            path="/game"
            element={
              <HeaderWithContent score={score} logo={Logo}>
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              </HeaderWithContent>
            }
          />

          <Route
            path="/bonus"
            element={
              <HeaderWithContent score={score} logo={LogoBonus}>
                <Bonus setMyChoice={setMyChoice} />
              </HeaderWithContent>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;