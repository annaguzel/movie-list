import React, { Component } from "react";
import * as actionCreators from "./redux/actions/index";
import { connect } from "react-redux";
import MovieList from "./MovieList";

class App extends Component {

  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  addMovie = movieName => {
    this.props.addMovie(movieName);
  };
  deleteMovie = movie => {
    this.props.deleteMovie(movie);
  };

  render() {
    return (
      <div>
        
      <h3>Title: </h3>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          />
        <button
        onClick={() => this.addMovie(this.state.userInput)}>Add Movie</button>

          <MovieList
            movies={this.props.moviesList}
            deleteMovie={this.deleteMovie}
          />
      </div>
      
    );
  }
}
const mapStateToProps = state => {
  return {
    moviesList: state.moviesList,
    input: state.input
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movieName => dispatch(actionCreators.addMovie(movieName)),
    deleteMovie: movie => dispatch(actionCreators.deleteMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);