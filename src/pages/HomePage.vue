<template>
  <div class="py-40 flex items-center justify-around">
    <div class="w-0 h-0 border-solid border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[150px] border-t-[#d89548]	rounded-xl"></div>
    <div class="w-[250px] flex flex-col gap-4">
      <div>
        <p>Build your favorite ice-cream (2)</p>
      </div>
      <div>
        <div class="flex justify-between" v-for="item in variants" v-bind:key="item.id">
          <div class="flex justify-between my-2 w-full">
            <p>{{ item.name }}</p>
            <div class="flex gap-2">
              <button class="w-8 h-auto bg-green-600 text-white border-none rounded">+</button>
              <button class="w-8 h-auto bg-red-600 text-white border-none rounded">-</button>
            </div>
          </div>
        </div>
        <hr class="h-2">
        <div class="flex justify-between">
          <p>Total Price</p>
          <p>330.00 Tk</p>
        </div>
      </div>
      <div>
          <button class="w-full text-white bg-blue-600 py-2">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomePage",
    data(){
      return{
        variants:[
          {id:1, name:"Vanila", price:100},
          {id:2, name:"Chocolate", price:120},
          {id:3, name:"Strawberry", price:90},
          {id:4, name:"Orange", price:70},
          {id:5, name:"Apple", price:50},
        ]
      }
    }
}
</script>

<style>

</style>