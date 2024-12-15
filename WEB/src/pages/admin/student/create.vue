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
    <v-form ref="form" lazy-validation>
      <FormStudent v-model="formInput" />
    </v-form>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" @click="create" depressed class="text-none">
          <v-icon left> mdi-content-save </v-icon>
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
      formInput: {},
    };
  },
  methods: {
    async create() {
      if (!this.$refs.form.validate()) return;
      try {
        this.formInput.role = "student";
        let formData = new FormData();
        for (let key in this.formInput) {
          if (this.formInput[key] && key !== "photo") {
            formData.append(key, this.formInput[key]);
          } else if (key === "photo") {
            formData.append("profile", this.formInput[key]);
          }
        }
        const { data } = await this.axios.post(`/account`, formData);

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "student" });
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
