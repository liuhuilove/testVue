// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import router from './router.js';
//import Moment from 'moment';
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import Test from "./components/Test";
import AddBlog from './components/addBlog';
import UpdateBlog from './components/updateBlog';
import ListBlog from './components/listBlog';
import Add from './components/add';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);
// 绑定 moment 进行时间格式化
//Vue.prototype.$moment = Moment;
//Vue.http.options.root = 'localhost:8080/';


/* eslint-disable no-new */

//配置路由
const router  = new VueRouter({
  routes:[
    {path : '/home',component : Home},
    {path : '/helloword',component : HelloWorld},
    {path : '/test', component : Test},
    {path : '/addBlog', component : AddBlog},
    {path : '/list', component : ListBlog},
    {path : '/update', component : UpdateBlog},
    {path : '/add', component : Add},
  ]
})

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
