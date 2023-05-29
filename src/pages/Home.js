import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'components/service';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => setListMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {listMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
