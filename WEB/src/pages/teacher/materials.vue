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
            <v-avatar
              size="50"
              :color="item?.material?.photo ? '' : 'grey lighten-4'"
              :class="
                item?.material?.photo ? '' : 'v-avatar-light-bg primary--text'
              "
              :variant="!item?.material?.photo ? 'tonal' : undefined"
              tile
              rounded="lg"
            >
              <v-img
                v-if="item?.material?.photo"
                :src="`${baseUrl}${item?.material?.photo}`"
              />
              <v-icon v-else>mdi-notebook-edit</v-icon>
            </v-avatar>
          </template>

          <template #item.action="{}">
            <v-btn color="info" class="text-none" @click="openDoc">
              view
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <!-- <div ref="viewer"></div>
        <div class="pdf-container"></div> -->
        <div class="d-flex justify-end align-center">
          <v-btn @click="toggleFullScreen" icon>
            <v-icon>mdi-fullscreen</v-icon>
          </v-btn>
        </div>

        <div style="position: relative">
          <iframe
            :class="{ 'full-screen-iframe': isFullScreen }"
            id="myIframe"
            ref="myIframe"
            :src="`https://view.officeapps.live.com/op/embed.aspx?src=https://getsamplefiles.com/download/pptx/sample-2.pptx`"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
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
              'pointer-events': none,
            }"
            class="d-flex justify-center align-center"
          >
            <v-btn v-if="isFullScreen" @click="toggleFullScreen">
              {{ isFullScreen ? "Exit Full Screen" : "Go Full Screen" }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import WebViewer from "@pdftron/webviewer";
// import pptx from "../../../public/example.pptx";
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  name: "StudentMaterials",
  data() {
    return {
      isFullScreen: false,
      search: "",
      headers: [
        {
          align: "start",
          value: "material.no",
          sortable: false,
          text: "Materials No.",
        },
        { value: "photo", text: "Photo" },
        { value: "material.title", text: "Title", width: "40%" },
        { value: "material.materialCategory.name", text: "Materials Category" },
        {
          value: "material.materialType.name",
          text: "Materials for teacher/student",
        },
        { value: "action", text: "Action", sortable: false },
      ],
      items: [],
      fileUrl: ``,
      // "https://docs.google.com/gview?url=http://cwestblog.com/wp-content/uploads/2020/05/Example-Presentation.pptx&embedded=true",
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  mounted() {
    this.fetchDataMaterials();
  },
  methods: {
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(
          `/myMaterial/account/${this.userInfo.accountID}`
        );
        this.items = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    toggleFullScreen() {
      // const iframe = this.$refs.myIframe;

      // if (!this.isFullScreen) {
      //   if (iframe.requestFullscreen) {
      //     iframe.requestFullscreen();
      //   } else if (iframe.webkitRequestFullscreen) {
      //     iframe.webkitRequestFullscreen(); // Safari
      //   } else if (iframe.msRequestFullscreen) {
      //     iframe.msRequestFullscreen(); // IE/Edge
      //   }
      // } else {
      //   if (document.exitFullscreen) {
      //     document.exitFullscreen();
      //   } else if (document.webkitExitFullscreen) {
      //     document.webkitExitFullscreen(); // Safari
      //   } else if (document.msExitFullscreen) {
      //     document.msExitFullscreen(); // IE/Edge
      //   }
      // }

      // Update the fullscreen state
      this.isFullScreen = !this.isFullScreen;
    },
    removeElementInIframe() {
      // Access the iframe via the ref
      const iframe = this.$refs.myIframe;

      // Ensure the iframe is accessible (same-origin policy)
      try {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;

        // Check if the iframe document is loaded
        if (!iframeDoc.body) {
          console.error("Iframe content is still blank or not loaded");
          return;
        }

        // Find the element by ID and remove it
        const element = iframeDoc.getElementById(
          "ChromelessStatusBar.Options-Small14"
        );
        if (element) {
          element.remove();
          console.log("Element removed successfully");
        } else {
          console.log("Element not found in iframe");
        }
      } catch (error) {
        console.error("Error accessing iframe content:", error);
      }
    },
    openDoc() {
      this.fileUrl = `https://view.officeapps.live.com/op/embed.aspx?src=http://cwestblog.com/wp-content/uploads/2020/05/Example-Presentation.pptx`;

      this.$nextTick(() => {
        const iframe = this.$refs.myIframe;
        if (iframe) {
          iframe.onload = this.removeElementInIframe; // Set the onload handler
        } else {
          console.error("Iframe ref is not defined");
        }
      });

      // WebViewer(
      //   {
      //     // disabledElements: ["default-top-header"],
      //     path: `${process.env.BASE_URL}webviewer`,
      //     initialDoc: "https://getsamplefiles.com/download/pptx/sample-2.pptx",
      //   },
      //   this.$refs.viewer
      // ).then((instance) => {
      //   // hide the ribbons
      //   instance.UI.disableElements(["default-ribbon-group"]);
      //   instance.UI.disableElements(["tools-header"]);
      //   instance.UI.disableElements(["leftPanelButton"]);
      //   instance.UI.disableElements(["searchPanelToggle"]);
      //   instance.UI.disableElements(["notesPanelToggle"]);
      //   instance.UI.disableElements(["groupedLeftHeaderButtons"]);
      //   instance.UI.disableElements([
      //     "menuButton",
      //     "panToolButton",
      //     "annotationEditToolButton",
      //   ]);
      //   // Add header button that will get file data on click
      //   const { documentViewer } = instance.Core;
      //   documentViewer.setWatermark({
      //     // Draw diagonal watermark in middle of the document
      //     diagonal: {
      //       fontSize: 25, // or even smaller size
      //       fontFamily: "sans-serif",
      //       color: "red",
      //       opacity: 50, // from 0 to 100
      //       text: "Watermark",
      //     },
      //     // Draw header watermark
      //     header: {
      //       fontSize: 10,
      //       fontFamily: "sans-serif",
      //       color: "red",
      //       opacity: 70,
      //       left: "left watermark",
      //       center: "center watermark",
      //       right: "",
      //     },
      //   });
      // });
    },
  },
};
</script>

<!-- <style>
#ChromelessStatusBar.Options-Small14 {
  display: none !important;
}
</style> -->
