<template>
  <div id="app">
    <BaseMenu></BaseMenu>
    <Cover v-show="isShowCover"></Cover>
    <router-view/>
    <BaseWish></BaseWish>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cover from '@/views/Cover.vue'
import BaseMenu from '@/components/BaseMenu.vue'
import BaseWish from '@/components/BaseWish.vue'

import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

@Component({
  components: {
    Cover, BaseMenu, BaseWish
  }
})
export default class App extends Vue {
  @State isShowCover: any

  mounted () {
    console.log(this.isShowCover)
  }
}

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
