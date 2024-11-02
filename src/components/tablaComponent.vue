<template>
    <DataTable v-if="pokemons != []" :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]"
        tableStyle="min-width: 50rem">
        <Column field="name" header="Name" style="width: 25%"></Column>
        <Column field="url" header="URL" style="width: 25%"></Column>
        <Column field="representative.name" header="Details" style="width: 25%">
            <template #body="slotProps">
                <Button icon="pi pi-star" @click="selectToPokemon(pokemons.id)" severity="secondary" rounded></Button>
            </template>
        </Column>
    </DataTable>
    <Dialog v-model:visible="visible" modal header="Pokemon Details" style=" width:25rem ">
        <span class="text-surface-500 dark:text-surface-400 block mb-8"></span>
        <div class="flex items-center gap-4 mb-4">
            <p>{{ pokemonName }}</p>
            <p><a :href="pokemonURL">{{ pokemonURL }}</a></p>
        </div>
    </Dialog>

</template>

<script setup>
import { ref } from 'vue';
const { pokemons } = defineProps({
    pokemons: {
        type: Array,
        required: true
    }
});
const visible = ref(false);
const pokemonName = ref('');
const pokemonURL = ref('');
const selectToPokemon = (id) => {
    pokemonName.value = pokemons.find(pokemon => pokemon.id === id).name.toUpperCase();
    pokemonURL.value = pokemons.find(pokemon => pokemon.id === id).url;
    visible.value = true;
}
</script>

<style lang="scss" scoped></style>