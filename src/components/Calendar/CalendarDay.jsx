import React, { Component } from "react";
import { firestore } from "../firebase.js";

import { addZero } from "./helpers";

class CalendarDay extends Component {
  state = {
    movies: this.props.movies,
    suggestedMovies: this.props.suggestedMovies
  };

  handleClick = e => {
    e.target.style.visibility = "hidden";
  };

  renderMovies = date => {
    for (let movie of this.state.movies) {
      if (movie.date === date) {
        return (
          <h3 className="calendar--day day">
            <span>{`${movie.time} - ${movie.title}`}</span>
          </h3>
        );
      }
    }
  };
  render() {
    //has to rerendered every time!? otherwise the props.month wouldn't change
    let date = `${addZero(this.props.day)}.${addZero(this.props.month)}.${
      this.props.year
    }`;
    return (
      <div className="day" onClick={e => this.handleClick(e)}>
        <h3>{this.props.day}</h3>
        {this.renderMovies(date)}
      </div>
    );
  }
}

export default CalendarDay;
