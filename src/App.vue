<template>
  <div id="app">
    <Cover></Cover>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cover from '@/views/Cover.vue'

@Component({
  components: {
    Cover
  }
})
export default class App extends Vue {}

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
