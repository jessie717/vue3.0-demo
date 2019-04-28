<template>
  <div class="wish">
    <p></p>
    <span>做一个俗人,贪财好色,不染烟酒,浪荡一生,干净自由</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseWish extends Vue {}
</script>

<style lang="less" scoped>
.wish{
  margin-top: 10px;
  p{
    display: block;
    width: 90%;
    margin: 0 auto;
    border-bottom: #999 solid 1px;
  }
  span{
    display: block;
    width: 100%;
    color: #999;
    font-size: 14px;
    text-align: center;
    &:first-child{
      margin-top: 10px;
    }
  }
}
</style>
