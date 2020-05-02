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

    <ChildLayer v-model="model.testData"></ChildLayer>

    <ChildLayer></ChildLayer>
    
    <ChildLayer2
      :param1="param1" @update:param1="param1 = $event"
      :param2="param2"
      :param3="param3" @hoge="v => fuga(v)"
    ></ChildLayer2>

    <ChildLayer3
      ref="fromChild"
    ></ChildLayer3>
    <v-container grid-list-xs>
      <v-form>
        <v-btn color="info" @click="callChild">call child from parent with refs</v-btn>
        <label>parent side message : </label>{{message}}
      </v-form>
    </v-container>

    <ChildLayer4>Suzuki-san</ChildLayer4>
    <ChildLayer4>
      <span>This is not a template １.</span>
      <template v-slot:h>
          <h3>Hi, slot!!!</h3>
      </template>
      <template #f>
          Do you understand slot?
      </template>
      <span>This is not a template 2.</span>
      <span>This is not a template either.</span>
    </ChildLayer4>

    <ChildLayer5>
      <template v-slot:ScopedSlot>aaaaa</template>
      <template #ScopedSlot="hoge">
        Book title : {{hoge.book.title}} (\{{hoge.book.price}})
      </template>
    </ChildLayer5>

    <ChildLayer5>
      <template v-slot:ScopedSlot></template>
    </ChildLayer5>

  </div>
</template>

<script>

import ChildLayer from "./ComponentBasicChild"
import ChildLayer2 from "./ComponentBasicChild2"
import ChildLayer3 from "./ComponentBasicWithRefs"
import ChildLayer4 from "./ComponentBasicWithSlot"
import ChildLayer5 from "./ComponentBasicWithScopedSlot"

export default {
  name: 'ParentLayer',
  components: {
    ChildLayer,
    ChildLayer2,
    ChildLayer3,
    ChildLayer4,
    ChildLayer5,
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