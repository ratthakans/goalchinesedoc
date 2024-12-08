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

    <v-row>
      <v-col>
        <VCalendar ref="calendar" :events="events" @click:event="showEvent" />

        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title> {{ selectedEvent.title }} </v-toolbar-title>
              <v-spacer />
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span>{{ selectedEvent.details }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VCalendar } from "vuetify/labs/VCalendar";
export default {
  components: {
    VCalendar,
  },
  data() {
    return {
      selectedOpen: false,
      selectedEvent: {},
      selectedElement: null,
      events: [
        {
          title: "Weekly Meeting",
          start: new Date("2024-12-07 09:00"),
          end: new Date("2024-12-08 10:00"),
          color: "red",
        },
        {
          title: `Thomas' Birthday`,
          start: new Date("2024-12-10"),
          end: new Date("2024-12-10"),
          allDay: true,
          color: "green",
        },
        {
          title: "Mash Potatoes",
          start: new Date("2024-12-09 12:30"),
          end: new Date("2024-12-09 15:30"),
        },
      ],
    };
  },
  methods: {
    showEvent({ nativeEvent, event }) {
      console.log("🚀 ~ showEvent ~ event:", event);
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
