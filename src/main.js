// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import MorseDetail from "@/pages/MorseDetail.vue";
import Home from "@/pages/Home.vue";
import Translate from "@/pages/Translate.vue";
import Quiz from "@/pages/Quiz.vue";
import About from "@/pages/About";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faVolumeUp, faSun } from "@fortawesome/free-solid-svg-icons";

library.add(faVolumeUp, faSun);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/morse",
    name: "Morse Detail",
    component: MorseDetail
  },
  {
    path: "/translate",
    name: "Translate Morse",
    component: Translate
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
  mode: "history"
});

Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  router,
  template: "<App/>"
});
