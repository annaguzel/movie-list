import React, { Component } from "react";
class Movie extends Component {
  render() {
    const movie = this.props.movie;
    return (
     <div>
        <h3>{movie.title} </h3>

          <button
            onClick={() => this.props.deleteMovie(movie)}
          >
            Delete
          </button>
      </div>
    );
  }
}

export default Movie;