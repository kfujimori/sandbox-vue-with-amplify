<template> 
  <div>
    <div class="sample-block">
      <DirectiveOfEvents /> 
      <DirectiveOfForm /> 
      <DirectiveOfControl /> 
      <DirectiveOfDataBinding /> 
      <DirectiveOfAdvancedEvent /> 
    </div>
  </div>
</template> 

<script> 
import DirectiveOfEvents from '../components/DirectiveOfEvents'
import DirectiveOfForm from '../components/DirectiveOfForm.vue'
import DirectiveOfControl from '../components/DirectiveOfControl.vue'
import DirectiveOfDataBinding from '../components/DirectiveOfDataBinding.vue'
import DirectiveOfAdvancedEvent from '../components/DirectiveOfAdvancedEvent.vue'

export default { 
  components: { 
    DirectiveOfEvents,
    DirectiveOfForm,
    DirectiveOfControl,
    DirectiveOfDataBinding,
    DirectiveOfAdvancedEvent,
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