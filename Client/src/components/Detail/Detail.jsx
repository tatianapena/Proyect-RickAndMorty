import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Box, Image, Heading, Text, Card, CardBody, CardHeader, Spinner} from '@chakra-ui/react';


const Detail = () => {
  const[character, setCharacter] = useState ({}); // adentro del parentesis colocamos {} xq el ejercico pide que se inicialize como un objeto vacio.
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then((data) => {
       if (data.name) { // le pide a la api infor de la data.name
          setCharacter(data); // aquí esta guardando esa data que se trajo, setCharacter esta haciendo ese trabajo de guardar a data, que ese character (info de ese personaje)
       } else { // character va ser un objeto con info de un personaje en especifico
          window.alert('No hay personajes con ese ID');// caso contrario va a tirar un alert
       }
       setIsLoading(false);
    });
    return setCharacter({});//aqui devuelve setCharacter como un objeto vacio.
  }, [id]);

// Renderizado condicional: aqui estoy diciendo lo sgte: hay algo en character?, entonces muestrame un h2 con la info {character.name}
if(isLoading) {
  return (
  <Box minH='100vh' backgroundColor='#1A202C' display='flex' width='100vw' justifyContent='center' pt={24}>
    <Spinner color="white" size='xl'/> 
  </Box>
  )
}  else {
  return (

      <Box minH='100vh' backgroundColor='#1A202C'>
      <Box display='flex' pt={24} justifyContent='center'>
          <Box mr={24}>
            <Card bg='transparent' borderWidth={2} borderColor='#4eb75a' p={12}>
              <CardHeader>
                <Heading color='white'>{character?.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text color='white'><b>Status:</b> {character?.status}</Text>
                <Text color='white'><b>Species:</b> {character?.species}</Text>
                <Text color='white'><b>Gender:</b> {character?.gender}</Text>
                <Text color='white'><b>Origin:</b> {character?.origin?.name}</Text>
            </CardBody>
            </Card>
          </Box>  
          <Box>
            <Image src={character?.image} alt={character?.name} borderRadius='full'/>
          </Box>
      </Box>
      <Text align='center' color='white' textDecor='underline' mt={36} fontSize={24}>
        <Link to={'/home'}>Back to home</Link>
      </Text>
      </Box>
    )
  }
}

export default Detail;