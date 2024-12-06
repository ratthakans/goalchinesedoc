<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        class="d-flex ga-2 align-center"
      >
        <v-btn
          variant="text"
          icon="mdi-arrow-left"
          to="/admin/teacher/all"
        />
        <h5 class="text-h5">
          Students View
        </h5>
      </v-col>
    </v-row>

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
              Student name
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

    <v-row class="mt-10">
      <v-col cols="12">
        <v-tabs
          v-model="tab"
          color="deep-purple-accent-4"
        >
          <v-tab :value="1">
            General
          </v-tab>
          <v-tab :value="2">
            Materials list
          </v-tab>
          <v-tab :value="3">
            Payment History
          </v-tab>
          <v-tab :value="4">
            Class list
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            :value="1"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card
                    title="General"
                    append-icon="mdi-pencil-box-outline"
                    variant="outlined"
                    height="250"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="2"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card
                    title="Materials list"
                    append-icon="mdi-pencil-box-outline"
                    variant="outlined"
                    height="250"
                  >
                    <v-table
                      height="300px"
                      fixed-header
                    >
                      <thead>
                        <tr>
                          <th class="text-left">
                            Material No.
                          </th>
                          <th class="text-left">
                            Title
                          </th>
                          <th class="text-left">
                            Update date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in []"
                          :key="item.name"
                        >
                          <td>{{ item.name }}</td>
                          <td>{{ item.calories }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="3"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card
                    title="Payment History"
                    append-icon="mdi-pencil-box-outline"
                    variant="outlined"
                    height="250"
                  >
                    <v-table
                      height="300px"
                      fixed-header
                    >
                      <thead>
                        <tr>
                          <th class="text-left">
                            Pay date
                          </th>
                          <th class="text-left">
                            Class type
                          </th>
                          <th class="text-left">
                            Amount
                          </th>
                          <th class="text-left">
                            Class fee
                          </th>
                          <th class="text-left">
                            Discount
                          </th>
                          <th class="text-left">
                            Total fee
                          </th>
                          <th class="text-left">
                            note
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in []"
                          :key="item.name"
                        >
                          <td>{{ item.name }}</td>
                          <td>{{ item.calories }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="4"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card
                    title="Class list"
                    append-icon="mdi-pencil-box-outline"
                    variant="outlined"
                    height="250"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        tab: 1,
      };
    },
  }
</script>

<style scoped>

</style>
