// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';
//import Moment from 'moment';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);
// 绑定 moment 进行时间格式化
//Vue.prototype.$moment = Moment;

//设置跨域请求
//Vue.http.options.root = 'localhost:8080/';


/* eslint-disable no-new */

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
