import router from "./index";
import { useAppStore } from "@/stores/app";

export default {
  // Custom method to override
  init() {
    console.log("Custom router driver initialized");
    // Call the original init method
  },
  beforeEach: function (
    routerBeforeEach,
    transitionEach,
    setTransitions,
    getAuthMeta
  ) {
    var _this = this;

    this.plugins.router.beforeEach(function (transition, location, next) {
      setTransitions(transition);

      routerBeforeEach.call(_this, function () {
        var auth = getAuthMeta(transition);
        console.log("🚀 ~ auth:", auth);

        const store = useAppStore();
        console.log(store.userInfo);

        transitionEach.call(_this, transition, auth, function (redirect) {
          if (!redirect) {
            (next || transition.next)();
            return;
          }

          // router v2.x
          if (next) {
            next(redirect);
          } else {
            this.router._routerReplace.call(this, redirect);
          }
        });
      });
    });
  },

  routerReplace: function (data) {
    this.plugins.router.replace.call(router, data);
  },

  routerGo: function (data) {
    var router = this.plugins.router;

    (router.push || router.go).call(router, data).catch(function () {});
  },
};
