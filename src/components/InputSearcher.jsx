import { Stack } from '@mui/material';
import React from 'react';
import { InputContainer, Input } from '../styles/InputContainer';
import SearchIcon from '@mui/icons-material/Search';

const InputSearcher = ({ searchValue, setSearchValue, navigate }) => {
  return(
    <InputContainer>
      <Stack width="100%">
        <SearchIcon sx={{
          width: '24px',
          height: '24px',
          color: '#fff',
          position: 'absolute',
          top: '6px',
          right: '12px'
        }}
          onClick={() => navigate(`/movie/search/${searchValue}`)}
        />
        <Input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue}/>
      </Stack>
    </InputContainer>
  )
};

export default InputSearcher;
