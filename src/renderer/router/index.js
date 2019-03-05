import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/housekeeping',
      name: 'Housekeeping',
      component: require('@/components/HouseKeeping').default,
    },
  ],
});
