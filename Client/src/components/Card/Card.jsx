// en vez de llamar props, directamente hago distructuring y coloco de una las variables que necesito.
// porque si no debo function Card(props) y luego <h2>{props.name}
//<h2>{props.satus} 
//<h2>{props.species}  ..y asi sucesivamente
//CARD ES MI PLANTILLA, MI MOLDE 
import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav} from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => { // recibe todas las propiedades de APP, es decir con props llamo a name, id, gender, etc todas las propiedades que me quiero traer de mi PADRE APP.JS
   
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
      <div className={style.container}>  
         <div className={style.btn}>
            <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
         </div>
         
         <div className={style.cardDetail}>
            
            <div className={style.photo}>
               <img className={style.img} src={image} alt="imagen" />
               <button className={style.favoriteBtn} onClick={handleFavorite}>{isFav? "❤️" : "🤍"}</button>
            </div>
           
            <div className={style.cardDetailInfo}>
               <Link className={style.nameLink} to={`/detail/${id}`}>
                  <h2 className={style.name}>{name}</h2>
               </Link> 
            <div className={style.features}>
               <h2 >{species}</h2>
               <h2 >{gender}</h2>
               <h2 >{status}</h2>
               <h2 >{origin}</h2> 
            </div>   
               
             </div>
            
         </div>  
         
      </div>
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
)(Card);