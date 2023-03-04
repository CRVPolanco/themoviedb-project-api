import React from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesFromCategory } from '../services/fetchMoviesFromSpecific';
import StandardCardSlider from '../components/StandardCardSlider';

const SearchByCategory = () => {

  const [moviesToRender, setMoviesToRender] = React.useState([]);

  const { categoryName } = useParams();
  const firstLetterUp = `${categoryName.charAt(0).toUpperCase()}${categoryName.substring(1, categoryName.length)}`;

  const getCategory = async (name) => {
    const response = await getMoviesFromCategory(name);
    const data = await response.data.results;

    console.log(response);

    setMoviesToRender(data);
  }

  React.useEffect(() => {
    getCategory(categoryName);
  }, [categoryName]);

  return(
    <StandardCardSlider title={firstLetterUp} moviesToRender={moviesToRender} />
  )
};

export default SearchByCategory;
