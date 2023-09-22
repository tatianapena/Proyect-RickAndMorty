import { useState } from 'react';
import validation from '../../validation/validation';

import { Container, Card, CardHeader, CardBody, Button, Input, Image }  from '@chakra-ui/react';
import logo from '../../assets/login.png'

const Form = ({login}) => {
  const [errors, setErrors] = useState({})

  const[userData, setUserData] = useState ({
    email: '',
    password: ''
  });

const handleChange = (event) => {// con esto le aviso a mi estado que va ser igual a mi input.
  setUserData({
    ...userData,
    [event.target.name] : event.target.value
  });

  
  setErrors(validation({
      ...userData,
      [event.target.name] : event.target.value
    })
  )
}

const handleSubmit = (event) => { // esto hace que la pag no se recargue
  event.preventDefault();
  login(userData);
}


  return(
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000'}}>
    <Container centerContent>
      <Card style={{backgroundColor: '#000'}}>
        <CardHeader>
        <Image src={logo}/>
        </CardHeader>
        <CardBody >
        <form onSubmit={handleSubmit} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Input name= 'email' type="email"  value={userData.email} onChange={handleChange} variant='outline' placeholder='Email' style={{margin: '16px 0 16px 0'}} width='300px'/>
          {errors.email && <p style={{color: 'white'}}>{errors.email}</p>}

          <Input name= 'password' type="text"   value={userData.password} onChange={handleChange} variant='outline' placeholder='Password' style={{margin: '0 0 24px 0'}} width='300px'/>
          {errors.password && <p style={{color: 'white'}}>{errors.password}</p>}

          <Button type='submit' background='#00a5be' width='300px'>SUBMIT</Button>
        </form>
        </CardBody>
    </Card>
    </Container>
    </div>
  ) 
}

export default Form;