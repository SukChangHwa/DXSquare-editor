<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full h-full mb-12 xl:mb-0 px-4">
        <!-- <froala v-if="isShowEditor === true" class="w-full" id="edit" :tag="'textarea'" :config="config"></froala> -->
        <div class="w-full">
          <div class="layer">
            <img :src="sample" />
            <canvas class="canvas-div"></canvas>
            <div id="annotationLayer" class="annotation-layer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import sample from '@/assets/images/sample-1.png'

const allowDrop = function (e: any) {
  e.preventDefault()
}

const drop = function (e: any) {
  e.preventDefault()
  let data = e.dataTransfer.getData('Text')
  console.log(data)

  // eslint-disable-next-line
  debugger
  //here
  const topPos = e.layerY - 20
  const leftPos = e.layerX - 20

  if (data == 'comp-input') {
    let tempDiv = document.createElement('div')
    tempDiv.setAttribute('style', `position:absolute; top: ${topPos}px; left:${leftPos}px;`)
    let tempInput = document.createElement('input')
    tempInput.setAttribute('style', 'border:1px solid #000; width: 100px; height: 30px;')

    tempDiv.appendChild(tempInput)
    e.target.appendChild(tempDiv)
  } else if (data == 'comp-text') {
    // <div style='position:absolute; top: ${topPos}, left:${leftPos}'><span style="font-size:12px;">텍스트</span></div>`

    let tempDiv = document.createElement('div')
    tempDiv.setAttribute('style', `position:absolute; top: ${topPos}px; left:${leftPos}px;`)
    let tempText = document.createElement('span')
    tempText.setAttribute('style', 'font-size:12px')
    tempText.innerText = '텍스트'

    tempDiv.appendChild(tempText)
    e.target.appendChild(tempDiv)
  }
}

onMounted(() => {
  const annotationLayer = document.querySelector('#annotationLayer')

  annotationLayer?.addEventListener('drop', drop)
  annotationLayer?.addEventListener('dragover', allowDrop)
})


</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
.layer {
  border-radius: 10px;
  position: relative;
  border-width: 0;
  border-style: solid;
  border-color: #e4e4e7;
  width: 100%;
  height: 600px;
  background-color: #fff;
}

.annotation-layer {
  z-index: 9;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}

.canvas-div {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
