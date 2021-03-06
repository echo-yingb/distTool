import Vue from "vue";
import VueRouter from "vue-router";

import { isDev } from "@/utils/base";

import HomePage from "../views/home-page";

Vue.use(VueRouter);

// fix vue-router 3.1 push 相同路由报错
// https://github.com/vuejs/vue-router/issues/2881
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage
  }
];

if (isDev()) {
  routes.push(
    {
      path: "/comp",
      name: "comp",
      component: () => import("@/components/demo/index.vue")
    },
    {
      path: "/svg",
      name: "svg",
      component: () => import("@/views/svg-viewer.vue")
    }
  );
}

const router = new VueRouter({
  routes
});

export default router;
