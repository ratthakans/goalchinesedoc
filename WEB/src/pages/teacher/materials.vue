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

    <v-row justify="end">
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
        >
          <template #item.image="{ item }">
            <v-card class="my-2" elevation="2" rounded width="100">
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                cover
              />
            </v-card>
          </template>

          <template #item.action="{}">
            <v-btn color="info" class="text-none"> view </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StudentMaterials",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Materials No.",
        },
        { value: "image", text: "Photo" },
        { value: "title", text: "Title" },
        { value: "category", text: "Materials Category" },
        { value: "type", text: "Materials for teacher/student" },
        { value: "action", text: "Action", sortable: false },
      ],
      items: [
        {
          no: "M001",
          image: "1.png",
          title: "Book",
          category: "Class 1",
          type: "Student",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
