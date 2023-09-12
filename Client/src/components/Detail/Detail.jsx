import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {
  const[character, setCharacter] = useState ({}); // adentro del parentesis colocamos {} xq el ejercico pide que se inicialize como un objeto vacio.
  const {id} = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then((data) => {
       if (data.name) { // le pide a la api infor de la data.name
          setCharacter(data); // aquí esta guardando esa data que se trajo, setCharacter esta haciendo ese trabajo de guardar a data, que ese character (info de ese personaje)
       } else { // character va ser un objeto con info de un personaje en especifico
          window.alert('No hay personajes con ese ID');// caso contrario va a tirar un alert
       }
    });
    return setCharacter({});//aqui devuelve setCharacter como un objeto vacio.
  }, [id]);

// Renderizado condicional: aqui estoy diciendo lo sgte: hay algo en character?, entonces muestrame un h2 con la info {character.name}
  return (
    <div>
      <h2>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
    </div>
  )
}

export default Detail;