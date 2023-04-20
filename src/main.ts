import { createApp ,watch} from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify, useTheme } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import "@mdi/font/css/materialdesignicons.css"
import "@fortawesome/fontawesome-free/css/all.css"

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});

import './assets/main.css';

const app = createApp(App);

const pinia = createPinia()

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');

