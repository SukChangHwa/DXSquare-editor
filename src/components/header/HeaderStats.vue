<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div v-show="props.isShowTemplateSaveBtn">
          <button @click="showSaveModal">템플릿 저장하기</button>
        </div>
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
import saveModal from '@/components/modal/TemplateSaveModal.vue'
import htmlToCanvas from 'html2canvas'
import Constant from '@/assets/ts/constant'
import CardStats from '@/components/card/CardStats.vue'

interface IProp {
  isShow?: boolean
  isShowTemplateSaveBtn?: boolean
}

const imageStore = useImageStore()

const props = withDefaults(defineProps<IProp>(), {
  isShow: true,
  isShowTemplateSaveBtn: false
})

const isShowSaveModal = ref(false)

const dragging = function (e: any) {
  e.dataTransfer.setData('Text', e.target.id)
}

const showSaveModal = () => {
  isShowSaveModal.value = true
}

const hideSaveModal = () => {
  isShowSaveModal.value = false
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

    let preTemplates:Array<ItemplateImg> = JSON.parse(localStorage.getItem('templates')?? '') ?? new Array<ItemplateImg>()
    preTemplates.push(imageObj)
    localStorage.setItem('templates', JSON.stringify(preTemplates))
    // imageStore.saveImage(imageObj)
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
