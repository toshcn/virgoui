import Vue from 'vue';
import Router from 'vue-router';
import Virgo from '../../src/index.js';
import HelloWorld from '../components/HelloWorld';

Vue.use(Router);
Vue.use(Virgo);

const Icon = () => import('./Icon.vue');
const Grid = () => import('./Grid.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
});
