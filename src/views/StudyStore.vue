<template> 
  <div>
    <v-container grid-list-xs>
      <v-btn rounded dark color="blue" value="-" @click="plus">plus</v-btn>
      <v-btn rounded dark color="red" value="-" @click="minus">minus</v-btn>
      <br>
      computed: {{count}}
      <br>
      mapState: {{count2}}
    </v-container>
  </div>
</template> 

<script> 

import {mapState} from 'vuex';

export default { 
  data: ()=> ({
  }),
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState(['count2']),
  },
  methods: {
    plus() {
      this.$store.commit('plus');
    },
    minus() {
      this.$store.commit('minus');
    },
  },
} 
</script> 

<style lang="scss">

</style>