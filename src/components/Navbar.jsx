import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, TextField, Stack, Typography, useMediaQuery } from '@mui/material';
import { navroutes } from '../utils/navRoutes';
import InputSearcher from './InputSearcher';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ children }) => {

  const [toggleSearcher, setToggleSearcher] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const isNotMobile = useMediaQuery('(min-width:600px)');

  const handleToggleSearcher = () => setToggleSearcher(!toggleSearcher);

  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
          <Toolbar>
            {!isNotMobile &&
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KajloMovies
            </Typography>
            {(!isNotMobile && !toggleSearcher) &&
              <IconButton onClick={handleToggleSearcher}>
                <SearchIcon
                  sx={{ color: '#FFF', width: '28px', height: '28px' }}
                  edge="end"
                  />
              </IconButton>
            }
            {(!isNotMobile && !!toggleSearcher) &&
              <InputSearcher searchValue={searchValue} />
            }
            { isNotMobile &&
              <Stack direction="row" gap={3}>
                <InputSearcher searchValue={searchValue} />
                {navroutes.map(r => {
                  if(!r.requireAccount)
                    return (
                      <NavLink
                      to={r.path}
                      style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          color="white"
                          variant="h6"
                          sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          {r.icon}
                          {r.name}
                        </Typography>
                      </NavLink>
                    )
                  })}
              </Stack>
            }
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  )
};

export default Navbar;
