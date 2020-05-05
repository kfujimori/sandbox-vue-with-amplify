import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
require( './filter.js');

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

// Vue.filter('trim', function(v) {
//   if(typeof v !== "string") {
//     return v;
//   }
//   return v.trim();
// })
