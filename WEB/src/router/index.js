import Vue from "vue";
import VueRouter from "vue-router";
import LoginLayout from "../layouts/login";
import DefaultLayout from "../layouts/default";

import Login from "../pages/login.vue";
import Dashboard from "../pages/admin/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      layout: LoginLayout, // we add new meta layout here to use it later
    },
    component: Login,
  },
  {
    path: "/admin/dashboard",
    name: "dashboard",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
