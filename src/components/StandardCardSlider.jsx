import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Card from './Card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const StandardCardSlider = ({ title, moviesToRender }) => {

  const widthTotal = Math.floor((document.body.clientWidth - 50) / 155 );
  const redirectioner = useNavigate();

  return(
    <Container sx={{ marginBottom: '24px' }}>
      <Typography color="white" variant="h4" my={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowBackIosIcon sx={{ width: '32px', height: '32px' }} onClick={() => redirectioner(-1)} />
        {title}
      </Typography>
      <Grid container sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${widthTotal > 8 ? 8 : widthTotal}, 1fr)`,
        placeItems: 'center',
        gap: '16px' }}
      >
        {moviesToRender.map(m => (
          <Card key={m.id} data={m} />
        ))}
      </Grid>
      {!moviesToRender.length && title.toLowerCase() === 'favorites' &&
        <Stack sx={{ width: '100%' }}>
          <Typography variant="h3" color="white">
            There is not movies added to favorites, add one!
          </Typography>
        </Stack>}
    </Container>
  )
};

export default StandardCardSlider;
