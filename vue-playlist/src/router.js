import VueRouter from 'vue-router';
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import Test from "./components/Test";
import AddBlog from './components/addBlog';
import UpdateBlog from './components/updateBlog';
import ListBlog from './components/listBlog';
import Add from './components/add';



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

export default router
