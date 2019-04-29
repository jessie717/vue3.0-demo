<template>
  <div class="cover"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Cover extends Vue {}
</script>

<style lang="less" scoped>
.cover {
  z-index: 800;
  width: 300px;
  height: 0;
  opacity: .7;
  position: absolute;
  top: 0;
  border-bottom: 810px solid rgb(176, 14, 36);
  border-right: 650px solid transparent;
}
</style>
