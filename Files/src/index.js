import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import LocationList from './containers/LocationList';
import './style.css';

import LocationData from '../assets/data.js'

const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Travel App</h1>
    <p>This application allows you to keep track of trips,
    create a destination wish list,
    and view other users previous trips to gain inspiration
    for your next travel plans! </p>
    </div>

    <div className='container'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Visited Cities</h1>
        <h1 className='navbar-brand text-light'>Wishlist</h1>
        <h1 className='navbar-brand text-light'>Explore</h1>
        <h1 className='navbar-brand text-light'>Friends</h1>
      </nav>



      <CardList data={LocationData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
