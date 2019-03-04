import React, { Component } from "react";
import { getMonth } from "./makeCalendar";
import { getMonthWord } from "./makeCalendar";
import { daysOfTheWeek } from "./makeCalendar";
import { getWeeks } from "./makeCalendar";

import CalendarDay from "./CalendarDay";

class Calendar extends Component {
  state = {};
  componentWillMount() {
    this.setState({ currentMonth: getMonth() });
  }
  nextMonth = () => {
    if (this.state.currentMonth < 12) {
      this.setState({ currentMonth: this.state.currentMonth + 1 });
    } else {
      this.setState({ currentMonth: 0 });
    }
  };
  previousMonth = () => {
    if (this.state.currentMonth > 0) {
      this.setState({ currentMonth: this.state.currentMonth - 1 });
    } else {
      this.setState({ currentMonth: 12 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="calendar--header">
          <span onClick={this.nextMonth}>prev</span>
          {getMonthWord()}
          <span onClick={this.nextMonth}> next </span>
        </div>
        <table className="calendar--body">
          {/* HEADER */}
          <tbody>
            <tr>
              {daysOfTheWeek().map((dayOfTheWeek, x) => {
                return <th key={x}>{dayOfTheWeek}</th>;
              })}
            </tr>
            {/* END HEADER */}
            {/* WEEK BY WEEK */}
            {getWeeks().map((week, i) => {
              return (
                <tr key={i}>
                  {/* DAY BY DAY */}
                  {week.map((day, j) => {
                    return (
                      <td key={j}>
                        <CalendarDay day={day} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Calendar;
