<template>
    <div>
        <h1>Listado de Pokemones</h1>
        <Button label="Volver" @click="goToPokemonView" />
        <PokemonTable :pokemons="pokemons" @select-pokemon="selectToPokemon" />
        <PokemonDetailsDialog v-if="visible" :name="pokemonName" :url="pokemonURL" @close="visible = false" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import fetchPokemons from '../services/getPokemons.js';
import PokemonTable from '../components/tablaComponent.vue';
import PokemonDetailsDialog from '../components/dialogComponent.vue';

const router = useRouter();
const pokemons = ref([]);
const visible = ref(false);
const pokemonName = ref('');
const pokemonURL = ref('');

const loadPokemons = async () => {
    try {
        const response = await fetchPokemons();
        pokemons.value = response.results;
    } catch (error) {
        console.error('error en el fetch', error);
    }
};

const selectToPokemon = (id) => {
    const selectedPokemon = pokemons.value.find(pokemon => pokemon.id === id);
    if (selectedPokemon) {
        pokemonName.value = selectedPokemon.name.toUpperCase();
        pokemonURL.value = selectedPokemon.url;
        visible.value = true;
    }
};

const goToPokemonView = () => {
    router.push('/');
};

onMounted(loadPokemons);
</script>