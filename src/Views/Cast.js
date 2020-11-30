import noImage from '../img/noImageCard.jpg';

export default function Cast({ cast }) {
  return (
    <ul>
      {cast.map(({ name, profile_path, character }) => (
        <li key={name}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w400${profile_path}`
                : noImage
            }
            alt="name"
            width="150px"
            height="150px"
          />
          <p>
            {name} : <span>{character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
