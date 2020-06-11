import React, {useState} from 'react';
import CardList from '../containers/CardList';
import '../style.css';
import locationData from '../../assets/data.js';

/**
- This page should have a search tool to be able to find new places
- once you find a place it should have an option to add to wishlist
**/

const Explore = () => {
      const [locations,setLocations]=useState(locationData)
      const [city,setCity]=useState("")
      const [country,setCountry]=useState("")
      const [image,setImage]=useState("")
      const updateCity=event => setCity(event.target.value)
      const updateCountry=event => setCountry(event.target.value)
      const updateImage=event => setImage(event.target.value)
      const addItem=event => {
        const location={id:locations.length+1, City: city, Country: country, img: {src:image, alt: city}}
        setLocations(locations.concat(location))
        event.preventDefault()
      }

      return (

        <div>
          <CardList data={locations} />
          <form onSubmit={addItem}>
          <h2>Add New Location</h2>
          city: <input type="text" id="city" name="city" onChange={updateCity}/><br />
          country: <input type="text" id="country" name="country" onChange={updateCountry}/><br />
          image: <input type="text" id="image" name="image" onChange={updateImage}/><br />
          <input type="submit" value="add location to to list" />
        </form>
        {city}{country}{image}
        </div>

      )
}

export default Explore;
