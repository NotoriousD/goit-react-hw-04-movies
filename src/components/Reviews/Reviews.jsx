import React, { Component } from 'react';
import { movieAPI } from '../../api';
import './Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  fetchCast = () => {
    const { location } = this.props;
    const path = location.pathname.split('/')[2];
    movieAPI
      .getReviewMovie(path)
      .then(({ data: { results } }) => {
        this.setState({
          reviews: results,
        });
      })
      .catch(e => console.log(e.message));
  };

  componentDidMount() {
    this.fetchCast();
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="reviews__list">
        {reviews.map(({ id, content, author }) => (
          <div className="review" key={id}>
            <span className="name">{author}</span>
            <p className="descr">{content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Reviews;
