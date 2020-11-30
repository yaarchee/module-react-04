const keyAPI =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNDYyYWE4MmJiNTNlZDllMDFhNjUxNTc5NDRmYyIsInN1YiI6IjVmOTcwMDdiMWNjNGZmMDAzNTQ0ZjZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M5mh1KLybMGtcOM6msBfKkE23P7P3jB01Eu3GVAsqWs';
const baseURL = 'https://api.themoviedb.org/3';
const popularURL = `${baseURL}/movie/popular?language=en-US`;
const searchURL = `${baseURL}/search/movie?language=en-US&include_adult=true`;

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${keyAPI}`,
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
  },
};

const makeFetch = {
  getPopular() {
    return fetch(popularURL, options)
      .then((res) => res.json())
      .then(({ results }) => results);
  },

  getMovies(query) {
    return fetch(`${searchURL}&query=${query}`, options)
      .then((res) => res.json())
      .then(({ results }) => results);
  },

  getFetchForID(targetID) {
    return fetch(`${baseURL}/movie/${targetID}&language=en-US`, options)
      .then((res) => res.json())
      .then((res) => res);
  },

  getReviewForID(id) {
    return fetch(`${baseURL}/movie/${id}/reviews?&language=en-US`, options)
      .then((res) => res.json())
      .then(({ results }) => results);
  },
  getCastForID(id) {
    return fetch(`${baseURL}/movie/${id}/credits?&language=en-US`, options)
      .then((res) => res.json())
      .then(({ cast }) => cast);
  },
};

export default makeFetch;
