import React, { useEffect } from 'react';
import { HomepageContainer } from '../styles/Container';
import { getMovies } from '../services/fetchMovies';
import CardSlider from '../components/CardSlider';
import PageDescription from '../components/PageDescription';
import Categories from '../components/Categories';

const Homepage = () => {

  const [movies, setMovies] = React.useState({ day: [], week: [] });

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
      fetchingMovies('day'), fetchingMovies('week')
    ]);

    setMovies({ ...movies, day: [...fetchs[0]], week: [...fetchs[1]] });
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
        <Categories title="Categories" />
      </HomepageContainer>
    </>
  )
};

export default Homepage;
