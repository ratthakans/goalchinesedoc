<template>
  <v-app>
    <AppNavigationBar />

    <AppBar />

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
};
</script>
