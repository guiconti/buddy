import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/buddydo',
      name: 'buddydo',
      component: () => import('./views/BuddyDo.vue'),
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('./views/Timer.vue'),
    },
  ],
});
