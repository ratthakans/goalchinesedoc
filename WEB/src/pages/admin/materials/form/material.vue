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
              v-if="!formInput.photo || (flagEdit && !photoFile)"
              v-model="photoFile"
              dense
              outlined
              hide-details="auto"
              :placeholder="photoPlaceholder"
              persistent-placeholder
              accept="image/*"
              @change="onPhotoChange"
            >
            </v-file-input>
            <v-text-field
              v-else
              :value="
                photoFile ? photoFile.name : getDocumentName(formInput.photo)
              "
              dense
              outlined
              hide-details="auto"
              readonly
              append-icon="mdi-paperclip"
            >
              <template v-slot:append>
                <v-icon>mdi-paperclip</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="auto" v-if="flagEdit && formInput.photo">
            <v-btn color="error" icon @click="deletePhoto">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
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
          v-if="!formInput.document || (flagEdit && documentFile)"
          v-model="documentFile"
          dense
          outlined
          hide-details="auto"
          placeholder="No file chosen"
          persistent-placeholder
          :show-size="false"
          @change="onDocumentChange"
        >
        </v-file-input>
        <v-text-field
          v-else
          :value="documentFile ? documentFile.name : getOriginalDocumentName(editItems)"
          dense
          outlined
          hide-details="auto"
          readonly
          append-icon="mdi-paperclip"
          @click="clearDocument"
        >
          <template v-slot:append>
            <v-icon>mdi-paperclip</v-icon>
          </template>
        </v-text-field>
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
        description: "",
        link: "",
        photo: null,
        documentType: "",
      },
      photoFile: null,
      documentFile: null,
      items: {
        materialType: [],
        materialFor: [],
        materialCategory: [],
      },
    };
  },
  computed: {
    photoPlaceholder() {
      if (this.flagEdit && this.editItems && this.editItems.photo) {
        return this.getDocumentName(this.editItems.photo);
      }
      return "No file chosen";
    },
    documentPlaceholder() {
      if (this.flagEdit && this.editItems && this.editItems.document) {
        return this.getDocumentName(this.editItems.document);
      }
      return "No file chosen";
    },
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
          this.formInput = { ...this.editItems };
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchData("materialType", "materialType");
    this.fetchData("materialFor", "materialFor");
    this.fetchData("materialCategory", "materialCategory");
  },
  methods: {
    getDocumentName(documentPath) {
      if (!documentPath) return "";
      const filename = documentPath.split("/").pop() || documentPath;
      // Remove timestamp suffix if present (e.g., "filename-1234567890-123456789.pdf" -> "filename.pdf")
      const cleanName = filename.replace(/-\d+-\d+(\.[^.]+)$/, "$1");
      // Decode Unicode characters if needed
      try {
        return decodeURIComponent(cleanName);
      } catch (e) {
        return cleanName;
      }
    },
    getOriginalDocumentName(material) {
      if (material && material.originalDocumentName) {
        return material.originalDocumentName;
      }
      return this.getDocumentName(material ? material.document : "");
    },
    onPhotoChange(file) {
      this.formInput.photo = file;
    },
    onDocumentChange(file) {
      this.formInput.document = file;
    },
    clearDocument() {
      this.documentFile = null;
      this.formInput.document = null;
    },
    async fetchData(uri, items) {
      // fetch data from api
      try {
        const { data } = await this.axios.get(`/${uri}`);
        this.items[items] = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deletePhoto() {
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;

      //delete data from api
      try {
        const { data } = await this.axios.delete(
          `/materials/image/${this.$route.params.id}`
        );
        this.$swal(data?.message, "", "success");
        this.fetchData();
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
