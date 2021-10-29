import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';

const SelectUser = () => {

  const [ userList, setUserList ] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref('users');
    dbRef.on('value', (response) => {
      // console.log(response.val());
      const userData = response.val();
      const setupUserList = [];
      for (const user in userData) {
        // console.log(userData[user]);
        setupUserList.push(userData[user]);
      }
      setUserList(setupUserList);
    })
  }, [])

  const handleAddNewUser = () => {
    const newUserName = prompt('Please enter your username:');
    if ( newUserName.trim() !== "" ) {
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
  }
  
  return(
    <>
      <ul className="charTiles">
        {
        // Map existing users from Firebase
        userList.map( (user) => {
          const { username, userID } = user;
          return(
            <li key={userID} className="charSelectTile">
              <Link to={`/selectCharacter/${userID}`}>{username}</Link>
            </li>
          )
        })
        }

        <li className="charSelectTile newUser" onClick={handleAddNewUser}>Add New User</li>
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