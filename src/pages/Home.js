import { useEffect } from 'react';
// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
const API_KEY = '51103b4e400ad80867dbac8add08ee9b';

const Home = () => {
  useEffect(() => {
    // HTTP ---> /trending/get-trending
    fetch(
      `https://developers.themoviedb.org/3/trending/get-trending?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(res => console.log(res));
    // axios
    //   .get(`${BASE_URL}?api_key=${API_KEY}/trending/get-trending`)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch();
  }, []);
  return <div>Список популярних фільмів</div>;
};

export default Home;
