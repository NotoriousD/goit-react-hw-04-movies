import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';

export const MovieItem = ({ id, title, release_date, poster_path }) => {
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
