<template>
  <div class="py-44 flex items-center justify-around">
    <div>
      <div class="flex justify-center">
        <img v-if = "isVisible" v-bind:src="questionURL" alt="Question image" width="50" height="50"/>
        <img v-else v-bind:src="cherryURL" alt="Cherry image" width="50" height="50"/>
      </div>

      <!-- add ice-cream flavour components -->
      <div v-for = "(item, index) in getFlavour.slice().reverse()" v-bind:key="index">
         <IceCreamFlavour v-bind:flavour = "item.name"/>
      </div>
      <!-- add ice-cream flavour components -->

      <div class="w-0 h-0 z-0 pt- border-solid border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[150px] border-t-[#d89548]	border-b-[2px] border-b-black rounded"></div>
    </div>
    <div class=" flex flex-col gap-10 justify-around p-8 border">
      <div>
        <p class="font-bold">Build your favorite ice-cream!!! (<span class="text-red">{{ getFlavour.length }}</span>)</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between" v-for="item in variants" v-bind:key="item.id">
          <div class="flex justify-between my-2 w-full">
            <p>{{ item.name }}</p>
            <div class="flex gap-4">
              <button class="w-10 h-auto bg-green text-white border-none rounded" @click="addFlavour(item.id)">+</button>
              <button class="w-10 h-auto bg-red text-white border-none rounded" @click="removeFlavour(item.id)">-</button>
            </div>
          </div>
        </div>
        <hr>
        <div class="flex justify-between font-bold">
          <p>Total Price</p>
          <p>{{ price }}.00 Tk</p>
        </div>
      </div>
      <div>
          <button class="w-full text-white bg-green py-2">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import IceCreamFlavour from '../components/IceCreamFlavour.vue';

export default {
    name:"HomePage",
    components:{
      "IceCreamFlavour": IceCreamFlavour
    },
    data(){
      return{
        variants:[
          {id:1, name:"Vanila", price:100},
          {id:2, name:"Chocolate", price:120},
          {id:3, name:"Strawberry", price:90},
          {id:4, name:"Orange", price:70},
          {id:5, name:"Lemon", price:50},
        ],
        getFlavour: [],
        isVisible: true,
        price: 0,
        cherryURL: require("@/assets/cherry.png"),
        questionURL: require("@/assets/question.png"),
      }
    },
    methods:{
       addFlavour(flavourId){
        this.getFlavour.push(this.variants.find(item => item.id === flavourId));
        //add price
        this.price = this.getFlavour.reduce((accumulator, currentObj) => {return accumulator + currentObj.price}, 0);
        this.isVisible = false;
       },
       removeFlavour(flavourId){
        const index = this.getFlavour.findIndex(item => item.id === flavourId);
        if(index !== -1){
          this.getFlavour.splice(index, 1);
          //subtract price
          this.price = this.getFlavour.reduce((accumulator, currentObj) => {return accumulator + currentObj.price}, 0);
        }
        //question mark visible
        if(this.getFlavour.length === 0){
          this.isVisible = true;
        }
       }
    }

}
</script>

<style>

</style>