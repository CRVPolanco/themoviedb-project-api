import React from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import { UserContext } from '../context/UserContext';
import { CardMedia, Paper, Typography } from '@mui/material';
import { Img } from '../styles/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const poster = "https://image.tmdb.org/t/p/w500"

const Card = ({ data }) => {

  const [ref, { entry, wasEverVisible }] = useTrackVisibility();

  const { actualUser, toggleFavorites } = React.useContext(UserContext);

  const isFavorite = () => {
    if(!actualUser)
      return false;

    const isFav = actualUser.movies_favorites.some(m => m.id === data.id);
    return isFav;
  }

  const clickRedirector = useNavigate();


  return(
    <Paper elevation={4} sx={{
      position: 'relative',
      width: '155px',
      height: '325px',
      color: '#FFF',
      backgroundColor: '#1a1a1a'
    }}
    >
      <CardMedia sx={{
        position: 'relative',
        width: '155px',
        height: '325px',
        overflow: 'hidden'
      }} mb={4}>
        <FavoriteIcon
          sx={{
            position: 'absolute',
            color: `${isFavorite() ? 'red' : '#fff'}`,
            width: '40px',
            height: '40px',
            top: '8px',
            right: '8px',
            cursor: 'pointer',
            zIndex: '1',
          }}
          onClick={() => toggleFavorites(data)}
        />
        <Img src={!!wasEverVisible ? `${poster}${data.poster_path}`: 'https://fakeimg.pl/225x250/' }
          alt="Card Image"
          ref={ref}
          onClick={() => clickRedirector(`/movie/details/${data.id}`)}
        />
        <Typography sx={{ mx: 1.5, height: '21px', overflow: 'hidden', mb: 0.5 }} fontWeight="bold">{data.title}</Typography>
        <Typography sx={{ mx: 1.5 }}>{data.overview}</Typography>
      </CardMedia>
    </Paper>
  )
};

export default Card;
