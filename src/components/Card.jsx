import React from 'react';
import { useIntersectionObserver, useTrackVisibility } from 'react-intersection-observer-hook';
import { CardMedia, Paper, Typography } from '@mui/material';
import { Img } from '../styles/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ data }) => {

  const [ref, { entry, wasEverVisible }] = useTrackVisibility();
  const isVisible = entry && entry.isIntersecting;

  React.useEffect(() => {
    console.log(isVisible, " and was ever visible: " + wasEverVisible);
  }, [isVisible]);

  return(
    <Paper elevation={4} sx={{
      position: 'relative',
      width: '225px',
      height: '350px'
    }}
    >
      <CardMedia sx={{
        position: 'relative',
        width: '225px',
        height: '350px',
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
        <Img src="https://fakeimg.pl/225x250/" alt="Card Image" ref={ref}/>

        <Typography sx={{ ml: 1.5 }}>Lorem ipsum</Typography>
        <Typography sx={{ ml: 1.5 }}>Lorem ipsum</Typography>
      </CardMedia>
    </Paper>
  )
};

export default Card;
