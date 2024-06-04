import { createRouter, createWebHistory } from 'vue-router'; // Importez les fonctions nécessaires depuis vue-router
import PokemonView from '@/views/PokemonView.vue'; // Importez le composant de la liste des Pokémon
import PokemonDetails from '@/views/PokemonDetails.vue'; // Importez le composant des détails d'un Pokémon

const routes = [
  {
    path: '/',
    name: 'PokemonView',
    component: PokemonView
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokemonDetails
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
