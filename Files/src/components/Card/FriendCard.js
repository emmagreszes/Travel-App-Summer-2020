import React from 'react';
import PropTypes from 'prop-types';

const FriendCard = ({ friend }) => {
  return (
    <div className='card'>
      <img src={friend.img.src} className='card-img-top' alt={friend.img.alt} width = "300" height = "200"/>
      <div className='card-body'>
        <h2 className='card-title'>{`${friend.Username}`}</h2>
        <h4 className = 'card-subtitle'>{`${friend.Status}`}</h4>
      </div>
     </div>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.object.isRequired
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
export default FriendCard;
