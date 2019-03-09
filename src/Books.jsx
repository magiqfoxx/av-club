import React from "react";

import "./Books.css";

const Books = () => {
  return (
    <div className="books">
      <p>
        For the more nerdy of us, we plan to organize a book club.
        <br />
        The usual rules qualify: One book a month being discussed together etc.
        <br />
        No sharp weapons but you're allowed to smack people.
      </p>
      <p>Sign up to learn more</p>
      <form>
        <input type="text" placeholder="email..." />
      </form>
    </div>
  );
};

export default Books;
