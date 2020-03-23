import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Movie from "./Movie";

class MovieList extends Component {
  state = {
    filtered: this.props.movies
  };
  filteredList = query => {
    query = query.toLowerCase();
    let filtered = this.props.movies.filter(movie =>
      `${movie.title}`.toLowerCase().includes(query)
    );
    this.setState({ filtered: filtered });
  };

  componentDidUpdate(prevState) {
    if (this.props.movies !== prevState.movies) {
      this.setState({ filtered: this.props.movies });
    }
  }
  render() {
    const movies = this.state.filtered.map(movie => (
      <Movie
        key={movie.title}
        movie={movie}
        deleteMovie={this.props.deleteMovie}
      />
    ));
    return (
      <div>
        <SearchBar onChange={this.filteredList} />
        <h3>Movie List:</h3>
        <div>{movies}</div>
     </div>
    );
  }
}

export default MovieList;