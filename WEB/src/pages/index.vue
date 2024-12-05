<script></script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="100" src="@/assets/logo.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Class Regiser</h1>
      </div>

      <div class="py-2" />

      <v-row justify="center">
        <v-col cols="6">
          <AppTextField
            label="Username"
            placeholder="John"
            density="compact"
            hide-details="auto"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <AppTextField
            label="Password"
            placeholder="xxxxxx"
            type="password"
            density="compact"
            hide-details="auto"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn
            block
            color="primary"
            depressed
            @click="$router.push('/dashboard')"
            >Sign In</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<route lang="yaml">
meta:
  layout: login
</route>
