<template>
  <div>
    <v-row dense>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <h6 class="text-h6">Materials Information</h6>
      </v-col>

      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials title :
        </label>
        <v-text-field
          v-model="formInput.title"
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          :rules="[(v) => !!v || 'Title is required']"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials type :
        </label>
        <v-select
          v-model="formInput.materialTypeID"
          :items="items.materialType"
          item-text="name"
          item-value="id"
          dense
          outlined
          hide-details="auto"
          persistent-placeholder
          :rules="[(v) => !!v || 'Type is required']"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials category :
        </label>
        <v-select
          v-model="formInput.categoryID"
          :items="items.materialCategory"
          item-text="name"
          item-value="id"
          dense
          outlined
          hide-details="auto"
          persistent-placeholder
          :rules="[(v) => !!v || 'Category is required']"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials for :
        </label>
        <v-select
          v-model="formInput.materialForID"
          :items="items.materialFor"
          item-text="name"
          item-value="id"
          dense
          outlined
          hide-details="auto"
          persistent-placeholder
          :rules="[(v) => !!v || 'Materials for is required']"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-row align="center">
          <v-col cols="">
            <label class="v-label mb-2 text-subtitle-2"> Upload Photo : </label>
            <v-file-input
              v-model="formInput.newPhoto"
              dense
              outlined
              hide-details="auto"
              :placeholder="currentPhotoName || 'No file chosen'"
              persistent-placeholder
              accept="image/*"
            >
            </v-file-input>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <h6 class="text-h6">Upload Materials</h6>
      </v-col>

      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials No :
        </label>
        <v-text-field
          v-model="formInput.no"
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          :rules="[(v) => !!v || 'Materials No is required']"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          Materials Document :
        </label>
        <v-file-input
          v-model="formInput.newDocument"
          dense
          outlined
          hide-details="auto"
          :placeholder="currentDocumentName || 'No file chosen'"
          persistent-placeholder
        >
        </v-file-input>
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Materials Document Type :
        </label>
        <v-select
          v-model="formInput.documentType"
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          single-line
          :items="['pptx', 'pdf', 'mp4', 'youtube', 'canva']"
          :rules="[(v) => !!v || 'Materials Document Type is required']"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">Materials Link : </label>
        <v-text-field
          v-model="formInput.link"
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          single-line
        />
      </v-col>
      <v-col cols="12" md="6">
        <label class="v-label mb-2 text-subtitle-2">Description : </label>
        <v-textarea
          v-model="formInput.description"
          dense
          hide-details="auto"
          persistent-placeholder
          outlined
          rows="2"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormMaterial",
  props: {
    editItems: Object,
    flagEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formInput: {
        title: "",
        categoryID: "",
        materialForID: "",
        materialTypeID: "",
        no: "",
        document: null,
        newDocument: null,
        description: "",
        link: "",
        photo: null,
        newPhoto: null,
        documentType: "",
      },
      currentDocument: null,
      currentPhoto: null,
      items: {
        materialType: [],
        materialFor: [],
        materialCategory: [],
      },
    };
  },
  watch: {
    formInput: {
      handler() {
        this.$emit("input", this.formInput);
      },
      deep: true,
    },
    editItems: {
      handler() {
        if (this.editItems) {
          this.currentDocument = this.editItems.document;
          this.currentPhoto = this.editItems.photo;
          this.formInput = {
            ...this.editItems,
            document: null,
            newDocument: null,
            photo: null,
            newPhoto: null,
          };
        }
      },
      deep: true,
    },
  },
  computed: {
    documentUrl() {
      if (!this.currentDocument) return "";
      return `${this.axios.defaults.baseURL?.replace("/api", "")}/${
        this.currentDocument
      }`;
    },
    currentDocumentName() {
      if (!this.currentDocument) return "";
      return this.currentDocument.split("/").pop();
    },
    photoUrl() {
      if (!this.currentPhoto) return "";
      return `${this.axios.defaults.baseURL?.replace("/api", "")}/${
        this.currentPhoto
      }`;
    },
    currentPhotoName() {
      if (!this.currentPhoto) return "";
      return this.currentPhoto.split("/").pop();
    },
  },
  mounted() {
    this.fetchData("materialType", "materialType");
    this.fetchData("materialFor", "materialFor");
    this.fetchData("materialCategory", "materialCategory");
  },
  methods: {
    async fetchData(uri, items) {
      // fetch data from api
      try {
        const { data } = await this.axios.get(`/${uri}`);
        this.items[items] = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
