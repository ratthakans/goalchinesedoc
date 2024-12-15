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
          <v-avatar
            class="mt-2 mx-2"
            rounded="xl"
            size="120"
            :color="dataTeacher.photo ? '' : 'grey lighten-4'"
            :class="dataTeacher.photo ? '' : 'v-avatar-light-bg primary--text'"
            :variant="!dataTeacher.photo ? 'tonal' : undefined"
          >
            <v-img
              v-if="dataTeacher.photo"
              :src="`${baseUrl}${dataTeacher.photo}`"
            />
            <v-icon v-else>mdi-account</v-icon>
          </v-avatar>
          <div class="d-flex flex-column justify-center">
            <h4 class="text-h4 font-weight-bold white--text">
              {{ dataTeacher?.name }}
            </h4>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="12">
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab key="0"> General </v-tab>
          <v-tab key="1"> Materials list </v-tab>
          <v-tab key="2"> Class list </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="0">
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
          <v-tab-item :key="1">
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
                        <tr v-for="(item, inx) in dataMaterials" :key="inx">
                          <td width="150px">{{ item?.material?.no }}</td>
                          <td>{{ item?.material?.title }}</td>
                          <td>
                            {{
                              new Date(item.updatedAt).toLocaleDateString(
                                "en-GB"
                              )
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
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
      dataTeacher: {},
      dataMaterials: [],
    };
  },
  watch: {
    tab(val) {
      if (val === 0) {
        // this.fetchDataById();
      } else if (val === 1) {
        this.fetchDataMaterials();
      } else if (val === 2) {
        // this.fetchDataById();
      }
    },
  },
  created() {
    this.fetchDataById();
  },
  methods: {
    async fetchDataById() {
      try {
        const { data } = await this.axios.get(
          `/account/${this.$route.params.id}`
        );
        this.dataTeacher = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(
          `/myMaterial/account/${this.$route.params.id}`
        );
        this.dataMaterials = data;
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

<style scoped></style>
