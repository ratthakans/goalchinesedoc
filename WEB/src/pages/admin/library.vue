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
            Student Library Materials
          </h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4">
        <h5 class="text-h5">
          <span class="red--text">*</span> Select students
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
          <template v-slot:[`item.name`]="{ item }">
            <div class="d-flex align-center">
              <v-avatar
                size="45"
                :color="item.avatar ? '' : 'grey lighten-4'"
                :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
                :variant="!item.avatar ? 'tonal' : undefined"
                tile
                rounded="lg"
              >
                <v-img v-if="item.avatar" :src="item.avatar" />
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <div class="d-flex flex-column ms-3">
                <span
                  class="d-block font-weight-medium text-high-emphasis text-truncate"
                  >{{ item.name }}</span
                >
              </div>
            </div>
          </template>

          <template #[`item.action`]="{}">
            <v-btn color="info" class="text-none"> view </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row class="mt-10" justify="space-between">
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
          :headers="headersMaterials"
          :filter-keys="['title', 'category', 'type']"
          :items="itemsMaterials"
          show-select
        >
          <template v-slot:[`item.image`]="{ item }">
            <v-card class="my-2" elevation="2" rounded height="70" width="70">
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                contain
                height="70"
              />
            </v-card>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn color="primary" class="text-none">
          <v-icon start> mdi-content-save </v-icon>
          Update
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LibraryPage",
  data() {
    return {
      search: null,
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Admission No.",
        },
        { value: "name", text: "Student Name" },
        { value: "parentsPhone", text: "Mobile No." },
        { value: "poits", text: "Poits" },
        { value: "studentType", text: "Student Type" },
        { value: "classType", text: "Class Type" },
        { value: "age", text: "Age" },
        { value: "gender", text: "Gender" },
      ],
      items: [
        {
          no: "M001",
          name: "student name",
          parentsPhone: "+666666",
          poits: "150",
          classType: "Class 1",
          age: "15",
          gender: "Male",
        },
      ],
      headersMaterials: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Materials No.",
        },
        { value: "image", text: "Photo" },
        { value: "title", text: "Title" },
        { value: "category", text: "Materials Category" },
        { value: "materialFor", text: "Materials for teacher/student" },
        { value: "type", text: "Type" },
        { value: "fileType", text: "File type" },
        { value: "date", text: "Date" },
        { value: "description", text: "Description" },
      ],
      itemsMaterials: [
        {
          no: "M001",
          image: "1.png",
          title: "Book",
          category: "Class 1",
          materialFor: "Student",
          type: "Study",
          fileType: "MP4",
          date: "2024/11/12",
          description: "N/A",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
