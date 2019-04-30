<template>
  <div id="app">
    <BaseMenu v-show="showMenu"></BaseMenu>
    <Nav v-show="showNav"></Nav>
    <router-view/>
    <BaseWish></BaseWish>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation } from 'vuex-class'

import Nav from '@/views/Nav.vue'
import BaseMenu from '@/components/BaseMenu.vue'
import BaseWish from '@/components/BaseWish.vue'

@Component({
  components: {
    Nav,
    BaseMenu,
    BaseWish
  }
})
export default class App extends Vue {
  @State showNav: any;
  @State showMenu: any;

  mounted () {
    console.log(this.showNav)
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
