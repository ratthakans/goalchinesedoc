<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          rounded="lg"
          color="info"
          class="mx-auto d-flex justify-center align-center"
          height="50"
          width="100%"
        >
          <h4 class="text-h4 white--text font-weight-bold">
            Student Materials
          </h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4">
        <h5 class="text-h5">
          <span class="red--text">*</span> Select Students
        </h5>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          placeholder="Search..."
          dense
          hide-details="auto"
          background-color="grey lighten-4"
          solo
          flat
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
          show-select
        >
          <template #item.name="{ item }">
            <div class="d-flex align-center">
              <v-avatar
                size="45"
                :color="item.photo ? '' : 'grey lighten-4'"
                :class="item.photo ? '' : 'v-avatar-light-bg primary--text'"
                :variant="!item.photo ? 'tonal' : undefined"
                tile
                rounded="lg"
              >
                <v-img v-if="item.photo" :src="`${baseUrl}${item.photo}`" />
                <v-icon v-else>mdi-account</v-icon>
              </v-avatar>
              <div class="d-flex flex-column ms-3">
                <span
                  class="d-block font-weight-medium text-high-emphasis text-truncate"
                  >{{ item.name }}</span
                >
              </div>
            </div>
          </template>

          <template #[`item.age`]="{ item }">
            {{ calulateAge(item.dateOfBirth) }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4">
        <h5 class="text-h5">
          <span class="red--text">*</span> Select Materials
        </h5>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          placeholder="Search..."
          dense
          hide-details="auto"
          background-color="grey lighten-4"
          solo
          flat
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          v-model="selectedMaterials"
          :headers="headersMaterials"
          :filter-keys="['title', 'category', 'type']"
          :items="itemsMaterials"
          show-select
        >
          <template #item.photo="{ item }">
            <v-avatar size="64" rounded color="grey lighten-4" class="my-2">
              <v-img
                height="64"
                width="64"
                cover
                v-if="item.photo"
                :src="`${baseUrl}${item.photo}`"
              />
              <v-icon color="primary" v-else size="45"
                >mdi-notebook-edit</v-icon
              >
            </v-avatar>
          </template>
          <template #[`item.date`]="{ item }">
            {{ new Date(item.createdAt).toLocaleDateString("en-GB") }}
          </template>
          <template #[`item.description`]="{ item }">
            {{ item.description || "N/A" }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn
          color="primary"
          class="text-none"
          @click="update"
          :disabled="!selectedStudent.length || !selectedMaterials.length"
        >
          <v-icon left> mdi-content-save </v-icon>
          Update
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MaterialsStudent",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "id",
          sortable: false,
          text: "Admission No.",
          width: "2%",
        },
        { value: "name", text: "Student Name", width: "*" },
        { value: "parentsPhone", text: "Mobile No.", width: "10%" },
        { value: "points", text: "Points", width: "7%" },
        { value: "studentType.name", text: "Student Type", width: "12%" },
        { value: "classType.name", text: "Class Type", width: "10%" },
        { value: "age", text: "Age", width: "5%" },
        { value: "gender", text: "Gender", width: "7%" },
      ],
      items: [],
      headersMaterials: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Materials No.",
          width: "3%",
        },
        { value: "photo", text: "Photo" },
        { value: "title", text: "Title", width: "25%" },
        {
          value: "materialCategory.name",
          text: "Materials Category",
          width: "",
        },
        { value: "materialFor.name", text: "Materials for teacher/student" },
        { value: "materialType.name", text: "Type" },
        { value: "documentType", text: "File type" },
        { value: "date", text: "Date" },
        { value: "description", text: "Description" },
      ],
      itemsMaterials: [],
      selectedStudent: [],
      selectedMaterials: [],
    };
  },
  mounted() {
    this.fetchDataTeacher();
    this.fetchDataMaterials();
  },
  methods: {
    async fetchDataTeacher() {
      try {
        const { data } = await this.axios.get(`/account?role=student`);
        this.items = data || [];
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(`/materials`);
        this.itemsMaterials = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async update() {
      try {
        let body = {
          accountID: this.selectedStudent.map((item) => item.id),
          materials: this.selectedMaterials.map((item) => item.id),
        };
        const { data } = await this.axios.post(`/myMaterial`, body);

        this.$swal(data?.message, "", "success");
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

<style lang="scss" scoped></style>
