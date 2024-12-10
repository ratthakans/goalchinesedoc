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
          <h4 class="text-h4 white--text font-weight-bold">Users</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4" class="d-flex">
        <h5 class="text-h5">Users</h5>
        <v-btn
          color="info"
          x-small
          fab
          depressed
          to="/admin/users/create"
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
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="itemsMaterials"
          show-select
        >
          <template #[`item.name`]="{ item }">
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

          <template #[`item.action`]="{ item }">
            <div class="d-flex">
              <v-btn color="primary" icon :to="`/admin/users/edit/${item.no}`">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="error" icon>
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
  name: "UsersPage",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Admission No.",
        },
        { value: "name", text: "Student Name", width: "30%" },
        { value: "parentsPhone", text: "Parents mobile No." },
        { value: "poits", text: "Poits" },
        { value: "studentType", text: "Student Type" },
        { value: "classType", text: "Class Type" },
        { value: "age", text: "Age" },
        { value: "gender", text: "Gender" },
        { value: "action", text: "Action" },
      ],
      itemsMaterials: [
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
