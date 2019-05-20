import React from "react";

import "./Suggest.css";

const Suggest = () => {
  return (
    <div className="suggest">
      <p>Suggest a movie and prepare to be mocked mercilessly!</p>
      <form>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="email">Your email:</label>
        <input type="text" id="email" />
        <br />
        <label htmlFor="movie">Movie title:</label>
        <input type="text" id="movie" />
        <br />
        <label htmlFor="date">Preferred date:</label>
        <input type="date" id="date" />
        <br />
        <label htmlFor="no-date">No</label>
        <input type="radio" id="no-date" />
        <br />
        <input typer="submit" />
      </form>
    </div>
  );
};

export default Suggest;
