<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home/>
    <hr>
    <v-btn small @click="testAPI">test API</v-btn>
    <br>
    <v-btn small @click="getEvents">get events</v-btn>
  </div>
</template>

<script>
import Home from './components/Home.vue'

import Amplify, { API, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default {
  name: 'App',
  components: {
    Home
  }
  ,mounted: async function(){
    this.login();
  }
  ,methods: {
    /**
     * 認証
     */
    login() {
      console.log("login.");

      const loginid = "sandbox-vue-with-amplify-user";
      const loginpw = "keep1031";

      Auth.signIn({"username": loginid, "password": loginpw}).then((data) => {

        if(data.challengeName == "NEW_PASSWORD_REQUIRED") {
          console.log("new password required.");
          data.completeNewPasswordChallenge(loginpw, {}, 
            {
              onSuccess(result) {
                console.log("onSuccess");
                console.log(result);
              },
              onfailure(err) {
                console.log("onfailure");
                console.log(err);
              }
            }
          );
        }
        console.log("login successfuly.");
      }).catch((err) => {
        console.log("login failed.");
        console.log(err);
      });
    },
    /**
     * APIキックテスト
     */
    testAPI() {
      console.log("kick api");

      let apiName = 'sandboxVWAAPI';
      let path = '/events'; 
      let myInit = { 
          headers: {}, 
          response: true,
          // queryStringParameters: {
          //     name: 'param'
          // }
      }
      API.get(apiName, path, myInit).then(response => {
          console.log(1);
          console.log(response);
      }).catch(error => {
          console.log(2);
          console.log(error.response)
      });
    },
    /**
     * イベント一覧取得
     */
    getEvents() {
      let apiName = 'sandboxVWAAPI';
      let path = '/events/:name'; 
      let myInit = { 
          headers: {}, 
          response: true,
      }
      API.get(apiName, path, myInit).then(response => {
          console.log(1);
          console.log(response);
      }).catch(error => {
          console.log(2);
          console.log(error.response)
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
