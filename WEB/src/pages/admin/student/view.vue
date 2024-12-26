<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn icon to="/admin/student/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">Students View</h5>
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
            :color="dataStudent.photo ? '' : 'grey lighten-4'"
            :class="dataStudent.photo ? '' : 'v-avatar-light-bg primary--text'"
            :variant="!dataStudent.photo ? 'tonal' : undefined"
          >
            <v-img
              v-if="dataStudent.photo"
              :src="`${baseUrl}${dataStudent.photo}`"
            />
            <v-img v-else :src="iconStudent" />
          </v-avatar>
          <div class="d-flex white--text flex-column justify-center">
            <h4 class="text-h4 font-weight-bold">{{ dataStudent?.name }}</h4>
            <div>
              <v-icon color="yellow"> mdi-star-circle </v-icon>
              {{ dataStudent?.pointStructure?.pointAfterUpdate }} points
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="12">
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab :key="1"> General </v-tab>
          <v-tab :key="2"> Materials list </v-tab>
          <!-- <v-tab :key="3"> Payment History </v-tab>
          <v-tab :key="4"> Class History </v-tab> -->
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="0">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card outlined min-height="250">
                    <v-card-title primary-title>
                      General <v-spacer></v-spacer>
                      <v-btn
                        icon
                        :to="`/admin/student/edit/${$route.params.id}`"
                      >
                        <v-icon>mdi-pencil-box-outline</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-card-text>
                      <ViewDetailStudent :itemData="dataStudent" />
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item :key="1">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-card outlined min-height="250">
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
                  <v-card outlined min-height="250">
                    <v-card-title primary-title> Payment History </v-card-title>
                    <v-simple-table height="300px" fixed-header>
                      <thead>
                        <tr>
                          <th class="text-left">Pay date</th>
                          <th class="text-left">Class type</th>
                          <th class="text-left">Amount</th>
                          <th class="text-left">Class fee</th>
                          <th class="text-left">Discount</th>
                          <th class="text-left">Total fee</th>
                          <th class="text-left">note</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, inx) in dataPayment" :key="inx">
                          <td>{{ item.payDate }}</td>
                          <td>{{ item.classType }}</td>
                          <td>{{ item.amount.toLocaleString() }}</td>
                          <td>{{ item.classFee.toLocaleString() }}</td>
                          <td>{{ item.discount.toLocaleString() }}</td>
                          <td>
                            {{
                              (
                                item.amount +
                                item.classFee -
                                item.discount
                              ).toLocaleString()
                            }}
                          </td>
                          <td>{{ item.note || "N/A" }}</td>
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
                    <v-card-title primary-title> Class History </v-card-title>
                    <v-simple-table height="300px" fixed-header>
                      <thead>
                        <tr>
                          <th class="text-left">Create Date</th>
                          <th class="text-left">Class Name</th>
                          <th class="text-left">Update date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, inx) in dataClass" :key="inx">
                          <td width="150px">
                            {{
                              new Date(item.createdAt).toLocaleDateString(
                                "en-GB"
                              )
                            }}
                          </td>
                          <td>{{ item?.name }}</td>
                          <td>
                            {{
                              new Date(item.createdAt).toLocaleDateString(
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
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import iconStudent from "@/assets/student.png";
import ViewDetailStudent from "./form/viewDetail.vue";
export default {
  name: "ViewStudent",
  components: {
    ViewDetailStudent,
  },
  data() {
    return {
      iconStudent,
      tab: null,
      dataStudent: {},
      dataMaterials: [],
      dataPayment: [],
      dataClass: [],
    };
  },
  watch: {
    tab(val) {
      if (val === 0) {
        this.fetchDataById();
      } else if (val === 1) {
        this.fetchDataMaterials();
      } else if (val === 2) {
        this.fetchDataPayment();
      } else if (val === 3) {
        this.fetchDataClass();
      }
    },
  },
  created() {
    // this.fetchDataById();
  },
  methods: {
    async fetchDataById() {
      try {
        const { data } = await this.axios.get(
          `/account/${this.$route.params.id}`
        );
        this.dataStudent = {
          ...data,
          dateOfBirth: data.dateOfBirth?.substring(0, 10),

          addmissionDate: data.addmissionDate?.substring(0, 10),

          endClassDate: data.endClassDate?.substring(0, 10),

          username: data?.user?.username,
          password: "",
          expireDate: data?.user?.expireDate
            ? data?.user?.expireDate.substring(0, 10)
            : "",
        };
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
          `/myMaterial/account/${this.$route.params.id}?last=true`
        );
        this.dataMaterials = data;
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details,
            icon: "error",
          });
      }
    },
    async fetchDataPayment() {
      try {
        const { data } = await this.axios.get(
          `/feeStructure/account/${this.$route.params.id}`
        );
        this.dataPayment = data;
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details,
            icon: "error",
          });
      }
    },
    async fetchDataClass() {
      try {
        const { data } = await this.axios.get(
          `/classes/student/${this.$route.params.id}`
        );
        this.dataClass = data;
      } catch (error) {
        if (error.response.status !== 404)
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
