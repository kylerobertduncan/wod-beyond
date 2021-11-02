import './styles/App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from './firebase';
import NavBar from './NavBar';
import SelectUser from './SelectUser';
import SelectCharacter from './SelectCharacter';
import CharacterSheet from './CharacterSheet';

function App() {

  const [ userList, setUserList ] = useState([]);
  const [ currentUser, setCurrentUser ] = useState("");

  useEffect(() => {
    // get the user information from firebase
    const dbRef = firebase.database().ref('users');
    dbRef.on('value', (response) => {
      const userData = response.val();
      // create an array and fill with user information
      const setupUserList = [];
      for (const user in userData) {
        setupUserList.push(userData[user]);
      }
      // put user information in state
      setUserList(setupUserList);
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <NavBar currentUser={currentUser}/>
        
        <main>

          {/* select user view */}
          <Route exact path="/">
            <h1>Whack-a-Vamp</h1>
          </Route>

          {/* select user view */}
          <Route path="/selectUser">
            <SelectUser userList={userList} />
          </Route>

          {/* select character view */}
          <Route path="/selectCharacter/:user">
            <SelectCharacter userList={userList} setCurrentUser={setCurrentUser} />
          </Route>

          {/* character sheet view */}
          <Route path="/characters/:user/:character">
            <CharacterSheet />
          </Route>

        </main>

      </div>
    </Router>
  );
}

export default App;