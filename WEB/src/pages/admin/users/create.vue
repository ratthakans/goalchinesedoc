<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex align-center">
        <v-btn variant="text" icon to="/admin/users" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Add User</h5>
      </v-col>
    </v-row>
    <v-form ref="form" lazy-validation>
      <FormUser v-model="formInput" />
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
import FormUser from "./form/user.vue";
export default {
  name: "CreateUser",
  components: {
    FormUser,
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
        let formData = new FormData();
        for (let key in this.formInput) {
          if (this.formInput[key] && key !== "permissions") {
            formData.append(key, this.formInput[key]);
          } else if (key === "permissions") {
            formData.append("permissions", JSON.stringify(this.formInput[key]));
          }
        }
        const { data } = await this.axios.post(`/account`, formData);

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "users" });
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
