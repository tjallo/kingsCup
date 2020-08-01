import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../views/Homepage';
import Game from '../views/Game'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
