import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img src={movie.img.src} className='card-img-top' alt={movie.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`professor: ${movie.professor}`}</li>
        <li className='list-group-item'>{`Course: ${movie.name}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default Card;
