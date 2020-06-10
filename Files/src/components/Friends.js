import React from 'react';
import FriendsList from '../containers/FriendsList';
import FriendData from '../../assets/friends.js';
import '../style.css';

/**
- This is where you can view you friends on the app and where they have traveled
- Should have an option to add friends and accept requests
**/

const Friends = () => {
  return (

    <div>
      <FriendsList data={FriendData} />
  
    </div>
  )
}
export default Friends;
