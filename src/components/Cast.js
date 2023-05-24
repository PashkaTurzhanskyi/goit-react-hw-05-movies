import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // HTTP /movies/get-movie-credits
  }, []);

  return <>Cast: {movieId}</>;
};

export default Cast;
