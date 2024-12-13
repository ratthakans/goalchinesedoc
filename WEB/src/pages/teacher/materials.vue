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
          <template #item.image="{ item }">
            <v-avatar size="64" rounded color="grey lighten-4" class="my-2">
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                width="64"
                cover
                v-if="item.image"
              />
              <v-icon v-else size="45">mdi-notebook-edit</v-icon>
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

    <!-- <v-row>
      <v-col cols="12">
        <div ref="viewer"></div>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12">
        <iframe
          ref="myIframe"
          v-if="fileUrl"
          :src="fileUrl"
          width="100%"
          height="600px"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import WebViewer from "@pdftron/webviewer";
// import pptx from "../../../public/example.pptx";
export default {
  name: "StudentMaterials",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          value: "no",
          sortable: false,
          text: "Materials No.",
        },
        { value: "image", text: "Photo" },
        { value: "title", text: "Title", width: "40%" },
        { value: "category", text: "Materials Category" },
        { value: "type", text: "Materials for teacher/student" },
        { value: "action", text: "Action", sortable: false },
      ],
      items: [
        {
          no: "M001",
          image: "1.png",
          title: "Book",
          category: "Class 1",
          type: "Student",
        },
      ],
      fileUrl: ``,
      // "https://docs.google.com/gview?url=http://cwestblog.com/wp-content/uploads/2020/05/Example-Presentation.pptx&embedded=true",
    };
  },
  mounted() {},
  methods: {
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
