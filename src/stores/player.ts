import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';

const STORAGE_KEY = 'my-app-player-store';

export const usePlayerStore = defineStore('player', {
  // arrow function recommended for full type inference
  state: () => {
    const userStorage = localStorage.getItem(STORAGE_KEY);
    
    const storedState = userStorage
      ? JSON.parse(userStorage)
      : {
          players: [] as string[]
        };
    return {
      players: ref(storedState.players) as Ref<string[]>
    };
  },
  actions: {
    addPlayer(playerName: string) {
      this.players.push(playerName);
      this.saveState();
    },
    removePlayer(index: number) {
      this.players.splice(index, 1);
      this.saveState();
    },
    getNumberOfPlayers() {
      return this.players.length;
    },
    saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ players: this.players }));
    }
  }
});
