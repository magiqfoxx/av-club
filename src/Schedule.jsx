import React, { Component } from "react";

import Calendar from "./Calendar";
import Grid from "./Grid";

class Schedule extends Component {
  state = {};

  render() {
    return (
      <div className="schedule">
        <Grid />
      </div>
    );
  }
}

export default Schedule;
