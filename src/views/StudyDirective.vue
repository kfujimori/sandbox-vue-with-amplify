<template> 
  <div>
    <div class="sample-block">
      <DirectiveOfEvents /> 
      <DirectiveOfForm /> 
    </div>
  </div>
</template> 

<script> 
import DirectiveOfEvents from '../components/DirectiveOfEvents'
import DirectiveOfForm from '../components/DirectiveOfForm.vue'

export default { 
  components: { 
    DirectiveOfEvents,
    DirectiveOfForm,
  } 
} 
</script> 

<style>
  div.sample-block {
    border: 1px solid lightgrey;
    margin:2px;
  }
  div.sample-block h2 {
    background:#888;
    color:white;
  }
</style>