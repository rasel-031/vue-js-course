<template>
  <div class="bg-white shadow-xl flex items-center p-4 justify-between fixed z-50 w-full mobile:px-10">
    <div class="w-12 h-auto">
        <img v-bind:src = "logoURL" alt="logo image" />
    </div>
    <div>
        <p class="text-sm text-strawberry flex items-center md-mobile:text-xl">{{ header_name.toUpperCase() }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return{
            logoURL: require("@/assets/logo.svg"),
            header_name: 'Ice Cream Builder'
        }
    }
}
</script>

<style>

</style>