<template>
  <v-container class="fill-height" fluid>
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 my-6 text-center" color="green" shaped>
          <div class="top text">{{newCard[0]}}</div>
        </v-card>
        <v-card class="elevation-12 my-n10 rounded-xl text-center" color="primary">
          <div class="bottom ma-15">{{newCard[1]}}</div>
        </v-card>
        <br />

        <v-layout justify-center>
          <v-card-actions>
            <v-btn primary rounded class="px-14 py-11" color="red"  @click.prevent="reloadPage()">
              <span class="button">Volgende</span>
            </v-btn>
          </v-card-actions>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String,
  },
};
</script>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<script>
import { cards } from "../js/cards.js";

let localCards = cards;

export default {
  name: "App",

  components: {},

  data: () => ({}),
  computed: {
    newCard: () => {
      const index = Math.floor(Math.random() * localCards.length);
      const randomElement = localCards[index];
      return randomElement;
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>


<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.top {
  font-size: 1em;
  text-align: center;
  font-size: 4em;
  font-weight: light;
  letter-spacing: 0.01em;
}

.bottom {
  text-align: center;
  font-size: 2.2em;
  font-weight: 300;
}

.button {
  text-align: center;
  font-size: 2em;
  font-weight: 800;
}
</style>