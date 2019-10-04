// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';
import axios from 'axios';
import qs from 'qs.js';
import Moment from 'moment';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);
Vue.use(qs);
Vue.prototype.axios = axios;
axios.defaults.baseURL = './api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 绑定 moment 进行时间格式化
Vue.prototype.moment = Moment;
//Vue.http.options.emulateJSON = true;



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
