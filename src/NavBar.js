import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav>
      <ul className="navMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/selectUser">Select User</Link>
        </li> 
        <li>
          <Link to="/selectCharacter">Select Character</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;