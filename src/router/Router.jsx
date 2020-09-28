import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../components/HomePage/HomePage';
import MoviesPage from '../components/MoviesPage/MoviesPage';
import Search from '../components/Search/Search';
import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/search" component={Search} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </div>
  );
};

export default Router;
