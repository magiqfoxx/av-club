import React, { Component } from "react";
import { getDate } from "./makeCalendar";
import Calendar from "./Calendar";

class Schedule extends Component {
  state = {};

  month = getDate();

  makeTable = () => {
    const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
    const weeks = [0, 1, 2, 3, 4];
    const daysInMonth = new Array(30);
    const header = daysOfWeek.map(dayOfWeek => {
      return (
        <tr>
          <th>{dayOfWeek}</th>
        </tr>
      );
    });

    return weeks.map(week => {
      return (
        <tr>
          {daysOfWeek.map((dayOfWeek, i) => {
            return <td>{i + week * 7 + 1}</td>;
          })}
        </tr>
      );
    });
  };
  render() {
    return <Calendar />;
  }
}

export default Schedule;
