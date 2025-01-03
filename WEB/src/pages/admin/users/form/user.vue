<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card outlined title="Personal Detail">
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Personal Name :
                </label>
                <v-text-field
                  v-model="formInput.name"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter Personal name"
                  persistent-placeholder
                  :rules="[(v) => !!v || 'Personal name is required']"
                />
              </v-col>
              <v-col cols="12" md="auto">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span> Gender :
                </label>
                <v-radio-group
                  v-model="formInput.gender"
                  row
                  hide-details="auto"
                >
                  <v-radio label="Male" value="Male" />
                  <v-radio label="Female" value="Female" />
                  <v-radio label="Other" value="Other" />
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="">
                <label class="v-label mb-2 text-subtitle-2"
                  ><span class="red--text mr-2">*</span> Age :
                </label>
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
                  Date of Birth :
                </label>

                <v-menu
                  ref="menu"
                  v-model="menu"
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

              <v-col cols="12" md="8">
                <v-row>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> User Name:
                    </label>
                    <v-text-field
                      v-model="formInput.username"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter user name"
                      persistent-placeholder
                      :disabled="flagEdit"
                      :rules="[(v) => !!v || 'User Name is required']"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2"> Duty : </label>
                    <v-text-field
                      v-model="formInput.duty"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter Duty"
                      persistent-placeholder
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> User Password:
                    </label>

                    <v-text-field
                      v-model="formInput.password"
                      dense
                      outlined
                      single-line
                      :type="showPassword ? 'text' : 'password'"
                      hide-details="auto"
                      placeholder="Enter password"
                      persistent-placeholder
                      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                      @click:append="showPassword = !showPassword"
                      :rules="[
                        (v) =>
                          flagEdit ? true : !!v || 'Password is required',
                      ]"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="v-label mb-2 text-subtitle-2">
                      Phone :
                    </label>
                    <v-text-field
                      v-model="formInput.phone"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter phone number"
                      persistent-placeholder
                    />
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"> Address : </label>
                <v-textarea
                  v-model="formInput.address"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter address"
                  persistent-placeholder
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" dense class="mt-6">
      <v-col cols="12">
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>
                  <h6 class="text-h6">Permissions Access</h6>
                </td>
                <td colspan="4">
                  <div class="d-flex justify-end">
                    <v-checkbox
                      v-model="isSelectAll"
                      :indeterminate="isIndeterminate"
                      label="Select All"
                    />
                  </div>
                </td>
              </tr>

              <tr v-for="permission in permissions" :key="permission.name">
                <td>{{ permission.name }}</td>
                <td>
                  <div class="d-flex justify-end">
                    <v-checkbox v-model="permission.view" label="View" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <v-checkbox
                      v-show="permission.flagEdit"
                      v-model="permission.edit"
                      label="Edit"
                    />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <v-checkbox
                      v-show="permission.flagDelete"
                      v-model="permission.delete"
                      label="Delete"
                    />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <v-checkbox
                      v-show="permission.flagCreate"
                      v-model="permission.create"
                      label="Create"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    editItems: {
      type: Object,
      default: () => ({}),
    },
    flagEdit: {
      type: Boolean,
      default: false,
    },
    userPermissions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      date: null,
      menu: false,
      activePicker: null,
      isSelectAll: false,
      age: 0,
      showPassword: false,
      formInput: {
        name: "",
        gender: "Male",
        dateOfBirth: "",
        username: "",
        password: "",
        duty: "",
        phone: "",
        address: "",
      },

      // 👉 Permission List
      permissions: [
        {
          name: "Dashboard",
          link: "/admin/dashboard",
          view: true,
          edit: false,
          flagEdit: true,
          flagDelete: false,
          flagCreate: false,
        },
        {
          name: "Class Management",
          link: "/admin/classes/all",
          view: false,
          edit: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Class Calendar",
          link: "/admin/classes/calendar",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },

        {
          name: "Check Class Attendance",
          link: "/admin/classes/attendance",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Student Management",
          link: "/admin/student/all",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },

        {
          name: "New Student addmission",
          link: "/admin/student/create",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Student Fee Management",
          link: "/admin/student/fee",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Student Point Management",
          link: "/admin/student/point",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },

        {
          name: "Student Metrials Management",
          link: "/admin/student/materials",
          view: false,
          edit: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Teacher Management",
          link: "/admin/teacher/all",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Teacher fee Management",
          link: "/admin/teacher/create",
          view: false,
          edit: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Teacher Metrials Management",
          link: "/admin/teacher/materials",
          view: false,
          edit: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Metrials Management",
          link: "/admin/materials",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Users Management",
          link: "/admin/users",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        {
          name: "Library Management",
          link: "/admin/library",
          view: false,
          edit: false,
          delete: false,
          create: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
        // {
        //   name: "Library Management",
        //   view: false,
        // },
        {
          name: "Setting",
          link: "/admin/setting",
          view: false,
          edit: false,
          flagEdit: true,
          flagDelete: true,
          flagCreate: true,
        },
      ],
    };
  },
  computed: {
    isIndeterminate() {
      return (
        this.permissions.filter(
          (permission) =>
            permission.view ||
            permission.edit ||
            permission.delete ||
            permission.create
        ).length > 0 && !this.isSelectAll
      );
    },
  },
  watch: {
    formInput: {
      handler() {
        this.$emit("input", {
          ...this.formInput,
          permissions: this.permissions.filter(
            (permission) =>
              permission.view ||
              permission?.edit ||
              permission?.delete ||
              permission?.create
          ),
        });
      },
      deep: true,
    },
    permissions: {
      handler() {
        this.$emit("input", {
          ...this.formInput,
          permissions: this.permissions.filter(
            (permission) =>
              permission.view ||
              permission?.edit ||
              permission?.delete ||
              permission?.create
          ),
        });
      },
      deep: true,
    },
    editItems: {
      handler() {
        if (Object.keys(this.editItems).length !== 0) {
          this.formInput = { ...this.editItems };
        }
      },
      deep: true,
    },

    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    "formInput.dateOfBirth": {
      handler() {
        if (this.formInput.dateOfBirth) {
          this.age = this.calulateAge(this.formInput.dateOfBirth);
        }
      },
    },
    isSelectAll(val) {
      this.permissions.forEach((permission) => {
        permission.view = val;
        permission.edit = val;
        permission.delete = val;
        permission.create = val;
      });
    },
    userPermissions: {
      handler() {
        if (!this.userPermissions.length) return;
        this.permissions.forEach((permission) => {
          const userPermission = this.userPermissions.find(
            (userPermission) => userPermission.name === permission.name
          );
          if (userPermission) {
            permission.view = userPermission.view;
            permission.edit = userPermission.edit;
            permission.delete = userPermission.delete;
            permission.create = userPermission.create;
          }
        });
        console.log("  this.permissions :>> ", this.permissions);
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
