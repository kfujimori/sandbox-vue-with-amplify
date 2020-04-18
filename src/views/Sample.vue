<template> 
  <div>
    <div class="sample-block">
      <SampleComputedAndMethods /> 
    </div>
    <div class="sample-block">
      <LifeCycle /> 
    </div>
  </div>
</template> 

<script> 
import SampleComputedAndMethods from '../components/SampleComputedAndMethods'
import LifeCycle from '../components/LifeCycle'

export default { 
  components: { 
    SampleComputedAndMethods ,
    LifeCycle
  } 
} 
</script> 

<style>
  div.sample-block {
    border: 1px solid lightgrey;
    margin:2px;
  }
  div.sample-block p {
    background:#888;
    color:white;
  }
</style>