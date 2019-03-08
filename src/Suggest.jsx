import React from "react";

import "./Suggest.css";

const Suggest = () => {
  return (
    <div className="suggest">
      <p>Suggest a movie and prepare to be mocked mercilessly!</p>
      <form>
        <span>Your name:</span>
        <input type="text" />
        <br />
        <span>Your email:</span>
        <input type="text" />
        <br />
        <span>Movie title:</span>
        <input type="text" />
        <br />
        <span>Preferred date:</span>
        <input type="date" />
        <br />
        <span>No</span>
        <input type="radio" />
        <br />
        <input typer="submit" />
      </form>
    </div>
  );
};

export default Suggest;
