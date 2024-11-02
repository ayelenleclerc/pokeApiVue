import apiPokemon from "../api/apiPokiemons.js";


 const fetchPokemons = async () => {
    const respuesta = await apiPokemon.get('/pokemon');
    console.log('respuesta', respuesta);
     return respuesta.data;
  
}   

 export default fetchPokemons;