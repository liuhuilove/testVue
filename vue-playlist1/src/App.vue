
<template>
  <div id="app">
    <!--<userList></userList>-->
    <!--<todos-list></todos-list>-->
    <router-link to="/userList">Users</router-link>
    <router-link to="/todosList">Todos</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import userList from './components/user/UserList';
  import todosList from './components/todos/TodosList';
  export default {
    components: {
      userList,
      todosList
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
