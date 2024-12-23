<template>
  <v-app-bar flat app color="white">
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click="(drawer = !drawer), $emit('toggle-drawer', drawer)"
    ></v-app-bar-nav-icon>
    <v-spacer />

    <div class="d-flex align-center">
      <v-avatar size="42" color="grey">
        <v-img v-if="userInfo.photo" :src="`${baseUrl}${userInfo.photo}`" />
        <v-img v-else-if="userInfo?.role === 'student'" :src="iconStudent" />
        <v-img v-else-if="userInfo?.role === 'teacher'" :src="iconTeacher" />
        <v-icon v-else>mdi-account</v-icon>
      </v-avatar>
      <div class="ml-2">
        <v-list-item-title>{{ userInfo?.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ userInfo?.role }}</v-list-item-subtitle>
      </div>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
import iconStudent from "@/assets/student.png";
import iconTeacher from "@/assets/teacher.png";
export default {
  data() {
    return {
      drawer: false,
      iconStudent,
      iconTeacher,
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  watch: {},
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
