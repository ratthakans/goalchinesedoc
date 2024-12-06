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
                placeholder="Enter name"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <div class="d-flex justify-space-between">
                <v-radio-group
                  v-model="type"
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
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> User Name :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter user name"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Password :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                type="password"
                hide-details="auto"
                placeholder="Enter password"
              />
            </v-col>
            <v-col
              cols="0"
              md="4"
            />
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
                placeholder="Enter address"

                rows="2"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2"> Phone : </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter phone number"
              />
            </v-col>


            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Resume No :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                type="password"
                hide-details="auto"
                placeholder="Enter resume number"
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
      <v-card
        variant="outlined"
        title="Admission Detail"
      >
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                Register Date :
              </label>
              <v-text-field
                v-model="date"
                placeholder="Enter register date"
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
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Score for kids :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter Score"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Score for Adult :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter Score"
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Teacher type :
              </label>
              <v-select
                v-model="formInput.title"
                :items="[]"
                density="compact"
                variant="outlined"
                hide-details="auto"
                placeholder="Select class"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Register No :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter register number"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Upload Photo :
              </label>
              <v-file-input
                density="compact"
                variant="outlined"
                label="Choose a file..."
                hide-details="auto"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                <span class="text-red mr-2">*</span> Available for class:
              </label>
              <v-select
                v-model="formInput.title"
                :items="['Kids', 'Adult', 'Kids & Adult']"
                density="compact"
                variant="outlined"
                hide-details="auto"
                placeholder="Select class"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2">
                Language :
              </label>
              <v-text-field
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter language"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <label class="v-label mb-2 text-subtitle-2"> Inter view note details : </label>
              <v-textarea
                v-model="formInput.title"
                density="compact"
                variant="outlined"
                single-line
                hide-details="auto"
                placeholder="Enter note details"

                rows="2"
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
      <v-card
        variant="outlined"
        title="Teacher fee structure"
      >
        <v-card-text>
          <v-card
            color="grey-lighten-4"
            variant="flat"
          >
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <label class="v-label mb-2 text-subtitle-2">
                        <span class="text-red mr-2">*</span>  Update Date :
                      </label>
                      <v-text-field
                        v-model="date"
                        placeholder="Enter update date"
                        append-inner-icon="mdi-calendar"
                        single-line
                        density="compact"
                        variant="outlined"
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
                          <v-date-picker
                            v-model="date"
                            color="primary"
                          />
                        </v-menu>
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <label class="v-label mb-2 text-subtitle-2">
                        Note :
                      </label>
                      <v-text-field
                        v-model="formInput.title"
                        density="compact"
                        variant="outlined"
                        single-line
                        hide-details="auto"
                        placeholder="Enter note"
                        bg-color="surface"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <label class="v-label mb-2 text-subtitle-2"> Salary for group class : </label>
                  <v-textarea
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    placeholder="Enter salary for group class"
                    bg-color="surface"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <label class="v-label mb-2 text-subtitle-2"> Salary for group class : </label>
                  <div class="position-absolute top-0 right-0 d-flex ga-2 pa-2">
                    <v-btn
                      color="info"
                      density="compact"
                      icon="mdi-content-save"
                      variant="text"
                    />
                    <v-btn
                      color="error"
                      density="compact"
                      icon="mdi-trash-can"
                      variant="text"
                    />
                  </div>
                  <v-textarea
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    placeholder="Enter salary for group class"
                    bg-color="surface"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-btn
          color="info"
          icon
          density="compact"
          location="right top"
          position="absolute"
          right
          slim
          class="mt-2 mr-2"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>

  <v-row
    justify="center"
    dense
    class="mt-6"
  >
    <v-col cols="12">
      <v-card
        variant="outlined"
        title="Teacher score structure"
      >
        <v-card-text>
          <v-card
            color="grey-lighten-4"
            variant="flat"
          >
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="text-red mr-2">*</span>  Update score Date :
                  </label>
                  <v-text-field
                    v-model="date"
                    placeholder="Enter update score date"
                    append-inner-icon="mdi-calendar"
                    single-line
                    density="compact"
                    variant="outlined"
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
                      <v-date-picker
                        v-model="date"
                        color="primary"
                      />
                    </v-menu>
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-row>
                    <v-col
                      cols="12"
                      md=""
                    >
                      <label class="v-label mb-2 text-subtitle-2">
                        Total score :
                      </label>
                      <v-text-field
                        v-model="formInput.title"
                        density="compact"
                        variant="outlined"
                        single-line
                        hide-details="auto"
                        bg-color="surface"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md=""
                    >
                      <label class="v-label mb-2 text-subtitle-2">
                        Score up :
                      </label>
                      <v-text-field
                        v-model="formInput.title"
                        density="compact"
                        variant="outlined"
                        single-line
                        hide-details="auto"
                        bg-color="surface"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md=""
                    >
                      <label class="v-label mb-2 text-subtitle-2">
                        Score down :
                      </label>
                      <v-text-field
                        v-model="formInput.title"
                        density="compact"
                        variant="outlined"
                        single-line
                        hide-details="auto"
                        bg-color="surface"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    Score after update :
                  </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    bg-color="surface"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="8"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="text-red mr-2">*</span>  Resonal for update :
                  </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    bg-color="surface"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <label class="v-label mb-2 text-subtitle-2">
                    <span class="text-red mr-2">*</span>  admin :
                  </label>
                  <v-text-field
                    v-model="formInput.title"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    bg-color="surface"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-btn
          color="info"
          icon
          density="compact"
          location="right top"
          position="absolute"
          right
          slim
          class="mt-2 mr-2"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card>
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
    };
  },
};
</script>

<style scoped></style>
