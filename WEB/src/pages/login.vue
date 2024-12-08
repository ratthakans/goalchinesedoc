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
          <v-btn
            block
            color="primary"
            depressed
            @click="$router.push('/admin/dashboard')"
          >
            Sign In
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
