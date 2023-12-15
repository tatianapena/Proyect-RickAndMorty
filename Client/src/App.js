// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js'; // aqui me traigo con el nombre cualquiera 
// en este caso characters lo que esta en default, pero tambien me traigo 
// con destructuring lo que esta en Rick.

import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
// import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Landing from './components/Landing/Landing';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// const email= 'tattmartinez@gmail.com';
// const password= '123abc';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const[characters, setCharacters] = useState([]); // cra un estado local llamando a characters, el cual va iniciar con un arreglo vacío.
   // const[access, setAccess] = useState(false);
   

   // const login = async (userData) => {
   //    try {
   //       const { email, password } = userData;
   //       const { data } = await axios(URL + `?email=${email}&password=${password}`)
   //       const { access } = data;

   //       setAccess(access);
   //       access && navigate('/home');
    
   //    } catch (error) {
   //       console.log(error.message);
   //    }
      
   // }

   // useEffect(() => {
   //    !access && navigate('/')
   // },[access])

   // primero el callback y luego el array de dependencia
   //useEffect va esta pendiente de access, esta al principio es false,
   //pero luego hay un cambio en el login y cambia a true, se va a ejecutar lo que esta aqui adentro 
   //!access && navigate('/') = !access quiere decir que como el inicia en false al ponerle la negacion
   // con el ! estoy diciendo q es true y si es true que me envie a: donde la ruta sea ('/')

//   const URL = 'https://rym2-production.up.railway.app/api/character/';
//   const key = '?key=henrym-tatianapena';

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const isRegistered = characters.some((character) => character.id === data.id);
         if(isRegistered) {
            alert('Este personaje ya ha sido agregado')
         } else {
            if(data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            };
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      
   }
// esta funcion es para eliminar la tarjeta, creo una variable y adentro guardo el metodo filter,
// este metodo le hago lo siguiente que cada character.id es decir revise el id de cada character
// y si ese id es diferente al que yo les paso dentro de la funcion onClose(id)
   const onClose = (id) => {
      const characterFiltered = characters.filter(character => 
         Number(character.id) !== Number(id)) // esto de number(id) es para lo convierta a numero el valor que recibe como id.
         setCharacters(characterFiltered) // setea tu resultado en tu estado local characters.
      
   }

   return (// pathname es distinto a la / tal cosa, muestrame el Nav. esto es para que al abrir la pagina 
   // lo primero q salga sea el formulario.
      <div> 
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} 
            // setAccess={setAccess} 
            />
         }
          
         <Routes>
            {/* <Route path='/' element={<Form login={login}/>} /> */}
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} /> 
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   )
}

export default App;


// const onSearch =() => { //ya teniamos el array con todos los elementos de characters y 
//usando el spread(...) simula todos los elementos + 
// el nuevo que trae el example que lo estoy agregando.
//    setCharacters([...characters,example]) // basicamente hago una copia de lo que ya tenía 
//y agrego lo nuevo.
// } 