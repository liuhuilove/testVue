<template>
  <div id="app">
      <hello-world></hello-world>
  </div>
</template>

<script>

  import HelloWorld from "./components/HelloWorld";
  export default {
    name: 'app',
    components: {
       HelloWorld
    },
    data: function (){
      return {
        active:true
      }
    }
  }
</script>

<style>

</style>
