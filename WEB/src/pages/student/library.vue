<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          rounded="lg"
          color="info"
          class="mx-auto d-flex justify-center align-center"
          height="50"
          width="100%"
        >
          <h4 class="text-h4 text-white font-weight-bold">Library</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" v-for="(_, i) in 4" :key="i">
        <v-card class="mx-auto" max-width="344" rounded="lg">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>

          <v-card-title> Book Title {{ i }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
