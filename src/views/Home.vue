<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="loading"></div>
    <div class="nav"></div>
    <div class="container">
      <div class="c-screen"></div>
      <div class="c-article"></div>
      <div class="c-page"></div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // components: {
  //   HelloWorld
  // }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.container{
  // position: relative;
  .c-screen{
    width: 100%;
    height: 100%;
    background: url('https://isujin.com/wp-content/uploads/2018/11/wallhaven-672007-1.png') no-repeat center;
  }
}
</style>
