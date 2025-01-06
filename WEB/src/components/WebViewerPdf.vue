<template>
  <div id="pdf-render" class="d-flex flex-column justify-center"></div>
</template>

<script>
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.mjs";

// Setting worker path to worker bundle.
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default {
  name: "WebViewer",
  props: {
    initialDoc: { type: String },
    waterMark: { type: String, default: "" },
    hideHeader: { type: Boolean, default: false },
  },

  async mounted() {
    const pdfPath = this.initialDoc;

    // Function to render a page
    function renderPage(pdf, pageNumber, container, waterMark) {
      pdf.getPage(pageNumber).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });

        // Create a canvas for each page
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set canvas dimensions
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Append canvas to the container
        container.appendChild(canvas);

        // Render the page into the canvas
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext).promise.then(() => {
          context.font = "50px Arial";
          context.fillStyle = "rgba(150, 150, 150, 0.5)";
          context.textAlign = "center";
          context.translate(canvas.width / 2, canvas.height / 2);
          context.rotate(-Math.PI / 6);
          context.fillText(waterMark, 0, 0);
        });
      });
    }

    // Load and render the PDF
    const container = document.getElementById("pdf-render");

    pdfjsLib.getDocument(pdfPath).promise.then((pdf) => {
      console.log(`PDF loaded with ${pdf.numPages} pages`);

      // Loop through all pages
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        renderPage(pdf, pageNumber, container, this.waterMark);
      }
    });

    // loadingTask.promise.then((pdf) => {
    //   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    //     pdf.getPage(pageNum).then((page) => {
    //       const viewport = page.getViewport({ scale: 1.5 });
    //       const canvas = document.createElement("canvas");
    //       const ctx = canvas.getContext("2d");

    //       document.body.appendChild(canvas); // Append canvas to body

    //       canvas.width = viewport.width;
    //       canvas.height = viewport.height;

    //       const renderContext = {
    //         canvasContext: ctx,
    //         viewport: viewport,
    //       };
    //       page.render(renderContext).promise.then(() => {
    //         ctx.font = "50px Arial";
    //         ctx.fillStyle = "rgba(150, 150, 150, 0.5)";
    //         ctx.textAlign = "center";
    //         ctx.translate(canvas.width / 2, canvas.height / 2);
    //         ctx.rotate(-Math.PI / 6);
    //         ctx.fillText("Your Watermark", 0, 0);
    //       });
    //     });
    //   }
    // });
  },
};
</script>

<style>
#webviewer {
  height: 100vh;
}
</style>
