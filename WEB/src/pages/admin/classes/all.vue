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
          x-small
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
          <template v-slot:header.data-table-select="{ on, props }">
            <span class="text-subheading ml-1">All</span>
            <v-simple-checkbox
              v-bind="props"
              v-on="on"
              hide-details
            ></v-simple-checkbox>
          </template>

          <template #item.studyDay="{ item }">
            <div class="d-flex flex-column">
              <div v-for="(it, i) in item.studyDay" :key="i">{{ it.day }}</div>
            </div>
          </template>
          <template #item.timeSlot="{ item }">
            <div class="d-flex flex-column">
              <div v-for="(it, i) in item.studyDay" :key="i">
                {{ it.timeSlot }}
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
          width: "2%",
        },
        { value: "name", text: "Class Name", width: "*" },
        { value: "studyDay", text: "Study day", width: "10%" },
        { value: "timeSlot", text: "Time slot", width: "10%" },
        { value: "teacherName", text: "Teacher name", width: "10%" },
        {
          value: "classTime",
          text: "Total class time",
          align: "center",
          width: "5%",
        },
        {
          value: "completed",
          text: "Completed class",
          align: "center",
          width: "5%",
        },
        {
          value: "remaining",
          text: "Remaining class",
          align: "center",
          width: "5%",
        },
        { value: "action", text: "Action", width: "5%" },
      ],
      items: [
        {
          no: "M001",
          name: "Class 1",
          teacherName: "Teacher 1",
          classTime: "30",
          completed: "10",
          remaining: "20",
          studyDay: [
            {
              day: "Monday",
              timeSlot: "8:00 - 10:00",
            },
            {
              day: "Wednesday",
              timeSlot: "8:00 - 10:00",
            },
            {
              day: "Friday",
              timeSlot: "8:00 - 10:00",
            },
          ],
        },
        {
          no: "M001",
          name: "Class 1",
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
