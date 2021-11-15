import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from './firebase';
import newCharacterSheet from './newCharacterSheet'

const SelectCharacter = (props) => {

  const { user } = useParams();
  const { userList, setCurrentUser } = props;
  
  const [ charList, setCharList ] = useState([]);

  useEffect(() => {
    // establish specific user
    userList.forEach((listedUser) => {
      if (listedUser.userID === user) {
        // add users characters to an array
        const setupCharList = [];
        if (listedUser.characters) {
          for (const char in listedUser.characters) {
            setupCharList.push(listedUser.characters[char])
          }
        }
        // store array in state
        setCharList(setupCharList);
      }
    });
    // store current user in state
    setCurrentUser(user);
  }, [user, userList, setCurrentUser])

  const handleNewCharacter = () => {
    //  connect to firebase and retrieve new key
    const dbCharRef = firebase.database().ref('characters');
    const newCharKey = dbCharRef.push().key;
    console.log("made a new character!", newCharKey);
    // add the key to a blank character
    const newCharObject = {
      charID: newCharKey,
      charData: newCharacterSheet
    }
    // add the new character to the database
    dbCharRef.child(newCharKey).update(newCharObject);
    // add the new character to the users information
    const dbUserRef = firebase.database().ref(`users/${user}/characters`);
    const newUserChar = {
      charID: newCharKey,
      name: "New Character",
      concept: "Click to Create",
      clan: ""
    }
    dbUserRef.child(newCharKey).update(newUserChar);
  }
    
  return(
    <>
    <ul className="charTiles">
      {
        // map existing characters from Firebase
        charList.map( (char) => {
          const { charID, concept, clan, name } = char;
          return(
            <li key={charID} className="charSelectTile">
              <Link to={`/characters/${user}/${charID}`}>
                <h3>{name}</h3>
                <p>{concept}</p>
                <p>{clan}</p>
              </Link>
            </li>
          )
        })
      }
      <li className="charSelectTile linkToChar newChar" onClick={handleNewCharacter}>Create New Character</li>
    </ul>
    </>
  )
}

export default SelectCharacter;