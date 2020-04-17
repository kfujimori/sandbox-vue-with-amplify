import Vue from 'vue'
import App from './App.vue'
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

console.log(1)

let apiName = 'sandboxVWAAPI';
let path = '/events'; 
let myInit = { 
    headers: {}, 
    response: true,
    queryStringParameters: {
        name: 'param'
    }
}
API.get(apiName, path, myInit).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error.response)
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
