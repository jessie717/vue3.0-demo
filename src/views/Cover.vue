<template>
  <div class="mask">
    <div class="menu">
      <div class="menu-name">
        <span class="menu-logo">柠汐</span>
        <div class="menu-icon" v-show='isMenu' @click='handleMenu'>
          <img src="../assets/menu.png" alt="menu">
        </div>
        <div class="menu-icon" v-show='!isMenu' @click='handleMenu'>
          <img src="../assets/close.png" alt="close">
        </div>
      </div>
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
    width: 80%;
    margin: 70px auto 0;
    .menu-name{
      display: flex;
      justify-content: space-between;
      .menu-logo{
        display: block;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
      }
      .menu-icon{
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: #fff;
        img{
          display: block;
          width: 20px;
          height: 20px;
          margin: 10px 10px;
        }
      }
    }
    .menu-list{
      margin: 100px auto 0;
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
