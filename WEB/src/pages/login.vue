<template>
  <div class="fill-height background-div d-flex justify-center align-center">
    <v-card
      class="align-center mx-6"
      min-width="250"
      max-width="500"
      rounded="xxl"
      elevation="6"
    >
      <v-card-text class="pa-sm-2 pa-md-6">
        <v-img
          class="mb-4"
          height="170"
          :src="formInput?.logo || logo"
          contain
        />

        <div class="text-center">
          <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

          <h1 class="text-h2 font-weight-bold">
            {{ formInput?.academyName || "Academy Name" }}
          </h1>
        </div>

        <div class="py-2" />

        <v-row justify="center">
          <v-col cols="12">
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
          <v-col cols="12">
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
          <v-col cols="12">
            <v-checkbox
              class="mt-0"
              v-model="rememberMe"
              label="Remember Me"
              hide-details="auto"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row justify="center" v-if="error">
          <v-col cols="12">
            <v-alert
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
          <v-col cols="6" md="4">
            <v-btn color="primary" block depressed @click="loginUser">
              LogIn
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
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
      rememberMe: false,
      error: null,
      showPassword: false,
    };
  },
  mounted() {
    this.fetchSetting();

    // Check localStorage for saved credentials
    const savedCredentials = JSON.parse(localStorage.getItem("rememberedUser"));
    if (savedCredentials) {
      this.username = savedCredentials.username;
      this.password = savedCredentials.password;
      this.rememberMe = true;
    }
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

        if (this.rememberMe) {
          // Save credentials to localStorage
          localStorage.setItem(
            "rememberedUser",
            JSON.stringify({ username: this.username, password: this.password })
          );
        } else {
          // Clear saved credentials
          localStorage.removeItem("rememberedUser");
        }

        if (["admin", "superadmin"].includes(data.user.role)) {
          this.$router.push({ name: "dashboard" });
        } else if (data.user.role === "user") {
          const firstPage = data.user?.permissions?.[0]?.link;
          if (firstPage) this.$router.push(firstPage);
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
<style scoped>
.background-div {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/background.png"); /* Adjust the path */
  background-size: cover;
  background-position: center;
}
</style>
