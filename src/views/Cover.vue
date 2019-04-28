<template>
  <div class="cover"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cover extends Vue {}
</script>

<style lang="less" scoped>
.cover {
  z-index: 800;
  width: 300px;
  height: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  border-bottom: 810px solid #C85C62;
  border-right: 700px solid transparent;
}
</style>
