import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from "vue-resource"
Vue.use(VueRouter);
Vue.use(VueResource);
//
// // 3、配置路由
// // 1、创建组件 引入组件
import goods from "../components/goods/goods"
import ratings from "../components/ratings/ratings"
import seller from "../components/seller/seller"
//
//
// // 2、定义路由  （建议复制s）
//
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path:'/seller',component:seller},
//   { path: '*', redirect: '/goods' }
//
//   /*默认跳转路由*/
];
//
// // 3、实例化VueRouter
//
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});

export default router;
