<template>
<div id="api-test">
  <hr>
  <v-btn small @click="testAPI">test API</v-btn>
  <v-btn small @click="getEvents">get events</v-btn>
  <hr>
</div>
</template>

<script>
import {API} from 'aws-amplify';

export default {
  components: {
  }
  ,methods: {

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
      }
      API.get(apiName, path, myInit).then(response => {
          console.info("success");
          console.log(response);
      }).catch(error => {
          console.error("error");
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
          console.info("success");
          console.log(response);
      }).catch(error => {
          console.error("error");
          console.log(error.response)
      });
    }
  }
}
</script>

<style>
  .v-btn {
    margin: 1em;
  }
</style>
