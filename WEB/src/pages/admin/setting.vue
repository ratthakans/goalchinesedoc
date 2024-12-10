<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          rounded="lg"
          color="info"
          class="mx-auto d-flex justify-center align-center"
          height="50"
          width="100%"
        >
          <h4 class="text-h4 white--text font-weight-bold">Setting</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12" md="3" class="d-flex align-start mt-2">
            <label class="v-label text-body-2 font-weight-bold"
              >Upload School Logo :
            </label>
          </v-col>

          <v-col cols="12" md="9">
            <v-file-input
              dense
              outlined
              label="Choose a file..."
              hide-details="auto"
            />
            <v-avatar
              border="surface lg opacity-100"
              class="mt-2 mx-2"
              rounded="xl"
              size="150"
            >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>

            <v-btn color="error" class="text-none mt-2"> Remove Logo </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12" md="3" class="d-flex align-start mt-2">
            <label class="v-label text-body-2 font-weight-bold"
              >Academy Name :
            </label>
          </v-col>

          <v-col cols="12" md="9">
            <v-text-field dense hide-details="auto" outlined />
            <v-btn color="success" depressed class="text-none mt-2">
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <h6 class="text-h6">Others setting</h6>
      </v-col>
      <v-col cols="10">
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">Branch </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.createBranch">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter branch"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.createBranch = !isvisible.createBranch"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.createBranch = !isvisible.createBranch"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Materials type
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.materialsType">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Materials type"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.materialsType = !isvisible.materialsType"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.materialsType = !isvisible.materialsType"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Class type
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.classType">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Class type"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.classType = !isvisible.classType"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.classType = !isvisible.classType"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Student type
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.studentType">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Student type"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.studentType = !isvisible.studentType"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.studentType = !isvisible.studentType"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Teacher type
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.teacherType">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Teacher type"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.teacherType = !isvisible.teacherType"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.teacherType = !isvisible.teacherType"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Materials for
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.materialsFor">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Materials for"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.materialsFor = !isvisible.materialsFor"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.materialsFor = !isvisible.materialsFor"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Materials category
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.materialsCategory">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter Materials category"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="
                      isvisible.materialsCategory = !isvisible.materialsCategory
                    "
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="
                    isvisible.materialsCategory = !isvisible.materialsCategory
                  "
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Currency
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip class="mx-2" size="large" closable label rounded="lg">
                  B1
                </v-chip>
              </v-col>

              <v-col cols="4" v-if="isvisible.currency">
                <div class="d-flex">
                  <v-text-field
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    placeholder="Enter currency"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="isvisible.currency = !isvisible.currency"
                    >save</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="isvisible.currency = !isvisible.currency"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-btn color="info" class="text-none"> view history details </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SettingPage",
  data() {
    return {
      isvisible: {
        createBranch: false,
        materialsType: false,
        classType: false,
        studentType: false,
        teacherType: false,
        materialsFor: false,
        materialsCategory: false,
        currency: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
