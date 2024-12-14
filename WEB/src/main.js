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

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common["Authorization"] =
  `Bearer ` + localStorage.getItem("token");

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const options = {
  confirmButtonColor: "#5c6add",
  cancelButtonColor: "#ea6f6e",
};

Vue.use(VueSweetalert2, options);

Vue.mixin({
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

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
