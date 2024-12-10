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
    <v-row>
      <v-col cols="12">
        <div ref="viewer"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WebViewer from "@pdftron/webviewer";
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
        {
          no: "M001",
          image: "",
          title: "Book",
          category: "Class 1",
          type: "Student",
        },
      ],
    };
  },
  methods: {
    openDoc() {
      WebViewer(
        {
          // disabledElements: ["default-top-header"],
          path: `${process.env.BASE_URL}webviewer`,
          initialDoc: "https://getsamplefiles.com/download/pptx/sample-2.pptx",
        },
        this.$refs.viewer
      ).then((instance) => {
        // hide the ribbons
        instance.UI.disableElements(["default-ribbon-group"]);
        instance.UI.disableElements(["tools-header"]);
        instance.UI.disableElements(["leftPanelButton"]);
        instance.UI.disableElements(["searchPanelToggle"]);
        instance.UI.disableElements(["notesPanelToggle"]);
        instance.UI.disableElements(["groupedLeftHeaderButtons"]);

        const { documentViewer } = instance.Core;

        // Add header button that will get file data on click
        // instance.UI.setHeaderItems((header) => {
        //   header.update([
        //     {
        //       type: "toogleElementButton",
        //       img: "icon-header-sidebar-line",
        //       elemenu: "leftPanel",
        //       dataElement: "leftPanelButton",
        //     },
        //   ]);
        // });

        documentViewer.setWatermark({
          // Draw diagonal watermark in middle of the document
          diagonal: {
            fontSize: 25, // or even smaller size
            fontFamily: "sans-serif",
            color: "red",
            opacity: 50, // from 0 to 100
            text: "Watermark",
          },

          // Draw header watermark
          header: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "red",
            opacity: 70,
            left: "left watermark",
            center: "center watermark",
            right: "",
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
