import Vue from 'vue';

Vue.filter('addPrefix', function(v) {
  let rv = "";
  if(typeof v === "string") {
    rv = v;
  } else if(typeof v === "number") {
    rv = String(v);
  } else {
    rv = "nonText";
  }
  return "prefix_" + rv;
})
