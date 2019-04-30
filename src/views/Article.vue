<template>
  <div>
    <h3>文章详情页...</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class Article extends Vue {
  @Action showMenu: any
  mounted () {
    console.log('文章列表页...')
    this.showMenu(false)
  }
}
</script>

<style lang="less" scoped>

</style>
