<template>
  <div>
    <div v-bind:class="showModal ? 'visible': 'invisible'">
      <UserModal @child-event = "callModal" v-bind:showTranslate ="isTranslate"  />
    </div>
  <div class="pt-32 flex-col items-center justify-around mobile:flex mobile:items-center tablet:flex-row tablet:py-44">
    <div class="flex flex-col items-center">
      <div class="flex justify-center">
        <img v-if = "isVisible" v-bind:src="questionURL" alt="Question image" width="50" height="50"/>
        <img v-else v-bind:src="cherryURL" alt="Cherry image" width="50" height="50"/>
      </div>

      <!-- add ice-cream flavour components -->
      <div v-for = "(item, index) in getFlavour.slice().reverse()" v-bind:key="index">
         <IceCreamFlavour v-bind:flavour = "item.name"/>
      </div>
      <!-- add ice-cream flavour components -->

      <div class="w-0 h-0 z-0 border-solid border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[150px] border-t-[#d89548]	border-b-[2px] border-b-black rounded"></div>
    </div>
    <div class=" flex flex-col gap-10 justify-around p-8 mobile:border-solid mobile:w-[360px]">
      <div>
        <p class="font-bold text-sm mobile:text-base">Build your favorite ice-cream!!! (<span class="text-red">{{ getFlavour.length }}</span>)</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between" v-for="item in variants" v-bind:key="item.id">
          <div class="flex justify-between my-2 w-full text-sm mobile:text-base">
            <p>{{ item.name }}</p>
            <div class="flex gap-4">
              <button class="w-10 h-auto bg-green text-white border-none rounded" @click="addFlavour(item.id)">+</button>
              <button class="w-10 h-auto bg-red text-white border-none rounded" @click="removeFlavour(item.id)">-</button>
            </div>
          </div>
        </div>
        <hr>
        <div class="flex justify-between font-bold text-sm mobile:text-base">
          <p>Total Price</p>
          <p>{{ price }}.00 Tk</p>
        </div>
      </div>
      <div>
          <button
            type="button"
            v-bind:class="cursorDisable"
            class="w-full inline-block rounded bg-green py-2  px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] text-sm mobile:text-base"
            @click="callModal"
            v-bind:disabled = "buttonDisable" 
          >Place Order</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IceCreamFlavour from '../components/IceCreamFlavour.vue';
import UserModal from '@/components/UserModal.vue';

export default {
    name:"HomePage",
    components:{
      "IceCreamFlavour": IceCreamFlavour,
      "UserModal": UserModal
    },
    data(){
      return{
        variants:[
          {id:1, name:"Vanilla", price:100},
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
        showModal: false,
        cursorDisable: "cursor-not-allowed",
        buttonDisable: true,
        isTranslate: false
      }
    },
    methods:{
       addFlavour(flavourId){
        this.getFlavour.push(this.variants.find(item => item.id === flavourId));
        //add price
        this.price = this.getFlavour.reduce((accumulator, currentObj) => {return accumulator + currentObj.price}, 0);
        this.isVisible = false;
        this.cursorDisable = "cursor-pointer hover:bg-strawberry";
        this.buttonDisable = false;
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
          this.cursorDisable = "cursor-not-allowed";
          this.buttonDisable = true;
        }
       },
       callModal(){
        this.showModal = !this.showModal;
        this.isTranslate = !this.isTranslate;
       }
    }

}
</script>

<style>

</style>