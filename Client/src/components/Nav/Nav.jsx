// import style from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

import { Box, Button, Flex, Spacer, Image, ButtonGroup } from '@chakra-ui/react';

import logo from '../../assets/logo@2x.png'

const Nav = ({ onSearch, setAccess }) => {

  // const handleLogOut = () => {
  //   setAccess(false);
  // }

  return(
    <Box  bg='#1A202C' w='100%' p={8} color='white'>
      <Flex>
          <Box>
            <Link to= "/home">
              <Image src={logo} width={200}/>
            </Link>
          </Box>
          <Spacer/>
          <ButtonGroup gap='2' style={{alignItems: 'center'}}>
          <Link to="/">
            <Button backgroundColor='#00a5be'>LOG OUT</Button>
          </Link>
            
            <Link to= "/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to= "/home">Home</Link>
            <SearchBar onSearch={onSearch} />
          </ButtonGroup>
        </Flex>
    </Box>
    // <div className={style.header}>
    //   <nav className={style.nav}>
    //    
    //   </nav>
    // </div>
  )
}

export default Nav;

//onSearch={(characterID) => alert(characterID)} />