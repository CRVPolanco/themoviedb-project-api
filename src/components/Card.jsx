import React from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import { CardMedia, Paper, Typography } from '@mui/material';
import { Img } from '../styles/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';

const poster = "https://image.tmdb.org/t/p/w500"

const Card = ({ data }) => {

  const [ref, { entry, wasEverVisible }] = useTrackVisibility();

  return(
    <Paper elevation={4} sx={{
      position: 'relative',
      width: '225px',
      height: '350px',
      color: '#FFF',
      backgroundColor: '#1a1a1a'
    }}
    >
      <CardMedia sx={{
        position: 'relative',
        width: '225px',
        height: '350px',
        overflow: 'hidden'
      }} mb={4}>
        <FavoriteIcon sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          top: '8px',
          right: '8px',
          cursor: 'pointer',
          zIndex: '1',
        }}/>
        <Img src={!!wasEverVisible ? `${poster}${data.poster_path}`: 'https://fakeimg.pl/225x250/' }
          alt="Card Image"
          ref={ref}
        />
        <Typography sx={{ ml: 1.5, height: '21px', overflow: 'hidden', mb: 0.5 }} fontWeight="bold">{data.title}</Typography>
        <Typography sx={{ ml: 1.5 }}>{data.overview}</Typography>
      </CardMedia>
    </Paper>
  )
};

export default Card;
