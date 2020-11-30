import { NavLink, Link } from 'react-router-dom';
import routes from '../../routes';

const FilmItem = ({ title, match, id, location }) => (
  <li>
    {/*{console.log(match.url)}*/}
    <Link
      to={{
        pathname: `${routes.movies}/${id}`,
        state: { from: location },
      }}
    >
      {title}
    </Link>
  </li>
);

export default FilmItem;
