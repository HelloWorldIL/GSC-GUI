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
      children: [
        {
          path: 'overview',
          component: require('@/components/HouseKeeping/overview').default,
        },
        {
          path: 'main',
          component: require('@/components/HouseKeeping/main').default,
        },
      ],
    },
  ],
});
