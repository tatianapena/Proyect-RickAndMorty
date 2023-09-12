const URL = 'http://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req, res) => {
  try {
    const {id} = req.params;
    const { data } = await axios(`${URL}/${id}`) // error 500
    // si no se encontro un nombre, es decir, un personaje, entonces lazamos un error.
    if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`); // error 404

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status
    }
    return res.status(200).json(character)
    // return res.status(404).send('Not found'); 
 
  } catch (error) {
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)
  
  } 
}


module.exports =  {
  getCharById
};