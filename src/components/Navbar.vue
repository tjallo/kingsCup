<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <v-app-bar>
    <v-spacer></v-spacer>

    <RouterLink to="/" class="mr-1"><v-btn variant="outlined" color="primary">Spelers</v-btn></RouterLink>
    <RouterLink to="/game"><v-btn variant="outlined" color="primary">Spel</v-btn></RouterLink>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
