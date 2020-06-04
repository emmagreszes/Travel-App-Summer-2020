import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import MovieList from './containers/MovieList';

import classData from '../assets/data.js'

const movieData = []

const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Brandeis University Fall 2020 Courses</h1>
    <p>This page lists several courses offered this fall at Brandeis. </p>
    </div>

    <MovieList data={movieData} title="Brandeis Classes Fall 2020" />

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Course List</h1>
      </nav>

      <CardList data={classData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
