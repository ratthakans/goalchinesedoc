<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/classes/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Attendance</h5>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
        >
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

          <template #item.teacherLeave="{ item }">
            <v-text-field
              v-model="item.teacherLeave"
              dense
              outlined
              single-line
              hide-details="auto"
              suffix="/ 5"
              class="w-50"
              style="inline-size: 70px"
            ></v-text-field>
          </template>

          <template #item.studentLeave="{ item }">
            <v-text-field
              v-model="item.studentLeave"
              dense
              outlined
              single-line
              hide-details="auto"
              suffix="/ 5"
              class="w-50"
              style="inline-size: 70px"
            ></v-text-field>
          </template>

          <template #item.times="{ item }">
            <div style="width: 300px" class="text-no-wrap overflow-auto">
              <v-chip
                v-for="(time, i) in item.times"
                :key="i"
                class="ma-1 pa-2"
                label
                dark
                :color="resolveStatus(time.status)"
                @click.stop="dialog = true"
              >
                {{ i + 1 }}
              </v-chip>
            </div>
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
                  ]"
                  :key="i"
                  link
                  :to="menu.to"
                >
                  <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="12">
              <label class="v-label mb-2 text-subtitle-2"> Study date </label>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="study date"
                    append-icon="mdi-calendar"
                    readonly
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-radio-group column hide-details="auto" class="mt-0">
                <v-list dense>
                  <v-list-item v-for="(status, i) in statusList" :key="i">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-radio
                          :label="status.text"
                          :color="status.color"
                          :value="status.value"
                        ></v-radio>
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-badge inline :color="status.color"></v-badge>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-radio-group>
            </v-col>
            <v-col cols="12">
              <label class="v-label mb-2 text-subtitle-2"> Note : </label>
              <v-textarea
                dense
                outlined
                single-line
                hide-details="auto"
                placeholder="Enter note"
                rows="2"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "AttendanceClass",

  data() {
    return {
      dialog: false,
      menu2: false,
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Class No.",
          width: "2%",
        },
        { value: "name", text: "Class Name", width: "20%" },
        { value: "studyDay", text: "Study day", width: "10%" },
        { value: "timeSlot", text: "Time slot", width: "10%" },
        { value: "teacherLeave", text: "Teacher leave", width: "5%" },
        { value: "studentLeave", text: "Student leave", width: "5%" },
        {
          value: "times",
          text: "Times",
          width: "*",
          class: "overflow-x-auto",
        },
        { value: "action", text: "Action", width: "5%" },
      ],
      items: [
        {
          no: "M001",
          name: "Class 1",

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
          teacherLeave: 0,
          studentLeave: 1,
          times: [
            {
              date: "2021-09-01",
              status: "regular",
            },
            {
              date: "2021-09-01",
              status: "student missing",
            },
            {
              date: "2021-09-01",
              status: "teacher missing",
            },
            {
              date: "2021-09-01",
              status: "other",
            },
            {
              date: "2021-09-01",
              status: "",
            },
            {
              date: "2021-09-01",
              status: "",
            },
          ],
        },
      ],
      date: new Date().toISOString().substr(0, 10),
      statusList: [
        {
          text: "Regular",
          value: "regular",
          color: "green",
        },
        {
          text: "Student missing class",
          value: "student missing",
          color: "pink",
        },
        {
          text: "Teacher missing class",
          value: "teacher missing",
          color: "red",
        },
        {
          text: "Other",
          value: "other",
          color: "info",
        },
      ],
    };
  },
  methods: {
    resolveStatus(status) {
      switch (status) {
        case "regular":
          return "green";
        case "student missing":
          return "pink";
        case "teacher missing":
          return "red";
        case "other":
          return "info";
        default:
          return "grey lighten-2";
      }
    },
  },
};
</script>

<style scoped></style>
