import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Img } from '../styles/Card';
import { getSimilarMovies, getUniqueMovie } from '../services/fetchMovies';
import { UserContext } from '../context/UserContext';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import StarIcon from '@mui/icons-material/Star';
import CardSlider from '../components/CardSlider';

const Details = () => {

  const { id } = useParams();
  const [movie, setMovie] = React.useState({});
  const [similar, setSimilar] = React.useState([]);

  const { actualUser } = React.useState(UserContext);
  const redirector = useNavigate();

  const isFavorite = () => {
    if(!actualUser)
      return false;

    const isFav = actualUser.movies_favorites.some(m => Number(m.id) === Number(id));
    return !!isFav ? true : false;
  }

  const getMovie = async (identifier) => {
    const response = await Promise.all([ getUniqueMovie(identifier), getSimilarMovies(identifier) ]);

    console.log(response);

    setMovie(response[0]);
    setSimilar(response[1].results)
  };

  React.useEffect(() => {
    getMovie(id);
  }, [id]);

  return(
    <Container sx={{ color: '#fff' }}>
      <Typography my={2} variant="h5" style={{ display: 'flex', alignItems: 'center' }} onClick={() => redirector(-1)}>
        <ArrowBackIos />
        Back
      </Typography>
      <Stack direction="row">
        <Stack>
          <Img style={{
            width: '100px',
            height: '150px',
            borderRadius: '6px'
            }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </Stack>
        <Stack direction="column" justifyContent="center" ml={2}>
          <Typography fontSize={18} fontWeight="bold">{movie.title}</Typography>
          <Typography variant="h6" fontWeight="400">{movie.status}</Typography>
          <Typography variant="h6" fontWeight="400">{movie.release_date}</Typography>
        </Stack>
      </Stack>
      <Grid container sx={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }} my={2} py={1}>
        <Grid item xs={4} textAlign="center">
          <FavoriteIcon sx={{ color: `${isFavorite() ? 'red' : '#fff'}` }} />
          <Typography>Favorite</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <PeopleAltSharpIcon />
          <Typography>{movie.popularity}</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <StarIcon />
          <Typography>{movie.vote_average}</Typography>
        </Grid>
      </Grid>
      <Stack>
        <Typography fontWeight="400">{movie.overview}</Typography>
        <Typography mt={2} fontWeight="bold">Genres</Typography>
        <Stack direction="row" gap={1} mt={1} sx={{ overflowX: 'scroll', overflowY: 'hidden', paddingBottom: '8px' }}>
          {!!movie.id && movie.genres.map(g => (
            <Typography key={g.id} sx={{ padding: '4px 16px', backgroundColor: '#1a1a1a', borderRadius: '6px' }}>{g.name}</Typography>
          ))}
        </Stack>
        <CardSlider title="Similar" data={similar} />
      </Stack>
    </Container>
  )
};

export default Details;
