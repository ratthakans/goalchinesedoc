<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="d-flex ga-2 align-center">
        <h6 class="text-h6">Materials Information</h6>
      </v-col>
      <v-col cols="12" md="auto" class="d-flex align-center">
        <label class="v-label text-body-1 pr-10">Type </label>
        <v-radio-group v-model="type" row hide-details="auto">
          <v-radio label="Study / Teaching Materials" value="Study" />
          <v-radio label="Library Materials" value="Library" />
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field dense hide-details="auto" persistent-placeholder outlined>
          <template #label>
            <span class="red--text">*</span> Materials title :
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select dense outlined hide-details="auto" persistent-placeholder>
          <template #label>
            <span class="red--text">*</span> Materials category :
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select dense outlined hide-details="auto" persistent-placeholder>
          <template #label>
            <span class="red--text">*</span> Materials for :
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <h6 class="text-h6">Upload Materials</h6>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field dense hide-details="auto" persistent-placeholder outlined>
          <template #label>
            <span class="red--text">*</span> Materials No, :
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-file-input
          dense
          outlined
          hide-details="auto"
          placeholder="No file chosen"
          persistent-placeholder
        >
          <template #label>
            <span class="red--text">*</span> Materials Document :
          </template>
        </v-file-input>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          label="Materials Link Type :"
          :items="['pptx', 'pdf', 'mp4', 'youtube', 'canva']"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          label="Materials Link :"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea
          dense
          hide-details="auto"
          persistent-placeholder
          label="Description"
          outlined
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormMaterial",
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
