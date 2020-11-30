import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import makeFetch from '../Services/makeFetch';
import style from './MoviesDetails.module.css';
import Cast from './Cast';
import routes from '../routes';
import Review from './Review';
import styles from '../components/Navigation/Navigation.module.css';
import noImage from '../img/noImageCard.jpg';
import LinearProgress from '@material-ui/core/LinearProgress';
import spinnerStyle from '../Services/spinnerStyle';

const MovieDetails = ({ match, location, history }) => {
  const [movie, setMovie] = useState(null);
  const [isload, setLoad] = useState(true);

  useEffect(async () => {
    const movieRes = await makeFetch
      .getFetchForID(match.params.movieID)
      .then((res) => res);
    const rev = await makeFetch
      .getReviewForID(match.params.movieID)
      .then((res) => res);

    const cast = await makeFetch
      .getCastForID(match.params.movieID)
      .then((res) => res);
    console.log(cast);

    movieRes.review = [...rev];
    movieRes.cast = [...cast];
    setMovie(movieRes);
    setLoad(!isload);
  }, [setMovie]);

  const goPrevBlank = () => {
    if (location.state && location.state.from) {
      history.push({
        ...location.state.from,
      });
      return;
    }
    history.push(routes.movies);
  };

  return (
    <>
      {isload && <LinearProgress style={{ ...spinnerStyle }} />}
      {movie && (
        <div className={style.movieWrap}>
          <button onClick={goPrevBlank}>go back</button>
          <h2>{movie.title}</h2>

          <div className={style.moviesDescWrap}>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`
                  : noImage
              }
              alt={movie.title}
            />
            <div className={style.movieDesc}>
              <p>
                <span>Vote:</span> {movie.vote_average}
              </p>
              <p>
                <span>Overview:</span> {movie.overview}
              </p>
              <div className={style.genres}>
                <span>Genres:</span>
                {movie.genres.map((genre) => (
                  <p key={genre.name}>{genre.name}</p>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to={`${match.url}/cast`}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${match.url}/review`}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            Review
          </NavLink>

          <Switch>
            <Route
              path={`${match.path}/cast`}
              render={(props) => <Cast {...props} cast={movie.cast} />}
            />

            <Route
              path={`${match.path}/review`}
              render={(props) => <Review {...props} rev={movie.review} />}
            />
          </Switch>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
