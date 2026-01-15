<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/materials" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Add Materials</h5>
      </v-col>
    </v-row>
    <v-form ref="form" lazy-validation>
      <FormMaterial v-model="formInput" />
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
import FormMaterial from "./form/material.vue";
export default {
  name: "CreateMaterial",
  components: {
    FormMaterial,
  },
  data() {
    return {
      formInput: null,
    };
  },
  methods: {
    async create() {
      if (!this.$refs.form.validate()) return;
      try {
        let formData = new FormData();
        for (let key in this.formInput) {
          if (key === "newDocument" && this.formInput[key]) {
            formData.append("document", this.formInput[key]);
          } else if (key === "newPhoto" && this.formInput[key]) {
            formData.append("photo", this.formInput[key]);
          } else if (
            key !== "document" &&
            key !== "newDocument" &&
            key !== "photo" &&
            key !== "newPhoto" &&
            this.formInput[key]
          ) {
            formData.append(key, this.formInput[key]);
          }
        }
        const { data } = await this.axios.post(`/materials`, formData);

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "materials" });
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
