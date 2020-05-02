<template>
  <div id="ComponentBasicChild２">
    <hr>
    <h3>This is child 2.</h3>
    <v-container grid-list-xs>
      <v-form>
        <v-text-field id="ChildInput1" v-model="param1GetSet"                           name="param1" label="param1"></v-text-field>
        <v-text-field id="ChildInput2" :value="param2"                                  name="param2" label="param2"></v-text-field>
        <v-text-field id="ChildInput3" :value="param3"        @input="doEmitWithInput"  name="param3" label="param3"></v-text-field>
      </v-form>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ChildLayer',
  props: {
    param1: {type: String,},
    param2: {type: String,},
    param3: {type: String,},
  },
  data() {
    return {
    }
  },
  computed: {
    param1GetSet: {
      get: function() {
        return this.param1;
      },
      set: function(v) {
        this.$emit('update:param1', v)
      }
    }
  },
  methods: {
    doEmitWithInput(v) {
      console.log(`child: v = ${v}`);
      this.$emit('hoge', v)
    },
  }
}
</script>