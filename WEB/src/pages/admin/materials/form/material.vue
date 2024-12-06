<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="d-flex ga-2 align-center"
    >
      <v-subheader>Materials Information</v-subheader>
    </v-col>
    <v-col
      cols="12"
      md="auto"
      class="d-flex align-center"
    >
      <label class="v-label text-body-1 font-weight-bold pr-10">Type </label>
      <v-radio-group
        v-model="type"
        inline
        hide-details="auto"
      >
        <v-radio
          label="Study / Teaching Materials"
          value="Study"
        />
        <v-radio
          label="Library Materials"
          value="Library"
        />
      </v-radio-group>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        density="compact"
        hide-details="auto"
        persistent-placeholder
        variant="outlined"
      >
        <template #label>
          <span class="text-red">*</span> Materials title :
        </template>
      </v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-select
        density="compact"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
      >
        <template #label>
          <span class="text-red">*</span> Materials category :
        </template>
      </v-select>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-select
        density="compact"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
      >
        <template #label>
          <span class="text-red">*</span> Materials for :
        </template>
      </v-select>
    </v-col>
  </v-row>

  <v-row>
    <v-col
      cols="12"
      class="d-flex ga-2 align-center"
    >
      <v-subheader>Upload Materials</v-subheader>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        density="compact"
        hide-details="auto"
        persistent-placeholder
        variant="outlined"
      >
        <template #label>
          <span class="text-red">*</span> Materials No, :
        </template>
      </v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-file-input
        density="compact"
        variant="outlined"
        hide-details="auto"
        placeholder="No file chosen"
        persistent-placeholder
      >
        <template #label>
          <span class="text-red">*</span> Materials Document :
        </template>
      </v-file-input>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-textarea
        density="compact"
        hide-details="auto"
        persistent-placeholder
        label="Description"
        variant="outlined"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        density="compact"
        hide-details="auto"
        persistent-placeholder
        variant="outlined"
        label="Materials Link :"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
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
