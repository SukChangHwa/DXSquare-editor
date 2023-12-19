<template>
  <div>
    <input type="file" id="pdfFileUploader" @change="loadPdfFile($files)" ref="uploadComp" />
    <canvas class="hidden" ref="pdfCanvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { pdfjsLib, pdfViewer } from '@/assets/ts/pdfjs'

const props = defineProps({
  isExec: Boolean
})

const uploadComp = ref(null)
const pdfCanvas = ref(null)
const CMAP_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/'

watch(
  () => props.isExec,
  (cur) => {
    if (cur === true) {
      console.log(uploadComp.value)
      uploadComp.value.click()
      // uploadComp.value.files[0]()
    }
  }
)

const loadPdfFile = () => {
  console.log(uploadComp.value.files[0])
  const fileReader = new FileReader()
  let canvas = pdfCanvas.value

  fileReader.readAsDataURL(uploadComp.value.files[0])

  fileReader.onload = () => {
    console.log(fileReader.result)
    debugger
    let loadingTask = pdfjsLib.getDocument({
      cMapPacked: true,
      disableFontFace: true,
      cMapUrl: CMAP_URL,
      url: fileReader.result
    })

    loadingTask.promise.then(async (pdf) => {
      console.log(pdf)
      debugger
      let pdfContainer = document.createElement('div')
      pdfContainer.setAttribute('id', 'pdf-container')
      let nPage = pdf.numPages
      for (let i = 1; i <= nPage; i++) {
        await pdf.getPage(i).then(async (page) => {
          let scale = 1.5
          let viewport = page.getViewport({ scale: scale })
          let div = document.createElement('div')

          div.setAttribute('id', 'page-' + (page._pageIndex + 1))
          div.setAttribute('style', 'position: relative')

          pdfContainer.appendChild(div)

          let canvas = document.createElement('canvas')
          div.appendChild(canvas)

          // Prepare canvas using PDF page dimensions
          let context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          // Render PDF page into canvas context
          let renderContext = {
            canvasContext: context,
            viewport: viewport
          }

          let renderTask = page.render(renderContext)

          await renderTask.promise
            .then(() => page.getTextContent())
            .then((textContent) => {
              let $canvas = document.createElement('canvas')
              let tempImg = $canvas.toDataURL('image/png')
              debugger

              // Create div which will hold text-fragments
              // let textLayerDiv = document.createElement("div");

              // // Set it's class to textLayer which have required CSS styles
              // textLayerDiv.setAttribute("class", "textLayer");

              // // Append newly created div in `div#page-#{pdf_page_number}`
              // div.appendChild(textLayerDiv);

              // // Create new instance of TextLayerBuilder class
              // let textLayer = new pdfViewer.TextLayerBuilder({
              //   textLayerDiv: textLayerDiv,
              //   pageIndex: page.pageIndex,
              //   viewport: viewport
              // });

              // // Set text-fragments
              // textLayer.setTextContentSource(textContent);
              // debugger;
              // // Render text-fragments
              // textLayer.render();
            })

          // page.getTextContent().then((content)=>{
          //   let htmlStrings = content.items.map((item)=>item.str)
          //   console.log(htmlStrings.join(" "))
          //   page.cleanup()
          // })
          // let renderTask = page.render(renderContext);
          // renderTask.promise.then(function () {
          //     let $canvas = pdfCanvas.value
          //     let tempImg = $canvas.toDataURL("image/png");

          // const $link = document.createElement("a");
          // $link.download = "canvas.png";
          // $link.href = $canvas.toDataURL("image/png");

          // $link.click();

          // console.log('dataImageBase64');
          // console.log(tempImg);
          // debugger;
          // })
        })
      }
    })
  }
}
</script>
<style scoped></style>
