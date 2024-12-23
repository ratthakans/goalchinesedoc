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
          <h4 class="text-h4 white--text font-weight-bold">Materials</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="4">
        <v-text-field
          v-model="search"
          placeholder="Search..."
          dense
          hide-details="auto"
          background-color="grey lighten-4"
          solo
          flat
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
        >
          <template #item.photo="{ item }">
            <v-avatar size="64" rounded color="grey lighten-4" class="my-2">
              <v-img
                height="64"
                width="64"
                cover
                v-if="item.photo"
                :src="`${baseUrl}${item.photo}`"
              />
              <v-img v-else :src="iconDocument" />
            </v-avatar>
          </template>

          <template #item.action="{ item }">
            <v-btn color="info" class="text-none" @click="openDoc(item)">
              view
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row v-if="flagView">
      <v-col cols="12">
        <WebViewer :initialDoc="fileUrl" :waterMark="userInfo.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
import WebViewer from "@/components/WebViewer.vue";
import iconDocument from "@/assets/document.png";

export default {
  name: "StudentMaterials",
  components: {
    WebViewer,
  },
  data() {
    return {
      iconDocument,
      isFullScreen: false,
      flagView: false,
      search: "",
      headers: [
        {
          align: "start",
          value: "material.id",
          sortable: false,
          text: "Materials No.",
        },
        { value: "photo", text: "Photo" },
        { value: "material.title", text: "Title", width: "40%" },
        {
          value: "material.materialCategory.name",
          text: "Materials Category",
          width: "10%",
        },
        {
          value: "material.materialFor.name",
          text: "Materials for teacher/student",
          width: "10%",
        },
        { value: "action", text: "Action", sortable: false },
      ],
      items: [],
      fileUrl: "",
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  created() {
    this.fetchDataMaterials();
  },
  mounted() {},
  methods: {
    toggleFullScreen() {
      // Update the fullscreen state
      this.isFullScreen = !this.isFullScreen;
    },
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(
          `/myMaterial/account/${this.userInfo.accountID}?type=all`
        );
        this.items = data;
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details,
            icon: "error",
          });
      }
    },
    openDoc(item) {
      this.flagView = false;

      if (["pptx", "pdf"].includes(item.material.documentType)) {
        this.fileUrl = `${this.baseUrl}${item.material.document}`;
      } else if (["link"].includes(item.material.documentType)) {
        const canvaLink = item.material.link;
        window.open(canvaLink, "_blank"); // Open in a new tab
      } else if (["canva"].includes(item.material.documentType)) {
        this.fileUrl = item.material.link + "?embed";
      } else if (["youtube"].includes(item.material.documentType)) {
        this.fileUrl = item.material.link;
      } else if (item.material.documentType === "mp4") {
        this.fileUrl = `${this.baseUrl}${item.material.document}`;
      }
      console.log("🚀 ~ openDoc ~  this.fileUrl:", this.fileUrl);

      setTimeout(() => {
        this.flagView = true;
      }, 200);
    },
  },
};
</script>

<style>
#WACStatusBarContainer {
  display: none !important;
}

.full-screen-iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  border: none;
}
</style>
