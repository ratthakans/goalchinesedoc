<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="700">
      <v-img class="mb-4" height="170" :src="formInput?.logo || logo" contain />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">
          {{ formInput?.academyName || "Academy Name" }}
        </h1>
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
import logo from "@/assets/logo.png";
export default {
  name: "LoginPage",
  data() {
    return {
      logo,
      formInput: {
        file: null,
        logo: null,
        academyName: "",
      },
      username: "",
      password: "",
      error: null,
      showPassword: false,
    };
  },
  mounted() {
    this.fetchSetting();
  },
  methods: {
    ...mapActions(useAppStore, {
      setUserInfo: "setUserInfo",
      setLogo: "setLogo",
    }),
    async loginUser() {
      try {
        const { data } = await this.axios.post("/auth/login", {
          username: this.username,
          password: this.password,
        });

        this.setUserInfo(data.user);
        localStorage.setItem("token", data.user.token);

        if (["user", "admin", "superadmin"].includes(data.user.role)) {
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
    async fetchSetting() {
      // fetch data from api
      try {
        const { data } = await this.axios.get(`/setting`);

        if (data.length) {
          if (data[0].logo) {
            this.formInput.logo = this.baseUrl + data[0].logo;
            this.setLogo(data[0].logo);
          }
          this.formInput.academyName = data[0].academyName;
        } else {
          this.formInput.logo = null;
          this.formInput.academyName = "";
        }
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
  },
};
</script>
