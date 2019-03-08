import React from "react";

const CalendarDay = props => {
  function handleClick(e) {
    e.target.style.visibility = "hidden";
    //this.content = "props.month";
  }
  return (
    <div className="day" onClick={e => handleClick(e)}>
      <h3>{props.day}</h3>
    </div>
  );
};

export default CalendarDay;
