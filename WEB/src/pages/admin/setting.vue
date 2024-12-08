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
        <v-subheader>Others setting</v-subheader>
      </v-col>
      <v-col cols="10">
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">Branch </label>
          </v-col>
          <v-col cols="12">
            <v-chip class="mx-2" size="large" closable label rounded="lg">
              B1
            </v-chip>

            <v-btn color="info" fab dark small depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Materials type
            </label>
          </v-col>
          <v-col cols="12">
            <v-chip class="mx-2" size="large" closable label rounded="lg">
              B1
            </v-chip>

            <v-btn color="info" fab dark small depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Class tyle
            </label>
          </v-col>
          <v-col cols="12">
            <v-chip class="mx-2" size="large" closable label rounded="lg">
              B1
            </v-chip>

            <v-btn color="info" fab dark small depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Student tyle
            </label>
          </v-col>
          <v-col cols="12">
            <v-chip class="mx-2" size="large" closable label rounded="lg">
              B1
            </v-chip>

            <v-btn color="info" fab dark small depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold">
              Teacher tyle
            </label>
          </v-col>
          <v-col cols="12">
            <v-chip class="mx-2" size="large" closable label rounded="lg">
              B1
            </v-chip>

            <v-btn color="info" fab dark small depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
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
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
