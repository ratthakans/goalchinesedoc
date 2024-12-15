<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="700">
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
            :type="showPassword ? 'text' : 'password'"
            dense
            hide-details="auto"
            outlined
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showPassword = !showPassword"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-alert
            v-if="error"
            dense
            outlined
            color="error"
            border="left"
            icon="mdi-alert"
          >
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn block color="primary" depressed @click="loginUser">
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
      showPassword: false,
    };
  },
  methods: {
    ...mapActions(useAppStore, { setUserInfo: "setUserInfo" }),
    async loginUser() {
      try {
        const { data } = await this.axios.post("/auth/login", {
          username: this.username,
          password: this.password,
        });
        console.log("data :>> ", data);
        this.setUserInfo(data.user);
        localStorage.setItem("token", data.user.token);

        if (data.user.role === "admin" || data.user.role === "superadmin") {
          this.$router.push({ name: "dashboard" });
        } else if (data.user.role === "teacher") {
          this.$router.push({ name: "teacherClass" });
        } else if (data.user.role === "student") {
          this.$router.push({ name: "studentClass" });
        }
      } catch (error) {
        this.error = error.response?.data?.error;
      }
    },
  },
};
</script>
