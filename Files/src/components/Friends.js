import React, {useState} from 'react';
import useStickyState from '../useStickyState';
import FriendsList from '../containers/FriendsList';
import '../style.css';
import friendData from '../../assets/friends.js';

/**
- This page will look similar to MyLocation but for places that you
want to travel to.
- (Places are added to wishlist from the Explore page)
- Should have the option to move a place from this page to MyLocation
once it is visited
**/

const Friends = () => {
  const [friends,setFriends]=useStickyState(friendData, "friends")
  const [username,setUsername]=useState("")
  const [firstName,setFirst]=useState("")
  const [lastName,setLast]=useState("")
  const [image,setImage]=useState("")
  const updateUsername=event => setUsername(event.target.value)
  const updateFirst=event => setFirst(event.target.value)
  const updateLast=event => setLast(event.target.value)
  const updateImage=event => setImage(event.target.value)
  const addItem=event => {
    const friend={id:friends.length+1, Username: username, First: firstName, Last: lastName, img: {src:image, alt: username}}
    setFriends(friends.concat(friend))
    event.preventDefault()
  }

  return (

    <div>
      <FriendsList data={friends} />
      <form onSubmit={addItem}>
      <h2>Add New Friend</h2>
      username: <input type="text" id="username" name="username" onChange={updateUsername}/><br />
      firstName: <input type="text" id="firstName" name="firstName" onChange={updateFirst}/><br />
      lastName: <input type="text" id="lastName" name="lastName" onChange={updateLast}/><br />
      image: <input type="text" id="image" name="image" onChange={updateImage}/><br />
      <input type="submit" value="add Friend!" />
    </form>
    {username}{firstName}{lastName} {image}
    </div>

  )
}

export default Friends;
