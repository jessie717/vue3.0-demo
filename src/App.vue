<template>
  <div id="app">
    <Cover v-show="isShowCover"></Cover>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cover from '@/views/Cover.vue'

import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

@Component({
  components: {
    Cover
  }
})
export default class App extends Vue {
  // @State('isShowCover') stateIsShowCover: any
  // @Action('showCover') actionShowCover: any
  // @Mutation('SHOW_COVER') mutationShowCover: any
  // @Getter('isShowCover') getterIsShowCover: any

  @State isShowCover: any
  // @Mutation SHOW_COVER: any

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
