import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue';
import PokemonList from '@/views/PokemonList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
      path: '/',
      name: 'Pokemon',
      component: PokemonView
    },
      
    {
      path: '/pokemon',
      name: 'pokemones',
      component: PokemonList
      
    } 
  ]
})

export default router
