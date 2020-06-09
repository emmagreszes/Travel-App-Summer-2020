import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
{/*import Login from './containers/Login.js';*/}
import Home from './components/Home.js';
import MyLocation from './components/MyLocation.js';
import Friends from './components/Friends.js';
import Wishlist from './components/Wishlist.js';
import Explore from './components/Explore.js';

const App = () => {
  return (
   <>

{/*}   <Router exact path="/Login">
    <div className= "log-in">
      <Login />
    </div>
    </Router> */}


    <div className="jumbotron">
    <h1>Travel App</h1>
    <p>This application allows you to keep track of trips,
    create a destination wish list,
    and view other users previous trips to gain inspiration
    for your next travel plans! </p>
    </div>

    <Router>
    <div className='container'>
      <ul className='navbar sticky-top navbar-light bg-dark'>
        <li className='navbar-brand text-light'>
          <Link to="/"> Home </Link>
        </li>
        <li className='navbar-brand text-light'>
          <Link to="/MyLocation"> My Locations</Link>
        </li>
        <li className='navbar-brand text-light'>
          <Link to="/Wishlist"> Wishlist</Link>
        </li>
        <li className='navbar-brand text-light'>
          <Link to="/Explore"> Explore</Link>
        </li>
        <li className='navbar-brand text-light'>
          <Link to="/Friends"> Friends</Link>
        </li>
      </ul>

      <Switch>
      <Route path="/Home">
        <Home />
      </Route>
        <Route path="/MyLocation">
          <MyLocation />
        </Route>
        <Route path="/Wishlist">
          <Wishlist />
        </Route>
        <Route path="/Explore">
          <Explore />
        </Route>
        <Route path="/Friends">
          <Friends />
        </Route>
      </Switch>

    </div>
    </Router>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
