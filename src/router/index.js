import { createRouter, createWebHistory } from "vue-router";
import A from "../views/contents/A.vue";

// 取名为routers为什么会报Cannot read property 'forEach' of undefined错误

const routes = [
  {
    path: "/",
    redirect: "A", //设置默认路由
  },
  {
    path: "/A",
    name: "A",
    component: A,
  },
  {
    path: "/B",
    name: "B",
    component: () => import("../views/contents/B.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
