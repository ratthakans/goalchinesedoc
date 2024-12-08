<template>
  <div>
    <v-row>
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
            <v-menu bottom right class="mr-4">
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-select
              label="Branch"
              outlined
              dense
              :items="['month', 'week', '4day', 'day']"
              hide-details
              style="inline-size: 50px"
            ></v-select>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
          </v-toolbar>
        </v-sheet>
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="getEvents"
        ></v-calendar>

        <v-menu
          v-model="selectedOpenDay"
          :close-on-content-click="false"
          :activator="selectedElementDay"
          offset-x
        >
          <v-card min-width="450px" flat>
            <v-card-title>
              {{ dateToYMD(selectedEventDay?.date) }}
              <v-spacer></v-spacer>
              <v-btn
                @click.stop="dialog = true"
                color="primary"
                x-small
                fab
                depressed
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="event in selectedEventDay.events"
                  :key="event.name"
                  @click="showEvent({ nativeEvent: $event, event })"
                >
                  <v-list-item-content>
                    <div class="d-flex flex-row">
                      <div class="d-flex flex-column">
                        <h6 class="subtitle-1">
                          {{ event.start.toLocaleTimeString() }}
                        </h6>
                        <span class="body-2">
                          {{ event.end.toLocaleTimeString() }}
                        </span>
                      </div>
                      <v-divider
                        vertical
                        :class="['mx-4', getEventColor(event)]"
                        style="border: 3px solid"
                      ></v-divider>
                      <div class="d-flex flex-column">
                        <h6 class="subtitle-1">{{ event.name }}</h6>
                        <span class="body-2">
                          {{ event.end.toLocaleTimeString() }}
                        </span>
                      </div>
                    </div>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-avatar color="primary" size="35">
                      <span class="white--text subtitle-1">36</span></v-avatar
                    >
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
          z-index="999999"
        >
          <v-card width="350px" flat>
            <v-card-title class="pb-0">
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" small>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list dense :lines="false">
                  <v-list-item
                    v-for="(menu, i) in [
                      { title: 'Edit' },
                      { title: 'Copy to multiple dates' },
                      { title: 'Delete' },
                    ]"
                    :key="i"
                    link
                  >
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>

            <v-card-text>
              <v-row justify="center" dense>
                <v-col cols="auto">
                  <h6 class="text-h6">{{ selectedEvent.name }}</h6>
                </v-col>
              </v-row>
              <v-row justify="center" align="center" dense>
                <v-col cols="auto">
                  <h6 class="subtitle-1">
                    {{ dateToYMDShort(selectedEvent?.start) }}
                  </h6>
                  <h4 class="text-h5">
                    {{ selectedEvent.start?.toLocaleTimeString() }}
                  </h4>
                </v-col>
                <v-col cols="auto">
                  <v-icon color="primary" large>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="auto">
                  <h6 class="subtitle-1">
                    {{ dateToYMDShort(selectedEvent?.end) }}
                  </h6>
                  <h4 class="text-h5">
                    {{ selectedEvent.end?.toLocaleTimeString() }}
                  </h4>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <v-row dense>
                <v-col cols="12" class="d-flex align-center">
                  <v-icon color="primary">mdi-monitor-cellphone</v-icon>

                  <span class="subtitle-2 mx-2">Platform :</span>

                  <span>test</span>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-icon color="primary">mdi-link</v-icon>

                  <span class="subtitle-2 mx-2">Link :</span>

                  <span>test</span>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-icon color="primary">mdi-clock-time-five-outline</v-icon>

                  <span class="subtitle-2 mx-2">Teacher in class :</span>

                  <span>test</span>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-icon color="primary">mdi-timer-edit-outline</v-icon>

                  <span class="subtitle-2 mx-2">Student in class :</span>

                  <span>test</span>
                </v-col>
              </v-row>

              <v-row justify="center" dense>
                <v-col cols="auto">
                  <small>Wed, Sep 4, 2024</small>
                </v-col>
              </v-row>
              <v-row justify="center" dense>
                <v-col cols="auto">
                  <v-avatar color="primary" size="20" class="mr-2">
                    <span class="white--text text-caption">36</span></v-avatar
                  >
                  <small>Event created</small>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="450">
      <v-card>
        <v-card-title class="text-h5"> Title </v-card-title>

        <v-card-text>
          <v-row dense>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-hours-24</v-icon>

              <span class="subtitle-2 mx-2">Class No :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-calendar</v-icon>

              <span class="subtitle-2 mx-2">Starts :</span>

              <div class="ml-auto">
                <v-chip class="mx-2" small label> Fri, Nov 8 2024 </v-chip>
                <v-chip class="mx-2" small label> 9:30 PM </v-chip>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-calendar</v-icon>

              <span class="subtitle-2 mx-2">End :</span>

              <div class="ml-auto">
                <v-chip class="mx-2" small label> Fri, Nov 8 2024 </v-chip>
                <v-chip class="mx-2" small label> 9:30 PM </v-chip>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-home</v-icon>

              <span class="subtitle-2 mx-2">Branch :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-monitor-cellphone</v-icon>

              <span class="subtitle-2 mx-2">Platform :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-link</v-icon>

              <span class="subtitle-2 mx-2">Link :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-clock-time-five-outline</v-icon>

              <span class="subtitle-2 mx-2">Teacher in class :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-timer-edit-outline</v-icon>

              <span class="subtitle-2 mx-2">Student in class :</span>

              <span>test</span>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <v-icon color="primary">mdi-tag</v-icon>

              <span class="subtitle-2 mx-2">Coral pink :</span>

              <span>
                <v-avatar color="primary" size="30">
                  <span class="white--text subtitle-1">N</span></v-avatar
                >
              </span>
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
  </div>
