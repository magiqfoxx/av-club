import React, { Component } from "react";

import Calendar from "./Calendar";

import { firestore } from "../firebase.js";

import { getDate, getTime } from "./helpers";

class Schedule extends Component {
  state = {};

  setMovies = snapshot => {
    let movies = [];
    //snapshot - data at this point
    snapshot.forEach(doc => {
      const id = doc.id;
      const data = doc.data();
      const date = new Date(data.time.seconds * 1000);
      const author = data.author | "admin";

      movies.push({
        title: data.title,
        date: getDate(date),
        time: getTime(date),
        author: author,
        id: id
      });
    });
    return movies;
  };
  componentDidMount = async () => {
    const plannedSnapshot = await firestore.collection("planned-movies").get();
    this.setState({ movies: this.setMovies(plannedSnapshot) });
    const suggestedSnapshot = await firestore
      .collection("suggested-movies")
      .get();
    this.setState({ suggestedMovies: this.setMovies(suggestedSnapshot) });
  };

  render() {
    return (
      <main className="schedule">
        <Calendar
          movies={this.state.movies}
          suggestedMovies={this.state.suggestedMovies}
        />
      </main>
    );
  }
}

export default Schedule;
