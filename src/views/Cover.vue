<template>
  <div class="mask">
    <div class="menu">
      <div class="menu-top">
        <span class="menu-logo">柠汐</span>
        <span class="menu-icon" v-show='isMenu' @click='handleMenu'></span>
        <span class="menu-icon menu-icon-x" v-show='!isMenu' @click='handleMenu'></span>
      </div>
      <ul class="menu-middle">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Archive</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Life</a></li>
      </ul>
      <p class="menu-bottom">designed by faceless studio· 2019 © 雷雨</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Cover extends Vue {
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
    .menu-top{
      margin: 70px auto 0;
      width: 80%;
      display: flex;
      justify-content: space-between;
      .menu-logo{
        display: block;
        // width: 20px;
        height: 20px;
        font-size: 20px;
      }
      .menu-icon{
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/menu.png') no-repeat center;
      }
      .menu-icon-x{
        background: url('../assets/close.png') no-repeat center;
      }
    }
    ul.menu-middle{
      width: 50%;
      margin: 100px auto 0;
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
    p{
      width: 100%;
      color: #999;
      font-size: 14px;
      text-align: center;
      position: absolute;
      bottom: 30px;
    }
  }
}
</style>
