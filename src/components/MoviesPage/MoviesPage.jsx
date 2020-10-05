import React, { Component } from 'react';
import { movieAPI } from '../../api';
import { MovieItem } from '../MovieItem';
import './MoviesPage.scss';

class MoviesPage extends Component {
  state = {
    movie: [],
  };

  fetchMovies = () => {
    movieAPI
      .getTrending()
      .then(({ data: { results } }) => {
        this.setState({
          movie: results,
        });
      })
      .catch(e => console.log(e.message));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        <div className="movie__list">
          {movie.map(({ id, title, release_date, poster_path }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              release_date={release_date}
              poster_path={poster_path}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
