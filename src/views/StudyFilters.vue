<template> 
  <div>
    <v-container grid-list-xs>
      {{hoge | addPrefix}}
      <br>
      {{fuga | addComma}}
      <br>
      {{fuga | addComma | addPrefix}}
      <br>
      {{[111,22222] | addPrefix}}
    </v-container>
  </div>
</template> 

<script> 

export default { 
  components: { 
  },
  data: ()=> ({
    hoge: "hogehoge",
    fuga: 10000000000,
  }),
  filters: {
    addComma: function(v) {
      if(typeof v == "number") {
        return v.toLocaleString();
      }
      return v;
    }
  }
} 
</script> 