import React, { Component } from 'react';
import { movieAPI } from '../../api';
import { MovieItem } from '../MovieItem/MovieItem';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './Search.scss';

class Search extends Component {
  state = {
    movie: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  fetchMovie = () => {
    const { query, page, movie } = this.state;
    this.setState({ isLoading: true });
    movieAPI.searchMovie(query, page).then(({ data: { results } }) => {
      this.setState({
        movie: [...movie, ...results],
      });
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 300);
      console.log(results);
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      this.fetchMovie();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const search = e.target.searchMovie.value;
    this.setState(prevState => {
      if (prevState.query !== search) {
        return {
          movie: [],
          page: 1,
          query: search,
        };
      } else {
        return {
          page: this.state.page + 1,
        };
      }
    });
  };

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <div className="container">
        <div className="search__wrapper">
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-secondary"
              style={{ width: '100%' }}
              label="Search"
              color="secondary"
              name="searchMovie"
            />
          </form>
        </div>
        <div className="movie__list">
          {movie.length !== 0
            ? movie.map(({ id, title, release_date, poster_path }) => (
                <MovieItem
                  key={id}
                  id={id}
                  title={title}
                  release_date={release_date}
                  poster_path={poster_path}
                />
              ))
            : `There is no data`}
          {isLoading && <CircularProgress color="secondary" />}
          {movie.length !== 0 && (
            <Button variant="contained" onClick={this.loadMore} color="primary">
              Load More
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
