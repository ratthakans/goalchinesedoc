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
            Teacher Materials
          </h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4">
        <h5 class="text-h5"><span class="red--text">*</span> Select teacher</h5>
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

          <template #item.action="{}">
            <v-btn color="info" class="text-none"> view </v-btn>
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
  name: "TeacherMaterials",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Teacher No.",
        },
        { value: "name", text: "Teacher Name", width: "40%" },
        { value: "teachingDate", text: "Start teaching date" },
        { value: "availableFor", text: "Available for" },
        { value: "language", text: "Language" },
        { value: "score", text: "Teacher score" },
        { value: "age", text: "Age" },
        { value: "gender", text: "Gender" },
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
          value: "no",
          sortable: false,
          text: "Materials No.",
        },
        { value: "image", text: "Photo" },
        { value: "title", text: "Title", width: "40%" },
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
          description: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
