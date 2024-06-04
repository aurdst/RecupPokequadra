<!-- Objectif => Créer un composant pour séparer les elements de PokemonView -->

<template>
  <div class="pokemon-details">
    <h1>Détails du Pokémon #{{ pokemonId }}</h1>
    <div v-if="pokemonData">
      <h2>{{ pokemonData.name }}</h2>
      <p>Type: {{ pokemonData.types[0].type.name }}</p>
      <p>Habilité: {{ pokemonData.abilities[0].ability.name }}</p>
    </div>
    <div v-else>
      <p>Chargement en cours...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetails',
};
</script>
