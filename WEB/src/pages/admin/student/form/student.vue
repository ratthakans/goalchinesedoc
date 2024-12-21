<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Personal Detail </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Student Name :
                </label>
                <v-text-field
                  v-model="formInput.name"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter Student name"
                  :readonly="flagView"
                  :rules="[(v) => !!v || 'Name is required']"
                />
              </v-col>
              <v-col cols="12" md="auto">
                <label class="v-label text-subtitle-2"
                  ><span class="red--text mr-2">*</span>Gender :
                </label>
                <v-radio-group
                  row
                  hide-details="auto"
                  v-model="formInput.gender"
                  :readonly="flagView"
                >
                  <v-radio label="Male" value="Male" />
                  <v-radio label="Female" value="Female" />
                  <v-radio label="Other" value="Other" />
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="">
                <label class="v-label mb-2 text-subtitle-2">Age : </label>
                <v-text-field
                  v-model="age"
                  dense
                  outlined
                  single-line
                  readonly
                  hide-details="auto"
                  persistent-placeholder
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Date of Birth :
                </label>
                <v-menu
                  ref="menu"
                  v-model="pickerDOB"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formInput.dateOfBirth"
                      placeholder="Birthday date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :rules="[(v) => !!v || 'Birthday is required']"
                      readonly
                      :disabled="flagView"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formInput.dateOfBirth"
                    :active-picker.sync="activePicker"
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substring(0, 10)
                    "
                    min="1950-01-01"
                    @change="$refs.menu.save(formInput.dateOfBirth)"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">Address : </label>
                <v-textarea
                  v-model="formInput.address"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter address"
                  rows="2"
                  :readonly="flagView"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"> Phone : </label>
                <v-text-field
                  v-model="formInput.phone"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter phone number"
                  :readonly="flagView"
                />
              </v-col>

              <v-col cols="12" md="4">
                <div class="d-flex justify-space-between align-end">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span>School name :
                  </label>
                </div>
                <v-text-field
                  v-model="formInput.schoolName"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter school name"
                  :rules="[(v) => !!v || 'School name is required']"
                  :readonly="flagView"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Account Detail </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>User Name :
                </label>
                <v-text-field
                  v-model="formInput.username"
                  dense
                  outlined
                  single-line
                  :filled="flagEdit"
                  hide-details="auto"
                  placeholder="Enter user name"
                  :disabled="flagEdit || flagView"
                  :rules="[(v) => !!v || 'User Name is required']"
                  :readonly="flagView"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Password :
                </label>
                <v-text-field
                  v-model="formInput.password"
                  dense
                  outlined
                  single-line
                  :type="showPassword ? 'text' : 'password'"
                  hide-details="auto"
                  placeholder="Enter password"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPassword = !showPassword"
                  :readonly="flagView"
                  :rules="[
                    (v) => (flagEdit ? true : !!v || 'Password is required'),
                  ]"
                />
              </v-col>
              <v-col cols="12" md="4">
                <div class="d-flex justify-space-between align-end">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span>Account exit date :
                  </label>
                  <v-checkbox
                    v-model="notExpired"
                    :readonly="flagView"
                    label="not yet"
                    hide-details="auto"
                    dense
                    class="my-0 py-0"
                  />
                </div>
                <v-menu
                  ref="menuExpired"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formInput.expireDate"
                      placeholder="Expire date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :rules="[
                        (v) =>
                          notExpired ? true : !!v || 'Expire date is required',
                      ]"
                      readonly
                      :disabled="flagView"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formInput.expireDate"
                    :min="new Date().toISOString().substring(0, 10)"
                    @change="$refs.menuExpired.save(formInput.expireDate)"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" dense class="mt-6">
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Admission Detail </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Addmission Date :
                </label>
                <v-menu
                  ref="menuAddmission"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formInput.addmissionDate"
                      placeholder="Addmission date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :rules="[(v) => !!v || 'Addmission date is required']"
                      readonly
                      :disabled="flagView"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formInput.addmissionDate"
                    :min="new Date().toISOString().substring(0, 10)"
                    @change="
                      $refs.menuAddmission.save(formInput.addmissionDate)
                    "
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Student type :
                </label>
                <v-select
                  v-model="formInput.studentTypeID"
                  :items="itemsOptions.studentType"
                  item-text="name"
                  item-value="id"
                  dense
                  outlined
                  hide-details="auto"
                  placeholder="Select class"
                  :rules="[(v) => !!v || 'Student type is required']"
                  :readonly="flagView"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Class Type :
                </label>
                <v-select
                  v-model="formInput.classTypeID"
                  :items="itemsOptions.classType"
                  dense
                  item-text="name"
                  item-value="id"
                  outlined
                  hide-details="auto"
                  placeholder="Select class"
                  :rules="[(v) => !!v || 'Class type is required']"
                  :readonly="flagView"
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  End Class Date :
                </label>
                <v-menu
                  ref="menuEndClass"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formInput.endClassDate"
                      placeholder="EndClass date"
                      append-icon="mdi-calendar"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :rules="[(v) => !!v || 'EndClass date is required']"
                      readonly
                      :disabled="flagView"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formInput.endClassDate"
                    :min="new Date().toISOString().substring(0, 10)"
                    @change="$refs.menuEndClass.save(formInput.endClassDate)"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span>Admission No. :
                </label>
                <v-text-field
                  v-model="formInput.addmissionNo"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter addmission number"
                  :rules="[(v) => !!v || 'Addmission number is required']"
                  :readonly="flagView"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  Upload Photo :
                </label>
                <v-file-input
                  v-model="formInput.photo"
                  dense
                  outlined
                  label="Choose a file..."
                  hide-details="auto"
                  :readonly="flagView"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-col cols="12">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span>Student Status :
                  </label>
                  <v-select
                    v-model="formInput.status"
                    :items="['Active', 'Inactive']"
                    dense
                    outlined
                    hide-details="auto"
                    placeholder="Select class"
                    :rules="[(v) => !!v || 'Status is required']"
                    :readonly="flagView"
                  />
                </v-col>
                <v-col cols="12">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span> Branch :
                  </label>
                  <v-select
                    v-model="formInput.branchID"
                    :items="itemsOptions.branch"
                    dense
                    item-text="name"
                    item-value="id"
                    outlined
                    hide-details="auto"
                    placeholder="Select branch"
                    :readonly="flagView"
                  />
                </v-col>
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  extra note details :
                </label>
                <v-textarea
                  v-model="formInput.note"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter note details"
                  :readonly="flagView"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <FeeStructureComponent :flagView="true" />

    <ScoreStructureComponent :flagView="true" />
  </div>
