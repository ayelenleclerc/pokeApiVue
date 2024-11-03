import apiPokemon from "../api/apiPokemon.js";

 const fetchPokemons = async () => {
    const respuesta = await apiPokemon.get('/pokemon');
   
     return respuesta.data;
  
}   

 export default fetchPokemons;