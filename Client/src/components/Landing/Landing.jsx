import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Container, Button }  from '@chakra-ui/react';
import logo from '../../assets/rickAndMorty.png'

const Landing = () => {
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000'}}>
      <Container centerContent maxW="90%"> 
        <Image src={logo} alt="" width="100%" />
        <Link to='/home'>
          <Button background='#00a5be' width='100px' marginTop='20px'>GET IN</Button>
        </Link>
        </Container>  
    </div>

  )
}

export default Landing