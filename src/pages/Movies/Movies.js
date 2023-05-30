import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'components/service';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [listFoundMovies, setListFoundMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    query &&
      axios
        .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
        .then(({ data }) => setListFoundMovies(data.results))
        .catch(error => console.log(error));
  }, [query]);

  const handleInputChange = e => setSearchQuery(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    searchQuery && setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {listFoundMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