</template>

<script>
export default {
  name: "CalendarComponent",
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    selectedOpenDay: false,
    selectedElementDay: null,
    selectedEventDay: {},
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
    dialog: false,
  }),
  mounted() {
    // this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ nativeEvent, date }) {
      const open = () => {
        const findEvent = this.events.filter((event) => {
          return (
            event.start <= new Date(`${date}T23:59:59`) &&
            new Date(`${date}T00:00:00`) <= event.end
          );
        });

        this.selectedEventDay = {
          date: date,
          events: findEvent,
        };

        this.selectedElementDay = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpenDay = true))
        );
      };

      if (this.selectedOpenDay) {
        this.selectedOpenDay = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
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
    getEvents({ start, end }) {
      console.log("🚀 ~ getEvents ~ end:", end);
      console.log("🚀 ~ getEvents ~ start:", start);
      let events = [
        {
          name: "Party",
          start: "2024-12-19T21:00:00.000Z",
          end: "2024-12-22T01:30:00.000Z",
          color: "cyan",
          timed: true,
        },
        {
          name: "Party",
          start: "2024-12-01T08:15:00.000Z",
          end: "2024-12-02T11:00:00.000Z",
          color: "green",
          timed: true,
        },
        {
          name: "Event",
          start: "2024-12-10T06:30:00.000Z",
          end: "2024-12-10T07:30:00.000Z",
          color: "green",
          timed: true,
        },
        {
          name: "Event",
          start: "2024-12-28T09:15:00.000Z",
          end: "2024-12-28T11:15:00.000Z",
          color: "grey darken-1",
          timed: true,
        },
        {
          name: "PTO",
          start: "2024-12-02T18:15:00.000Z",
          end: "2024-12-03T04:00:00.000Z",
          color: "grey darken-1",
          timed: true,
        },
        {
          name: "Travel",
          start: "2024-12-27T09:30:00.000Z",
          end: "2024-12-27T11:30:00.000Z",
          color: "grey darken-1",
          timed: true,
        },
        {
          name: "Travel",
          start: "2024-12-30T15:45:00.000Z",
          end: "2024-12-30T17:15:00.000Z",
          color: "indigo",
          timed: true,
        },
      ];

      for (let i = 0; i < events.length; i++) {
        const event = events[i];
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      }

      this.events = events;
    },
    dateToYMD(dateParam) {
      const date = new Date(dateParam);
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };

      return date.toLocaleDateString("en-US", options);
    },
    dateToYMDShort(dateParam) {
      const date = new Date(dateParam);
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };

      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>
