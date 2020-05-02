<template>
  <div id="ComponentBasicChild3">
    <hr>
    <h3>This is child with refs.</h3>
    <v-container grid-list-xs>
      <v-form>
        <v-btn color="info" @click="callParent">call parent from child with refs</v-btn>
        <label>child side message : </label>{{message}}
      </v-form>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
      message: ''
    }
  },
  computed: {
  },
  methods: {
    callParent() {
      this.$parent.message = "from child!!!"
    }
  }
}
</script>