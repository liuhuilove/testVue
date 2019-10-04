import VueRouter from 'vue-router';
import UserList from './components/user/UserList';
import TodosList from './components/todos/TodosList';
import Index from './components/views/aa';

//配置路由
const router  = new VueRouter({
  routes:[
    {path : '/userList',component : UserList},
    {path : '/todosList',component : TodosList},
    {path : '/index',component : Index},
  ]
});

export default router
