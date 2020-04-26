<template>
  <div id="study-directive">
    <h2>Study Vue directive(Data binding) </h2>

    <div class="block">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-text-field
          name="email"
          label="input email"
          id="email"
          :rules="emailRules"
        ></v-text-field>
        <input type="text" id="email2" v-bind="attrs" style="border: 1px solid #ccc" />
        <v-btn color="info" @click="validateEmail">submit</v-btn>
      </v-form>
    </div>


    <div class="block">
      <select  v-model="picSizeDiv">
        <option value="height">高さ</option>
        <option value="width">幅</option>
      </select>：
      <input type="text" v-model="picSize" /><br>
      <img src="https://wings.msn.to/image/wings.jpg" :[picSizeDiv]="picSize">
    </div>


    <div class="block">
      <p v-html="innerHTML"></p>
    </div>

  </div>

</template>

<script>
export default {
  data: () => ({
    attrs: {
      size     :20,
      maxlength:10,
      required :true
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    picSizeDiv: "width",
    picSize: 100,
    innerHTML:"<h3>hogehoge</h3><br><ul><li>aaaa</li><li>aaaa</li></ul>",
  })
  ,watch: {
  }
  ,mounted() {
  }
  ,computed: {
  }
  ,methods: {
    validateEmail() {
      this.$refs.form.validate();
    }
  }
}
</script>

<style>
div.block {
  border: 1px solid #aaa;
  padding     : 5px;
  margin      : 5px;
}
div {
  /* border : solid 0.1px; */
  border-color: #888;
}
</style>