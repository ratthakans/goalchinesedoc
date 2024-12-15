<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn icon to="/admin/student/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Edit Student</h5>
      </v-col>
    </v-row>
    <v-form ref="form" lazy-validation>
      <FormStudent
        v-model="formInput"
        :editItems="editItems"
        :flagEdit="true"
      />
    </v-form>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" depressed class="text-none" @click="update">
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
  name: "EditStudent",
  components: {
    FormStudent,
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

          addmissionDate: new Date(data.addmissionDate)
            .toISOString()
            .substring(0, 10),

          endClassDate: new Date(data.endClassDate)
            .toISOString()
            .substring(0, 10),

          username: data?.user?.username,
          password: null,
          expireDate: data?.user?.expireDate
            ? new Date(data?.user?.expireDate).toISOString().substring(0, 10)
            : "",
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
