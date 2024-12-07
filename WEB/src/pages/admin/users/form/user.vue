<template>
  <v-row>
    <v-col cols="12">
      <v-card
        variant="outlined"
        title="Personal Detail"
      >
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Personal Name :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter student name"
                persistent-placeholder
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <div class="d-flex justify-space-between">
                <v-radio-group
                  inline
                  hide-details="auto"
                >
                  <template #label>
                    <div class="text-subtitle-2">
                      <span class="text-red mr-2">*</span> Gender :
                    </div>
                  </template>
                  <v-radio
                    label="Male"
                    value="Male"
                  />
                  <v-radio
                    label="Female"
                    value="Female"
                  />
                  <v-radio
                    label="Other"
                    value="Other"
                  />
                </v-radio-group>

                <div>
                  <label class="v-label mb-2 text-subtitle-2"> Age : </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    persistent-placeholder
                  />
                </div>
              </div>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                Date of Birth :
              </label>
              <v-text-field
                v-model="date"
                placeholder="Enter date of birth"
                append-inner-icon="mdi-calendar"
                single-line
                density="compact"
                variant="outlined"
                hide-details="auto"
              >
                <v-menu
                  activator="parent"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <v-date-picker
                    v-model="date"
                    color="primary"
                    @input="menu = false"
                  />
                </v-menu>
              </v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="8"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="text-red mr-2">*</span> User Name:
                  </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    placeholder="Enter student name"
                    persistent-placeholder
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <label class="v-label mb-2 text-subtitle-2"> Duty : </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    placeholder="Enter student name"
                    persistent-placeholder
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="text-red mr-2">*</span> User Password:
                  </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    type="password"
                    hide-details="auto"
                    placeholder="Enter student name"
                    persistent-placeholder
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <label class="v-label mb-2 text-subtitle-2"> Phone : </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    placeholder="Enter student name"
                    persistent-placeholder
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2"> Address : </label>
              <v-textarea
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter student name"
                persistent-placeholder
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row
    justify="center"
    dense
    class="mt-6"
  >
    <v-col cols="12">
      <v-table>
        <tbody>
          <tr>
            <td>
              <h6 class="text-h6">
                Permissions Access
              </h6>
            </td>
            <td colspan="3">
              <div class="d-flex justify-end">
                <v-checkbox
                  v-model="isSelectAll"
                  v-model:indeterminate="isIndeterminate"
                  label="Select All"
                  hide-details
                />
              </div>
            </td>
          </tr>

          <tr
            v-for="permission in permissions"
            :key="permission.name"
          >
            <td>{{ permission.name }}</td>
            <td>
              <div class="d-flex justify-end">
                <v-checkbox
                  v-show="Object.hasOwn(permission, 'view')"
                  v-model="permission.view"
                  label="View"
                  hide-details
                />
              </div>
            </td>
            <td>
              <div class="d-flex justify-end">
                <v-checkbox
                  v-show="Object.hasOwn(permission, 'edit')"
                  v-model="permission.edit"
                  label="Edit / Delete"
                  hide-details
                />
              </div>
            </td>
            <td>
              <div class="d-flex justify-end">
                <v-checkbox
                  v-show="Object.hasOwn(permission, 'create')"
                  v-model="permission.create"
                  label="Create"
                  hide-details
                />
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      formInput: {
        title: "",
        category: "",
        type: "",
        image: "",
      },

      // 👉 Permission List
      permissions: [
        {
          name: "Dashboard",
          view: false,
          edit: false,
        },
        {
          name: "Class Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Class Calender",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Class Check",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Student Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Student Metrials Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Teacher Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Teacher Metrials Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Metrials Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Users Management",
          view: false,
          edit: false,
          create: false,
        },
        {
          name: "Library Management",
          view: false,
        },
        {
          name: "Setting",
          view: false,
        },
      ],
    };
  },
  computed: {
    name() {
      return this.data
    }
  },
};
</script>

<style scoped></style>
