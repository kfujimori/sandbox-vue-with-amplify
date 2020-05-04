<template>
  <div id="ComponentBasicChild">
    <hr>
    <h3>This is child.</h3>
    <p>Child-value:{{ value }}</p>
    
    <v-container grid-list-xs>
      <v-form>
        <v-text-field id="ChildInput" :value="value" @input="doEmitWithInput" name="value" label="value"></v-text-field>
      </v-form>
    </v-container>
    
    <hr>

    <v-container grid-list-xs>
      <v-text-field
        label="Name : "
        v-model="internalValue"
      ></v-text-field>
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
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(v) {
        if(this.value !== v) {
          this.$emit('input', v);
        }
      }
    }
  }
}
</script>