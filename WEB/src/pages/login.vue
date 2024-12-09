<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo.png" contain />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Class Regiser</h1>
      </div>

      <div class="py-2" />

      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="username"
            label="Username"
            placeholder="John"
            dense
            hide-details="auto"
            outlined
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="xxxxxx"
            type="password"
            dense
            hide-details="auto"
            outlined
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn block color="primary" depressed @click="login">
            Sign In
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "admin",
      password: "123456",
      error: null,
    };
  },
  methods: {
    ...mapActions(useAppStore, { setUserInfo: "setUserInfo" }),
    login() {
      this.$auth
        .login({
          data: {
            username: this.username,
            password: this.password,
          }, // Axios
          redirect: null,
          fetchUser: false,
          staySignedIn: true,
        })
        .then(
          ({ data }) => {
            this.$auth.token(null, data.token, false);
            this.$auth.user(data);
            this.setUserInfo(data);
            if (data.role === "admin")
              this.$router.replace({ name: "dashboard" });
            else if (data.role === "student")
              this.$router.replace({ name: "studentClass" });
            else if (data.role === "teacher")
              this.$router.replace({ name: "teacherClass" });
          },
          (res) => {
            console.log("🚀 ~ login ~ res:", res);
          }
        );
    },
  },
};
</script>
