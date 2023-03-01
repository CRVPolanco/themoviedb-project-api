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
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Register = () => {

  const { actualUser, REGISTER } = React.useContext(UserContext);

  const [data, setData] = React.useState({ name: '', username: '', phone: '', email: '', password: '' });
  const [showPass, setShowPass] = React.useState(false);

  const toggleVisibility = () => setShowPass(!showPass);

  const handleName = (e) => setData({...data, name: e.target.value});
  const handleUsername = (e) => setData({...data, username: e.target.value});
  const handlePhone = (e) => setData({...data, phone: e.target.value});
  const handleEmail = (e) => setData({ ...data, email: e.target.value });
  const handlePassword = (e) => setData({ ...data, password: e.target.value });

  const handleSignUp = () => REGISTER(data);

  return(
    <Centerer>
      <LoginSection>
        <Paper elevation={4} sx={{
          width: '100%',
          padding: '8px 16px',
          backgroundColor: '#1a1a1a',
          color: '#FFF'
        }}
        >
          <Typography variant="h4" fontWeight="bold" my={2}>Sign up</Typography>
          <Form>
            <ThemeProvider theme={theme}>
              <TextField
                id="standard-basic-input-full-name"
                label="Full name"
                variant="standard"
                color='allWhite'
                value={data.name}
                onChange={handleName}
                focused
                required
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  sx: {
                    color: '#fff',
                  }
                }}
                />
              <TextField
                id="standard-basic-input-username"
                label="Username"
                variant="standard"
                color='allWhite'
                value={data.username}
                onChange={handleUsername}
                focused
                required
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  sx: {
                    color: '#fff',
                  }
                }}
                />
              <TextField
                id="standard-basic-input-phone"
                label="Phone"
                variant="standard"
                color='allWhite'
                value={data.phone}
                onChange={handlePhone}
                focused
                required
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  endAdornment:
                  <InputAdornment position="start">
                      <PhoneIcon sx={{ color: '#FFF' }} />
                  </InputAdornment>,
                  sx: {
                    color: '#fff'
                  }
                }}
              />
              <TextField
                id="standard-basic-input-email"
                label="Email"
                variant="standard"
                color='allWhite'
                value={data.email}
                onChange={handleEmail}
                focused
                required
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  endAdornment:
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
                value={data.password}
                onChange={handlePassword}
                focused
                required
                sx={{ margin: '0 0 12px 0', width: '100%' }}
                InputProps={{
                  endAdornment:
                  <InputAdornment
                    position="start"
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
                  onClick={handleSignUp}
                >Sign up</Button>
                <NavLink
                  to='/login'
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    textDecoration: 'none',
                    margin: '8px 0 12px 0'
                  }}
                >Already have account? Sign in</NavLink>
              </Stack>
            </ThemeProvider>
          </Form>
        </Paper>
      </LoginSection>
    </Centerer>
  )
};

export default Register;
