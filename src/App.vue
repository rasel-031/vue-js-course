<template>
    <div>
      <NavBar/>
      <HomePage/>
      <hr>
      <FooterPage/>
    </div>
</template>

<script>
import NavBar from './pages/NavBar.vue';
import HomePage from './pages/HomePage.vue';
import FooterPage from './pages/FooterPage.vue';

export default {
  name: 'App',
  components: {
    'NavBar': NavBar,
    'HomePage': HomePage,
    'FooterPage': FooterPage
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
