import React, { Component } from "react";

import "./Suggest.css";
import { firestore } from "./firebase";

class Suggest extends Component {
  state = { name: "", email: "", title: "", link: "", date: "" };

  handleSubmit = async event => {
    event.preventDefault();
    await firestore.collection("suggested-movies").add({
      title: this.state.title,
      link: this.state.link,
      date: this.state.date,
      author: { name: this.state.name, email: this.state.email },
      sent: false
    });
    this.setState({ sent: true });

    //const doc = await docRef.get();
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    return (
      <main className="suggest">
        <p>Suggest a movie and prepare to be mocked mercilessly!</p>
        {!this.state.sent ? (
          <form onSubmit={this.handleSubmit} className="suggest--form">
            <h2 className="form--title">Movie form</h2>
            <label htmlFor="name" className="form--label">
              Your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form--input__text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <br />
            <label htmlFor="email" className="form--label">
              Your email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form--input__text"
              placeholder="example@email.com"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <br />
            <label htmlFor="title" className="form--label">
              Movie title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form--input__text"
              placeholder="Boss Baby"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <br />
            <label htmlFor="link" className="form--label">
              IMDb link:
            </label>
            <input
              type="text"
              id="link"
              name="link"
              className="form--input__text"
              placeholder="www.imdb.com/title/tt5884052"
              value={this.state.link}
              onChange={this.handleChange}
              required
            />
            <br />
            <label htmlFor="date" className="form--label">
              Preferred date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form--input__date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              type="submit"
              id="submit"
              name="submit"
              className="form--submit"
            />
          </form>
        ) : (
          <div className="suggest--accepted">
            <p>
              Your suggestion for {this.state.title} on the {this.state.date}{" "}
              has been accepted!
              <br />
              Thanks, {this.state.name}
            </p>
          </div>
        )}
      </main>
    );
  }
}

export default Suggest;
