import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      players: [] as string[]
    };
  },
  actions: {
    addPlayer(playerName: string) {
      this.players.push(playerName);
    },
    removePlayer(index: number) {
      this.players.splice(index, 1);
    }
  }
});
