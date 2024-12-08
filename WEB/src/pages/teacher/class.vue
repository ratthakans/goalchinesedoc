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
          <v-expansion-panels accordion>
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
  name: "TeacherClass",
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
