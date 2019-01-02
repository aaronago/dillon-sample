import React from 'react';
import { Container, MovieInfo, MoviePoster } from './blocks';

const MovieTile = ({ movie }) => (
  <Container>
    <MoviePoster src={movie.imgPath} alt={movie.title} />
    <MovieInfo>
      <h4>{movie.title}</h4>
      <p>{movie.artistName}</p>
    </MovieInfo>
  </Container>
);

export default MovieTile;
