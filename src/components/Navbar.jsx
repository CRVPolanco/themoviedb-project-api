import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, TextField, Stack, Typography, useMediaQuery } from '@mui/material';
import { UserContext } from '../context/UserContext';
import { navroutes } from '../utils/navRoutes';
import InputSearcher from './InputSearcher';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ children }) => {

  const [toggleSearcher, setToggleSearcher] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const { actualUser, LOGOUT } = React.useContext(UserContext);

  const isNotMobile = useMediaQuery('(min-width:500px)');
  const isMiniMobile = useMediaQuery('(max-width:375px)');

  const handleToggleSearcher = () => setToggleSearcher(!toggleSearcher);
  const handleLogout = () => LOGOUT();

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
            <Stack direction="row" gap={isMiniMobile ? 1.5 : 3} alignItems="center">
              {isNotMobile && <InputSearcher searchValue={searchValue} setSearchValue={setSearchValue} /> }
              {navroutes.map(r => {
                if(!actualUser && r.requireAccount) return null
                if(!!actualUser && r.public) return null
                  return (
                    <NavLink key={r.path}
                    to={r.path}
                    onClick={r.icon.type.type.render.displayName === 'LogoutIcon' ? handleLogout : null}
                    style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        color="white"
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        {r.icon}
                        {r.name}
                      </Typography>
                    </NavLink>
                  )
                })}
                {!isNotMobile &&
                  <IconButton sx={{ padding: '1px 0 0 0' }} onClick={handleToggleSearcher}>
                    {!toggleSearcher ?
                    <SearchIcon
                      sx={{ color: '#FFF', width: '28px', height: '28px' }}
                      edge="end"
                    />
                    :
                    <CloseIcon
                      sx={{ color: '#fff', width: '28px', height: '28px' }}
                      edge="end"
                    />
                  }
                </IconButton>
              }
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      {!!toggleSearcher &&
        <InputSearcher searchValue={searchValue} setSearchValue={setSearchValue} />
      }
      {children}
    </>
  )
};

export default Navbar;
