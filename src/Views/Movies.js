import React, { Component } from 'react';
import makeFetch from '../Services/makeFetch';
import FilmList from '../components/FilmList/FilmList';
import SearchForm from '../components/SearchForm/SerachForm';
import getParseQuery from '../Services/parseQuery';
import LinearProgress from '@material-ui/core/LinearProgress';
import spinnerStyle from '../Services/spinnerStyle';

export default class Movies extends Component {
  state = {
    movies: [],
    isLoad: false,
  };
  componentDidMount() {
    const params = getParseQuery(this.props.location.search);
    if (params.query) {
      this.getMovieFromFetch(params.query);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { query: prevParams } = getParseQuery(prevProps.location.search);
    const { query: params } = getParseQuery(this.props.location.search);

    if (params !== prevParams && this.props.location.search) {
      this.getMovieFromFetch(params);
    }
  }

  getMovieFromFetch(query) {
    this.setState({
      isLoad: !this.state.isLoad,
    });
    makeFetch.getMovies(query).then((res) => {
      this.setState({
        movies: res,
        isLoad: !this.state.isLoad,
      });
    });
  }

  handleSubmitForm = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSubmitForm} />
        {this.state.isLoad && <LinearProgress style={{ ...spinnerStyle }} />}
        {movies.length > 0 && (
          // <FilmList
          //   movies={movies}
          //   match={this.props.match}
          //   location={this.props.location}
          // />

          <FilmList movies={movies} {...this.props} />
        )}
      </>
    );
  }
}
