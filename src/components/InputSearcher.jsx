import { Stack } from '@mui/material';
import React from 'react';
import { InputContainer, Input } from '../styles/InputContainer';
import SearchIcon from '@mui/icons-material/Search';

const InputSearcher = ({ searchValue }) => {
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
        }}/>
        <Input type="text" onChange={e => searchValue(e.target.value)} />
      </Stack>
    </InputContainer>
  )
};

export default InputSearcher;
