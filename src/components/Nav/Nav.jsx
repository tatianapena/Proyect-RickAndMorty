import style from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {

  const handleLogOut = () => {
    setAccess(false);
  }

  return(
    <div className={style.header}>
      <nav className={style.nav}>
        <div className={style.contact}>
          <button className={style.logOut} onClick={handleLogOut}>LOG OUT</button>
          <Link className={style.about} to= "/about">About</Link>
          <Link className={style.home} to= "/home">Home</Link>
        </div>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  )
}

export default Nav;

//onSearch={(characterID) => alert(characterID)} />