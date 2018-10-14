<template>

  <div id="app">
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-brand href="#"> <font-awesome-icon icon="volume-up" /> </b-navbar-brand>
  </b-navbar>


    <router-view></router-view>

    <div class="bottom-bar">
      <b-row>
        <b-col cols="3">
        <router-link to="/morse">Home</router-link>
        </b-col>
        <b-col cols="3">
          <router-link to="/translate">Translate</router-link>
        </b-col>
        <b-col cols="3">
          <router-link to="/quiz">Quiz</router-link>
        </b-col>
        <b-col cols="3">
          <router-link to="/about">About</router-link>
        </b-col>
    </b-row> 
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Home from "./pages/Home";
import MorseDetails from "./pages/MorseDetail";
import Translate from "@/pages/Translate.vue";
import Quiz from "@/pages/Quiz.vue";
import About from "@/pages/About";

export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    MorseDetails,
    Translate,
    Quiz,
    About
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bottom-bar{
  width: 100%; height: 50px; background-color: lightgrey; bottom: 0; position: fixed;
}
</style>
