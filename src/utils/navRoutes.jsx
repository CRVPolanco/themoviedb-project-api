import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const navroutes = [
  {
    name: 'Favorites',
    path: '/favorites',
    icon: <FavoriteIcon />,
    public: true,
  },
  {
    name: 'Account',
    path: '/account',
    icon: <AccountCircleIcon />,
    public: false,
  },
  {
    name: 'Login',
    path: '/login',
    icon: <LoginIcon />,
    public: true,
  },
  {
    name: 'Register',
    path: '/register',
    icon
  }
]
