<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/student/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">New Student addmission</h5>
      </v-col>
    </v-row>

    <FormStudent />

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
import FormStudent from "./form/student.vue";
export default {
  name: "CreateStudent",
  components: {
    FormStudent,
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
