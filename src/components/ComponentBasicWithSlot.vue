<template>
  <div id="ComponentBasicChild4">
    <hr>
    <h3>This is child with slot.</h3>
    <v-container grid-list-xs>
      <header>
        <slot name="h"><h3>default header</h3></slot>
      </header>
      <div>Hi [<slot>guest</slot>]!!</div>
      <footer>
        <slot name="f"><h3>default footer</h3></slot>
      </footer>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>