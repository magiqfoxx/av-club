import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NextMovie from "./NextMovie";
import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <main>
        <h2>Welcome to the AV club</h2>
        <p>
          Do you like movies? We do too! <br />
          Are you tired of the ongoing lack of appreciation for movie classics?{" "}
          <br />
          Do you want to hang out with like-minded people?
          <br />
          You’ve come to the right place
          <br />
          Sign up to receive emails about this weeks movies
        </p>
        <form>
          <input type="email" placeholder="email..." name="email" required />
        </form>
        <button className="button__sign-up" type="submit">
          Sign up
        </button>
        <button className="button__schedule">
          <Link to="/schedule/">See Schedule</Link>
        </button>
      </main>
      <NextMovie />
    </React.Fragment>
  );
};

export default Main;
