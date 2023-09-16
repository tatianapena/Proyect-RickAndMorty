
import { useState } from "react"; // estado local 
import { Flex, Button, Input} from '@chakra-ui/react'

export default function SearchBar({onSearch}) {

   const[id, setId] = useState('');

   const handleChange = (event) => {
    setId(event.target.value) // con esto estoy guardando el valor de value en el estado setID 
   }
////event.target.value me permite obtener la infor que el usuario escribe.
// luego en el input se le coloca onChange={aqui se coloca la funcion que queremos que haga algo} colocamos Onchange porq el input
// va a recibir un cambio, con el solo hecho que la persona escriba hay que colocar el onChange.
   return (// value={id} aqui basicamente estoy diciendo que el valor que toma value y que guarda, que es el valor que coloca la persona, se lo de a id.
   <Flex >
      <Input type='search' onChange={handleChange} value={id} variant='outline' placeholder="Search"/>
      <Button onClick={() => {onSearch(id); setId('')}} backgroundColor='#00a5be' style={{marginLeft: '8px'}}>Add</Button>
   </Flex>
   );
}
// cuando necesite pasarle argumentos a una funcion por ejemplo al onSearch, necesito pasarle el argumento ID.
// entonces utilizamos el callback() al hacer onClick llama a un callback y este a su vez llama a la funcion
// Onsearch con su atributo ID. 
// luego con setId('') es para que luego de escribir el numero en el input, vuelva a ponerse en blanco
// para y no tener que borrar, simplemente dsp que ejecute con el id y traiga la tarjeta, el input se vuelva a poner en blanco.
