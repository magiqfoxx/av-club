import React from "react";

import NextMovie from "./NextMovie";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <h2>Welcome to the AV club</h2>
      <p>
        Do you like movies? Me too! <br />
        Are you tired of the ongoing lack of appreciation for movie classics?{" "}
        <br />
        You’ve come to the right place Do you want to hang out with like-minded
        people?
      </p>
      <form>
        <input type="text" placeholder="email..." />
      </form>
      <button className="button__sign-up" type="submit">
        Sign up
      </button>
      <button className="button__schedule">See Schedule </button>
      <NextMovie />
    </main>
  );
};

export default Main;
