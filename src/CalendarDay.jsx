import React, { Component } from "react";

import database from "./database";

class CalendarDay extends Component {
  state = {};
  handleClick = e => {
    e.target.style.visibility = "hidden";
    //this.content = "props.month";
  };

  renderMovies = date => {
    for (let movie of database) {
      if (movie.date === date) {
        return (
          <h3 className="calendar--day day">
            <span>{`${movie.time} - ${movie.title}`}</span>
          </h3>
        );
      }
    }
  };
  addZero = number => {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  };
  render() {
    //has to rerendered every time!? otherwise the props.month wouldn't change

    let date = `${this.addZero(this.props.day)}.${this.addZero(
      this.props.month
    )}.${this.props.year}`;
    return (
      <div className="day" onClick={e => this.handleClick(e)}>
        <h3>{this.props.day}</h3>
        {this.renderMovies(date)}
      </div>
    );
  }
}

export default CalendarDay;
