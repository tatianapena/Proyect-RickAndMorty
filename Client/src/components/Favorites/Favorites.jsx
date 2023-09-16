import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';

import { Box,  Grid, GridItem, Select  } from '@chakra-ui/react' 


const Favorites = () => {
  
  const dispatch = useDispatch();
  const myFavorites = useSelector(state=>state.myFavorites)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <Box style={{ backgroundColor: '#1A202C', minHeight: '100vh'}} p={6}>
      <Box w={300} display='flex'>
      <Select onChange={handleOrder} mr= '12px' color='white'>
      <option value="">Order</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </Select>

      <Select onChange={handleFilter} color='white'>
      <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">AllCharacters</option>
      </Select>
      </Box>
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
    
      {
        myFavorites?.map(fav => {
          return (
            <GridItem w='100%' mt='24px'>
            <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                image={fav.image}
                onClose={fav.onClose}
                isFavoritePage
            />
            </GridItem>
          )
        })
      }
     </Grid>
   </Box>
  )
}

export default Favorites;


// import { connect } from 'react-redux';
// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites
//   }
// }

// export default connect(
//   mapStateToProps,
//   null
// )(Favorites);