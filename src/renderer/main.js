// Styles and material design icons
import 'vuetify/src/stylus/main.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'animate.css/animate.min.css'

import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
