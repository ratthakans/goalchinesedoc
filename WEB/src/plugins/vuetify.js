import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#5c6add",
        "primary-darken-1": "#3700B3",
        "primary-lighten-4": "#e6e3f5",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#ea6f6e",
        info: "#30aadd",
        success: "#42bb88",
        warning: "#f8b71b",
      },
    },
  },
});
