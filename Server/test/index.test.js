const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
  id: 923,
  name: 'tati',
  species: 'Human',
  gender: 'Female',
  status: 'Alive',
  origin: {
    name: 'Earth (C-137)'
  },
  image: 'image.jpg'
};

describe('Test de RUTAS', () => {
  describe("GET /rickandmorty/character/:id",() => { // se deja un espacio entre el GET(METODO) y la ruta
    it("Responde con status: 200", async () => {
      const response = await request.get('/rickandmorty/character/1');
      expect(response.statusCode).toBe(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get('/rickandmorty/character/1');
      for(const prop in character){ // otra manera de hacerlo utilizando el obj charater de arriba
        expect(response.body).toHaveProperty(prop);
      }
      // const props = ["id", "name", "species", "gender", "status", "origin" , "image"] Una manera de hacerlo
      // props.forEach(prop => {
      //   expect(response.body).toHaveProperty(prop)
      // })
    })
    it('Si hay un error responde con status: 500', async () => {
      const response = await request.get('/rickandmorty/character/39989j');
      expect(response.statusCode).toBe(500);
    });
  })

  describe('GET /rickandmorty/login', () => {
    const access = { access: true};
    it('Responde con un objeto con la propiedad access en true si la informacion del usuario es valida', async () => {
      const response = await request.get('/rickandmorty/login?email=tattmartinez@gmail.com&password=123abc');
      expect(response.body).toEqual(access);
    })
    it('Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida', async () => {
      const response = await request.get('/rickandmorty/login?email=tattmartinez@mail.com&password=123ghe');
      access.access = false;
      expect(response.body).toEqual(access);
    })
  });

  describe('POST /rickandmorty/fav', () => {
    it('Debe guardar el personaje en favoritos', async () => {
     const response = await request.post('/rickandmorty/fav').send(character)
     expect(response.body).toContainEqual(character);
    });

    it('Debe agregar personajes a favoritos sin eliminar los existentes', async () => {
      character.id = 1923;
      character.name = 'FT42-a';
      const response = await request.post('/rickandmorty/fav').send(character);
      // console.log(response.body)
      expect(response.body.length).toBe(2);
    })
  });

  describe('DELETE /rickandmort/fav/:id', () => {
    it('Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos', async () => {
      const response = await request.delete('/rickandmorty/fav/2gh5');
      // console.log(response.body)
      expect(response.body.length).toBe(2);
    })
    it('Si el ID enviado existe, debería de eliminarlo de favoritos', async () => {
      const response = await request.delete('/rickandmorty/fav/1923');
      expect(response.body.length).toBe(1);
    })
  })
})