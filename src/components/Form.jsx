import { useState } from 'react';
import validation from '../validation/validation';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input name= 'email' type="email" value={userData.email} onChange={handleChange}/>
      {errors.email && <p style={{color: 'white'}}>{errors.email}</p>}

      <label htmlFor="password">Password:</label>
      <input name= 'password' type="text" value={userData.password} onChange={handleChange}/>
      {errors.password && <p style={{color: 'white'}}>{errors.password}</p>}

      <button type='submit'>SUBMIT</button>
    </form>
  ) 
}

export default Form;