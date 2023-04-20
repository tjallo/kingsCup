<script setup lang="ts">
import { ref } from 'vue';
import { usePlayerStore } from '@/stores/player';

const store = usePlayerStore();

const players = ref(['Player1', 'Player2']);
const newPlayer = ref('');

const regex = /^[a-zA-Z0-9]{3,}$/;

function addPlayer() {
  if (newPlayer.value.match(regex)) {
    store.addPlayer(newPlayer.value);
    newPlayer.value = '';
  }
}

function removePlayer(index: number) {
  store.removePlayer(index);
}
</script>

<template>
  <v-card class="more-margin text-center mx-auto">
    <v-card-title> Spelers </v-card-title>

    <v-list>
      <v-list-item v-for="(player, index) in store.players" :key="index">
        {{ player }}
        <v-btn variant="flat" class="ml-n1"><v-icon icon="mdi-account-remove-outline" color="red" @click="removePlayer(index)"></v-icon></v-btn>
      </v-list-item>
    </v-list>

    <v-form>
      <v-text-field v-model="newPlayer" label="Voeg nieuwe speler toe"></v-text-field>
      <v-btn @click="addPlayer">Voeg speler toe</v-btn>
    </v-form>
  </v-card>
</template>

<style>
.more-margin {
  width: 50%;
}
</style>
