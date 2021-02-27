import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Doscg from "../views/Doscg.vue";
import Bcss from "../views/Bootstrap_css.vue";
import Forgot from "../views/Forgot.vue";
import Compon from "../views/Compon.vue";
import Apis from "../views/Apis.vue";
import Resume from "../views/Resume.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/doscg",
    name: "doscg",
    component: Doscg
  },
  {
    path: "/bcss",
    name: "bcss",
    component: Bcss
  },
  {
    path: "/forget",
    name: "forget",
    component: Forgot
  },
  {
    path: "/compon",
    name: "compon",
    component: Compon
  },
  {
    path: "/apis",
    name: "apis",
    component: Apis
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
