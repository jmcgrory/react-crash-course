
  // Responsible for Listing our Movies

  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import MovieItem from './MovieItem';

  class Movies extends Component {

    // Pass delete ID upward
    deleteMovie(id){
      this.props.onDelete(id);
    }

    render() {

      console.log('wtf');
      console.log(this.props.movies);

      let movieItems;

      if(this.props.movies) movieItems = this.props.movies.map(movie=>{
        let movieKey = movie.title.replace(/\W/g, "");
        return (
            <MovieItem onDelete={this.deleteMovie.bind(this)} movie={movie} key={movieKey} />
        );
      });

      return (
        <div className="Movies">
          <h2>My Movies</h2>
          <ul>
            {movieItems}
          </ul>
        </div>
      );
    }
  }

  Movies.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
  }

  export default Movies;
