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
          <h4 class="text-h4 text-white font-weight-bold">Users</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between ">
      <v-col cols="4" class="d-flex ga-2">
        <h5 class="text-h5">Users</h5>
        <v-btn
          density="comfortable"
          color="info"
          icon="mdi-plus"
          variant="flat"
          to="/admin/users/create"
        ></v-btn>
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
          :headers="headers"
          v-model:search="search"
          :filter-keys="['title', 'category', 'type']"
          :items="itemsMaterials"
          show-select
        >
          <template v-slot:item.name="{ item }">
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

          <template v-slot:item.action="{ item }">
            <div class="d-flex">
              <v-btn
                color="primary"
                variant="text"
                icon="mdi-pencil"
                :to="`/admin/users/edit/${item.no}`"
              />
              <v-btn color="error" variant="text" icon="mdi-trash-can" slim />
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
      headers: [
        {
          align: "start",
          key: "no",
          sortable: false,
          title: "Admission No.",
        },
        { key: "name", title: "Student Name" },
        { key: "parentsPhone", title: "Parents mobile No." },
        { key: "poits", title: "Poits" },
        { key: "studentType", title: "Student Type" },
        { key: "classType", title: "Class Type" },
        { key: "age", title: "Age" },
        { key: "gender", title: "Gender" },
        { key: "action", title: "Action" },
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
