<template>
  <div class="flex flex-col justify-end items-center">
    <div class="h-10 w-[150px] rounded-t-[100%] rounded-b-[220px]  z-20 absolute" v-bind:class="getClass"></div>
    <div class="h-16 w-[120px] rounded-t-[100%] flex justify-center items-center " v-bind:class="getClass">
        <div class="h-10 w-[100px] rounded-t-[100%] z-0 rotate-180 mt-12 relative" v-bind:class="getClass"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "IceCreamFlavour",
    props:{
        flavour: String
    },
    computed:{
        getClass(){
            switch (this.flavour) {
                case 'Orange':
                    return 'bg-orange'; 
                case 'Chocolate':
                    return 'bg-chocolate';
                case 'Vanilla':
                    return 'bg-vanilla';
                case 'Lemon':
                    return 'bg-lemon';
                case 'Strawberry':
                    return 'bg-strawberry';
                default:
                    return 'hidden';
            }
        }
    }
}
</script>

<style>

</style>