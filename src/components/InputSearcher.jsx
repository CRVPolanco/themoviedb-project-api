import { Stack } from '@mui/material';
import React from 'react';
import { InputContainer, Input } from '../styles/InputContainer';
import SearchIcon from '@mui/icons-material/Search';

const InputSearcher = ({ searchValue }) => {
  return(
    <InputContainer>
      <Stack>
        <SearchIcon sx={{ position: 'absolute', top: '8px', left: '8px' }}/>
        <Input type="text" onChange={e => searchValue(e.target.value)} />
      </Stack>
    </InputContainer>
  )
};

export default InputSearcher;
