import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';

export const navroutes = [
  {
    name: 'Favorites',
    path: '/favorites',
    icon: <FavoriteIcon />,
    public: true,
    requireAccount: true,
  },
  {
    name: 'Account',
    path: '/account',
    icon: <AccountCircleIcon />,
    public: false,
    requireAccount: true,
  },
  {
    name: 'Popular',
    path: '/popular',
    icon: <TrendingUpIcon />,
    public: false,
    requireAccount: false,
  },
  {
    name: 'Login',
    path: '/login',
    icon: <LoginIcon />,
    public: true,
    requireAccount: false,
  },
]
