import React from "react";
import database from "./database";
import { getMonthWord } from "./makeGrid";

const NextMovie = () => {
  function addZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  let date = new Date();
  let dateFormatted = `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

  function getNextMovie() {
    //relies on database array being ordered by date of movie!!
    for (let movie of database) {
      console.log(movie.date, dateFormatted);
      if (movie.date > dateFormatted) {
        console.log(getMonthWord(3));
        return (
          <div>
            <h2>{movie.title}</h2>
            <span>{`${movie.date.slice(0, 2)} ${getMonthWord(
              Number(movie.date.slice(3, 5)) - 1
            )} `}</span>
            <br />
            <span>{movie.time}</span>
          </div>
        );
      }
    }
  }

  return (
    <div className="main--next-movie">
      <p>Next movie:</p>
      {getNextMovie()}
    </div>
  );
};

export default NextMovie;
