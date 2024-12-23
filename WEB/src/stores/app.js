// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  persist: true,
  state: () => ({
    userInfo: null,
    logo: null,
  }),
  getters: {
    getUserinfo: (state) => {
      return state.userInfo;
    },
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    setLogo(logo) {
      this.logo = logo;
    },
  },
});
