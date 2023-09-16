import Card from '../Card/Card'; // CARDS va ser mi componenet PADRE DE CARD

import { Box,  Grid, GridItem  } from '@chakra-ui/react' 

export default function Cards({characters, onClose}) { // Por destructuring recibimos la propiedad characters
   return ( // //Al lado de map hago destructuring y me traigo todas las propiedades que estan en data por default.
   <Box style={{ backgroundColor: '#1A202C', minHeight: '100vh'}} p={6}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {characters.map(({id, name, status, species, gender, origin, image}) => { // el va a recorrer el array characters y me va a devolver cada character.y si abro {} ES PORQ VOY A UTILIZAR UN RETURN.
         return ( // POR CADA PERSONAJE LO QUE NECESITO RETORNAR ES UNA CARD, y una card que contenga las sgtes propiedades.
         <GridItem w='100%'>
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
         </GridItem>
         )
      })}
      </Grid>
   </Box>
   );
}
