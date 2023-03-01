import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';

export const navroutes = [
  {
    name: '',
    path: '/favorites',
    icon: <FavoriteIcon/>,
    public: false,
    requireAccount: true,
  },
  {
    name: '',
    path: '/account',
    icon: <AccountCircleIcon/>,
    public: false,
    requireAccount: true,
  },
  {
    name: '',
    path: '/popular',
    icon: <TrendingUpIcon sx={{ width: '28px', height: '28px' }}/>,
    public: true,
    requireAccount: false,
  },
  {
    name: '',
    path: '/login',
    icon: <LoginIcon/>,
    public: true,
    requireAccount: false,
  },
  {
    name: '',
    path: '/',
    icon: <LogoutIcon/>,
    public: false,
    requireAccount: true,
  },
]
