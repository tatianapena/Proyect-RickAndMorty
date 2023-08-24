// en vez de llamar props, directamente hago distructuring y coloco de una las variables que necesito.
// porque si no debo function Card(props) y luego <h2>{props.name}
//<h2>{props.satus} 
//<h2>{props.species}  ..y asi sucesivamente
//CARD ES MI PLANTILLA, MI MOLDE 
export default function Card({id, name, status, species, gender, origin, image, onClose}) { // recibe todas las propiedades de APP, es decir con props llamo a name, id, gender, etc todas las propiedades que me quiero traer de mi PADRE APP.JS
   return (
      <div className='card'>  
         <button onClick={() => onClose(id)}>X</button>      
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt="imagen" />
      </div>
   );
}
