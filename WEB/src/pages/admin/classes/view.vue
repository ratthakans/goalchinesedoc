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

    <v-form ref="form" lazy-validation>
      <FormClass v-model="formInput" :editItems="editItems" :flagView="true" />
    </v-form>
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

          endDate: new Date(data.endDate).toISOString().substring(0, 10),

          startDate: new Date(data.startDate).toISOString().substring(0, 10),
        };
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
