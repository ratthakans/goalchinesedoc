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
          <h4 class="text-h4 white--text font-weight-bold">Materials</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between ">
      <v-col cols="4" class="d-flex ga-2">
        <h5 class="text-h5">Materials</h5>

        <v-btn
          color="info"
          small
          fab
          depressed
          to="/admin/materials/create"
          class="mx-2"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
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
          <template #[`item.image`]="{ item }">
            <v-card class="my-2" elevation="2" rounded height="64" width="70">
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                cover
              />
            </v-card>
          </template>
          <template #[`item.action`]="{ item }">
            <div class="d-flex">
              <v-btn
                color="primary"
                icon
                dark
                small
                depressed
                :to="`/admin/materials/edit/${item.no}`"
              >
                <v-icon> mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="error" icon dark small>
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MaterialsPage",
  data() {
    return {
      search: "",
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
        { value: "action", text: "Action", sortable: false },
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
