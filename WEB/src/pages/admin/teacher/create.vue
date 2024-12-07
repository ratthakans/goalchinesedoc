<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon="mdi-arrow-left" to="/admin/teacher/all" />
        <h5 class="text-h5">New Teacher</h5>
      </v-col>
    </v-row>

    <FormTeacher />

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
import FormTeacher from "./form/teacher.vue";
export default {
  components: {
    FormTeacher,
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
