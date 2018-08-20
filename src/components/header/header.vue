<template>
  <div id="v-header">
    <div class="header">
      <div class="content-wrapper">
        <div class="header-img"><img width="64" height="64" :src="seller.avatar"></div>
        <div class="header-content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="supports" v-if="seller.supports"><span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span></div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="showdetail()"><span class="count">
{{seller.supports.length}}个<b class="headicon">></b>
        </span></div>
      </div>
      <div class="lead-wrapper" @click="showdetail()">
        <span class="lead-title"></span><span class="lead-text">{{seller.bulletin}}</span><b class="headicon2">></b>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <transition name="fade"><div class="detail" v-show="detailshow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <div class="main-title">{{seller.name}}</div>
            <v-star></v-star>
          </div>
          <div class="detail-title">
            <div class="line"></div>
            <div class="detail-text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports1">
            <li class="support-item" v-for="(item,key) in seller.supports"><span class="item"><img  src="./special_1@2x.png" ></span><span
              class="item-text">{{item.description}}</span></li>
          </ul>
          <div class="detail-title">
            <div class="line"></div>
            <div class="detail-text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="atitle"><p>{{seller.bulletin}}</p></div>
        </div>
        <div class="detail-closed"><span class="detail-closed2" @click="detailshow2()">x</span></div>
      </div></transition>
    </div>
  </div>
</template>

<script>
  import star from "../star/star.vue"

  export default {
    name: "v-header",
    props: {
      seller: {
        type: Object,
      }
    },
    components: {
      'v-star': star
    },

    data() {
      return {
        detailshow: false,
        imgMap:['decrease_1@2x.png','./discount_1@2x.png','./guarantee_1@2x.png','./incoice_1@2x.png','./guarantee_1@2x.png']
      }
    },
    create() {
this.classMap=['decrease','discount','guarantee','invoice','special'];
    },
    methods: {
      showdetail() {
        this.detailshow = true;
      },
      detailshow2() {
        this.detailshow = false;
      },

    }
  }
</script>

<style scoped>

  /*渐变效果，取自csdn*/
  .fade-enter-active{
    animation:Ado .5s ease-in;
  }
  @keyframes Ado{
    0%{transform:scale(0.2,0.2);}
    60%{transform:scale(0.5,0.5);}
    80%{transform:scale(0.8,0.8);}
    100%{transform:scale(1,1);}
  }
  .fade-leave-active{
    animation:Bdo .5s ease-in;
  }
  @keyframes Bdo{
    0%{transform:scale(1,1);}
    60%{transform:scale(1.5,1.5);}
    80%{transform:scale(1,1);}
    100%{transform:scale(0.5,0.5);}

  }

  .header {
    overflow: hidden;
    color: #ffffff;
    position: relative;
    background: rgba(7, 17, 27, 0.2);
  }

  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }

  .header-img {
    display: inline-block;
    vertical-align: top;
  }

  .header-content {
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
  }

  .title {
    margin: 2px 0 8px 0;
  }

  .brand {
    width: 30px;
    height: 18px;
    display: inline-block;
    background-image: url("../header/brand@2x.png");
    background-size: 30px 18px;
    vertical-align: top;
  }

  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }

  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  img {
    border-right: 2px;
  }

  .supports {

  }

  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px;
    background-repeat: no-repeat;
    background-image: url("../header/decrease_1@3x.png");
    vertical-align: top;
  }

  .text {
    font-size: 10px;
    line-height: 12px;
    vertical-align: top;
  }

  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    height: 24px;
    padding: 0 8px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .count {
    font-size: 10px;
    vertical-align: top;
  }

  .headicon {
    line-height: 24px;
    font-size: 10px;
    margin-left: 2px;
  }

  .lead-wrapper {
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    background: rgba(7, 17, 27, 0.2);
  }

  .lead-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    background: url("../header/bulletin@2x.png") no-repeat;
    background-size: 22px 12px;
    vertical-align: top;
    margin-top: 8px;
  }

  .lead-text {
    font-size: 10px;
    font-weight: 200;
    margin: 0 4px;
    vertical-align: top;
  }

  .headicon2 {
    position: absolute;
    font-size: 10px;
    right: 12px;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }

  .detail {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }

  .clearfix {
    display: inline-block;
  }

  .clearfix:after {
    display: block;
    content: '';
    line-height: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .detail-wrapper {
    min-height: 100%;
    width: 100%;
  }

  .detail-main {
    margin-top: 64px;
    padding-bottom: 28px;

  }

  .detail-closed {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }

  .main-title {
    font-size: 16px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 16px;
    margin-top: 64px;
    text-align: center;
  }

  .detail-title {
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
  }

  .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .detail-text {
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 28px;
    padding: 0 12px;
  }

  .supports1 {
    width: 80%;
    margin: 0 auto;
  }

  .support-item {
    padding: 0 12px;
    margin-bottom: 12px;
  }

  .support-item:last-child {
    margin-bottom: 0;
  }

  .item {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    vertical-align: top;
    display: inline-block;
    background-repeat: no-repeat;
    padding: 0 12px;
    margin-bottom: 6px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
  .item-text{
    margin-left: 12px;
    /*vertical-align: top;*/
    font-size: 12px;
    font-weight: 200;
    color: rgb(255,255,255);
    line-height: 12px;
  }
  .atitle{
    width: 80%;
    margin: 0 auto;
  }
  p{
    font-size: 12px;
    font-weight: 200;
    color: rgb(255,255,255);
    line-height: 24px;
    margin-top: 24px;
    padding: 0 12px;
  }
</style>
