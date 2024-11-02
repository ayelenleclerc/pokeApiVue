<template>
    <Dialog v-model:visible="internalVisible" modal header="Pokemon Details" :style="{ width: '25rem' }"
        @hide="$emit('close')">
        <span class="text-surface-500 dark:text-surface-400 block mb-8"></span>
        <div class="flex items-center gap-4 mb-4">
            <p>{{ name }}</p>
            <p><a :href="url" target="_blank">{{ url }}</a></p>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['name', 'url']);
const internalVisible = ref(true);

watch(() => props.visible, (newVal) => {
    internalVisible.value = newVal;
});
</script>