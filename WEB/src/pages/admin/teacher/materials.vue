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
            Teacher Materials
          </h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4">
        <h5 class="text-h5">
          <span class="text-red">*</span> Select teacher
        </h5>
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
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
          show-select
        >
          <template #item.name="{ item }">
            <div class="d-flex align-center">
              <v-avatar
                size="45"
                :color="item.avatar ? '' : 'grey lighten-4'"
                :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
                :variant="!item.avatar ? 'tonal' : undefined"
                tile
                rounded="lg"
              >
                <v-img
                  v-if="item.avatar"
                  :src="item.avatar"
                />
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <div class="d-flex flex-column ms-3">
                <span
                  class="d-block font-weight-medium text-high-emphasis text-truncate"
                >{{ item.name }}</span>
              </div>
            </div>
          </template>

          <template #item.action="{ item }">
            <v-btn
              color="info"
              class="text-none"
            >
              view
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row justify="space-between mt-10">
      <v-col cols="4">
        <h5 class="text-h5">
          <span class="text-red">*</span> Select Materials
        </h5>
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
        </v-data-table>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn
          color="primary"
          class="text-none"
        >
          <v-icon start>
            mdi-content-save
          </v-icon>
          Update
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
      {
          align: "start",
          key: "no",
          sortable: false,
          title: "Teacher No.",
        },
        { key: "name", title: "Teacher Name" },
        { key: "teachingDate", title: "Start teaching date" },
        { key: "availableFor", title: "Available for" },
        { key: "language", title: "Language" },
        { key: "score", title: "Teacher score" },
        { key: "age", title: "Age" },
        { key: "gender", title: "Gender" },
      ],
      items: [
      {
          no: "M001",
          name: "Teacher name",
          teachingDate: "2021-09-01",
          availableFor: "Adults",
          language: "Thai",
          score: "Test",
          age: "25",
          gender: "Male",
        },
      ],
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
          description: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
