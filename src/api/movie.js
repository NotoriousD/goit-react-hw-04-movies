import axios from 'axios';

const api_key = `ab2a5163718534ea1fabec74ffd2cbd4`;
const base_url = `https://api.themoviedb.org/3/`;

const getTrending = async () => {
  try {
    const response = await axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
      .catch(e => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const searchMovie = async (query, page = 1) => {
  const search = query !== '' ? `&query=${query}` : '';
  try {
    const response = await axios
      .get(
        `${base_url}search/movie?api_key=${api_key}&language=en-US${search}&page=${page}&include_adult=false`,
      )
      .catch(e => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const getMovieDetails = async id => {
  try {
    const response = await axios
      .get(`${base_url}movie/${id}?api_key=${api_key}`)
      .catch(error => {
        throw error.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const getCastMovie = async id => {
  try {
    const response = await axios
      .get(`${base_url}movie/${id}/credits?api_key=${api_key}`)
      .catch(error => {
        throw error.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const getReviewMovie = async id => {
  try {
    const response = await axios
      .get(`${base_url}movie/${id}/reviews?api_key=${api_key}`)
      .catch(error => {
        throw error.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

export default {
  getTrending,
  searchMovie,
  getMovieDetails,
  getCastMovie,
  getReviewMovie,
};
