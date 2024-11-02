<template>
   <div>
      <h1> Pokemon</h1>
      <Button label="Listado" @click="goToPokemonList" />
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToPokemonList = () => {
   router.push('/pokemon');
}
</script>