
export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button className="boton" onClick={onSearch}>Agregar</button>
      </div>
   );
}

