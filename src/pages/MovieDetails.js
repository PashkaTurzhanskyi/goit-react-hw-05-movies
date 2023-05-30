import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from 'components/service';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(({ data }) => setMovieDetails(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        {movieDetails && <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="200px"
        />}
        <h1>
          {movieDetails.title}
          {' ('}
          {movieDetails.release_date && movieDetails.release_date.slice(0, 4)}
          {')'}
        </h1>
        <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <p>
          {movieDetails.genres && movieDetails.genres.map(i => i.name + ' ')}
        </p>
        <p>Additional information</p>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
