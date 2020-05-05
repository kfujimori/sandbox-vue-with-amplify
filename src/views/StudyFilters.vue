<template> 
  <div>
    <v-container grid-list-xs>
      aaa
      {{hoge | prefix}}
    </v-container>
    aa
  </div>
</template> 

<script> 

export default { 
  components: { 
  },
  data: ()=> ({
    hoge: "hogehoge"
  })
} 
</script> 