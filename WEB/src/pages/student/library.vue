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
            :src="item.photo ? `${baseUrl}${item.photo}` : iconDocument"
          />

          <v-card-title class="info white--text">
            {{ item.title }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="showDocument">
      <v-col cols="12">
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
import iconDocument from "@/assets/document.png";
export default {
  name: "StudentLibrary",
  data() {
    return {
      iconDocument,
      isFullScreen: false,
      showDocument: false,
      itemsLibrary: [],
    };
  },
  mounted() {
    this.fetchDataMaterials();
  },
  methods: {
    async fetchDataMaterials() {
      try {
        const { data } = await this.axios.get(`/materials?materialFor=library`);
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
      this.showDocument = true;
      // if (process.env.NODE_ENV === "development") {
      //   this.fileUrl = `https://view.officeapps.live.com/op/embed.aspx?src=https://getsamplefiles.com/download/pptx/sample-2.pptx`;
      // } else {
      if (["pptx", "pdf"].includes(item.documentType))
        this.fileUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${this.baseUrl}${item.document}`;
      else if (["link"].includes(item.documentType)) {
        const canvaLink = item.link;
        window.open(canvaLink, "_blank"); // Open in a new tab
      } else if (["canva", "youtube"].includes(item.documentType)) {
        this.fileUrl = item.link;
      } else if (item.documentType === "mp4") {
        this.fileUrl = `${this.baseUrl}${item.document}`;
      }
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
