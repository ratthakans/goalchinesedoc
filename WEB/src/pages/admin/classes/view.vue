<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/classes/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Class {{ $route.params?.id }}</h5>
      </v-col>
    </v-row>

    <FormClass />
  </v-container>
</template>

<script>
import FormClass from "./form/class.vue";
export default {
  name: "CreateClass",
  components: {
    FormClass,
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
