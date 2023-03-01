import React, { useEffect } from 'react';
import { HomepageContainer } from '../styles/Container';
import { getMovies } from '../services/fetchMovies';
import { getCategories } from '../services/fetchCategories';
import CardSlider from '../components/CardSlider';
import PageDescription from '../components/PageDescription';
import Categories from '../components/Categories';

const Homepage = () => {

  const [movies, setMovies] = React.useState({ day: [], week: [], categories: [] });

  const fetchingMovies = async (timewindow) => {
    try{
      const response = await getMovies(timewindow);
      const data = await response.results;

      return data;

    }catch(e){
      console.error(e);
    }
  }

  const pAll = async () => {
    const fetchs = await Promise.all([
      fetchingMovies('day'), fetchingMovies('week'), getCategories()
    ]);

    setMovies({ ...movies, day: [...fetchs[0]], week: [...fetchs[1]], categories: [...fetchs[2].genres] });
  }

  useEffect(() => {
    pAll();
  }, [])

  return(
    <>
      <HomepageContainer>
        <PageDescription />
        <CardSlider title="Trending Today" data={movies.day} />
        <CardSlider title="Trending Week" data={movies.week} />
        <Categories title="Categories" data={movies.categories} />
      </HomepageContainer>
    </>
  )
};

export default Homepage;
