import React, { Component } from "react";

import Calendar from "./Calendar/Calendar";

import { firestore } from "./firebase.js";

class Schedule extends Component {
  state = {};

  componentDidMount = async () => {
    const snapshot = await firestore.collection("planned-movies").get();

    let movies = [];
    //snapshot - data at this point
    snapshot.forEach(doc => {
      const id = doc.id;
      const data = doc.data();
      const date = new Date(data.time.seconds * 1000);
      movies.push({ title: data.movie, date: date, id: id });
    });

    this.setState({ movies });
  };

  render() {
    return (
      <main className="schedule">
        <Calendar movies={this.state.movies} />
      </main>
    );
  }
}

export default Schedule;
