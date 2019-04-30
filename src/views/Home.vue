<template>
  <div class="home">
    <div class="container">
      <div class="c-screen">
        <img src="../assets/wallpaper.png" alt="谷">
      </div>
      <div class="c-article"></div>
      <div class="c-page"></div>
    </div>
    <List></List>
    <Cover></Cover>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

import Cover from '@/views/Cover.vue'
import List from '@/views/List.vue'

@Component({
  components: {
    Cover, List
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  // width: 1280px;
  height: 100%;
  // margin: 0 auto;
  position: relative;
  .container {
    width: 100%;
    .c-screen {
      // width: 1440px;
      // height: 790px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        // transform: scale(1.1, 1.1);
      }
    }
  }
}
</style>
