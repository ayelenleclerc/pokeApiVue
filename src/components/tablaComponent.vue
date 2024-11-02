<template>
    <DataTable :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]" tableStyle="min-width: 50rem">
        <Column field="name" header="Name" style="width: 25%"></Column>
        <Column field="url" header="URL" style="width: 25%"></Column>
        <Column header="Details" style="width: 25%">
            <template #body="slotProps">
                <Button icon="pi pi-star" @click="$emit('select-pokemon', slotProps.data.id)" severity="secondary"
                    rounded></Button>
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
defineProps(['pokemons']);
</script>