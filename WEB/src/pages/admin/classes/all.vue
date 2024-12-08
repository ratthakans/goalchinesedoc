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
          <h4 class="text-h4 white--text font-weight-bold">All Class Check</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex ga-2">
        <h5 class="text-h5">Classes</h5>

        <v-btn
          color="info"
          small
          fab
          depressed
          to="/admin/classes/create"
          class="mx-2"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="4" class="ml-auto">
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
      <v-col cols="auto">
        <v-btn color="info" icon small depressed>
          <v-icon>mdi-printer</v-icon>
        </v-btn>
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

          <template #item.remaining="{ item }">
            <span :class="{ 'red--text': item.remaining <= 2 }">{{
              item.remaining
            }}</span>
          </template>

          <template #item.action="{ item }">
            <v-menu>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list dense :lines="false">
                <v-list-item
                  v-for="(menu, i) in [
                    { title: 'View', to: `./view/${item.no}` },
                    { title: 'Edit', to: `./edit/${item.no}` },
                    { title: 'Attendance', to: `./attendance` },
                  ]"
                  :key="i"
                  link
                  :to="menu.to"
                >
                  <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AllStudent",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Class No.",
        },
        { value: "name", text: "Class Name" },
        { value: "studyDay", text: "Study day" },
        { value: "timeSlot", text: "Time slot" },
        { value: "teacherName", text: "Teacher name" },
        { value: "classTime", text: "Total class time", align: "center" },
        { value: "completed", text: "Completed class", align: "center" },
        { value: "remaining", text: "Remaining class", align: "center" },
        { value: "action", text: "Action" },
      ],
      items: [
        {
          no: "M001",
          name: "Class 1",
          studyDay: "Monday, Wednesday, Friday",
          timeSlot: "8:00 AM - 10:00 AM",
          teacherName: "Teacher 1",
          classTime: "30",
          completed: "10",
          remaining: "20",
        },
        {
          no: "M001",
          name: "Class 1",
          studyDay: "Monday, Wednesday, Friday",
          timeSlot: "8:00 AM - 10:00 AM",
          teacherName: "Teacher 1",
          classTime: "30",
          completed: "10",
          remaining: "2",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
