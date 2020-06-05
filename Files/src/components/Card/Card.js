import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ location }) => {
  return (
    <div className='card'>
      <img src={location.img.src} className='card-img-top' alt={location.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`${location.title} (${location.year})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`City: ${location.City}`}</li>
        <li className='list-group-item'>{`Country: ${location.Country}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.object.isRequired
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
