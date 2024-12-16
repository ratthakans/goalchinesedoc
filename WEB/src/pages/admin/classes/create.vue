<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/classes/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">New Class addmission</h5>
      </v-col>
    </v-row>

    <v-form ref="form" lazy-validation>
      <FormClass v-model="formInput" />
    </v-form>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" depressed class="text-none" @click="create">
          <v-icon left> mdi-content-save </v-icon>
          Save
        </v-btn>
      </v-col>
    </v-row>
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
      formInput: {},
    };
  },
  methods: {
    async create() {
      if (!this.$refs.form.validate()) return;

      try {
        const { data } = await this.axios.post(`/classes`, this.formInput);

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "classesAll" });
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

<style scoped></style>
