import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '51103b4e400ad80867dbac8add08ee9b';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => {
        // console.log(data.results);
        setListMovies(data.results);
      })
      .catch();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {listMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
