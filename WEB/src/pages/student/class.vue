<template>
  <v-container>
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
            color="grey lighten-2"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              v-if="userInfo?.photo"
            ></v-img>
            <v-icon v-else size="62">mdi-account-school</v-icon>
          </v-avatar>
          <div class="d-flex flex-column justify-center white--text">
            <h4 class="text-h4 font-weight-bold">Nannie</h4>
            <div>
              <v-icon color="yellow"> mdi-star-circle </v-icon>
              100 points
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
            <h3 class="text-h3 font-weight-bold">8/15</h3>
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
            <h3 class="text-h3 font-weight-bold">8/15</h3>
            <small class="mt-5 text-grey pl-4"> times</small>
          </div>
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
  name: "StudentClass",
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
