<template>
  <div id="ComponentBasicParent">
    <h2>Study Vue components(Parent)</h2>
    <h3>This is parent.</h3>
    <p>Parent-model:{{ model.testData }}</p>
    <v-container grid-list-xs>
      <v-form>
        <v-text-field label="model.testData" v-model="model.testData" name="parent1" id="Parentinput1" ></v-text-field>
        <v-text-field label="param1"         v-model="param1"         name="parent2" id="Parentinput2" ></v-text-field>
        <v-text-field label="param2"         v-model="param2"         name="parent3" id="Parentinput3" ></v-text-field>
        <v-text-field label="param3"         v-model="param3"         name="parent4" id="Parentinput4" ></v-text-field>
      </v-form>
    </v-container>

    <h2>Study Vue components(Child(binding))</h2>
    <ChildLayer v-model="model.testData"></ChildLayer>

    <h2>Study Vue components(Child(non binding))</h2>
    <ChildLayer></ChildLayer>
    
    <h2>Study Vue components(Child(Multi parameters))</h2>
    <ChildLayer2
      :param1="param1" @update:param1="param1 = $event"
      :param2="param2"
      :param3="param3" @hoge="v => fuga(v)"
    ></ChildLayer2>

    <h2>Study Vue components(Child with refs)</h2>
    <ChildLayer3
      ref="fromChild"
    ></ChildLayer3>
    <v-container grid-list-xs>
      <v-form>
        <v-btn color="info" @click="callChild">call child from parent with refs</v-btn>
        <label>parent side message : </label>{{message}}
      </v-form>
    </v-container>

  </div>
</template>

<script>

import ChildLayer from "./ComponentBasicChild"
import ChildLayer2 from "./ComponentBasicChild2"
import ChildLayer3 from "./ComponentBasicWithRefs"

export default {
  name: 'ParentLayer',
  components: {
    ChildLayer,
    ChildLayer2,
    ChildLayer3,
  },
  data() {
    return {
      model: {
        testData: "init data",
      },
      param1:"p1",
      param2:"2",
      param3:"aaaaaa",
      message: '',
    }
  },
  methods: {
    fuga(v) {
      console.log(`parent: v = ${v}`);
      this.param3 = v;
    },
    callChild() {
      this.$refs.fromChild.message = "from parent!!!"
    }
  }
}
</script>

<style>
</style>