<template>
    <div>
        <h1>Listado de Pokemones</h1>
        <Button label="Volver" @click="goToPokemonView" />
        <tablaComponent :pokemons="pokemons" />

    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import fetchPokemons from '../services/getPokemons.js';
import tablaComponent from '../components/TablaComponent.vue';

const router = useRouter();
const pokemons = ref([]);

const pokemonName = ref('');
const pokemonURL = ref('');

const loadPokemons = async () => {
    try {
        const response = await fetchPokemons();
        pokemons.value = response.results;

    } catch (error) {
        console.error('error en el fetch', error);
    }

}

const goToPokemonView = () => {
    router.push('/');
}
onMounted(loadPokemons);
</script>