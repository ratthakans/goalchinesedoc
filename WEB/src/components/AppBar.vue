<template>
  <v-app-bar flat app color="white">
    <v-spacer />
    <v-list dense color="transparent">
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar size="42" color="grey">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userInfo?.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ userInfo?.role }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  watch: {
    userInfo(v) {
      console.log("v :>> ", v);
    },
  },
  mounted() {},
  methods: {
    ...mapActions(useAppStore, { setUserInfo: "setUserInfo" }),
    logout() {
      this.setUserInfo(null);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
