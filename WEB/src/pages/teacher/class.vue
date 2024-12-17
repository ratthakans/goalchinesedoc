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
          <h4 class="text-h4 white--text font-weight-bold">Class</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="fill-height">
      <v-col>
        <CalendarComponent @fetchEvents="onFetchEvents" :eventsItems="events" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
import CalendarComponent from "@/components/Calendar.vue";
export default {
  name: "TeacherClass",
  components: {
    CalendarComponent,
  },
  data() {
    return {
      events: [],
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
  },
  methods: {
    async onFetchEvents() {
      try {
        const { data } = await this.axios.get(
          `/classEvents?teacherId=${this.userInfo.accountID}`
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
