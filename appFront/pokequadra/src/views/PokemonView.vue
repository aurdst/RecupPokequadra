<template>
  <div>
    <h1>Liste des Pokémon</h1>
    <div class="pokemon-list">
      <!-- Boucle sur tous les Pokémon retournés dans le fetchPokemon -->
      <div
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
      >
        <PokemonCard :pokemon="pokemon" @showEdit="showEdit()" @detailShow="showDetail(pokemon)" />
      </div>
    </div>
    <!-- Details popup -->
    <div class="pokemonDetails" v-if="toogleDetails">
      <h1>Détails du Pokémon #{{ pokemonId }}</h1>
      <button @click="toogleDetails = false">X</button>
      <div v-if="pokemonData">
        <h2>{{ pokemonData.name }}</h2>
        <p>Type: {{ pokemonData.types[0].type.name }}</p>
        <p>Habilité: {{ pokemonData.abilities[0].ability.name }}</p>
        <img :src="picturePokemon" alt="photo"> <!--photo ici-->
      </div>
      <div v-else>
        <p>Chargement en cours...</p>
      </div>
    </div>
    <!--  -->

  <!-- Formulaire de mise à jour -->
  <div class="pokemoneEdit" v-if="toogleUpdate">
    <form @submit.prevent="submitUpdatePokemon">
      <div>
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="updatedPokemon.name">
      </div>
      <div>
        <label for="type">Type:</label>
        <input type="text" id="type" v-model="updatedPokemon.type">
      </div>
      <div>
        <label for="hability">Habilité:</label>
        <input type="text" id="hability" v-model="updatedPokemon.hability">
      </div>
      <br>
      <button @click="toogleUpdate = false">Fermer</button>
      <br>
      <button type="submit">Mettre à jour</button>
    </form>
  </div>
  <!--  -->
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'; // Importer le composant PokemonCard
import { mapActions, mapState } from 'vuex'; //import du store

export default {
  name: 'PokemonList',
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemonId: null,
      pokemonData: null,
      picturePokemon: null,
      updatedPokemon: {
        name: '',
        type: '',
        hability: ''
      },
      toogleDetails: false,
      toogleUpdate: false
    };
  },
  async mounted() {
    this.fetchPokemonList(); // Appeler la méthode pour récupérer les Pokémon au mounted
  },
  computed: {
    ...mapState({
      pokemonList: state => state.pokemonList
    })
  },
  methods: {
    ...mapActions(['updatePokemon', 'fetchPokemonList']),
    extractPokemonId(url) {
      const regex = /\/pokemon\/(\d+)\//;
      const match = url.match(regex);
      return match && match[1] ? match[1] : null;
    },
    async fetchPokemonDetails() {
      try {
        const response = await fetch(`http://localhost:5000/get/pokemon/${this.pokemonId}`);
        const data = await response.json();
        this.pokemonData = data; // Met à jour les données du Pokémon avec les détails récupérés
        this.picturePokemon = this.pokemonData.sprites.back_default;
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du Pokémon :', error);
      }
    },
    showDetail(data) {
      this.pokemonId = this.extractPokemonId(data.url);
      this.fetchPokemonDetails();
      this.toogleDetails = true;
      this.toogleUpdate = false;
    },
    showEdit() {
      this.toogleUpdate = true;
      this.toogleDetails = false;
    },
    submitUpdatePokemon() {
      this.updatePokemon(this.pokemonId);
    }
  }
};
</script>

<style scoped>
.pokemon-details {
  padding: 20px;
}
.pokemonDetails {
  position: fixed; /* Fixe la popup en haut de l'écran */
  top: 0;
  left: 50%; /* Centre horizontalement */
  transform: translateX(-50%); /* Ajuste le positionnement pour être parfaitement centré */
  width: 70%; /* 70% de la largeur de l'écran */
  max-width: 600px; /* Facultatif: limite maximale pour la largeur */
  height: 70vh; /* 70% de la hauteur de l'écran */
  background-color: white; /* Couleur de fond de la popup */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre pour donner un effet de popup */
  padding: 20px; /* Padding intérieur */
  margin-top: 20px; /* Marge supérieure */
  overflow-y: auto; /* Scroll si le contenu dépasse la hauteur */
  z-index: 1000; /* Assure que la popup soit au-dessus d'autres éléments */
}
.pokemoneEdit {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.pokemoneEdit form {
  display: flex;
  flex-direction: column;
}

.pokemoneEdit label {
  font-weight: bold;
  margin-bottom: 5px;
}

.pokemoneEdit input[type="text"] {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.pokemoneEdit input[type="text"]:focus {
  border-color: #007BFF;
}

.pokemoneEdit button[type="submit"] {
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pokemoneEdit button[type="submit"]:hover {
  background-color: #0056b3;
}

</style>

