<template>
  <div class="mask">
    <div class="menu">
      <ul class="menu-list">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Archive</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Life</a></li>
      </ul>
    </div>
    <div class="info">designed by faceless studio· 2019 © 雷雨</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

@Component
export default class Cover extends Vue {
  @State isShowCover: any
  @Action showCover: any
  // @Action('showCover') actionShowCover: any
  // @Mutation('SHOW_COVER') mutationShowCover: any
  // @Getter('isShowCover') getterIsShowCover: any

  // data
  isMenu: boolean = true

  // props
  @Prop() private msg!: string

  // mounted
  mounted () {
    //
  }

  // computed
  get xxx ():string {
    return 'xxx'
  }

  // methods
  handleMenu ():void{
    this.isMenu = !this.isMenu
    this.showCover(false)
    console.log('1111111')
    console.log('isShowCover', this.isShowCover)
  }
}
</script>

<style scoped lang="less">
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .97);
  .menu{
    width: 80%;
    margin: 70px auto 0;
    .menu-list{
      margin: 170px auto 0;
      width: 60%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      li{
        list-style: none;
        font-size: 20px;
        margin: 10px 10px;
        a{
          text-decoration: none;
          color: #666;
          letter-spacing: 1px;
        }
        a:hover{
          color:#666;
        }
      }
    }
  }
  .info{
      width: 100%;
      color: #999;
      font-size: 14px;
      text-align: center;
      position: absolute;
      bottom: 30px;
    }
}
</style>
