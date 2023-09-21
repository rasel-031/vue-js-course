<template>
  <div>
    <NavBar/>
    <div class="w-[100vw] h-2 bg-red-200"></div>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from '../pages/HomePage.vue';
import NavBar from '../pages/NavBar.vue';

export default {
    name: "IceCream",
    components:{
        'NavBar': NavBar,
        'HomePage': HomePage
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>