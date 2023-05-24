import { useEffect } from 'react';
// import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
const API_KEY = '582707f454b5a6208f3d9a05b7aa2e3d';

const Home = () => {
  useEffect(() => {
    // HTTP ---> /trending/get-trending
    fetch(`${BASE_URL}?api_key=${API_KEY}/trending/get-trending`)
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
