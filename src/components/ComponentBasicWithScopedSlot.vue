<template>
  <div id="ComponentBasicChild5">
    <hr>
    <h3>This is child with scoped slot.</h3>
    <v-container grid-list-xs>
      <slot name="ScopedSlot" :book="book"> [ {{book.title}} ] [ {{book.publish}} ]</slot>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      book: {
        title:"たいとる",
        price:1000,
        publish:new Date(),
      }
    }
  },
}
</script>