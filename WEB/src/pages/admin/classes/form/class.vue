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
                  v-model="menu2"
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
                    @input="menu2 = false"
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

            <v-row v-for="(item, i) in itemsTimes" :key="i">
              <v-col cols="2" class="d-flex align-center">
                <label class="v-label text-subtitle-2" v-if="i == 0">
                  <span class="red--text mr-2">*</span>Start time :
                </label>
              </v-col>
              <v-col cols="12" md="2">
                <v-checkbox
                  v-model="selectedDays"
                  :label="item.text"
                  :value="item.value"
                  hide-details="auto"
                  class="mt-1"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" md="2">
                <v-menu
                  :ref="setRef"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.startTime"
                      label="--:--"
                      readonly
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-model="item.startTime"
                    full-width
                    @click:minute="itemsRef[i].save(item.startTime)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="auto" md="auto" class="d-flex align-center">
                <label class="v-label mb-2 text-subtitle-2"> To </label>
              </v-col>
              <v-col cols="12" md="2">
                <v-menu
                  :ref="setRef2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.endTime"
                      label="--:--"
                      readonly
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-model="item.endTime"
                    full-width
                    @click:minute="itemsRef2[i].save(item.endTime)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="" class="d-flex align-center">
                <label class="v-label mr-2 text-subtitle-2"> Note : </label>
                <v-text-field
                  v-model="item.note"
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

    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Teacher fee for the class </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  Class Name :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  disabled
                />
              </v-col>

              <v-col cols="12" md="2">
                <label class="v-label mb-2 text-subtitle-2">Class No : </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  disabled
                />
              </v-col>

              <v-col cols="12" md="2">
                <label class="v-label mb-2 text-subtitle-2">Branch : </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  disabled
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"
                  >Class Type :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  disabled
                />
              </v-col>

              <v-col cols="12" md="3">
                <label class="v-label mb-2 text-subtitle-2"
                  >Teacher Name :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  disabled
                />
              </v-col>

              <v-col cols="12" md="5">
                <label class="v-label mb-2 text-subtitle-2"
                  >Student Name :
                </label>
                <v-select
                  v-model="formInput.title"
                  dense
                  :items="['foo', 'bar', 'fizz', 'buzz']"
                  outlined
                  single-line
                  hide-details="auto"
                  multiple
                  disabled
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-list>
                  <v-list-item v-for="(status, i) in statusList" :key="i">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-row>
                          <v-col cols="6" class="d-flex align-center">
                            <v-badge
                              class="my-0"
                              inline
                              :color="status.color"
                            ></v-badge>
                            <span>{{ status.text }}</span>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              dense
                              outlined
                              single-line
                              hide-details="auto"
                            />
                          </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="4">
                <label class="v-label mb-2 text-subtitle-2">Currency : </label>
                <v-select
                  dense
                  :items="['USD', 'EUR', 'INR']"
                  outlined
                  single-line
                  hide-details="auto"
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
      menu2: false,
      menuTime: false,
      time: null,
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
      statusList: [
        {
          text: "Regular",
          value: "regular",
          color: "green",
        },
        {
          text: "Student missing class",
          value: "student missing",
          color: "pink",
        },
        {
          text: "Teacher missing class",
          value: "teacher missing",
          color: "red",
        },
        {
          text: "Other",
          value: "other",
          color: "info",
        },
      ],
      itemsRef: [],
      itemsRef2: [],
      itemsTimes: [
        {
          text: "Mon",
          value: "mon",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Tue",
          value: "tue",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Wed",
          value: "wed",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Thu",
          value: "thu",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Fri",
          value: "fri",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Sat",
          value: "sat",
          startTime: "",
          endTime: "",
          note: "",
        },
        {
          text: "Sun",
          value: "sun",
          startTime: "",
          endTime: "",
          note: "",
        },
      ],
    };
  },
  methods: {
    setRef(e) {
      return this.itemsRef.push(e);
    },
    setRef2(e) {
      return this.itemsRef2.push(e);
    },
  },
};
</script>

<style scoped></style>
