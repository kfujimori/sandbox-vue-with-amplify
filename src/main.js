import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
import store from './store'
require( './filter.js');

Vue.config.productionTip = true

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
