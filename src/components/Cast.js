import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'components/service';

const Cast = () => {
  const { movieId } = useParams();
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(({ data }) => setActorList(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {actorList.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width="100px"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
