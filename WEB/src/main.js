import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import axios from "axios";
import VueAxios from "vue-axios";

import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
Vue.use(PiniaVuePlugin);
Vue.use(pinia);

axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.VUE_APP_API_URL;
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("🚀 ~ error:", error);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      router.push({ name: "login" });
    }
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const options = {
  confirmButtonColor: "#5c6add",
  cancelButtonColor: "#ea6f6e",
};

Vue.use(VueSweetalert2, options);

Vue.mixin({
  data: () => ({
    baseUrl: process.env.VUE_APP_API_IMAGE,
  }),
  methods: {
    calulateAge(date) {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
});

const originalRouter = router;

// Suppress NavigationDuplicated errors
const originalPush = originalRouter.push;
originalRouter.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") throw err;
  });
};

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
