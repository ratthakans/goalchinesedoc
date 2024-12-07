<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon="mdi-arrow-left" to="/admin/materials" />
        <h5 class="text-h5">Add Materials</h5>
      </v-col>
    </v-row>

    <FormMaterial />

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" depressed class="text-none">
          <v-icon start> mdi-content-save </v-icon>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormMaterial from "./form/material.vue";
export default {
  components: {
    FormMaterial,
  },
  data() {
    return {
      formInput: {
        title: "",
        category: "",
        type: "",
        image: "",
      },
    };
  },
};
</script>

<style scoped></style>
