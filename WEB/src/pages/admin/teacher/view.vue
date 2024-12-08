<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/teacher/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Teacher View</h5>
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
          <v-avatar class="mt-2 mx-2" rounded="xl" size="120">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="d-flex flex-column justify-center">
            <h4 class="text-h4 font-weight-bold white--text">Teacher name</h4>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="12">
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab :key="1"> General </v-tab>
          <v-tab :key="2"> Materials list </v-tab>
          <v-tab :key="3"> Class list </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="1">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card outlined height="250">
                    <v-card-title primary-title>
                      General <v-spacer></v-spacer>
                      <v-icon>mdi-pencil-box-outline</v-icon>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item :key="2">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card outlined height="250">
                    <v-card-title primary-title>
                      Materials list <v-spacer></v-spacer>
                      <v-icon>mdi-pencil-box-outline</v-icon>
                    </v-card-title>
                    <v-simple-table height="300px" fixed-header>
                      <thead>
                        <tr>
                          <th class="text-left">Material No.</th>
                          <th class="text-left">Title</th>
                          <th class="text-left">Update date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in []" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.calories }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item :key="3">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card outlined height="250">
                    <v-card-title primary-title>
                      Class list <v-spacer></v-spacer>
                      <v-icon>mdi-pencil-box-outline</v-icon>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TeacherView",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped></style>
