<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <p>hello, {{ name }}</p>
    <p v-text="name + age"></p>
    <p v-if="age > 18" class="vue-color">your are upper than 18</p>
    <div v-for="(name, index) in names" v-bind:key="index">
      <p>Name: {{ name }}</p>
      <p>Your name is beautiful.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      name: "rasel",
      age: 26,
      names: ['rasel','nahid','roket']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.vue-color {
  color: #42b983;
}
</style>
