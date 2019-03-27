<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <div class="loading"></div> -->
    <div class="container">
      <div class="c-screen">
        <img src="../assets/wallpaper.png" alt="谷">
      </div>
      <div class="c-article"></div>
      <div class="c-page"></div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    // Cover
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home{
  width: 1280px;
  height: 100%;
  .container{
    width: 100%;
    .c-screen{
      width: 100%;
      height: 720px;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
