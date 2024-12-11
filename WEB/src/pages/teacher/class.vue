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
          <h4 class="text-h4 white--text font-weight-bold">Class</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          <CalendarComponent class="mt-6" :eventsItems="events" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CalendarComponent from "@/components/Calendar.vue";
export default {
  name: "TeacherClass",
  components: {
    CalendarComponent,
  },
  data() {
    return {
      events: [
        {
          name: "เดี่ยว - Nannie",
          start: "2024-12-19 08:00",
          end: "2024-12-19 10:30",
          color: "cyan",
          time: true,
        },
        {
          name: "เดี่ยว - Nannie",
          start: "2024-12-17 08:00",
          end: "2024-12-17 10:30",
          color: "cyan",
          time: true,
        },
        {
          name: "เดี่ยว - Nannie",
          start: "2024-12-27 08:00",
          end: "2024-12-27 10:30",
          color: "cyan",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
