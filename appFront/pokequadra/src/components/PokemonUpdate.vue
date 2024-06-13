<template>
  <div class="pokemon-card" v-if="isOpen">
    <button @click="close()">Fermer</button>
    <div>
      <h1>UPDATE</h1>
      <img :src="pokemon.picture" alt="superreferencement">
      <form @submit.prevent="submitUpdatePokemon">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="pokemonUpdate.name"/>
          <br/>
          <label for="type">Type</label>
          <input type="text" v-model="pokemonUpdate.type"/>
          <br/>
          <label for="hability">Hability</label>
          <input type="text" v-model="pokemonUpdate.hability"/>
          <br/>
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PokemonDetail',
  data() {
    return {
      picture: this.pokemon.picture,
      pokemonUpdate: {
        name: this.pokemon.name,
        type: this.pokemon.type,
        hability: this.pokemon.hability,
      }
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
  },
  methods: {
    ...mapActions(['updatePokemon'])
  },
  close() {
    this.$emit('close');
  },
  submitUpdatePokemon() {
    this.updatePokemon(this.pokemon.id, this.pokemonUpdate);
  },
};
</script>

<style scoped>
.pokemon-card {
  position: fixed; /* Fixe la popup en haut de l'écran */
  top: 0;
  left: 50%; /* Centre horizontalement */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 50px;
  width: 20%;
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

label {
  padding: 10px;
}

input {
  padding: 10px;
  margin: 10px;
}
</style>
