import React from 'react';
import CardList from '../containers/CardList';
//import LocationList from './containers/LocationList';
import '../style.css';
import LocationData from '../../assets/data.js';

/**
- This page should have a search tool to be able to find new places
- once you find a place it should have an option to add to wishlist
**/

const Explore = () => {
      return (

        <div>
          <CardList data={LocationData} />
          <h2>About</h2>
          <p> This app show how to create a multiscreen application
          and to manipulate state using hooks.
          </p>
        </div>
      )
}

export default Explore;
