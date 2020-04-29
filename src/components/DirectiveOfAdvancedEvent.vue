<template>
  <div id="study-directive">
    <h2>Study Vue directive(Advanced)</h2>

    <div class="block">
      <div @contextmenu.prevent>
        ここでは右クリックできません
      </div>
    </div>

    <div class="block">
      <form @submit="onsubmit">
        <v-text-field
          name="name"
          label="input"
        ></v-text-field>
        <v-btn type="submit" color="primary" fab small dark>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn type="submit" color="info">
          <v-icon>mdi-run-fast</v-icon>
        </v-btn>
      </form>
    </div>

    <div class="block">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" @keyup.alt.exact.81="help" v-model="name">
        <label for="help">*If you want to check help, press "alt + Q".</label>
      </form>
    </div>

    <div class="block">
      <v-btn color="info"
        @click.left="onleftclick"
        @click.right.prevent="onrightclick"
      >【normal】click right-click or left-click.</v-btn>
      <ul class="cxt"  style="position:absolute; padding-left:0px" :style="pos" v-show="show">
        <li><a href="https://google.com">google</a></li>
        <li><a href="https://yahoo.com">yahoo</a></li>
        <li><a href="https://amazon.com">amazon</a></li>
      </ul>
    </div>
    <div class="block">
      <div class="text-center">
        <v-menu top :offset-x="offset">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on">【v-menu】click.</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              {{index+1}}<v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    show: false,
    pos : {
      left: 0,
      right: 0,
      width: 0,
    },
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    offset: true,
  })
  ,computed: {
  }
  ,methods: {
    onsubmit(e) {
      alert("are you sure you want to submit?");
      e.preventDefault();
      return;
    },
    help() {
      alert("input your name.");
    },
    onleftclick() {
      console.log("left click");
      this.show = false;
    },
    onrightclick(e) {
      console.log("right click");
      this.pos = {
        top: e.pageY-130 + 'px',
        left: e.pageX + 'px',
        width: '250px',
        background: 'lightblue'
      };
      this.show = true;
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
.cxt {
  list-style: none;
  border: 1px solid #aaa;
}
.cxt li {
  border-bottom: 1px solid #aaa;
}
.cxt li a {
  color:white;
}
.cxt li:hover {
  background: blue;
  color:white;
}
ul {
  padding-left: 0px;
}
</style>