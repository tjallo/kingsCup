import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', () => {
  const players: Ref<string[]> = ref(['player12']);

  function addPlayer(player: string) {
    players.value.push(player);
  }

  return { players, addPlayer };
});
