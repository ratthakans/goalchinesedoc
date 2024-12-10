import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import auth from "@websanova/vue-auth/src/v2.js";
import driverAuthBearer from "@websanova/vue-auth/src/drivers/auth/bearer.js";
import driverHttpAxios from "@websanova/vue-auth/src/drivers/http/axios.1.x.js";
// import driverRouterVueRouter from "@websanova/vue-auth/src/drivers/router/vue-router.2.x.js";
import customRouterDriver from "./router/customRouterDriver";

// import driverRouterVueRouter from "@websanova/vue-auth/src/drivers/router/vue-router.2.x.js";

import axios from "axios";
import VueAxios from "vue-axios";

import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
Vue.use(PiniaVuePlugin);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Vue.use(VueAxios, axios);

Vue.use(auth, {
  plugins: {
    http: Vue.axios, // Axios
    router: Vue.router,
  },
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios, // Axios
    router: customRouterDriver,
  },
  options: {
    rolesKey: "role",
    notFoundRedirect: { name: "login" },
    refreshData: { enabled: false },
    authRedirect: { name: "login" },
    tokenDefaultKey: "token",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
