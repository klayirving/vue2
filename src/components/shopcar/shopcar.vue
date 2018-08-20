<template>
  <div id="shopcar">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"><img src="../../../src/assets/购物车空.png"></span>
          </div>
          <div class="num"></div>
        </div>
        <div class="price">￥{{0}}</div>
        <div class="desc">另需要配送费￥{{shopcar.deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay">
          ￥{{shopcar.minPrice}}起送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'




export default {
    name: "shopcar",
    data() {
      return {
        shopcar: [],
      }
    },
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [];
        }
      },
      seller: {
        type: Object
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    methods: {
      getData2() {
        //请求数据

        axios.get('/api/seller').then((response) => {
          this.shopcar = response.data.data;

        }, function (err) {
          console.log(err);
        })
      }
    },
    mounted() {
      this.getData2();
    },

  }
</script>

<style scoped>
  #shopcar {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 48px;
  }

  .content {
    display: flex;
    background-color: #141d27;
    font-size: 0;
  }

  .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #2d343c;
    text-align: center;
  }

  .content-left {
    flex: 1;
  }

  .content-right {
    flex: 0 0 105px;
    width: 105px;
  }

  .logo-wrapper {
    display: inline-block;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
    background: #141d27;
  }

  .price {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin-top: 12px;
    box-sizing: border-box;
    padding-right: 12px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  .desc {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin: 12px 0 0 12px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
  }

  .icon-shopping_cart {
    font-size: 24px;
    line-height: 44px;
    color: #80858a;
  }

  img {
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }

  .pay {
    font-size: 12px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    background: #2b333b;
  }

  .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #ffffff
  }
</style>
