import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieItem.scss';

const MovieItem = ({ id, title, release_date, poster_path }) => {
  return (
    <div className="film">
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt={title}
      />
      <Link className="link__film" to={`/movies/${id}`}>
        <span className="title__film">{title}</span>
        <span className="release__date">{release_date}</span>
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieItem;
