import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
require( './filter.js');

Vue.config.productionTip = true

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
