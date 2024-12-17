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
        <v-btn
          color="info"
          icon
          small
          depressed
          :disabled="!selectedClass.length"
          @click="printData"
        >
          <v-icon>mdi-printer</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          v-model="selectedClass"
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
          show-select
          class="text-subtitle-1 grey--text text--darken-3"
        >
          <template v-slot:header.data-table-select="{ on, props }">
            <span class="text-subtitle-2 grey--text text--darken-5 ml-1"
              >All</span
            >
            <v-simple-checkbox
              v-bind="props"
              v-on="on"
              hide-details
            ></v-simple-checkbox>
          </template>

          <template #item.studyDay="{ item }">
            <v-row dense v-for="(it, i) in item.classStudy" :key="i">
              <v-col cols="">{{ it.day }}</v-col>
            </v-row>
          </template>
          <template #item.timeSlot="{ item }">
            <v-row dense v-for="(it, i) in item.classStudy" :key="i">
              <v-col cols="">{{ it.startTime }} - {{ it.endTime }}</v-col>
            </v-row>
          </template>

          <template #item.teacherName="{ item }">
            {{ item.teacher?.name }}
          </template>

          <template #item.completed="{ item }">
            <span :class="{ 'red--text': item.remaining <= 2 }">{{
              item?.attendance?.length || 0
            }}</span>
          </template>

          <template #item.remaining="{ item }">
            <span
              :class="{
                'red--text':
                  (item.registeredTimes - item?.attendance?.length || 0) <= 2,
              }"
              >{{ item.registeredTimes - item?.attendance?.length || 0 }}</span
            >
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
                    { title: 'View', to: `./view/${item.id}` },
                    { title: 'Edit', to: `./edit/${item.id}` },
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
import { exportPdf } from "@/printOuts/class";
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
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "name",
          text: "Class Name",
          width: "*",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "studyDay",
          text: "Study day",
          width: "10%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "timeSlot",
          text: "Time slot",
          width: "10%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "teacherName",
          text: "Teacher name",
          width: "10%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "registeredTimes",
          text: "Total class time",
          align: "center",
          width: "5%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "completed",
          text: "Completed class",
          align: "center",
          width: "5%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "remaining",
          text: "Remaining class",
          align: "center",
          width: "5%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
        {
          value: "action",
          text: "Action",
          width: "5%",
          class: "text-subtitle-2  grey--text text--darken-5",
        },
      ],
      items: [],
      selectedClass: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await this.axios.get(`/classes`);
        this.items = data || [];
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async deleteData(id) {
      // confirm delete
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;

      //delete data from api
      try {
        const { data } = await this.axios.delete(`/account/${id}`);
        this.$swal(data?.message, "", "success");
        this.fetchData();
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },

    printData() {
      exportPdf(this.selectedClass);
    },
  },
};
</script>

<style lang="scss" scoped></style>
