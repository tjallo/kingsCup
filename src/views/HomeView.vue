<script setup lang="ts">
import { ref } from 'vue';
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia';

const store = usePlayerStore();
const { players } = storeToRefs(store);

// const players/ = ref(['Player1', 'Player2']);
const newPlayer = ref('');

const regex = /^[a-zA-Z0-9]{3,}$/;

function addPlayer() {
  if (newPlayer.value.match(regex)) {
    players.value.push(newPlayer.value);
    newPlayer.value = '';
  }
}
</script>

<template>
  <v-card class="more-margin text-center mx-auto">
    <v-card-title> Spelers </v-card-title>

    <v-list>
      <v-list-item v-for="(player, index) in players" :key="index">
        {{ player }}
        <v-btn variant="flat" class="ml-n1"><v-icon icon="mdi-account-remove-outline" color="red"></v-icon></v-btn>
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
