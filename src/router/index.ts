import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HuntingPage from "../views/HuntingPage.vue";
import FishingPage from "../views/FishingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/hunting",
    name: "Hunting",
    component: HuntingPage,
  },
  {
    path: "/fishing",
    name: "Fishing",
    component: FishingPage,
  },
  {
    path: "/",
    redirect: "/hunting", // Можно поставить редирект на страницу по умолчанию
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
