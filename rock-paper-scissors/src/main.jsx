// App.jsx
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css"; 
import "./css/popup.css"; 
import "./css/game.css"; 

const mountNode = document.getElementById('root');
const root = createRoot(mountNode)

root.render(
  <Router>
    <App />
  </Router>
);
