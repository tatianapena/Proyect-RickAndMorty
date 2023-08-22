import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js'; // aqui me traigo con el nombre cualquiera 
// en este caso characters lo que esta en default, pero tambien me traigo 
// con destructuring lo que esta en Rick.



function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         <Cards characters={characters} />
         <Card 
         id={Rick.id}
         status={Rick.status}
         name={Rick.name}
         gender={Rick.gender}
         origin={Rick.origin.name}
         species={Rick.species}
         image={Rick.image}
         onClose={() => alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;