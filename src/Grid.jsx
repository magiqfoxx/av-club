import React, { Component } from "react";
import { getMonthWord } from "./makeGrid";
import { daysOfTheWeek } from "./makeGrid";
import { getWeeks } from "./makeGrid";
import { getDateToday } from "./makeGrid";

import "./Grid.css";
import CalendarDay from "./CalendarDay";

class Grid extends Component {
  state = {};

  LDLM = [];
  FDNM = [];

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
    //this.setState({ LDLM: thisMonth[1], FDNM: thisMonth[2] });

    this.LDLM = week[3]; //last day of last month
    this.FDNM = week[4];

    let month = getMonthWord(this.state.month);

    //weekDays
    let weekDays = daysOfTheWeek().map((dayOfTheWeek, x) => {
      return (
        <div key={x} className="calendar--weekDays">
          {dayOfTheWeek}
        </div>
      );
    });

    //last month
    let lastM = week[0].map((day, i) => {
      return (
        <div key={i} className="calendar--days calendar--days__lastM">
          <CalendarDay
            day={day}
            month={this.state.month}
            year={this.state.year}
          />
        </div>
      );
    });

    //this month
    let thisM = week[1].map((day, i) => {
      return (
        <div key={i} className="calendar--days calendar--days__thisM">
          <CalendarDay
            day={day}
            month={this.state.currentMonth}
            year={this.state.currentYear}
          />
        </div>
      );
    });

    let nextM = week[2].map((day, i) => {
      return (
        <div key={i} className="calendar--days calendar--days__nextM">
          <CalendarDay
            day={day}
            month={this.state.currentMonth}
            year={this.state.currentYear}
          />
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="month">
          <span onClick={this.previousMonth}>➭</span>
          {month}
          <span onClick={this.nextMonth}>➮</span>
        </div>

        <div className="calendar">{[weekDays, lastM, thisM, nextM]}</div>
      </React.Fragment>
    );
  };
  render() {
    return <div className="schedule">{this.renderCalendar()}</div>;
  }
}

export default Grid;
