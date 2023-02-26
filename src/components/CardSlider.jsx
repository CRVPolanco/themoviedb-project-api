import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { CardSliderContainer } from '../styles/Card';
import Card from './Card';

const CardSlider = ({ title, data }) => {

  return(
    <Stack mt={3}>
      <Typography variant="h5" color="white" mb={2}>{title}</Typography>
      <CardSliderContainer>
        {
          data.map((c) => (
            <Card key={c.id} data={c} />
          ))
        }
      </CardSliderContainer>
    </Stack>
  )
};

export default CardSlider;
