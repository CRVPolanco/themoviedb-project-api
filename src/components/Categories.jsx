import React from 'react';
import { Stack, Typography } from '@mui/material';
import { CategoriesSection, CategoriesContainer } from '../styles/CategoriesSection';


const Categories = ({ title }) => {

  return(
    <CategoriesSection>
      <Typography variant="h6">{title}</Typography>
      <CategoriesContainer>
        {[1,2,3,4,5,6,7,8,9,10].map(c => (
          <Stack>
            <span></span>
            <Typography variant="h7">Hola</Typography>
          </Stack>
        ))}
      </CategoriesContainer>
    </CategoriesSection>
  )

}

export default Categories;
