<template>
  <v-container id="Animation basic">
    <v-btn color="info" @click="onclick">表示/非表示</v-btn>
    <div class="panel1">
      <transition>
        <div class="panel" v-show="flag">
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
        </div>
      </transition>
    </div>
    <div class="panel2">
      <transition>
        <div class="panel" v-show="flag">
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
        </div>
      </transition>
    </div>
    <div class="panel3">
      <transition>
        <div class="panel" v-show="flag">
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
          ああああああああああああああああああああああああ<br>
        </div>
      </transition>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      flag:true,
    }
  },
  methods: {
    onclick: function() {
      this.flag = !this.flag;
    }
  },
}
</script>

<style lang="scss">
.panel {
  border  : 1px solid #aaa;
  width   : 600px;
  height  : 100px;
  overflow: scroll;
  margin-right: auto;
  margin-left: auto;
}
div.panel1 {
  .v-enter-active, .v-leave-active {
    transition: height 1s;
  }
  .v-enter, .v-leave-to {
    height:0px;
  }
  .v-enter-to, .v-leave {
    height:100px;
  }
}
div.panel2 {
  .v-enter-active, .v-leave-active {
    transition: opacity 3s;
  }
  .v-enter, .v-leave-to {
    opacity: 0.0;
  }
  .v-enter-to, .v-leave {
    opacity: 1.0;
  }
}
div.panel3 {
  @keyframes slide-in {
    0% {
      transform: translate(100%);
    }
    10% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .v-enter-active {
    animation: slide-in 1,5s;
  }
  .v-leave-active {
    animation: slide-in 1.5s reverse;
  }
}

</style>