<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center justify-center fill-height mx-auto"
      max-width="900"
    >
      <v-img class="mb-4" height="550" src="@/assets/403.jpg" contain />

      <div class="text-center">
        <v-btn color="primary" to="/">back home</v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "PageError403",
};
</script>
