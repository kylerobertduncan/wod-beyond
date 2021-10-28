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
          <Route path="/users">
            {/* select user view */}
            <SelectUser />
          </Route>
          <Route path="/:user/characters">
            {/* select character view */}
            <p>which character?</p>
          </Route>
          <Route path="/:user/:character">
            {/* character sheet view */}
            <p>A character sheet!</p>
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;