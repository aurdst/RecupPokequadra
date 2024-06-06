<template>
  <div class="pokemon-card">
    <h3>{{ pokemon.name }}</h3>
    <h2>{{ pokemon.type }}</h2>
    <h2>{{ pokemon.hability }}</h2>
  </div>
</template>

<script>

export default {
  name: 'PokemonDetail',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.pokemon-card {
  position: fixed; /* Fixe la popup en haut de l'écran */
  top: 0;
  left: 50%; /* Centre horizontalement */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 30%;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer que la carte est cliquable */
}
</style>
