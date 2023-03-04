import React from 'react';
import { useParams } from 'react-router-dom';
import StandardCardSlider from '../components/StandardCardSlider';
import { getMoviesFromSearch } from '../services/fetchMoviesFromSpecific';

const SearchByQuery = () => {

  const [moviesToRender, setMoviesToRender] = React.useState([]);

  const { id } = useParams();
  const firstLetterUp = `${id.charAt(0).toUpperCase()}${id.substring(1, id.length)}`;

  const getCategory = async (ID) => {
    const response = await getMoviesFromSearch(ID);
    const data = await response.data.results;

    setMoviesToRender(data);
  }

  React.useEffect(() => {
    getCategory(id);
  }, [id]);

  return(
    <StandardCardSlider title={firstLetterUp} moviesToRender={moviesToRender} />
  )
};

export default SearchByQuery;
