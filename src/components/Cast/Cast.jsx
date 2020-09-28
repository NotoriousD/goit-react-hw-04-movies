import React, { Component } from 'react';
import { movieAPI } from '../../api';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
  };

  fetchCast = () => {
    const { location } = this.props;
    const path = location.pathname.split('/')[2];
    movieAPI
      .getCastMovie(path)
      .then(({ data: { cast } }) => {
        console.log(cast);
        this.setState({
          cast: cast,
        });
      })
      .catch(e => console.log(e.message));
  };

  componentDidMount() {
    this.fetchCast();
  }

  render() {
    const { cast } = this.state;
    return (
      <div className="character__list">
        <div className="content__chars">
          {cast.map(({ character, id, name, profile_path }) => (
            <div className="character" key={id}>
              <img
                src={`//image.tmdb.org/t/p/w138_and_h175_face${profile_path}`}
                alt={name}
              />
              <span className="name">{name}</span>
              <span className="char">{character}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cast;
