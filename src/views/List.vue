<template>
  <div class="list">
    <div class="list-info">
      <div class="list-info-img" @click='toArticle'>
        <img src="https://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://isujin.com/wp-content/uploads/2017/05/wallhaven-406587.png" alt="">
      </div>
      <div class="list-info-content">
        <span>五月 12, 2018</span>
        <h3><a @click='toArticle'>天下武功,唯快不破</a></h3>
        <p>曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。 一只蚂蚁第一次出门觅食，...</p>
        <div class="list-info-content-total">
          <span class="letter">1000</span>
          <span class="view">20000</span>
          <span class="like">300</span>
        </div>
      </div>
    </div>
    <div class="list-info">
      <div class="list-info-img">
        <img src="https://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://isujin.com/wp-content/uploads/2017/05/wallhaven-406587.png" alt="">
      </div>
      <div class="list-info-content">
        <span>五月 12, 2018</span>
        <h3><a>天下武功,唯快不破</a></h3>
        <p>曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。 一只蚂蚁第一次出门觅食，...</p>
        <div class="list-info-content-total">
          <span class="letter">1000</span>
          <span class="view">20000</span>
          <span class="like">300</span>
        </div>
      </div>
    </div>
    <div class="list-info">
      <div class="list-info-img">
        <img src="https://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://isujin.com/wp-content/uploads/2017/05/wallhaven-406587.png" alt="">
      </div>
      <div class="list-info-content">
        <span>五月 12, 2018</span>
        <h3><a>天下武功,唯快不破</a></h3>
        <p>曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。 一只蚂蚁第一次出门觅食，...</p>
        <div class="list-info-content-total">
          <span class="letter">1000</span>
          <span class="view">20000</span>
          <span class="like">300</span>
        </div>
      </div>
    </div>
    <div class="list-info">
      <div class="list-info-img">
        <img src="https://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://isujin.com/wp-content/uploads/2017/05/wallhaven-406587.png" alt="">
      </div>
      <div class="list-info-content">
        <span>五月 12, 2018</span>
        <h3><a>天下武功,唯快不破</a></h3>
        <p>曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。 一只蚂蚁第一次出门觅食，...</p>
        <div class="list-info-content-total">
          <span class="letter">1000</span>
          <span class="view">20000</span>
          <span class="like">300</span>
        </div>
      </div>
    </div>
    <div class="list-info">
      <div class="list-info-img">
        <img src="https://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://isujin.com/wp-content/uploads/2017/05/wallhaven-406587.png" alt="">
      </div>
      <div class="list-info-content">
        <span>五月 12, 2018</span>
        <h3><a>天下武功,唯快不破</a></h3>
        <p>曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。 一只蚂蚁第一次出门觅食，...</p>
        <div class="list-info-content-total">
          <span class="letter">1000</span>
          <span class="view">20000</span>
          <span class="like">300</span>
        </div>
      </div>
    </div>
    <div class="list-more">
      <span>加载更多</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  // methods
  toArticle ():void{
    this.$router.push('/aritcle')
  }
}
</script>

<style lang="less" scoped>
.list{
  .list-info{
    text-align: left;
    &:nth-child(even) {
      display: flex;
      flex-direction: row-reverse;
    }
    width: 1200px;
    margin: 80px auto 0;
    display: flex;
    justify-content: flex-start;
    .list-info-img{
      width: 680px;
      height: 440px;
      overflow: hidden;
      z-index: 10;
      cursor: pointer;
      .img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .list-info-content{
      width: 498px;
      height: 398px;
      border: 1px solid #eaeaea;
      margin: 20px 0 0 -20px;
      span{
        display: block;
        color: #999;
        font-size: 12px;
        margin: 80px 0 0 80px;
      }
      h3{
        font-size: 30px;
        line-height: 1.1;
        margin: 10px 100px 0 80px;
        a{
          font-weight: 300;
          color: #999;
          cursor: pointer;
          text-decoration: none;
          &:hover{
            color: #555;
            // text-decoration: none;
          }
        }
      }
      p{
        display: block;
        color: #999;
        margin: 10px 100px 0 80px;
        font-size: 14px;
        line-height: 1.8;
      }
      .list-info-content-total{
        margin: 80px 0 0 80px;
        color: #999;
        font-size: 13px;
        display: flex;
        justify-content: flex-start;
        span{
          display: block;
          margin: 0 10px 0 0;
        }
        .letter{
          &::before{
            content: "\e60c";
          }
        }
        .view{
          &::before{
            content: "\e60f";
          }
        }
        .like{
          margin-right: 0;
          &::before{
            content: "\e60a";
          }
        }
      }
    }
  }
  .list-more{
    margin: 50px auto 0;
    text-align: center;
    span{
      font-size: 14px;
      letter-spacing: 5px;
      color: #999;
      border: 1px solid #dadada;
      padding: 10px 40px;
      &:hover{
        cursor: pointer;
        color: #666;
      }
    }
  }
}
</style>
