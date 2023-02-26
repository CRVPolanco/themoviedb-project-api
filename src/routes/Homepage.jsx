import React from 'react';
import { HomepageContainer } from '../styles/Container';
import CardSlider from '../components/CardSlider';
import Navbar from '../components/Navbar';
import PageDescription from '../components/PageDescription';
import Categories from '../components/Categories';

const Homepage = () => {
  return(
    <>
      <HomepageContainer>
        <PageDescription />
        <CardSlider title="Trending Today" />
        <CardSlider title="Trending Week" />
        <Categories title="Categories" />
      </HomepageContainer>
    </>
  )
};

export default Homepage;
