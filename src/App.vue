<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <IceCream />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import IceCream from './components/IceCream.vue';

export default {
  name: 'App',
  components: {
    'IceCream': IceCream
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
