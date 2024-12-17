import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

const pdfPrintPreview = (content) => {
  const pdfDocGenerator = pdfMake.createPdf(content);
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById("pdfPreview");
    if (pdfPreview) {
      pdfPreview.remove();
    }
    const iframe = document.createElement("iframe");
    iframe.id = "pdfPreview";
    iframe.style.display = "none";
    iframe.src = URL.createObjectURL(blob);
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  });
};

export default {
  pdfPrintPreview,
};
