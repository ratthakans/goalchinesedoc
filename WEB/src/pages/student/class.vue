<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-sheet
          rounded="lg"
          color="info"
          class="mx-auto d-flex"
          height="80"
          width="100%"
        >
          <v-avatar
            class="mt-2 mx-2"
            rounded="xl"
            size="120"
            :color="dataStudent.photo ? '' : 'grey lighten-4'"
            :class="dataStudent.photo ? '' : 'v-avatar-light-bg primary--text'"
            :variant="!dataStudent.photo ? 'tonal' : undefined"
          >
            <v-img
              v-if="dataStudent.photo"
              :src="`${baseUrl}${dataStudent.photo}`"
            />
            <v-img v-else :src="iconStudent" />
          </v-avatar>
          <div class="d-flex white--text flex-column justify-center">
            <h4 class="text-h4 font-weight-bold">{{ dataStudent?.name }}</h4>
            <div>
              <v-icon color="yellow"> mdi-star-circle </v-icon>
              {{ dataStudent?.pointStructure?.pointAfterUpdate }} points
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10 mt-md-0">
      <v-col cols="auto">
        <v-sheet
          color="grey lighten-3"
          width="250"
          height="120"
          rounded="lg"
          class="pa-2"
        >
          <div class="text-grey">Remaining class:</div>
          <div class="d-flex justify-center align-center fill-height pb-4">
            <h3 class="text-h3 font-weight-bold">
              {{ totalClassTimes - totalAttendTimes }} / {{ totalClassTimes }}
            </h3>
            <small class="mt-5 text-grey pl-4"> times</small>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="auto">
        <v-sheet
          color="grey lighten-3"
          width="250"
          height="120"
          rounded="lg"
          class="pa-2"
        >
          <div class="text-grey">Leave class:</div>
          <div class="d-flex justify-center align-center fill-height pb-4">
            <h3 class="text-h3 font-weight-bold">
              {{ studentLeaveTimes }} / {{ totalLeaveTimes }}
            </h3>
            <small class="mt-5 text-grey pl-4"> times</small>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="fill-height">
      <v-col>
        <CalendarComponent
          class="mt-6"
          :eventsItems="events"
          @fetchEvents="onFetchEvents"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";

import CalendarComponent from "@/components/Calendar.vue";
import iconStudent from "@/assets/student.png";
export default {
  name: "StudentClass",
  components: {
    CalendarComponent,
  },
  data() {
    return {
      iconStudent,
      dataStudent: {},
      dataClass: [],
      events: [],
      totalClassTimes: 0,
      totalAttendTimes: 0,
      totalLeaveTimes: 0,
      studentLeaveTimes: 0,
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  created() {
    this.fetchDataById();
    this.onFetchEvents();
    this.onFetchClassByStudentId();
  },
  methods: {
    async onFetchEvents() {
      try {
        const { data } = await this.axios.get(
          `/classEvents?studentId=${this.userInfo.accountID}`
        );
        this.events = data || [];
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async fetchDataById() {
      try {
        const { data } = await this.axios.get(
          `/account/${this.userInfo.accountID}`
        );
        this.dataStudent = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },

    async onFetchClassByStudentId() {
      try {
        const { data } = await this.axios.get(
          `/classes/student/${this.userInfo.accountID}`
        );
        this.dataClass = data;
        this.totalClassTimes = data.reduce((acc, cur) => {
          return acc + cur.registeredTimes;
        }, 0);
        this.totalAttendTimes = data.reduce((acc, cur) => {
          return acc + cur.attendance.length;
        }, 0);
        this.totalLeaveTimes = data.reduce((acc, cur) => {
          return acc + cur.studentLeave;
        }, 0);
        this.studentLeaveTimes = data.reduce((acc, cur) => {
          return acc + cur.inputStudentLeave;
        }, 0);
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
