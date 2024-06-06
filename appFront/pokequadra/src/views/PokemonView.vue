<template>
  <div>
    <h1>Liste des Pokémon</h1>
    <div class="pokemon-list">
      <!-- Boucle sur tous les Pokémon retournés dans le fetchPokemon -->
      <div
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
      >
        <PokemonCard :pokemon="pokemon" @showEdit="showEdit(pokemon)" @detailShow="showDetail(pokemon)" />
      </div>
    </div>

    <PokemonDetail :pokemon="selectedPokemon" :isOpen="true" v-if="toogleDetails" class="pokemonDetails"/>
    <!-- <EditPokemonForm :pokemon="selectedPokemon"/> -->
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'; // Importer le composant PokemonCard
import PokemonDetail from '@/components/PokemonDetails.vue'; // Importer le composant PokemonCard
// import EditPokemonForm from '@/components/PokemonUpdate.vue';
import { mapActions, mapState } from 'vuex'; //import du store

export default {
  name: 'PokemonList',
  components: {
    PokemonCard,
    PokemonDetail,
    // EditPokemonForm
  },
  data() {
    return {
      pokemonId: null,
      pokemonData: null,
      selectedPokemon: null,
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
    await this.insertPokemon();
    this.fetchPokemonList(); // Appeler la méthode pour récupérer les Pokémon au mounted
  },
  computed: {
    ...mapState({
      pokemonList: state => state.pokemonList
    })
  },
  methods: {
    ...mapActions(['updatePokemon', 'fetchPokemonList', 'insertPokemon']),
    showDetail(pokemon) {
      this.toogleDetails = true;
      this.toogleUpdate = false;
      this.selectedPokemon = pokemon
    },
    showEdit(pokemon) {
      this.toogleUpdate = true;
      this.toogleDetails = false;
      this.selectedPokemon = pokemon
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

.pokemoneEdit button{
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pokemonDetails button{
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

