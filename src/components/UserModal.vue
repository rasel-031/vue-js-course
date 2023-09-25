<template>
  <div class="w-full h-full fixed z-50 flex justify-center items-start">
    <div class="w-[265px] mobile:w-[350px] bg-modal rounded-[10px] py-3 px-5 transition-all duration-500 ease-in-out transform" v-bind:class = "showTranslate ? 'translate-y-32 opacity-100' : '-translate-y-full opacity-0'">
        <div class="text-white flex justify-between pb-2">
            <p class="font-bold mobile:text-lg">Sign in to our platform</p>
            <button @click="callParentMethod" class="hover:bg-gray px-2 rounded">X</button>
        </div>
        <hr>
        <div class="text-white py-3">
            <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-modal-field border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-modal-field border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-light-blue hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-md">
                        Not registered? <a href="#" class="text-light-blue hover:underline dark:text-blue-500">Create account</a>
                    </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "UserModal",
    props:{
        showTranslate: Boolean,
    },
    data(){
        return{
            showOn: true
        }
    },
    methods:{
        callParentMethod(){
            this.$emit('child-event');
        }
    }
}
</script>

<style>

</style>