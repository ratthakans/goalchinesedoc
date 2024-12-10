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
          <v-expansion-panels accordion mandatory>
            <v-expansion-panel class="">
              <v-expansion-panel-header class="primary--text primary-lighten-4">
                Class: Class 1
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-simple-table class="pa-0">
                  <tbody>
                    <tr v-for="item in items" :key="item.name">
                      <th width="20px" class="border-e-sm">
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
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "StudentClass",
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
