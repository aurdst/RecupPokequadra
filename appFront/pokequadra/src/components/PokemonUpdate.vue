<template>
  <div class="pokemon-card" v-if="isOpen">
    <button @click="!isOpen">Fermer</button>
    <h1>{{ pokemon.name }}</h1>
    <p>{{ pokemon.type }}</p>
    <p>{{ pokemon.hability }}</p>
    <img :src="pokemon.picture" alt="superreferencement">
  </div>
</template>

<script>

export default {
  name: 'PokemonDetail',
  data() {
    return {
      picture: this.pokemon.picture,
    }
  },
  props: {
    isOpen: {
      type: Boolean,
    },
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

.pokemon-card button{
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
