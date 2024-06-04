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
  data() {
    return {
      pokemonId: null,
      pokemonData: null
    };
  },
  mounted() {
    this.pokemonId = this.$route.params.id; // Récupère l'ID de l'URL via Vue Router
    this.fetchPokemonDetails(); // Appelle la méthode pour récupérer les détails du Pokémon
  },
  methods: {
    async fetchPokemonDetails() {
      try {
        const response = await fetch(`http://localhost:5000/get/pokemon/${this.pokemonId}`);
        const data = await response.json();
        this.pokemonData = data; // Met à jour les données du Pokémon avec les détails récupérés
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du Pokémon :', error);
      }
    }
  }
};
</script>

<style scoped>
.pokemon-details {
  padding: 20px;
}
</style>
