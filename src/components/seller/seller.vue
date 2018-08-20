<template>
  <div id="seller">
    <vue-scroll>
      <div class="seller-content">
        <div class="over-view">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc">
            <div class="imgclass"><img src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img
              src="../star/star24_on@2x.png"><img src="../star/star24_on@2x.png"><img src="../star/star24_off@2x.png">
            </div>
            <span class="text">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
            <span class="img"><img id="img1" src="../../../static/snowheart.png" alt=""></span>
            <span class="text1">请收藏本店!</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryPrice}}元</span>
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryTime}}分钟</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <v-split></v-split>
      <div class="bulletin">
        <h1 content="title">公告和内容</h1>
        <div class="content-wrapper">
          <p class="content1">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports1">
          <li class="support-item" v-for="(item,key) in seller.supports"><span class="item"><img
            src="../header/special_1@2x.png"></span><span
            class="item-text">{{item.description}}</span></li>
        </ul>
      </div>
      <v-split></v-split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <v-split></v-split>
      <div class="sellerinfo">
        <h1 class="title">商家信息</h1>
        <div class="sellerinfo-wrapper">
          <ul>
            <li class="info-item" v-for="info in seller.infos">{{info}}</li>
          </ul>
        </div>
      </div>
    </vue-scroll>
    <div><v-shopcar></v-shopcar></div>
  </div>

</template>

<script>
  import split from "../split.vue"
  import 'jquery'
  import shopcar from "../shopcar/shopcar.vue"

  export default {
    name: "seller",
    data() {
      return {}
    },
    props: {
      seller: {
        type: Object
      }
    },
    mounted() {
      $(function () {

        $("#img1").click(function () {
          if($(this).attr("src")==='../../../static/红心.png') {

            $(".text1").text("请收藏本店!");
            $(this).attr("src", "../../../static/snowheart.png")
          }
          else{
            $(".text1").text("已收藏!");
            $(this).attr("src", "../../../static/红心.png")
          }
        })
      })
    },
    components: {
      'v-split': split,
      'v-shopcar':shopcar
    },

  }
</script>

<style scoped>
  #seller {
    position: absolute;
    top: 174px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    left: 0;
    background-color: white;
  }

  .over-view {
    padding: 18px;
    margin-bottom: 8px;
    line-height: 14px;
    color: rgb(7, 17, 27);
    font-size: 14px;
  }

  .title {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    margin-bottom: 8px;
  }

  .desc {
    line-height: 18px;
    font-size: 0;
    /*border: 1px solid rgba(7, 17, 27, 0.1);*/
    padding-bottom: 18px;
  }

  v-star {
    display: none;
    /*margin-right: 8px;*/
    /*height: 18px;*/
    /*width: 16px;*/
    /*background-size: 16px 18px;*/
  }

  .imgclass img {
    margin-right: 5px;
  }

  .imgclass {
    display: inline-block;
    width: 130px;
    margin-top: 10px;
  }

  .text {
    margin-right: 12px;
    display: inline-block;
    vertical-align: top;
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 18px;
    margin-top: 10px;
  }

  .remark {
    display: flex;
    padding-top: 18px;
  }

  .block {
    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
  }

  h2 {
    margin-bottom: 4px;
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .content {
    line-height: 24px;
    font-size: 10px;
    color: rgb(7, 17, 27);
  }

  .stress {
    font-size: 24px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 24px;
  }

  .bulletin {
    padding: 18px 18px 0 18px;
  }

  .content-wrapper {
    padding: 0 12px 16px 12px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .content1 {
    line-height: 24px;
    font-size: 12px;
    color: rgb(240, 20, 20);
    font-weight: 200;
    margin-top: 8px;
  }

  .support-item {
    padding: 16px 12px;
    font-size: 0;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    vertical-align: top;
  }

  .item-text {
    font-size: 12px;
    line-height: 16px;
    color: rgb(7, 17, 27);
    font-weight: 200;
  }

  vue-scroll {
    background-color: white;
  }

  .pics {
    padding: 18px;
  }

  .pic-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .pic-list {
    font-size: 0;
    overflow: hidden;
  }

  .pic-item {
    display: inline-block;
    margin-right: 6px;
    width: 120px;
    height: 90px;
    overflow: hidden;
  }

  .sellerinfo-wrapper {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  .info-item {
    width: 80%;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    font-size: 12px;
    font-weight: 200;
    line-height: 16px;
    padding: 16px 12px;
  }

  .sellerinfo {
    font-size: 12px;
    padding: 18px 18px 0 18px;
    color: rgb(7, 17, 27);
  }
  .img img{
    width: 25px;
    height: 25px;
    background-size: 25px 25px;
    margin-left: 10px;
  }
  .text1 {
    margin-right: 12px;
    display: inline-block;
    vertical-align: top;
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 18px;
    margin-top: 10px;
    margin-left: 10px;
  }

</style>
