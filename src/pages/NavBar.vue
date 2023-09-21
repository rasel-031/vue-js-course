<template>
  <div class="bg-slate-200 flex items-center px-10 py-4 justify-between">
    <div class="w-10 h-auto">
        <img v-bind:src = "logoURL" alt="logo image" />
    </div>
    <div>
        <p class="text-xl">{{ header_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return{
            logoURL: require("@/assets/logo.svg"),
            header_name: 'Vanila Builder'
        }
    }
}
</script>

<style>

</style>