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
          <h4 class="text-h4 white--text font-weight-bold">Class Calenday</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <CalendarComponent />
  </v-container>
</template>

<script>
import CalendarComponent from "@/components/Calendar.vue";
export default {
  name: "ClassCalendar",
  components: {
    CalendarComponent,
  },
};
</script>

<style lang="scss" scoped></style>
