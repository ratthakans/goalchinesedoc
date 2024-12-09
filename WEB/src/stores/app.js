// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  persist: true,
  state: () => ({
    userInfo: null,
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
  },
});
