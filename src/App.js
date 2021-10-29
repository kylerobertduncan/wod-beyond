import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SelectUser from './SelectUser';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />
        
        <main>

          <Route path="/selectUser">
            {/* select user view */}
            <SelectUser />
          </Route>

          <Route path="/selectCharacter/:user">
            {/* select character view */}
            <p>which character?</p>
          </Route>

          <Route path="/showCharacter/:user/:character">
            {/* character sheet view */}
            <p>A character sheet!</p>
          </Route>

        </main>

      </div>
    </Router>
  );
}

export default App;