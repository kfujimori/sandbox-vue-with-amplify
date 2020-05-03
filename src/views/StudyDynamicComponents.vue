<template>
  <div id="DynamicComponents">
    <h2>Study Dynamic components</h2>

    <v-container grid-list-xs>
      <component :is="currentBanner"></component>
    </v-container>

    <v-container grid-list-xs>
      <v-carousel interval="1000" height="100" cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="content in components" :key="content">
            <v-sheet>
              {{content}}
            </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container grid-list-xs>
      <v-tabs centered>
        <v-tab v-for="content in components" :key="content">
          <a href="#" @click.prevent="tabClick(content)"> {{content}}</a>
        </v-tab>
      </v-tabs>
      <keep-alive :max="5" include="['DCBannerMember', 'DCBannerNew']">
        <component :is="currentTab"></component>
      </keep-alive>
    </v-container>

  </div>
</template>

<script>

import DCBannerMember from '../components/DCBannerMember'
import DCBannerNew from '../components/DCBannerNew'
import DCBannerEnv from '../components/DCBannerEnv'

export default {
  components: {
    DCBannerMember,
    DCBannerNew,
    DCBannerEnv,
  },
  created: function() {
    let that = this;
    this.interval = setInterval(function () {
      that.current = (that.current + 1) % that.components.length;
      console.log(`current: ${that.current}`);
    }, 3000);
  },
  beforeDestroy: function () {
    console.log("destroye");
    clearInterval(this.interval);
  },
  computed: {
    currentBanner: function () {
      return 'DCBanner' + this.components[this.current];
    },
    currentTab: function () {
      return 'DCBanner' + this.tab;
    }
  },
  data() {
    return {
      current: 0,
      components: ['Member', 'New', 'Env'],
      tab:"Member",
    }
  },
  methods: {
    tabClick(t) {
      this.tab = t;
    }
  }
}
</script>

<style>
</style>