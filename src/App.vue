<template>
  <div id="app">
    <v-header  :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from "./components/header/header"

  const ERR_OK = 0;//常量定义
  export default {
    name: 'App',
    data() {
      return {
        seller: '',
      }
    },
    components: {
      'v-header': header,
    },
    methods: {
      getData(){
        //请求数据
        this.$http.get('/api/seller').then((response)=>{
        // axios.get('/api/seller').then((response)=>{
          this.response=response.body;
          // console.log(response);
            this.seller=response.body.data;
            // console.log(this.seller);
        },function(err){
          console.log(err);
        })
      }
    },
    mounted()
    {
      this.getData();
    }

  }
</script>

<style scoped>
  .tab {
    display: flex;
    line-height: 40px;
    width: 100%;
    height: 40px;
    border-bottom: 2px solid rgba(7, 17, 27, 0.1);
    background-color: white;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .tab-item a:hover {
    color: rgb(240, 20, 20);
  }

  .tab-item a:active {
    color: rgb(240, 20, 20);
  }
</style>
