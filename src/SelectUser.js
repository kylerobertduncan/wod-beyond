import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';

const SelectUser = () => {
  
  const [ newUserPath, setNewUserPath ] = useState("");
  
  const handleCreateNew = () => {
    const newUser = prompt("Enter your username");
    setNewUserPath(`/${newUser}`);
  }
  
  return(
    <>
      <button>
        <Link onClick={handleCreateNew} to={`/`}>Create a character</Link>
      </button>
    </>
  )
}

export default SelectUser;