<template>
  <div id="ComponentBasicChild">
    <h3>This is child.</h3>
    <p>Child-value:{{ value }}</p>
    <v-container grid-list-xs>
      <v-form>
        <v-text-field id="ChildInput" :value="value" @input="doEmitWithInput" name="value" label="value"></v-text-field>
      </v-form>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ChildLayer',
  props: {
    value: {
      type: String,
      // required: true,
      default: () => {
        return "Default"
      },
      validator: (v) => {
        return v.length >= 5;
      }
    },
  },
  data() {
    return {
    }
  },
  methods: {
    doEmitWithInput(v) {
      this.$emit('input', v)
    },
  }
}
</script>