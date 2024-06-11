<template>
  <div class="pokemon-card">
    <h3>{{ pokemon.name }}</h3>
    <button @click="$emit('detailShow')">
      <font-awesome-icon icon="eye" />
    </button>
    <button @click="$emit('showEdit')">
      <font-awesome-icon icon="edit" />
    </button>
  </div>
</template>

<script>

export default {
  name: 'PokemonCard',
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
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 30%;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer que la carte est cliquable */
}
</style>
