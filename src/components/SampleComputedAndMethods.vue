<template>
  <div id="sample-computed-and-methods">
    <h2>sample of Computed and Methods</h2>
    <form>
      <v-btn small @click="onclick">click</v-btn>
    </form>
    <div>computed :      {{ randomC}}  </div>
    <div>methods  :      {{ randomM()}}</div>
    <div>now      :      {{ this.current}}  </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    current: new Date().toLocaleString()
  })
  ,computed: {
    randomC: function() {
      return Math.random();
    }
  }
  ,methods: {
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomM: function() {
      return Math.random();
    }
  }
}
</script>