import React from 'react';
import PropTypes from 'prop-types';

import FriendCard from '../components/Card/FriendCard';
import './FriendsList.css'

const FriendsList = ({data}) => {
  return (
   <div className='flex-container'>
     {data.map(friend => (
       <div key={friend.id} className='flex-container-element'>
         <FriendCard friend={friend} />
       </div>
     ))}
   </div>
 );
}

FriendsList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default FriendsList;
