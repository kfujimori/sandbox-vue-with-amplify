<template> 
  <div>
    <v-container grid-list-xs>
      {{hello}}
      <br>
      <v-btn color="info" @click="callMixin">show data</v-btn>
    </v-container>
  </div>
</template> 

<script> 

import Mixin from '../mixin'

export default { 
  mixins: [
    Mixin
  ],
  data: ()=> ({
    greeting: 'Hello'
  }),
  methods: {
    callMixin: function() {
      console.log(this.dataLogger());
    }
  }
} 
</script> 