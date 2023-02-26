import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '../styles/Container';

const PageDescription = () => {
  return(
    <section>
      <Box>
        <Container>
          <Typography variant="h5" fontWeight="bold">
            Welcome to KajloMovies!
          </Typography>
          <Typography variant="h6" fontWeight="300" mt={2}>
            If you're looking for movie information here is the correct place!
          </Typography>
        </Container>
      </Box>
    </section>
  )
};

export default PageDescription;
