import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // HTTP /movies/get-movie-reviews
  }, []);
  return <>Reviews: {movieId}</>;
};

export default Reviews;
