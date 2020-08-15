import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {allCards} from '../js/cards';

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    cards: allCards
  },
  mutations: {
    remove(state, {
      arrayEntry
    }) {
      let index = state.cards.indexOf(arrayEntry);
      state.cards.splice(index, 1);
    },
    reset(state) {
      let thosecards = allCards;
      state.cards = thosecards;
    }
  },
  actions: {},
  modules: {},
  getters: {
    allCards() {
      return this.state.cards;
    },
  },
  plugins: [createPersistedState()],
});