</template>

<script>
import FeeStructureComponent from "./feeStructure.vue";
import ScoreStructureComponent from "./scoreStructure.vue";
export default {
  name: "FormStudent",
  components: {
    FeeStructureComponent,
    ScoreStructureComponent,
  },
  props: {
    editItems: {
      type: Object,
      default: () => ({}),
    },
    flagEdit: {
      type: Boolean,
      default: false,
    },
    flagView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pickerDOB: false,
      activePicker: null,
      isSelectAll: false,
      age: 0,
      showPassword: false,
      notExpired: false,
      formInput: {
        name: "",
        gender: "Male",
        dateOfBirth: "",
        username: "",
        password: "",
        expireDate: "",
        phone: "",
        address: "",
        schoolName: "",

        photo: null,
        addmissionDate: "",
        endClassDate: "",
        studentTypeID: "",
        classTypeID: "",
        addmissionNo: "",
        branchID: "",
        note: "",
        status: "Active",
      },

      itemsOptions: {
        studentType: [],
        classType: [],
        branch: [],
      },
    };
  },
  watch: {
    pickerDOB(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    "formInput.dateOfBirth": {
      handler() {
        if (this.formInput.dateOfBirth) {
          this.age = this.calulateAge(this.formInput.dateOfBirth);
        }
      },
    },
    formInput: {
      handler() {
        this.$emit("input", this.formInput);
      },
      deep: true,
    },
    editItems: {
      handler() {
        if (Object.keys(this.editItems).length !== 0) {
          this.formInput = { ...this.editItems };

          if (this.editItems.expireDate === "") {
            this.notExpired = true;
          }
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchOption();
  },
  methods: {
    async fetchOption() {
      try {
        const { data: dataStudentType } = await this.axios.get(`/studentType`);
        this.itemsOptions.studentType = dataStudentType;

        const { data: dataClassType } = await this.axios.get(`/classType`);
        this.itemsOptions.classType = dataClassType;

        const { data: dataBranch } = await this.axios.get(`/branch`);
        this.itemsOptions.branch = dataBranch;
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
