<template> 
  <div>
    <v-container grid-list-xs>
      <router-link :to="'/article/'+this.id">記事ID：{{this.id}}へジャンプ</router-link>
      <br>
      <router-link :to="'/article/useprops/'+this.idp">記事ID（props渡し）：{{this.idp}}へジャンプ</router-link>
      <hr>
      multi router-view
      <br>
      <router-link class="hover-button" tag="button" event="mouseover" :to="'/studyrouter/multiview/children'">複数ページを読み込み(カーソルホバーで遷移)</router-link>
      <transition>
        <router-view />
      </transition>
    </v-container>
  </div>
</template> 

<script> 

export default { 
  data: ()=> ({
    id: "2501",
    idp: "108",
  }),
  methods: {
  }
} 
</script> 

<style lang="scss">
  .hover-button {
    background-color:#cec;
    border: .5px solid #888;
    border-radius: 5px;
    padding: 5px;
  }
  .v-enter-active {
    transition: opacity 2s;
  }
  .v-enter {
    opacity: 0.0;
  }
  .v-enter-to {
    opacity: 1.0;
  }

</style>