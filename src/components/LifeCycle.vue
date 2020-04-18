<template>
  <div id="life-cycle">
    <p>sample of life cycle</p>
    now: {{this.current.toLocaleString()}}
    <v-form>
      <v-text-field
        v-model="text"
        label="v-text-field"
        required
        lazy
      />
      {{this.status}}
      <br>
      {{upperText}}
    </v-form>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>

<script>
export default {
  data: () => ({
    beforeCreate  : ""
    ,created      : ""
    ,beforeMount  : ""
    ,mounted      : ""
    ,beforeUpdate : ""
    ,updated      : ""
    ,beforeDestroy: ""
    ,destroyed    : ""

    ,current      : new Date()

    ,text         : "initial"
    // ,upperText    : ""
    ,status       : "-"
  })
  ,beforeCreate : function() {console.log("beforeCreated"); }
  ,created      : function() {console.log("created");
    let that = this;
    this.time = setInterval(function() {
      that.current = new Date();
    }, 20000);

    this.debouncedGetUpperText = _.debounce(this.getUpperText, 1000);
  }
  ,beforeMount  : function() {console.log("beforeMount");   }
  ,mounted      : function() {console.log("mounted");       }
  ,beforeUpdate : function() {console.log("beforeUpdate");  }
  ,updated      : function() {console.log("updated");       }
  ,beforeDestroy: function() {console.log("beforeDestroy"); }
  ,destroyed    : function() {console.log("destroyed");     }
  ,watch: {
    text: function(newV, oldV) {
      this.status = "now writing...";
      this.debouncedGetUpperText(newV, oldV);
    }
  },
  methods: {
    getUpperText: function(newV, oldV) {
      this.status = `-`;
    }
  },
  computed: {
    upperText: function() {
      return this.text.toUpperCase();
    }
  }
}
</script>