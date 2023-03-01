import React from 'react';
import { Stack, Typography } from '@mui/material';
import { CategoriesSection, CategoriesContainer } from '../styles/CategoriesSection';


const Categories = ({ title, data }) => {

  return(
    <CategoriesSection>
      <Typography variant="h5" fontWeight="bold" mb={2}>{title}</Typography>
      <CategoriesContainer>
        {data.map(c => (
          <Stack key={c.id}>
            <span></span>
            <Typography variant="h7" my={1}>{c.name}</Typography>
          </Stack>
        ))}
      </CategoriesContainer>
    </CategoriesSection>
  )

}

export default Categories;
