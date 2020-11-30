import FilmItem from '../FilmItem/FilmItem';

export default function FilmList({ movies, match, location }) {
  return (
    <ul>
      {console.log(match.url)}
      {movies.map(({ id, title }) => {
        return (
          <FilmItem
            key={id}
            title={title}
            id={id}
            match={match}
            location={location}
          />
        );
      })}
    </ul>
  );
}
