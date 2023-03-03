import React from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';
import StandardCardSlider from '../components/StandardCardSlider';

const Favorites = () => {

  const { actualUser } = React.useContext(UserContext);

  if(actualUser === null)
    return <Navigate to="/login/" />

  return(
    <StandardCardSlider title="Favorites" moviesToRender={actualUser.movies_favorites} />
  )
};

export default Favorites;
