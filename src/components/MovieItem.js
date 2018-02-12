
  // Responsible for Individual Movies
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';

  class MovieItem extends Component {

    deleteMovie(id){
      this.props.onDelete(id);
    }

    render() {

      let movie = this.props.movie;

      return (
        <li className="MovieItem">
          <article>
            <h3>{movie.title}</h3>
            <p><em>{movie.category}</em></p>
            <p><strong>Score:</strong> {movie.score}</p>
            <p><strong>Rank:</strong> {movie.rank}</p>
            <p>
              <button onClick={this.deleteMovie.bind(this, this.props.movie.id)}>
              DELETE
              </button>
            </p>
          </article>
        </li>
      );
    }
  }

  MovieItem.propTypes = {
    movie: PropTypes.object,
    onDelete: PropTypes.func
  }

  export default MovieItem;
