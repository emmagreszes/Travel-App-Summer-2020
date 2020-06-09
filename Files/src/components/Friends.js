import React from 'react';
import CardList from '../containers/CardList';
//import LocationList from './containers/LocationList';
import '../style.css';

/**
- This is where you can view you friends on the app and where they have traveled
- Should have an option to add friends and accept requests
**/

const Friends = () => {
  return (

    <div>
      <CardList data={[]} />
      <h2>About</h2>
      <p> This app show how to create a multiscreen application
      and to manipulate state using hooks.
      </p>
    </div>
  )
}
export default Friends;
