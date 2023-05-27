import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '51103b4e400ad80867dbac8add08ee9b';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(({ data }) => {
        setReviewsList(data.results);
      })
      .catch();
  }, [movieId]);
  return (
    <>
      <ul>
        {reviewsList.length > 0 ? (
          reviewsList.map(i => (
            <li key={i.id}>
              <b>Author: {i.author.toUpperCase()}</b>
              <p>{i.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
