<template>
  <div id="study-directive">
    <h2>Study Vue directive(Form) </h2>

    <!-- lazy doesn't works -->
    <div class="block">
      <v-form>
        <v-container>
          <v-row no-gutters>
            <v-col> 
              <v-text-field
                label="Name"
                v-model.lazy="name"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      Hi, v-text-field {{ name}}.
    </div>

    <!-- lazy works -->
    <div class="block">
      <v-text-field :value="lazyName" @change="value => lazyName = value"></v-text-field>
      Hi, v-text-field lazy {{this.lname}}.
    </div>

    <!-- lazy works -->
    <div class="block">
      <form>
        <input style="border: solid 1px grey;"
          label="Name"
          v-model.lazy="name"/>
      </form>
      Hi, normal input lazy {{ name}}.
    </div>



    <div class="block">
      <form >
        <v-radio-group v-model="radioGroup" row hide-details="false" class="pa-1 ma-1">
          <v-radio :label="`Radio 1`" :value=1></v-radio>
          <v-radio :label="`Radio 2`" :value=2></v-radio>
          <v-radio :label="`Radio 3`" :value=3></v-radio>
          selected => {{radioGroup}}
        </v-radio-group>
      </form>
    </div>



    <div class="block">
      <v-switch hide-details="false" v-model="switchValue" class="pa-1 ma-1" :label="`switch ${switchValue}`"/>
    </div>



    <div class="block">
      <v-checkbox class="pa-1 ma-1" hide-details="false"
        :disabled=false
        :readonly=false
        :indeterminate="indeterminate"
        label="I'm a checkbox of progress bar."
        v-model="indeterminate"
      ></v-checkbox>
      <v-progress-linear
        :indeterminate="indeterminate"
        :active=true
        :background-opacity=0.5
        :buffer-value=80
        :height=8
        :value=0
        :query=false
        :rounded=true
        :stream=true
        :striped=true
        :bottom=false
        :top=false
        color="light-blue"
      ></v-progress-linear>
      <v-row justify="space-around">
        <v-checkbox class="pa-1 ma-1" hide-details="false"
          :disabled=false
          :readonly=false
          :success="success"
          label="success."
          v-model="success"
        ></v-checkbox>
        <v-checkbox class="pa-1 ma-1" hide-details="false"
          :disabled=false
          :readonly=false
          :error="error"
          label="error."
          v-model="error"
        ></v-checkbox>
      </v-row>
      <v-row justify="space-around">
        <v-checkbox class="pa-1 ma-1" hide-details="false" label="A" value="A" v-model="ABC"></v-checkbox>
        <v-checkbox class="pa-1 ma-1" hide-details="false" label="B" value="B" v-model="ABC"></v-checkbox>
        <v-checkbox class="pa-1 ma-1" hide-details="false" label="C" value="C" v-model="ABC"></v-checkbox>
      </v-row>
      {{ABC}}
    </div>



    <div class="block">
      <p>select</p>
      <v-container>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6"><v-select hide-details="false"  v-model="itms" :items="items" @change="onChangeItms" label="Standard"               ></v-select></v-col>
          <v-col class="d-flex" cols="12" sm="6"><v-select hide-details="false"  v-model="itms" :items="items" @change="onChangeItms" label="Filled style"   filled  ></v-select></v-col>
          <v-col class="d-flex" cols="12" sm="6"><v-select hide-details="false"  v-model="itms" :items="items" @change="onChangeItms" label="Outlined style" outlined></v-select></v-col>
          <v-col class="d-flex" cols="12" sm="6"><v-select hide-details="false"  v-model="itms" :items="items" @change="onChangeItms" label="Solo field"     solo    ></v-select></v-col>
        </v-row>
        {{this.itms}}
      </v-container>
    </div>


    <div class="block">
      <p>file upload</p>
      <form>
        <v-file-input
          @change="uploadFile"
          v-model="upfiles"
          multiple
          chips
          clearable
          counter
          solo
          show-size
          required
          prepend-icon="mdi-camera"
          accept="image/png, image/jpeg, image/bmp"
          :rules="inputRules"
          label="File input" ></v-file-input>
        <input type="file" ref="upfile2" @change="uploadFile2">
      </form>
    </div>


    <div class="block">
      <p>binding options</p>
      <v-form>
        <v-container>
          <v-text-field 
            required
            label="サウナの温度"
            type="text"
            id="temperature"
            :rules="textRule"
            @change="inputTextChanged"
            v-model.number="temperature"></v-text-field>
  
        </v-container>
      </v-form>
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    radioGroup: 1,
    switchValue: false,
    error: true,
    success: false,
    indeterminate: true,
    ABC: [],
    items: [1,2,3,4],
    itms: null,
    upfiles: [],
    temperature: 0,
    lname: ""
  })
  ,computed: {
    inputRules: function() {
      return [inputs => !inputs || inputs.reduce((p, x) => p + x.size, 0) < 600000 || 'Avatar size should be less than 2 MB!',]
    },
    textRule: function() {
      return [v => !!v || "required !", v => v > 999 || "too short !"]
    },
    // props: {
    //   person: Object
    // },
    lazyName: {
      get () {
        console.log("current lname in 'get' method : " + this.lname);
        return this.lname
      },
      set (name) {
        console.log("current lname in 'set' method : " + this.lname);
        this.lname = name;
      }
    }
  }
  ,methods: {
    onClick: function(msg, e) {
      console.log(msg);
      console.log(e);
    },
    onChangeItms: function() {
      console.log(this.itms);
    },
    uploadFile: function() {
      console.log(this.upfiles);
    },
    uploadFile2: function() {
      console.log(this.$refs.upfile2.files);
    },
    inputTextChanged: function() {
      console.log(this.temperature);
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
</style>