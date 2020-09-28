import React, { Component } from 'react';
import { movieAPI } from '../../api';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    details: {},
  };

  fetchMovieDetails = () => {
    const { location } = this.props;
    const path = location.pathname.split('/')[2];
    movieAPI
      .getMovieDetails(path)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          details: data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  render() {
    const {
      details: { poster_path, backdrop_path, title, release_date, overview },
    } = this.state;
    const { location } = this.props;
    return (
      <div className="movie__details-page">
        <div className="banner">
          <img
            src={`//image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`}
            alt={title}
          />
          <div className="filter"></div>
        </div>
        <div className="container movie__content">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                alt={title}
              />
            </Grid>
            <Grid item xs={9}>
              <h1>{title}</h1>
              <span className="date">Release date: {release_date}</span>
              <p className="description">{overview}</p>
              <div className="nav">
                <Button variant="contained" color="secondary">
                  <NavLink
                    to={`/movies/${location.pathname.split('/')[2]}/cast`}
                    activeClassName="active-link"
                    className="tabs-btn"
                  >
                    Cast
                  </NavLink>
                </Button>
                <Button variant="contained" color="secondary">
                  <NavLink
                    to={`/movies/${location.pathname.split('/')[2]}/reviews`}
                    activeClassName="active-link"
                    className="tabs-btn"
                  >
                    Reviews
                  </NavLink>
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Switch>
                <Route exact path="/movies/:movieId/cast" component={Cast} />
                <Route
                  exact
                  path="/movies/:movieId/reviews"
                  component={Reviews}
                />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
