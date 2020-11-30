import makeFetch from '../Services/makeFetch';
import FilmList from '../components/FilmList/FilmList';
import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import spinnerStyle from '../Services/spinnerStyle';

export default class Home extends Component {
  state = {
    query: null,
    movies: [],
    isLoad: false,
  };

  componentDidMount() {
    this.setState({
      isLoad: !this.state.isLoad,
    });
    makeFetch.getPopular().then((res) => {
      this.setState({
        movies: res,
        isLoad: !this.state.isLoad,
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        {this.state.isLoad && <LinearProgress style={{ ...spinnerStyle }} />}
        {movies.length > 0 && <FilmList movies={movies} {...this.props} />}
      </>
    );
  }
}
