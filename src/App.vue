<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="goTo('/')">HOME</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/about')">ABOUT</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/apitest')">API TEST</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/sample')">Vue SAMPLE</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studydirective')">Study Vue directive</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/StudyComponents')">Study Vue components</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studydynamiccomponents')">Study Dynamic components</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studyanimation')">Study Animation</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studycreatingparts')">Study Creating Parts</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studyfilters')">Study Filters</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studymixins')">Study Mixins</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studyrouter')">Study Router</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/studystore')">Study Store</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <a href="/">Sample Vue Project</a>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <transition>
        <router-view/>
      </transition>
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
import {Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default {
  name: 'App',
  components: {
  }
  ,mounted: async function(){
    this.login();
  }
  ,data: ()=> ({
    drawer: false,
    color: '#eea',
    aaa: "hoge",
  })
  ,methods: {
    /**
     * ナビバー制御
     */
    goTo(path) {
      if(this.$route.path !== path) {
        this.$router.push({path: path});
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
                console.info("onSuccess");
                console.log(result);
              },
              onfailure(err) {
                console.error("onfailure");
                console.log(err);
              }
            }
          );
        }
        console.info("login successfuly.");
      }).catch((err) => {
        console.error("login failed.");
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
.v-application a{
  text-decoration: none;
}

  .v-enter-active .v-leave-active {
    transition: opacity 2s;
  }
  .v-enter .v-leave-to {
    opacity: 0.0;
  }
  .v-enter-to .v-leave {
    opacity: 1.0;
  }


</style>
