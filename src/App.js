import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import Comments from './components/Comments';
import './app.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      comments: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/comments',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({comments: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getProjects(){
    this.setState({movies: [
      {
        id: uuid.v4(),
        title: 'The Matrix',
        category: 'Action',
        score: 8.7,
        rank: 18
      },
      {
        id: uuid.v4(),
        title: 'Forrest Gump',
        category: 'Drama',
        score: 8.7,
        rank: 12
      },
      {
        id: uuid.v4(),
        title: 'Warrior',
        category: 'Drama',
        score: 8.1,
        rank: 154
      },
      {
        id: uuid.v4(),
        title: 'City of God',
        category: 'Drama',
        score: 8.6,
        rank: 21
      },
      {
        id: uuid.v4(),
        title: 'Interstellar',
        category: 'Sci-fi',
        score: 8.5,
        rank: 30
      },
      {
        id: uuid.v4(),
        title: 'Mad Max: Fury Road',
        category: 'Action',
        score: 8.1,
        rank: 206
      },
      {
        id: uuid.v4(),
        title: 'Alien',
        category: 'Horror',
        score: 8.4,
        rank: 52
      },
      {
        id: uuid.v4(),
        title: 'The Thing',
        category: 'Horror',
        score: 8.1,
        rank: 163
      },
      {
        id: uuid.v4(),
        title: 'Jurassic Park',
        category: 'Action',
        score: 8.1,
        rank: 198
      }
    ]});
  }

  // Fires on every component re-render
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  // JSON REQ
  componentDidMount(){
    this.getTodos();
  }

  // Add Movie
  handleAddMovie(newMovie){
    let movies = this.state.movies;
    movies.push(newMovie);
    this.setState({movies:movies});
  }

  // Delete Movie
  handleDeleteMovie(id){
    let movies = this.state.movies;
    let index = movies.findIndex( x=>x.id === id);
    movies.splice(index, 1);
    this.setState({movies: movies});
  }

  // Delete Movie
  handleDeleteComment(id){
    let comments = this.state.comments;
    let index = comments.findIndex( x=>x.id === id);
    comments.splice(index, 1);
    this.setState({comments: comments});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>React Crach Course - Movie App</h1>
        </header>
        <AddMovie addMovie={this.handleAddMovie.bind(this)} />
        <Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)} />
        <Comments comments={this.state.comments} onDelete={this.handleDeleteComment.bind(this)} />
      </div>
    );
  }
}

export default App;
