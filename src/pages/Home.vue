<template>
  <div>
  {{msg}}
    <router-link to="/morse">navigate</router-link>
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
</style>
