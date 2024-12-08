<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Class Detail </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Class Name :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter Class name"
                />
              </v-col>

              <v-col cols="12" md="2">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Class No :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter Class no"
                />
              </v-col>

              <v-col cols="12" md="2">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Branch :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Select branch"
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Class Type :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Select class type"
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Number Of Student :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter number of student"
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Study fee/person :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter fee"
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2">Discount : </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter discount"
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2">
                  Discount Note :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter discount note"
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Total fee per class :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter total fee"
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Teacher Name :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Select teacher"
                />
              </v-col>

              <v-col cols="12" md="5">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Student Name :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  :items="['foo', 'bar', 'fizz', 'buzz']"
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Select student"
                  multiple
                />
              </v-col>
              <v-col cols="12" md="8">
                <v-row>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2"
                      ><span class="red--text mr-2">*</span>Class Status :
                    </label>
                    <v-select
                      v-model="formInput.title"
                      dense
                      :items="['Active', 'Inactive']"
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Select status"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span>Material Type :
                    </label>
                    <v-select
                      v-model="formInput.title"
                      dense
                      :items="[]"
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Select material type"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span>Number of time
                      registered (time) :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Teacher can leave
                      (time) :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Teacher can leave
                      (time) :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"> Note : </label>
                <v-textarea
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter note details"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Start date :
                </label>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Select date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>End date :
                </label>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Select date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Study time per time :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  suffix="Mins"
                />
              </v-col>
            </v-row>

            <v-row
              v-for="(item, i) in [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun',
              ]"
              :key="i"
            >
              <v-col cols="2" class="d-flex align-center">
                <label class="v-label text-subtitle-2" v-if="i == 0">
                  <span class="red--text mr-2">*</span>Start time :
                </label>
              </v-col>
              <v-col cols="12" md="2">
                <v-checkbox
                  v-model="selectedDays"
                  :label="item"
                  :value="item"
                  hide-details="auto"
                  class="mt-1"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  label="Select time"
                  dense
                  type="time"
                  outlined
                  single-line
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="auto" md="auto" class="d-flex align-center">
                <label class="v-label mb-2 text-subtitle-2"> To </label>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  label="Select time"
                  dense
                  type="time"
                  outlined
                  single-line
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="" class="d-flex align-center">
                <label class="v-label mr-2 text-subtitle-2"> Note : </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  hide-details="auto"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Study platform :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter platform"
                />
              </v-col>
              <v-col cols="12" md="9">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Link :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter link"
                />
              </v-col>

              <v-col cols="12" md="3">
                <v-row>
                  <v-col cols="12">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span>Admin name :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span>Check list :
                    </label>
                    <v-checkbox
                      v-for="(item, i) in checkList"
                      :key="i"
                      v-model="selectedCheckList"
                      :label="item"
                      :value="item"
                      hide-details="auto"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="9">
                <label class="v-label mb-2 text-subtitle-2"> Note : </label>
                <v-textarea
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter note"
                  rows="9"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormStudent",
  data() {
    return {
      menu: false,
      menuTime: false,
      date: null,
      selectedDays: [],
      selectedCheckList: [],
      checkList: [
        "Send metarials to students",
        "Send study link to students",
        "Send study link to teacher",
        "Send study link to admin",
      ],
      formInput: {
        title: "",
        category: "",
        type: "",
        image: "",
      },
    };
  },
};
</script>

<style scoped></style>
