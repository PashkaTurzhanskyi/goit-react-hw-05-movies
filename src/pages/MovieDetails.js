import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '51103b4e400ad80867dbac8add08ee9b';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(({ data }) => {
        setMovieDetails(data);
      })
      .catch();
  }, [movieId]);

  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="200px"
        />
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
      <Outlet />
    </>
  );
};

export default MovieDetails;
