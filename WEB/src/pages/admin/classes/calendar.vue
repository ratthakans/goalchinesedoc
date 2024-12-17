<template>
  <v-container class="fill-height">
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

    <v-row class="fill-height">
      <v-col cols="12">
        <CalendarComponent
          :eventsItems="events"
          isAdmin
          @fetchEvents="onFetchEvents"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CalendarComponent from "@/components/Calendar.vue";
export default {
  name: "ClassCalendar",
  components: {
    CalendarComponent,
  },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.onFetchEvents();
  },
  methods: {
    async onFetchEvents(branchId) {
      try {
        const { data } = await this.axios.get(
          `/classEvents${branchId ? `?branchId=${branchId}` : ""}`
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
  },
};
</script>

<style lang="scss" scoped></style>
