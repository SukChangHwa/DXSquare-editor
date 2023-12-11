<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-nowrap justify-between bg-white p-2 mb-7">
          <div class="title">
            <span>표준 근로계약서</span>
          </div>
          <div class="doc-control-1 space-x-3">
            <select class="pt-0.5 pr-10 pb-0.5 pl-2.5" name="zoom-value">
              <option value="50">50%</option>
              <option value="75">75%</option>
              <option value="90">90%</option>
              <option value="100" selected>100%</option>
              <option value="125">125%</option>
              <option value="150">150%</option>
              <option value="200">200%</option>
            </select>
            <button><i class="fa-solid fa-pause"></i></button>
            <button><i class="fa-regular fa-images"></i></button>
            <button><i class="fa-solid fa-rotate-left"></i></button>
            <button><i class="fa-solid fa-rotate-right"></i></button>
          </div>
          <div class="doc-control-2 space-x-5">
            <button @click="showSaveModal"><i class="fa-regular fa-floppy-disk"></i></button>
            <button>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
        <!-- <div v-if="props.isShowTemplateSaveBtn">
          <button @click="showSaveModal">템플릿 저장하기</button>
        </div> -->
        <div class="flex" v-show="props.isShow">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-input"
              compName="텍스트"
              iconName="far fa-solid fa-t"
              iconColor="bg-fuchsia-900"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-select"
              compName="리스트박스"
              iconName="fa-regular fa-square-caret-down"
              iconColor="bg-fuchsia-900"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-check"
              compName="체크박스"
              iconName="fa-regular fa-circle-check"
              iconColor="bg-fuchsia-900"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-radio"
              compName="라디오"
              iconName="fa-regular fa-circle-dot"
              iconColor="bg-fuchsia-900"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-signature"
              compName="서명"
              iconName="fa-solid fa-signature"
              iconColor="bg-fuchsia-900"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              compId="comp-image"
              compName="이미지"
              iconName="fa-regular fa-image"
              iconColor="bg-fuchsia-900"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <saveModal
    v-if="isShowSaveModal"
    :title="'템플릿 저장'"
    @cancel="hideSaveModal"
    @confirm="
      (title) => {
        saveTemplateImage(title)
      }
    "
  ></saveModal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useImageStore, type ItemplateImg } from '@/stores/image'
import { useServiceStore } from '@/stores/service'
import saveModal from '@/components/modal/TemplateSaveModal.vue'
import htmlToCanvas from 'html2canvas'
import Constant from '@/assets/ts/constant'
import CardStats from '@/components/card/CardStats.vue'

interface IProp {
  isShow?: boolean
  isShowTemplateSaveBtn?: boolean
}

const props = withDefaults(defineProps<IProp>(), {
  isShow: true,
  isShowTemplateSaveBtn: false
})
const serviceStore = useServiceStore()
const imageStore = useImageStore()

const isShowSaveModal = ref(false)

const dragging = function (e: any) {
  e.dataTransfer.setData('Text', e.target.id)
}

const showSaveModal = () => {
  let isShowCreateBar = serviceStore.getCreateBarStatus() 
  if(isShowCreateBar) {
    saveDocToHtml()
  } else {
    isShowSaveModal.value = true
  }
  
}

const hideSaveModal = () => {
  isShowSaveModal.value = false
}

const saveDocToHtml = () => {
  console.log('click')
  // TODO html로 저장
  const name = document.getElementById('doc-container')

  let bodyStr = name.parentElement.innerHTML
  let htmlStr = '<html lang="en">'
  htmlStr += '<head>'
  htmlStr += '<meta charset="UTF-8">'
  htmlStr += '<meta charset="UTF-8">'
  htmlStr += '<meta name="viewport" content="width=device-width, inital-scale=1.0">'
  htmlStr += '<title>Document</title>'
  htmlStr += '</head>'
  htmlStr += '<body>'
  htmlStr += bodyStr.replace(/(data-v-\w*\=\"\"\s)/gi, '')
  htmlStr += '</body>'
  htmlStr += '</html>'

  
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlStr, 'text/html')

  let fileName = 'document.html'
  
  const blob = new Blob([htmlStr], {type: 'text/html'})
  const path = window.URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = path
  link.download = fileName
  link.click()
  link.remove() // IE 미지원


  
}

const saveTemplateImage = (title) => {
  const editorHtmlElem = document.getElementsByClassName('fr-element')

  htmlToCanvas(editorHtmlElem[0]).then((canvas) => {
    const t = canvas.toDataURL()
    console.log(t)
    const imageObj: ItemplateImg = {
      dataStr: t,
      fileName: title
    }

    imageStore.saveImage(imageObj)
  })
}

const compBtnList: { [key: string]: string } = Constant.COMPONENT_CREATE_BUTTON_ID_LIST

onMounted(() => {
  for (const key in compBtnList) {
    let compCreateBtn = document.querySelector(`#${compBtnList[key as string]}`)
    compCreateBtn?.addEventListener('dragstart', dragging)
  }
})
</script>
