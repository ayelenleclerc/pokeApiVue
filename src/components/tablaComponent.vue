<template>
    <DataTable v-if="pokemons != []" :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]"
        tableStyle="min-width: 50rem">
        <Column field="name" header="Name" style="width: 25%"></Column>
        <Column field="url" header="URL" style="width: 25%"></Column>
        <Column field="representative.name" header="Details" style="width: 25%">
            <template #body="slotProps">
                <Button icon="pi pi-star" @click="selectToPokemon(slotProps.data.name)" severity="secondary"
                    rounded></Button>
            </template>
        </Column>
    </DataTable>
    <DialogComponent v-model:visible="visible">
        <template #body>
            <div class="modal-body">
                <i class="pi pi-exclamation-triangle" :style="{ fontSize: '3rem', color: 'orange' }"></i>
                <div class="flex justify-content-center" style="width: 100%">
                    <p class="text-left font-bold">
                        {{ pokemonName }}
                    </p>
                </div>
            </div>
            <p class="text-center m-0 text-sm">{{ pokemonURL }}</p>
        </template>
    </DialogComponent>

</template>

<script setup>
import { ref } from 'vue';
import DialogComponent from './dialogComponent.vue';
const { pokemons } = defineProps({
    pokemons: {
        type: Array,
        required: true
    }
});
const visible = ref(false);
const pokemonName = ref('');
const pokemonURL = ref('');
const selectToPokemon = (namePokemon) => {

    const selectedPokemon = pokemons.find(pokemon => pokemon.name === namePokemon);
    if (selectedPokemon) {
        pokemonName.value = selectedPokemon.name.toUpperCase();
        console.log('pokemonName.value::: ', pokemonName.value);
        pokemonURL.value = selectedPokemon.url;
        visible.value = true;
    }
}
</script>

<style lang="scss" scoped></style>