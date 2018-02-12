
  // Responsible for Adding to our Movies

  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import uuid from 'uuid';

  class AddMovie extends Component {

    constructor(){
      super();
      this.state = {
        newMovie: {}
      }
    }

    static defaultProps = {
      categories: [
        "Action",
        "Adventure",
        "Animated",
        "Comedy",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "Musical",
        "Romance",
        "Sci-fi",
        "Thriller",
        "Western"
      ]
    };

    handleSubmit(e){
      let ref = this.refs;
      console.log(ref);
      if(ref.title.value===""){
        alert('Title is Required');
      } else if(ref.score.value===""){
        alert('Score is Required');
      } else if(ref.rank.value===""){
        alert('Rank is Required');
      } else {
        let newMovie = {
          id: uuid.v4(),
          title: ref.title.value,
          category: ref.category.value,
          score: ref.score.value,
          rank: ref.rank.value
        }
        this.setState(
          {newMovie: newMovie},
          function(){
            this.props.addMovie(this.state.newMovie);
          }
        );
      }
      e.preventDefault();
    }

    render() {

      let categoryOptions = this.props.categories.map(category=>{
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      });

      return (
        <div>
          <h2>Add Movie</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-grouping">
              <label>Title</label>
              <input type="text" ref="title" />
            </div>
            <div className="form-grouping">
              <label>Category</label>
              <select ref="category">
                {categoryOptions}
              </select>
            </div>
            <div className="form-grouping">
              <label>Score</label>
              <input type="number" ref="score" />
            </div>
            <div className="form-grouping">
              <label>Rank</label>
              <input type="number" ref="rank" />
            </div>
            <div className="form-grouping">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    }
  }

  AddMovie.propTypes = {
    category: PropTypes.array,
    addMovie: PropTypes.func
  }

  export default AddMovie;
