<template> 
  <div>
    <v-container grid-list-xs>
      <v-select
        :items="items"
        dense
        item-text="label"
        item-value="value"
        v-model="color"
        label="色"
        >
      </v-select>
      {{this.color}}
      <div v-originalHilighting="color">aaaaaaaaaa</div>
    </v-container>
  </div>
</template> 

<script> 

import Vue from 'vue'

Vue.directive('originalHilighting', {
  bind: function(el, binding) {
    console.log(11111111111);
    console.log(binding);
    console.log(11111111111);
    el.style.backgroundColor = binding.value;
  },
  update: function(el, binding) {
    console.log(22222222222);
    console.log(binding);
    console.log(22222222222);
    el.style.backgroundColor = binding.value;
  }
})

export default { 
  components: { 
  },
  created: function() {
    this.color = this.items[0].value;
    console.log("0000000000");
  },
  data: ()=> ({
    items: [
      {label:"黄色",value:"yellow"},
      {label:"青色",value:"blue"},
      {label:"緑色",value:"green"}  
    ],
    color:{},
  })
} 
</script> 