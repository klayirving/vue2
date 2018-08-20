<template>
  <div id="ratings" class="ratings">
    <vue-scroll>
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">服务态度：
            <span class="img1"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img
              src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_off@2x.png">
          </span>
            <span class="score1">{{seller.foodScore}}</span></div>

          <div class="score-wrapper">美食评分：
            <span class="img1"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img
              src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_off@2x.png">
          </span>
            <span class="score2">{{seller.serviceScore}}</span></div>

          <div class="score-wrapper1">送达时间：<span class="span2">{{seller.deliveryTime}}分钟</span>
          </div>

        </div>
      </div>
      <v-split></v-split>
      <div class="ratings-center">
        <div class="button">
          <button>全部<span class="span1">56</span></button>
          <button>满意<span class="span1">21</span></button>
          <button>不满意<span class="span1">3</span></button>
        </div>
        <div class="check">
          <input type="checkbox" class="checked"@change="changeList()"><span class="check-title">只看有内容的评价</span>
        </div>

        <div class="rating-wrapper">
          <ul><li v-for="ratings in ratings" class="rating-item">
            <div class="avatar">
              <img :src="ratings.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{ratings.username}}</h1>
              <div class="star-wrapper">
               <span class="star"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_off@2x.png"></span>
                <span class="delivery" v-show="a">{{ratings.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{ratings.text}}</p>
              <div class="recommend"></div>
            </div>
          </li></ul>
        </div>
      </div>

      <v-shopcar></v-shopcar>
    </div>
    </vue-scroll>
  </div>
</template>

<script>
  import split from "../split"
  import axios from "axios"
  import shopcar from "../shopcar/shopcar"





  export default {
    name: "ratings",
    data() {
      return {
        ratings:[],
        a:false
      }
    },
    components: {
      'v-split': split,
      'v-shopcar': shopcar
    },
    props: {
      seller: {
        seller: ''
      }
    },
    methods: {
      getData3() {
        //请求数据

        axios.get('/api/ratings').then((response) => {
          this.ratings=response.data.data
        }, function (err) {
          console.log(err);
        })

      },



    },
    mounted(){
      this.getData3();


    }
  }
</script>

<style scoped>

  .ratings {
    position: absolute;
    top: 174px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    left: 0;
  }

  .overview {
    display: flex;
    padding: 18px 0;
    background-color: snow;
  }

  .overview-left {
    flex: 0 0 137px;
    width: 137px;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;
  }

  .overview-right {
    flex: 1;
    margin-right: 28px;
  }

  .score {
    margin-top: 18px;
    font-size: 24px;
    color: rgb(255, 153, 0);
    line-height: 28px;
    margin-bottom: 6px;
  }

  .title {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .rank {
    font-size: 10px;
    color: rgb(7, 17, 27);
    line-height: 10px;
    margin-bottom: 30px;
  }

  .img1 {
    margin-right: 12px;
  }

  img {
    display: inline-block;
    margin: 0 1px;
    vertical-align: top;
  }

  .score1 {
    position: absolute;
    right: 10px;
    font-size: 12px;
    display: inline-block;
    color: rgb(255, 153, 0);
    line-height: 18px;
    margin-bottom: 6px;

  }

  .score2 {
    position: absolute;
    right: 10px;
    font-size: 12px;
    display: inline-block;
    color: rgb(255, 153, 0);
    line-height: 18px;
    margin-bottom: 6px;
  }

  .score-wrapper {
    position: relative;
    line-height: 18px;
    margin-bottom: 12px;
    width: 210px;
    font-size: 12px;
    margin-top: 9px;
    color: rgb(7, 17, 27);
    margin-left: 12px;
  }

  .score-wrapper1 {
    line-height: 18px;
    margin-bottom: 12px;
    width: 160px;
    font-size: 12px;
    color: rgb(7, 17, 27);
    margin-left: 12px;
  }

  .span2 {
    font-size: 18px;
    color: rgb(147, 153, 159);
    line-height: 24px;
  }

  .button {
      margin-left: 18px;
  }

  button {
    margin-right: 10px;
    height: 36px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    border-right: none;
    border-radius: 2px;
    color: rgba(77, 85, 93, 0.6);
  }

  button:first-child {
    font-size: 12px;
    color: rgb(0, 160, 220);
  }

  button:last-child {
    margin-right: 0;
  }

  .check {
    margin: 12px 36px;
    width: 100%;
  }

  .check-title {
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 24px;
    margin-left: 4px;

  }

  .checked {
    font-size: 24px;
    color: rgb(147, 153, 159);
    line-height: 24px;
    border-radius: 50%;
  }
  .span1{
    display: inline-block;
    font-size: 4px;
    line-height: 8px;
  }
  .avatar{
    margin: 18px 12px 0 18px;
  }
   .avatar img{
     width: 28px;
     height: 28px;
     background-size:28px 28px  ;
     border-radius: 50%;
   }
  .ratings-center{
    background-color: snow;
  }
  .rating-item{
    position: relative;
  }
  .name{
    position: absolute;
    left: 58px;
    top: 0;
    font-size: 10px;
    color: rgb(7,17,27);
    line-height: 24px;
    margin-bottom: 4px;
  }
  .star{
    position: absolute;
    left: 120px;
    top: 0;
    margin-bottom: 6px;
  }
  .text{
  width: 100%;
font-size: 12px;
    line-height: 18px;
    color: rgb(7,17,27);
  }
</style>
