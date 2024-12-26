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
          <h4 class="text-h4 white--text font-weight-bold">Library</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(item, i) in itemsLibrary" :key="i" cols="3">
        <v-card
          class="mx-auto"
          max-width="344"
          rounded="lg"
          @click="openDoc(item)"
        >
          <v-img
            height="200px"
            :src="
              item?.material?.photo
                ? `${baseUrl}${item?.material?.photo}`
                : iconDocument
            "
          />

          <v-card-title class="info white--text">
            {{ item?.material?.title }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row v-show="showDocument">
      <v-col cols="12" v-if="fileType === 'pdf'">
        <WebViewer
          :initialDoc="fileUrl"
          :hideHeader="true"
          :waterMark="userInfo.name"
        />
      </v-col>
      <v-col cols="12" v-else>
        <div class="d-flex justify-end align-center">
          <v-btn @click="isFullScreen = !isFullScreen" icon>
            <v-icon>mdi-fullscreen</v-icon>
          </v-btn>
        </div>

        <div style="position: relative">
          <iframe
            :class="{ 'full-screen-iframe': isFullScreen }"
            id="myIframe"
            ref="myIframe"
            :src="fileUrl"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div
            :style="{
              position: isFullScreen ? 'fixed' : 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30px',
              'background-color': 'white',
              'z-index': '10000',
            }"
            class="d-flex justify-center align-center"
          >
            <v-btn v-if="isFullScreen" @click="isFullScreen = !isFullScreen">
              {{ isFullScreen ? "Exit Full Screen" : "Go Full Screen" }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
import iconDocument from "@/assets/document.png";

import WebViewer from "@/components/WebViewer.vue";
export default {
  name: "StudentLibrary",
  components: {
    WebViewer,
  },
  data() {
    return {
      fileUrl: "",
      iconDocument,
      isFullScreen: false,
      showDocument: false,
      itemsLibrary: [],
      fileType: null,
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  mounted() {
    this.fetchDataMaterials();

    // this.$nextTick(() => {
    //   this.initWebViewer();
    // });
  },
  methods: {
    // initWebViewer() {
    //   WebViewer(
    //     {
    //       // disabledElements: ["default-top-header"],
    //       path: `${process.env.BASE_URL}webviewer`,
    //       initialDoc: this.fileUrl, //`${this.baseUrl}${item.material.document}`, //"https://getsamplefiles.com/download/pptx/sample-2.pptx",
    //       licenseKey: process.env.VUE_APP_PDF_LICENSE, // sign up to get a free trial key at https://dev.apryse.com
    //     },
    //     this.$refs.viewer
    //   ).then((instance) => {
    //     // hide the ribbons
    //     instance.UI.disableElements(["default-ribbon-group"]);
    //     instance.UI.disableElements(["tools-header"]);
    //     instance.UI.disableElements(["leftPanelButton"]);
    //     instance.UI.disableElements(["searchPanelToggle"]);
    //     instance.UI.disableElements(["notesPanelToggle"]);
    //     instance.UI.disableElements(["groupedLeftHeaderButtons"]);

    //     const { documentViewer } = instance.Core;

    //     documentViewer.setWatermark({
    //       // Draw diagonal watermark in middle of the document
    //       diagonal: {
    //         fontSize: 25, // or even smaller size
    //         fontFamily: "sans-serif",
    //         color: "red",
    //         opacity: 50, // from 0 to 100
    //         text: this.userInfo.name,
    //       },
    //     });
    //   });
    // },
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(
          `/myMaterial/account/${this.userInfo.accountID}?type=library`
        );
        this.itemsLibrary = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    openDoc(item) {
      this.fileUrl = "";
      this.fileType = "";
      this.showDocument = true;
      // if (process.env.NODE_ENV === "development") {
      //   this.fileUrl = `https://view.officeapps.live.com/op/embed.aspx?src=https://getsamplefiles.com/download/pptx/sample-2.pptx`;
      // } else {
      if (["pptx"].includes(item?.material?.documentType))
        this.fileUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${this.baseUrl}${item?.material?.document}`;
      else if (item?.material?.documentType === "pdf") {
        this.fileUrl = `${this.baseUrl}${item?.material?.document}`;
        this.fileType = "pdf";
      } else if (["link"].includes(item?.material?.documentType)) {
        const canvaLink = item?.material?.link;
        window.open(canvaLink, "_blank"); // Open in a new tab
      } else if (["canva"].includes(item?.material?.documentType)) {
        this.fileUrl = item?.material?.link + "?embed";
      } else if (["youtube"].includes(item?.material?.documentType)) {
        this.fileUrl = item?.material?.link;
      } else if (item?.material?.documentType === "mp4") {
        this.fileUrl = `${this.baseUrl}${item?.material?.document}`;
      }

      console.log("object :>> ", this.fileUrl);
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
