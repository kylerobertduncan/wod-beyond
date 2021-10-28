import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav>
      <ul className="navMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Select User</Link>
        </li> 
        <li>
          <Link to="/characters">Select Character</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;