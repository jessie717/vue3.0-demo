<template>
  <div class="menu">
    <div class="menu-name">
        <span class="menu-logo" :class="{'menu-logo-white': isMenuLogoWhite}">柠·汐</span>
        <div class="menu-icon" v-show='isMenu' @click='handleMenu'>
          <img src="../assets/menu.png" alt="menu">
        </div>
        <div class="menu-icon" v-show='!isMenu' @click='handleMenu'>
          <img src="../assets/close.png" alt="close">
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class BaseMenu extends Vue {
  // state
  // @State showNav: any
  @State isMenuLogoWhite: any
  @Action showNav: any
  @Action setMenuLogo: any

  // data
  isMenu: boolean = true

  // mounted
  mounted () {
    console.log('this is base menu...')
  }

  // methods
  handleMenu ():void {
    this.isMenu = !this.isMenu
    this.showNav(!this.isMenu)
    this.setMenuLogo(this.isMenu)
  }
}
</script>

<style lang="less" scoped>
.menu{
    width: 86%;
    margin: 0 auto;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 1000;
    .menu-name{
      display: flex;
      justify-content: space-between;
      .menu-logo{
        display: block;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
      }
      .menu-logo-white{
        // color: #03716E;
        color: #fff;
      }
      .menu-icon{
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 10%;
        img{
          display: block;
          width: 20px;
          height: 20px;
          margin: 10px 10px;
        }
      }
    }
  }
</style>
