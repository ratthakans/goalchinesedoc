<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/classes/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Copy Class</h5>
      </v-col>
    </v-row>

    <v-form ref="form" lazy-validation>
      <FormClass v-model="formInput" :editItems="editItems" :flagEdit="true" />
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
import FormClass from "./form/class.vue";
export default {
  name: "EditClass",
  components: {
    FormClass,
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
          `/classes/${this.$route.params.id}`
        );
        this.editItems = {
          ...data,

          endDate: data.endDate
            ? new Date(data.endDate).toISOString().substring(0, 10)
            : null,
          startDate: data.startDate
            ? new Date(data.startDate).toISOString().substring(0, 10)
            : null,
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
        // eslint-disable-next-line no-unused-vars
        const { id, ...body } = this.formInput;
        const { data } = await this.axios.post(`/classes`, body);

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
