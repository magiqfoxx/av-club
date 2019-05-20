import React, { Component } from "react";
import { getMonthWord } from "./makeCalendarOlder";
import { daysOfTheWeek } from "./makeCalendarOlder";
import { getWeeks } from "./makeCalendarOlder";
import { getDateToday } from "./makeCalendarOlder";

import "./Calendar.css";
import CalendarDay from "./CalendarDay";

class CalendarOld extends Component {
  state = {};
  LDLM = [];
  FDNM = [];

  componentWillMount() {
    let date = getDateToday();
    this.setState({
      currentMonth: date[0],
      day: date[1],
      weekDay: date[2],
      currentYear: date[3]
    });
  }
  nextMonth = () => {
    if (this.state.currentMonth < 11) {
      this.setState({ currentMonth: this.state.currentMonth + 1 });
    } else {
      let year = this.state.currentYear + 1;
      this.setState({
        currentMonth: 0,
        currentYear: year
      });
    }
    this.setState({ day: this.FDNM[0], weekDay: this.FDNM[1] });
  };

  previousMonth = () => {
    if (this.state.currentMonth > 0) {
      this.setState({ currentMonth: this.state.currentMonth - 1 });
    } else {
      this.setState({
        currentMonth: 11,
        currentYear: this.state.currentYear - 1
      });
    }
    this.setState({ day: this.LDLM[0], weekDay: this.LDLM[1] });
  };

  renderCalendar = () => {
    //renders calendar for this month
    //sets state for previous month last day and next month first day
    //to be used in next getWeeks calls

    let thisMonth = getWeeks(
      this.state.currentMonth,
      this.state.day,
      this.state.weekDay,
      this.state.currentYear
    );

    this.LDLM = thisMonth[1]; //last day of last month
    this.FDNM = thisMonth[2]; //first day of next month

    //this.setState({ LDLM: thisMonth[1], FDNM: thisMonth[2] });
    let weeks = thisMonth[0].map((week, i) => {
      return (
        <tr key={i} className="calendar--days">
          {/* DAY BY DAY */}
          {week.map((day, j) => {
            return (
              <td key={j}>
                <CalendarDay
                  day={day}
                  month={this.state.currentMonth}
                  year={this.state.currentYear}
                />
              </td>
            );
          })}
        </tr>
      );
    });

    return weeks;
  };

  render() {
    return (
      <React.Fragment>
        <div className="calendar--header">
          <span onClick={this.previousMonth}>◀</span>
          {getMonthWord(
            this.state.currentMonth,
            this.state.day,
            this.state.weekDay
          )}
          <span onClick={this.nextMonth}>▶</span>
        </div>
        <table className="calendar--body">
          {/* HEADER */}
          <tbody>
            <tr className="calendar--weekDays">
              {daysOfTheWeek().map((dayOfTheWeek, x) => {
                return <th key={x}>{dayOfTheWeek}</th>;
              })}
            </tr>
            {/* END HEADER */}
            {/* TABLE BODY */}
            {this.renderCalendar()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default CalendarOld;
