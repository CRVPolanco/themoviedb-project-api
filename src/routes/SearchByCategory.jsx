import React from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesFromCategory } from '../services/fetchMoviesFromSpecific';
import StandardCardSlider from '../components/StandardCardSlider';

const SearchByCategory = () => {

  const [moviesToRender, setMoviesToRender] = React.useState([]);

  const { categoryName } = useParams();
  const firstLetterUp = `${categoryName.charAt(0).toUpperCase()}${categoryName.substring(1, categoryName.length)}`;

  const getCategory = async () => {
    const response = await getMoviesFromCategory(categoryName);
    const data = await response.data;

    setMoviesToRender(data.results);
  }

  React.useEffect(() => {
    getCategory();
  })

  return(
    <StandardCardSlider title={firstLetterUp} moviesToRender={moviesToRender} />
  )
};

export default SearchByCategory;
