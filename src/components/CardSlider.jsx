import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { CardSliderContainer } from '../styles/Card';
import Card from './Card';

const CardSlider = ({ title }) => {

  return(
    <Stack mt={3}>
      <Typography variant="h5" color="white" mb={2}>{title}</Typography>
      <CardSliderContainer>
        {
          (new Array(30).fill(0).map((c, i) => (
            <Card key={i} />
            )))
          }
      </CardSliderContainer>
    </Stack>
  )
};

export default CardSlider;
