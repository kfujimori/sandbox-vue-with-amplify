<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="onHome">HOME</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Sample Vue Project
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home/>
      <APITest/>
    </v-content>

    <v-footer app>
      <v-card-title>
        <v-btn fab small class="mx-2 color:white" href="https://twitter.com/fujimohige">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2 color:white" href="https://www.facebook.com/profile.php?id=100002070586479">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2 color:white" href="https://www.instagram.com/kenichifujimori/?hl=ja">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <p>Copyright © Sample Vue Project</p>
      </v-card-text>
    </v-footer>

  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import APITest from './components/APITest.vue'

import {Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default {
  name: 'App',
  components: {
    Home,
    APITest,
  }
  ,mounted: async function(){
    this.login();
  }
  ,data: ()=> ({
    drawer: false,
  })
  ,methods: {
    /**
     * ナビバー制御
     */
    onHome() {
      if(this.$route.path != '/') {
        this.$router.push({path: '/'});
      }
    },
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
