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
                  <span class="red--text mr-2">*</span> Student Name :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter Student name"
                />
              </v-col>
              <v-col cols="12" md="auto">
                <label class="v-label text-subtitle-2"
                  ><span class="red--text mr-2">*</span> Gender :
                </label>
                <v-radio-group row hide-details="auto">
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
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  persistent-placeholder
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  Date of Birth :
                </label>
                <v-text-field
                  v-model="date"
                  placeholder="Enter date of birth"
                  append-inner-icon="mdi-calendar"
                  single-line
                  dense
                  outlined
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

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"> Address : </label>
                <v-textarea
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter address"
                  rows="2"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2"> Phone : </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter phone number"
                />
              </v-col>

              <v-col cols="12" md="4">
                <div class="d-flex justify-space-between align-end">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span> School name :
                  </label>
                  <v-checkbox
                    label="not yet"
                    hide-details="auto"
                    dense
                    class="my-0 py-0"
                  />
                </div>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  type="password"
                  hide-details="auto"
                  placeholder="Enter school name"
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
                  <span class="red--text mr-2">*</span> User Name :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter user name"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Password :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  type="password"
                  hide-details="auto"
                  placeholder="Enter password"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Account exit date :
                </label>
                <v-text-field
                  v-model="date"
                  placeholder="Enter date "
                  append-inner-icon="mdi-calendar"
                  single-line
                  dense
                  outlined
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
                  Addmission Date :
                </label>
                <v-text-field
                  v-model="date"
                  placeholder="Enter addmission date"
                  append-inner-icon="mdi-calendar"
                  single-line
                  dense
                  outlined
                  hide-details="auto"
                >
                  <v-menu
                    activator="parent"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <v-date-picker v-model="date" color="primary" />
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Student type :
                </label>
                <v-select
                  v-model="formInput.title"
                  :items="[]"
                  dense
                  outlined
                  hide-details="auto"
                  placeholder="Select class"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Class Type :
                </label>
                <v-select
                  v-model="formInput.title"
                  :items="[]"
                  dense
                  outlined
                  hide-details="auto"
                  placeholder="Select class"
                />
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  End Class Date :
                </label>
                <v-text-field
                  v-model="date"
                  placeholder="Enter addmission date"
                  append-inner-icon="mdi-calendar"
                  single-line
                  dense
                  outlined
                  hide-details="auto"
                >
                  <v-menu
                    activator="parent"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <v-date-picker v-model="date" color="primary" />
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Admission No. :
                </label>
                <v-text-field
                  v-model="formInput.title"
                  dense
                  outlined
                  single-line
                  hide-details="auto"
                  placeholder="Enter addmission number"
                />
              </v-col>
              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  <span class="red--text mr-2">*</span> Upload Photo :
                </label>
                <v-file-input
                  dense
                  outlined
                  label="Choose a file..."
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-col cols="12">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span> Student Status :
                  </label>
                  <v-select
                    v-model="formInput.title"
                    :items="[]"
                    dense
                    outlined
                    hide-details="auto"
                    placeholder="Select class"
                  />
                </v-col>
                <v-col cols="12">
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="red--text mr-2">*</span> Branch :
                  </label>
                  <v-select
                    v-model="formInput.title"
                    :items="[]"
                    dense
                    outlined
                    hide-details="auto"
                    placeholder="Select class"
                  />
                </v-col>
              </v-col>

              <v-col cols="12" md="4">
                <label class="v-label mb-2 text-subtitle-2">
                  extra note details :
                </label>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" dense class="mt-6">
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Student fee structure</v-card-title>
          <v-card-text>
            <v-card color="grey-lighten-4" variant="flat">
              <div style="position: absolute; top: 5; right: 0">
                <v-btn color="info" dense icon>
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>
                <v-btn color="error" dense icon>
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Pay Date :
                    </label>
                    <v-text-field
                      v-model="date"
                      placeholder="Enter update date"
                      append-inner-icon="mdi-calendar"
                      single-line
                      dense
                      outlined
                      hide-details="auto"
                      bg-color="surface"
                    >
                      <v-menu
                        activator="parent"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <v-date-picker v-model="date" color="primary" />
                      </v-menu>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Class type :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      disabled
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Branch :
                    </label>
                    <v-select
                      v-model="formInput.title"
                      :items="[]"
                      dense
                      outlined
                      hide-details="auto"
                      placeholder="Select class"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Amount :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter amount"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Class fee [Bath] :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter fee"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      Discount [Bath] :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter discount"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2"> Note : </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter note"
                      bg-color="surface"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
          <v-btn color="info" rounded absolute right top small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" dense class="mt-6">
      <v-col cols="12">
        <v-card outlined>
          <v-card-title primary-title> Student point structure</v-card-title>
          <v-card-text>
            <v-card color="grey-lighten-4" variant="flat">
              <div style="position: absolute; top: 5; right: 0">
                <v-btn color="info" dense icon>
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>
                <v-btn color="error" dense icon>
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Update point Date :
                    </label>
                    <v-text-field
                      v-model="date"
                      placeholder="Enter update score date"
                      append-inner-icon="mdi-calendar"
                      single-line
                      dense
                      outlined
                      hide-details="auto"
                      bg-color="surface"
                    >
                      <v-menu
                        activator="parent"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <v-date-picker v-model="date" color="primary" />
                      </v-menu>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-row>
                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          Total points :
                        </label>
                        <v-text-field
                          v-model="formInput.title"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          bg-color="surface"
                        />
                      </v-col>

                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          points up :
                        </label>
                        <v-text-field
                          v-model="formInput.title"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          bg-color="surface"
                        />
                      </v-col>
                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          points down :
                        </label>
                        <v-text-field
                          v-model="formInput.title"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          bg-color="surface"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      points after update :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="8">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Resonal for update :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      bg-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> admin :
                    </label>
                    <v-text-field
                      v-model="formInput.title"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      bg-color="surface"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
          <v-btn color="info" rounded absolute right top small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
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
      date: null,
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
