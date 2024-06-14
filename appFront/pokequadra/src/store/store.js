import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pokemonList: [],
  },
  mutations: {
    setPokemonList(state, pokemonList) {
      state.pokemonList = pokemonList;
    },
    updatePokemon(state, updatedPokemon) {
      const index = state.pokemonList.findIndex(pokemon => pokemon.id === updatedPokemon.id);
      if (index !== -1) {
        state.pokemonList.splice(index, 1, updatedPokemon);
      }
    }
  },
  actions: {
    async fetchPokemonList({ commit }) {
      try {
        const response = await axios.get('http://localhost:5000/get/all/pokemon');
        commit('setPokemonList', response.data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    },
    async nextPage({ commit }) {
      try {
        const response = await axios.get('http://localhost:5000/nextPage');
        commit('setPokemonList', response.data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    },
    async insertPokemon() {
      try {
        await axios.get('http://localhost:5000/insert/all/pokemon');
        console.log('Insert success');
      } catch (error) {
        console.error('Error inserting Pokémon:', error);
      }
    },
    async updatePokemon({ commit }, id) {
      try {
        const response = await axios.put(`http://localhost:5000/update/pokemon/${id}`, updatePokemeon);
        console.log(response)
        commit('updatePokemon', {id, updatePokemeon});
      } catch (error) {
        console.error('Error updating Pokémon:', error);
      }
    }
  }
});
