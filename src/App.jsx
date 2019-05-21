import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import Schedule from "./components/Calendar/Schedule";
import Suggest from "./components/Suggest";
import Books from "./components/Books";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <nav>
        <span className="brand">
          <Link to="/">AV CLUB</Link>
        </span>
        <ul>
          <li>
            <Link to="/schedule/">Schedule</Link>
          </li>
          <li>
            <Link to="/suggest/">Suggest</Link>
          </li>
          <li>
            <Link to="/books/">Book club!</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Main} />
      <Route path="/schedule/" component={Schedule} />
      <Route path="/suggest/" component={Suggest} />
      <Route path="/books/" component={Books} />
      <Route path="/signup/" component={Books} />
      <footer />
    </div>
  );
};

export default App;
