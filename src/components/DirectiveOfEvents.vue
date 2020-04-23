<template>
  <div id="study-directive">
    <h2>Study Vue directive(Events) </h2>



    <div class="block"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="onClick('clicked', $event)"
    >{{this.onHoverChange}}</div>



    <div class="block">image(reference error)
      <img src="https://hogefugaaaa.com/aaaaa.jpg" alt="" @error="onError">
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    onHoverChange: "default",
  })
  ,computed: {
  }
  ,methods: {
    onMouseEnter() {
      this.onHoverChange = "enter!";
    },
    onMouseLeave() {
      this.onHoverChange = "leave!";
    },
    onError() {
      console.log("Error occurred.");
    },
  }
}
</script>

<style>
div.block {
  border: 1px solid #aaa;
  padding     : 5px;
  margin      : 5px;
}
</style>