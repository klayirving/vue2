<template>
  <div id="goods">
    <div class="menu" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span v-show="item.type>0" class="icon"></span><span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon"><img width="57px" :src="food.icon"></div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                  <span class="img2">
                  <img src="../../../static/加号.png" alt="">
                </span>
                </div>
                <div class="price"></div>
                <span class="now">￥{{food.price}}份</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>

              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <v-shopcar ></v-shopcar>
  </div>
</template>

<script>
  import axios from "axios"
  import BScroll from "better-scroll"
  import shopcar from "../shopcar/shopcar.vue"

  export default {
    name: "goods",
    data() {
      return {
        goods: [],
        listHeight:[],
      }
    },
    components: {
      'v-shopcar': shopcar
    },

    methods: {
      getData1() {
        //请求数据

        axios.get('/api/goods').then((response) => {
          this.goods = response.data.data;
          this.$nextTick(() => {
            this._initScroll()
          })
          // console.log(this.goods);
        }, function (err) {
          console.log(err);
        })
      },
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper), {};
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper), {}
      },
    },
    mounted() {
      this.getData1()
    }
  }
</script>

<style scoped>
  #goods {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    display: flex;
  }

  .menu {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }

  .foods {
    flex: 1;
    background: #f3f5f7;
  }

  .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    line-height: 14px;
    padding: 0 12px;
  }
  .menu-item:first-child{
    background-color: snow;
  }

  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px;
    background-repeat: no-repeat;
    background-image: url("../header/special_2@3x.png");
    vertical-align: bottom;

  }

  .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;

    /*border:1px rgba(7,17,27,0.2)  solid;*/
  }

  .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    background-color: snow;
  }

  .food-item:last-child {
    border: none;
    margin-bottom: 0;
  }

  /*.img2{*/
  /*width: 70px;*/
  /*height: 65px;*/
  /*}*/
  .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }

  .content {
    flex: 1;
  }

  .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }

  .desc {
    margin-bottom: 8px;
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .extra {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .count {
    margin-right: 12px;
  }

  .price {
    font-weight: 700;
    line-height: 24px;
  }

  .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
  }

  .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .img2{
   position: absolute;
    vertical-align: top;
    right: 30px;

  }
  .img2 img{
    display: inline;
    width: 20px;
    height: 20px;
    vertical-align: top;
    background-size: 20px 20px;
  }

</style>
