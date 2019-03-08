import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";
import Grid from "./Grid";
import Suggest from "./Suggest";
import Books from "./Books";

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
      <Route path="/schedule/" component={Grid} />
      <Route path="/suggest/" component={Suggest} />
      <Route path="/books/" component={Books} />
      <footer />
    </div>
  );
};

export default App;
