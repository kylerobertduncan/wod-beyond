// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';

const SelectUser = (props) => {

  const { userList } = props;

  const handleNewUser = () => {
    // ask for a new username
    const newUserName = prompt('Please enter your username:');
    // check that username has content
    if ( newUserName.trim() !== "" ) {
      // check to see if username doesn't already exist
      let usernameExists = false;
      userList.forEach( (user) => {
        if ( user.username === newUserName ) {
          usernameExists = true;
        }
      })
      if (usernameExists) {
        alert("Error: existing username, please try another")
      } else {
        // get dbRef from firebase, and get a new key
        const dbRef = firebase.database().ref('users');
        const newUserKey = dbRef.push().key;
        // add the new user key to the user details
        const newUserIDobject = {
          username: newUserName,
          userID: newUserKey
        }
        // add the user details under the new key
        dbRef.child(newUserKey).update(newUserIDobject);
      }
    } else {
      alert("Error: invalid username, no content")
    }
  }
  
  return(
    <>
    <ul className="userTiles">
      {
      // Map existing users from Firebase
      userList.map( (user) => {
        const { username, userID } = user;
        return(
          <li key={userID} className="userSelectTile">
            <Link to={`/selectCharacter/${userID}`} className="linkToUser">{username}</Link>
          </li>
        )
      })
      }

      <li className="userSelectTile linkToUser newUser" onClick={handleNewUser}>Add New User</li>
    </ul>
    </>
  )
}

export default SelectUser;





/*

code for more complex user detail submission via form

const [ newUserDetails, setNewUserDetails ] = useState({
  userID: "",
  username: "",
  password: "",
  displayName: "",
  characters: []
});

const handleChange = (e) => {
  // console.log(e.target.name, e.target.value);
  const newUserInput = {...newUserDetails}
  newUserInput[e.target.name] = e.target.value;
  // console.log(newUserInput);
  setNewUserDetails(newUserInput);
}

const handleSubmit = (e) => {
  e.preventDefault();
  // get dbRef from firebase, and get a new key
  const dbRef = firebase.database().ref('users');
  const newUserKey = dbRef.push().key;
  // add the new user key to the user details
  const newUserIDobject = {...newUserDetails}
  newUserIDobject.userID = newUserKey;
  // add the user details under the new key
  dbRef.child(newUserKey).update(newUserIDobject);
}

<li>
  <Link to="/selectUser/addNewUser" className="charSelectTile newUser">Add New User</Link>
</li>

<Route path="/selectUser/addNewUser">
      <div className="newUserModal">
        <form className="newUserForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" onChange={handleChange} />
          <label htmlFor="displayName">Display Name:</label>
          <input type="text" name="displayName" onChange={handleChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form >
      </div >
    </Route >

*/