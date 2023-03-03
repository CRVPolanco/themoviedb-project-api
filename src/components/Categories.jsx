import React from 'react';
import { Stack, Typography } from '@mui/material';
import { CategoriesSection, CategoriesContainer } from '../styles/CategoriesSection';
import { NavLink } from 'react-router-dom';


const Categories = ({ title, data }) => {

  return(
    <CategoriesSection>
      <Typography variant="h5" fontWeight="bold" mb={2}>{title}</Typography>
      <CategoriesContainer>
        {data.map(c => (
          <Stack key={c.id}>
            <NavLink to={`/movie/category/${c.name.toLowerCase()}`} style={{ margin: '8px 0', textDecoration: 'none', color: '#fff' }}>
              <span></span>
              {c.name}
            </NavLink>
          </Stack>
        ))}
      </CategoriesContainer>
    </CategoriesSection>
  )

}

export default Categories;
