import React, { Component } from "react";
import { getMonthWord } from "./helpers";
import { getDaysOfTheWeek } from "./helpers";
import { getWeeks } from "./helpers";
import { getDateToday } from "./helpers";
import Loader from "../Loader";

import "./Calendar.css";
import CalendarDay from "./CalendarDay";

class Calendar extends Component {
  state = {};

  componentWillMount() {
    let date = getDateToday();
    this.setState({
      month: date[0],
      day: date[1],
      weekDay: date[2],
      year: date[3]
    });
  }

  nextMonth = () => {
    if (this.state.month < 11) {
      this.setState({ month: this.state.month + 1 });
    } else {
      let year = this.state.year + 1;
      this.setState({
        month: 0,
        year: year
      });
    }
    this.setState({ day: this.FDNM[0], weekDay: this.FDNM[1] });
  };

  previousMonth = () => {
    if (this.state.month > 0) {
      this.setState({ month: this.state.month - 1 });
    } else {
      this.setState({
        month: 11,
        year: this.state.tear - 1
      });
    }
    this.setState({ day: this.LDLM[0], weekDay: this.LDLM[1] });
  };

  renderCalendar = () => {
    //renders calendar for this month
    //sets state for previous month last day and next month first day
    //to be used in next getWeeks calls

    let week = getWeeks(
      this.state.month,
      this.state.day,
      this.state.weekDay,
      this.state.year
    );

    this.LDLM = week[3]; //last day of last month
    this.FDNM = week[4]; //first day of next month

    let month = getMonthWord(this.state.month).slice(0, 3);

    const daysOfTheWeek = getDaysOfTheWeek().map((dayOfTheWeek, x) => {
      return (
        <div key={x} className="calendar--weekDays">
          {dayOfTheWeek}
        </div>
      );
    });

    const daysLastMonth = week[0].map((day, i) => {
      return (
        <div key={day} className="calendar--days calendar--days__lastM">
          <CalendarDay
            movies={this.props.movies}
            suggestedMovies={this.props.suggestedMovies}
            day={day}
            month={this.state.month > 0 ? this.state.month : 11}
            year={this.state.month > 0 ? this.state.year : this.state.year - 1}
          />
        </div>
      );
    });

    const daysThisMonth = week[1].map((day, i) => {
      return (
        <div key={day} className="calendar--days calendar--days__thisM">
          <CalendarDay
            movies={this.props.movies}
            suggestedMovies={this.props.suggestedMovies}
            day={day}
            month={this.state.month + 1}
            year={this.state.year}
          />
        </div>
      );
    });

    const daysNextMonth = week[2].map((day, i) => {
      return (
        <div key={day} className="calendar--days calendar--days__nextM">
          <CalendarDay
            movies={this.props.movies}
            suggestedMovies={this.props.suggestedMovies}
            day={day}
            month={this.state.month < 11 ? this.state.month + 2 : 0}
            year={this.state.month < 11 ? this.state.year : this.state.year + 1}
          />
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="month">
          <button
            className="month--button"
            alt="previous month"
            onClick={this.previousMonth}
          >
            ➭
          </button>
          {month}
          <button
            className="month--button"
            alt="next month"
            onClick={this.nextMonth}
          >
            ➮
          </button>
        </div>

        <div className="calendar">
          {[daysOfTheWeek, daysLastMonth, daysThisMonth, daysNextMonth]}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return this.props.movies ? this.renderCalendar() : <Loader />;
  }
}

export default Calendar;
