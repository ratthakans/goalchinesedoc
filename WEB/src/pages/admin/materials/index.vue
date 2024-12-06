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
          <h4 class="text-h4 text-white font-weight-bold">
            Materials
          </h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between ">
      <v-col
        cols="4"
        class="d-flex ga-2"
      >
        <h5 class="text-h5">
          Materials
        </h5>
        <v-btn
          density="comfortable"
          color="info"
          icon="mdi-plus"
          variant="flat"
          to="/admin/materials/create"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          placeholder="Search..."
          density="compact"
          hide-details="auto"
          bg-color="grey-lighten-4"
          variant="solo"
          flat
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          v-model:search="search"
          :headers="headersMaterials"
          :filter-keys="['title', 'category', 'type']"
          :items="itemsMaterials"
          show-select
        >
          <template #item.image="{ item }">
            <v-card
              class="my-2"
              elevation="2"
              rounded
            >
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                cover
              />
            </v-card>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex">
              <v-btn
                color="primary"
                variant="text"
                icon="mdi-pencil"
                :to="`/admin/materials/edit/${item.no}`"
              />
              <v-btn
                color="error"
                variant="text"
                icon="mdi-trash-can"
                slim
              />
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headersMaterials: [
        {
          align: "start",
          key: "no",
          sortable: false,
          title: "Materials No.",
        },
        { key: "image", title: "Photo" },
        { key: "title", title: "Title" },
        { key: "category", title: "Materials Category" },
        { key: "materialFor", title: "Materials for teacher/student" },
        { key: "type", title: "Type" },
        { key: "fileType", title: "File type" },
        { key: "date", title: "Date" },
        { key: "description", title: "Description" },
        { key: "action", title: "Action", sortable: false },
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
