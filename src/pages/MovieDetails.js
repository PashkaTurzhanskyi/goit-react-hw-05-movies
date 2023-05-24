import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    // HTTP ---> /movies/get-movie-details
  }, []);

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
