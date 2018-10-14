import Morse from "@/pages/MorseDetail.vue";
import Home from "@/pages/Home.vue";
import Translate from "@/pages/Translate";
import About from "@/pages/About";

const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "morse",
        name: "Morse Detail",
        component: Morse
      },
      {
        path: "translate",
        name: "Translate Morse",
        component: Translate
      },
      {
        path: "about",
        name: "About",
        component: About
      }
    ]
  }
];

export default routes;
