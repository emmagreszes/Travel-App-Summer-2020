import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/CardList.css'

const Card = ({ location }) => {
  return (
    <div className='card'>
      <img src={location.img.src} className='card-img-top' alt={location.img.alt} width = "300" height = "200"/>
      <div className='card-body'>
        <h2 className='card-title'>{`${location.City},`}</h2>
        <h4 className = 'card-subtitle'>{`${location.Country}`}</h4>
      </div>
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
