<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/teacher/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Edit Teacher</h5>
      </v-col>
    </v-row>

    <v-form ref="form" lazy-validation>
      <FormTeacher
        v-model="formInput"
        :editItems="editItems"
        :flagEdit="true"
      />
    </v-form>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" depressed class="text-none" @click="update">
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
  name: "EditTeacher",
  components: {
    FormTeacher,
  },
  data() {
    return {
      formInput: null,
      editItems: null,
    };
  },
  created() {
    this.fetchDataById();
  },
  methods: {
    async fetchDataById() {
      try {
        const { data } = await this.axios.get(
          `/account/${this.$route.params.id}`
        );
        this.editItems = {
          ...data,
          dateOfBirth: new Date(data.dateOfBirth)
            .toISOString()
            .substring(0, 10),

          registerDate: new Date(data.registerDate)
            .toISOString()
            .substring(0, 10),

          username: data.user.username,
          password: null,
        };
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async update() {
      if (!this.$refs.form.validate()) return;
      try {
        let formData = new FormData();
        for (let key in this.formInput) {
          if (this.formInput[key] && key !== "photo") {
            formData.append(key, this.formInput[key]);
          } else if (key === "photo") {
            formData.append("profile", this.formInput[key]);
          }
        }
        const { data } = await this.axios.put(
          `/account/${this.$route.params.id}`,
          formData
        );

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "teacher" });
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
