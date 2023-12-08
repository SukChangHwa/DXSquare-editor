<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full h-full mb-12 xl:mb-0 px-4">
        <!-- <froala v-if="isShowEditor === true" class="w-full" id="edit" :tag="'textarea'" :config="config"></froala> -->
        <div class="w-full">
          <div id="doc-container" class="layer">
            <img :src="backgroundImage" />
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
import { useImageStore, type ItemplateImg } from '@/stores/image'

const imageStore = useImageStore()
const backgroundImage = ref('')

const allowDrop = function (e: any) {
  e.preventDefault()
}

const drop = function (e: any) {
  e.preventDefault()
  let data = e.dataTransfer.getData('Text')
  console.log(data)

  const topPos = e.layerY - 20
  const leftPos = e.layerX - 20

  let tempDiv = document.createElement('div')
  tempDiv.setAttribute('style', `position:absolute; top: ${topPos}px; left:${leftPos}px;`)

  if (data == 'comp-input') {
    let tempInput = document.createElement('input')
    tempInput.setAttribute('style', 'border:1px solid #000; width: 100px; height: 30px;')

    tempDiv.appendChild(tempInput)
    e.target.appendChild(tempDiv)
  } else if (data == 'comp-text') {
    let tempText = document.createElement('span')
    tempText.setAttribute('style', 'font-size:12px')
    tempText.innerText = '텍스트'

    tempDiv.appendChild(tempText)
    e.target.appendChild(tempDiv)
  } else if (data == 'comp-check') {
    let tempCheck = document.createElement('input')
    tempCheck.type = 'checkbox'
    // tempCheck.setAttribute('style', 'font-size:12px')
    // tempCheck.setAttribute('type', 'check')

    tempDiv.appendChild(tempCheck)
    e.target.appendChild(tempDiv)
  } else if (data == 'comp-radio') {
    let tempRadio = document.createElement('input')
    tempRadio.type = 'radio'

    tempDiv.appendChild(tempRadio)
    e.target.appendChild(tempDiv)
  } else if (data == 'comp-signature') {
    let tempSignComp = document.createElement('div')
    tempSignComp.setAttribute(
      'style',
      'font-size:12px;border:1px solid #000; width: 30px; height: 30px;'
    )

    tempDiv.appendChild(tempSignComp)
    e.target.appendChild(tempDiv)
  }
}

onMounted(() => {
  const annotationLayer = document.querySelector('#annotationLayer')

  annotationLayer?.addEventListener('drop', drop)
  annotationLayer?.addEventListener('dragover', allowDrop)

  const imgList: ItemplateImg[] =
    JSON.parse(localStorage.getItem('templates') ?? '') ?? new Array<ItemplateImg>()
  backgroundImage.value = imgList[0].dataStr
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
