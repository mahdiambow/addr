import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",

    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/address/new",
    name: "Address-New",

    component: () => import("../views/AddAddress.vue"),
  },

  {
    path: "/address/edit/:id",
    name: "Address-Edit",

    component: () => import("../views/AddAddress.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
