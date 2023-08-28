import style from './Cards.module.css'
import Card from '../Card/Card'; // CARDS va ser mi componenet PADRE DE CARD


export default function Cards({characters, onClose}) { // Por destructuring recibimos la propiedad characters
   return ( // //Al lado de map hago destructuring y me traigo todas las propiedades que estan en data por default.
   <div className={style.cardsContainer}> 
      {characters.map(({id, name, status, species, gender, origin, image}) => { // el va a recorrer el array characters y me va a devolver cada character.y si abro {} ES PORQ VOY A UTILIZAR UN RETURN.
         return ( // POR CADA PERSONAJE LO QUE NECESITO RETORNAR ES UNA CARD, y una card que contenga las sgtes propiedades.
            <Card key = {id} // RENDERIZAR A CARD
               id = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClose = {onClose}
            />
         )
      })}
   </div>);
}
