import React from 'react';
import PropTypes from 'prop-types';


const  LocationList = ({data,title}) => {
  return (
   <>
     <h1> {title} </h1>
     <ul>
       {data.map(movie => (
         <li key={location.id}>
           {location.amount} -- {location.title}
         </li>
       ))}
     </ul>
   </>
 );
}

LocationList.propTypes = {
    data: PropTypes.array.isRequired,
    City: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
};


export default LocationList;
