import Vue from 'vue';

Vue.filter('addPrefix', function(v) {
  if(typeof v !== "string") {
    return v;
  }
  return "prefix_" + v;
})
