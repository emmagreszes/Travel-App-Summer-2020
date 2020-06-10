import React from 'react';
import CardList from '../containers/CardList';
import '../style.css';
import LocationData from '../../assets/data.js';

/**
- This page will look similar to MyLocation but for places that you
want to travel to.
- (Places are added to wishlist from the Explore page)
- Should have the option to move a place from this page to MyLocation
once it is visited
**/

const Wishlist = () => {
      return (
        <div>
          <CardList data={LocationData} />
        </div>
      )
}

export default Wishlist;
