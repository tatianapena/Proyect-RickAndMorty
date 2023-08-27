import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {

  const handleLogOut = () => {
    setAccess(false);
  }

  return(
    <nav>
      
      <div>
        <Link to= "/about">About</Link>
        <Link to= "/home">Home</Link>
      </div>

      <button onClick={handleLogOut}>LOG OUT</button>
        <SearchBar onSearch={onSearch} />
    </nav>
  )
}

export default Nav;

//onSearch={(characterID) => alert(characterID)} />