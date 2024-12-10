<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-subtitle-2">
                Total Income [2024]
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center" justify="center">
              <v-col class="text-h3" cols="auto"> 750,555</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-subtitle-2">
                Total Target [2024]
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-pencil-box-outline</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-card-text>
            <v-row align="center" justify="center">
              <v-col class="text-h3" cols="auto"> 750,555</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-text class="py-0">
            <v-list dense>
              <v-list-item v-for="total in totalList" :key="total.name">
                <v-list-item-content>
                  <v-row>
                    <v-col cols="5">
                      <h6 class="subtitle-2">
                        {{ total.name }}
                      </h6>
                    </v-col>
                    <v-col cols="auto">
                      <v-divider
                        vertical
                        :class="[total.color]"
                        style="border: 3px solid"
                      ></v-divider
                    ></v-col>
                    <v-col cols="5">
                      <h6 class="subtitle-1">
                        {{ total.value }}
                      </h6>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" v-for="(item, i) in summaryList" :key="i">
        <v-alert
          :color="item.color"
          border="left"
          elevation="2"
          colored-border
          class="mb-0"
        >
          <h6 class="text-h6">{{ item.value }}</h6>
          <div>{{ item.name }}</div>
        </v-alert>
      </v-col>
    </v-row>

    <CalendarComponent class="mt-6" />
  </v-container>
</template>

<script>
import CalendarComponent from "@/components/Calendar.vue";
export default {
  name: "DashboardPage",
  components: {
    CalendarComponent,
  },
  data() {
    return {
      totalList: [
        { name: "Total Student", value: 20, color: "warning" },
        { name: "Total Teacher", value: 101, color: "info" },
        { name: "Total admin", value: 21, color: "success" },
      ],
      summaryList: [
        { name: "Total classes Branch 1", value: 20, color: "primary" },
        { name: "Total Student Branch 1", value: 20, color: "success" },
        { name: "Expiring Classes Branch 1", value: 101, color: "warning" },
        { name: "Monthly income Branch 1", value: 21, color: "error" },
        { name: "Total classes Branch 2", value: 20, color: "primary" },
        { name: "Total Student Branch 2", value: 20, color: "success" },
        { name: "Expiring Classes Branch 2", value: 101, color: "warning" },
        { name: "Monthly income Branch 2", value: 21, color: "error" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
