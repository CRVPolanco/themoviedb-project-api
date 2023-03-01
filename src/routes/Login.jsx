import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, InputAdornment, Stack, Paper, TextField, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LoginSection, Form } from '../styles/Login';
import { Centerer } from '../styles/Container'
import { theme } from '../styles/Pallete';
import { UserContext } from '../context/UserContext';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

  const { LoginError, LOGIN } = React.useContext(UserContext);

  const [userInfo, setUserInfo] = React.useState({ email: '', password: '' });
  const [showPass, setShowPass] = React.useState(false);

  const toggleVisibility = () => setShowPass(!showPass);
  const login = () => LOGIN({ email: userInfo.email, password: userInfo.password });

  const handleEmail = (e) => setUserInfo({ ...userInfo, email: e.target.value });
  const handlePassword = (e) => setUserInfo({ ...userInfo, password: e.target.value });


  return(
    <Centerer>
      <LoginSection style={{ marginBottom: '75px' }}>
        <Paper elevation={4} sx={{
          width: '100%',
          padding: '8px 16px',
          backgroundColor: '#1a1a1a',
          color: '#FFF'
        }}
        >
          <Typography variant="h4" fontWeight="bold" my={2}>Login</Typography>
          <Form>
            <ThemeProvider theme={theme}>
              <TextField
                id="standard-basic-input-email"
                label="Email"
                variant="standard"
                color='allWhite'
                focused
                required
                value={userInfo.email}
                onChange={handleEmail}
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  startAdornment:
                  <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#FFF' }} />
                  </InputAdornment>,
                  sx: {
                    color: '#fff'
                  }
                }}
                />
                <TextField
                id="standard-basic-input-password"
                label="Password"
                variant="standard"
                type={showPass ? 'text' : 'password'}
                color='allWhite'
                focused
                required
                value={userInfo.password}
                onChange={handlePassword}
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  endAdornment:
                  <InputAdornment
                    position="end"

                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={toggleVisibility}>
                        {showPass ? <VisibilityOffIcon
                          sx={{ color: '#FFF' }} /> :
                        <VisibilityIcon
                          sx={{ color: '#FFF' }} />
                        }
                      </IconButton>
                    </InputAdornment>,
                    sx: {
                      color: '#fff'
                    },
                }}
                />
              <Stack direction="column">
                <Button
                  color="textBlack"
                  variant="outlined"
                  sx={{
                    backgroundColor: '#fff',
                    fontWeight: '700',
                    margin: '12px 0'
                  }}
                  onClick={login}
                >Log in</Button>
                <NavLink
                  to='/recovery'
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    textDecoration: 'none',
                    margin: '8px 0 12px 0'
                  }}
                >Forgot your password</NavLink>
              </Stack>
            </ThemeProvider>
          </Form>
        </Paper>
      </LoginSection>
    </Centerer>
  )
};

export default Login;
