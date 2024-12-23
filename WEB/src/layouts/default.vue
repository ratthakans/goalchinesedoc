<template>
  <v-app>
    <AppNavigationBar ref="appNavigationBar" />

    <AppBar @toggle-drawer="togleDrawer" />

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";
import AppBar from "@/components/AppBar";

export default {
  name: "DefaultLayout",
  components: {
    AppNavigationBar,
    AppBar,
  },
  methods: {
    togleDrawer() {
      this.$refs.appNavigationBar.drawer = true;
    },
  },
};
</script>
