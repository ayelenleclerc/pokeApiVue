<template>
    <div>
        <h1>Listado de Pokemones</h1>
        <Button label="Volver" @click="goToPokemonView" />
        <DataTable v-if="pokemons != []" :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]"
            tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="url" header="URL" style="width: 25%"></Column>
            <Column field="representative.name" header="Details" style="width: 25%">
                <template #body="slotProps">
                    <Button icon="pi pi-star" @click="selectToPokemon(pokemons.id)" severity="secondary"
                        rounded></Button>
                </template>
            </Column>
            <Dialog v-model:visible="visible" modal header="Pokemon Details" :style="{ width: '25rem' }">
                <span class="text-surface-500 dark:text-surface-400 block mb-8"></span>
                <div class="flex items-center gap-4 mb-4">
                    <p>{{ pokemonName }}</p>
                    <p><a :href="pokemonURL">{{ pokemonURL }}</a></p>
                </div>
            </Dialog>
        </DataTable>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import fetchPokemons from '../services/getPokemons.js';

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

}
const selectToPokemon = (id) => {
    pokemonName.value = pokemons.value.find(pokemon => pokemon.id === id).name.toUpperCase();
    pokemonURL.value = pokemons.value.find(pokemon => pokemon.id === id).url;
    visible.value = true;
}
const goToPokemonView = () => {
    router.push('/');
}
onMounted(loadPokemons);
</script>