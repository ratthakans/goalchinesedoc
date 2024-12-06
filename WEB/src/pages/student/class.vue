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
            border="surface lg opacity-100"
            class="mt-2 mx-2"
            image="https://cdn.vuetifyjs.com/images/john.jpg"
            rounded="xl"
            size="120"
          />
          <div class="d-flex flex-column justify-center">
            <h4 class="text-h4 font-weight-bold">
              Nannie
            </h4>
            <div>
              <v-icon color="yellow">
                mdi-star-circle
              </v-icon>
              100 points
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mt-10 mt-md-0"
    >
      <v-col cols="auto">
        <v-sheet
          color="grey-lighten-3"
          width="250"
          height="120"
          rounded="lg"
          class="pa-2"
        >
          <div class="text-grey">
            Remaining class:
          </div>
          <div class="d-flex justify-center align-center fill-height pb-4">
            <h3 class="text-h3 font-weight-bold">
              8/15
            </h3>
            <small class="mt-5 text-grey pl-4"> times</small>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="auto">
        <v-sheet
          color="grey-lighten-3"
          width="250"
          height="120"
          rounded="lg"
          class="pa-2"
        >
          <div class="text-grey">
            Leave class:
          </div>
          <div class="d-flex justify-center align-center fill-height pb-4">
            <h3 class="text-h3 font-weight-bold">
              8/15
            </h3>
            <small class="mt-5 text-grey pl-4"> times</small>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          <v-expansion-panels
            class="border-s-lg border-x-0 border-primary border-opacity-100"
            color="primary-lighten-4"
            rounded="0"
            variant="accordion"
          >
            <v-expansion-panel>
              <v-expansion-panel-title class="text-primary">
                Class: Class 1
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pa-0">
                <v-table class="pa-0">
                  <tbody>
                    <tr
                      v-for="item in items"
                      :key="item.name"
                    >
                      <th
                        width="20px"
                        class="border-e-sm"
                      >
                        {{ item.name }}
                      </th>

                      <td>
                        <v-chip
                          v-for="subject in item.items"
                          :key="subject.name"
                          class="ma-2 text-primary"
                          variant="flat"
                          label
                          color="primary-lighten-4"
                        >
                          {{ subject.name }} {{ subject.time }}
                        </v-chip>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title class="text-primary">
                Class: Class 1
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pa-0">
                <v-table class="pa-0">
                  <tbody>
                    <tr
                      v-for="item in items"
                      :key="item.name"
                    >
                      <th
                        width="20px"
                        class="border-e-2"
                      >
                        {{ item.name }}
                      </th>

                      <td>
                        <v-chip
                          class="ma-2"
                          label
                        >
                          Label
                        </v-chip>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Monday",
          items: [
            { name: "Science", time: "(02:30 PM - 05:30 PM)" },
            { name: "Math", time: "(02:30 PM - 05:30 PM)" },
            { name: "English", time: "(02:30 PM - 05:30 PM)" },
          ],
        },
        {
          name: "Tuesday",
          items: [
            { name: "Science", time: "(02:30 PM - 05:30 PM)" },
            { name: "English", time: "(02:30 PM - 05:30 PM)" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
