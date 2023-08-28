// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js'; // aqui me traigo con el nombre cualquiera 
// en este caso characters lo que esta en default, pero tambien me traigo 
// con destructuring lo que esta en Rick.

import style from './App.module.css'
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const email= 'tattmartinez@gmail.com';
const password= '123abc';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const[characters, setCharacters] = useState([]); // cra un estado local llamando a characters, el cual va iniciar con un arreglo vacío.
   const[access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true); // si la persona se autentica exitosamente
         navigate('/home'); // la pagina me envia al home, por eso uso el navigate
      }
   }

   useEffect(() => {
      !access && navigate('/')
   },[access])

   // primero el callback y luego el array de dependencia
   //useEffect va esta pendiente de access, esta al principio es false,
   //pero luego hay un cambio en el login y cambia a true, se va a ejecutar lo que esta aqui adentro 
   //!access && navigate('/') = !access quiere decir que como el inicia en false al ponerle la negacion
   // con el ! estoy diciendo q es true y si es true que me envie a: donde la ruta sea ('/')
  
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.data)
         .then((data) => {

            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
// esta funcion es para eliminar la tarjeta, creo una variable y adentro guardo el metodo filter,
// este metodo le hago lo siguiente que cada character.id es decir revise el id de cada character
// y si ese id es diferente al que yo les paso dentro de la funcion onClose(id)
   const onClose = (id) => {
      const characterFiltered = characters.filter(character => 
         character.id !== Number(id)) // esto de number(id) es para lo convierta a numero el valor que recibe como id.
         setCharacters(characterFiltered) // setea tu resultado en tu estado local characters.
      
   }

   return (// pathname es distinto a la / tal cosa, muestrame el Nav. esto es para que al abrir la pagina 
   // lo primero q salga sea el formulario.
      <div className= {style.App}> 
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
          
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
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