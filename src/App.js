// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js'; // aqui me traigo con el nombre cualquiera 
// en este caso characters lo que esta en default, pero tambien me traigo 
// con destructuring lo que esta en Rick.

import './App.css';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Nav from './components/Nav';
import { useState } from "react";
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


function App() {

   const[characters, setCharacters] = useState([]); // cra un estado local llamando a characters, el cual va iniciar con un arreglo vacío.
   
   const onSearch = (id)=> {
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

   return (
      <div className='App'> 
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;


// const onSearch =() => { //ya teniamos el array con todos los elementos de characters y 
//usando el spread(...) simula todos los elementos + 
// el nuevo que trae el example que lo estoy agregando.
//    setCharacters([...characters,example]) // basicamente hago una copia de lo que ya tenía 
//y agrego lo nuevo.
// } 