// en vez de llamar props, directamente hago distructuring y coloco de una las variables que necesito.
// porque si no debo function Card(props) y luego <h2>{props.name}
//<h2>{props.satus} 
//<h2>{props.species}  ..y asi sucesivamente
//CARD ES MI PLANTILLA, MI MOLDE 
// import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav} from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { Card, CardBody, CloseButton, Image, Heading, Text, Flex  } from '@chakra-ui/react';

const CardComponent = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites, isFavoritePage}) => { // recibe todas las propiedades de APP, es decir con props llamo a name, id, gender, etc todas las propiedades que me quiero traer de mi PADRE APP.JS
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <Card borderColor='#4eb75a' borderWidth={2} backgroundColor='#00a5be'>
         <CardBody>
            <Flex >
            <button onClick={handleFavorite}>{isFav? "❤️" : "🤍"}</button>
             {isFavoritePage ? null: <CloseButton onClick={() => onClose(id)} ml='auto' mb={1} color='white'/>}
            </Flex>
            <Image src={image} alt="imagen" mb={4}/>
            <Heading size='lg' textAlign='center' color='white' >{name}</Heading>
            <Link  to={`/detail/${id}`}>
               <Text align='center' color='white' textDecoration='underline' size='md'>
               See details
               </Text>
            </Link> 
            
         </CardBody>
      </Card>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }  
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
)(CardComponent);