import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../routes';
import Navigation from '../Navigation/Navigation';
import Home from '../../Views/Home';
import Movies from '../../Views/Movies';
import NotFound from '../../Views/NotFound';
import MovieDetails from '../../Views/MovieDetails';

export default class App extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.state.movies);
  }

  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={Movies} />
          <Route path={routes.moviesID} component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}
