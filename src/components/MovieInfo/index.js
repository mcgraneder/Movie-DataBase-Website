import React from 'react';
// Components
import Thumb from '../Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
  <Wrapper color="white" backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text color="white">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className='rating-directors' color="white">
          <div>
            <h3>RATING</h3>
            <div color="white" className='score'>{movie.vote_average}</div>
          </div>
          <div color="white" className='director'>
            <h3 color="white">DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(director => (
              <p color="white" key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
  movie: PropTypes.object
}

export default MovieInfo;
