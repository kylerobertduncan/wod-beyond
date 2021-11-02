import { Link } from "react-router-dom";

const NavBar = (props) => {

  const { currentUser } = props;

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
          {
            currentUser
            ?
            <Link to={`/selectCharacter/${currentUser}`}>Select Character</Link>
            : 
            <Link to="/selectUser">Select Character</Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;