import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "首页 - 西兴里科技" },
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("@/views/Services.vue"),
    meta: { title: "服务领域 - 西兴里科技" },
  },
  {
    path: "/cases",
    name: "Cases",
    component: () => import("@/views/Cases.vue"),
    meta: { title: "成功案例 - 西兴里科技" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: { title: "关于我们 - 西兴里科技" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: { title: "联系我们 - 西兴里科技" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || "西兴里科技";
  next();
});

export default router;
