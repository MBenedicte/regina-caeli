import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Facebook from "../components/Facebook/Facebook.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/facebook", name: "Facebook", component: Facebook },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
