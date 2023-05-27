import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    // HTTP ---> /search/search-movies
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={e => setSearchParams({ query: e.target.value })}
      />
      <button onClick={() => {}}>Search</button>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
