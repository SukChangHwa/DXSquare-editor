<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Constant from '@/assets/ts/constant'
import CardStats from '@/components/card/CardStats.vue'

interface IProp {
  isShow?: boolean
}

const props = withDefaults(defineProps<IProp>(),{
  isShow: true
})

const dragging = function (e: any) {
  e.dataTransfer.setData('Text', e.target.id)
}

const compBtnList: { [key: string]: string } = Constant.COMPONENT_CREATE_BUTTON_ID_LIST

onMounted(() => {
  for (const key in compBtnList) {
    let compCreateBtn = document.querySelector(`#${compBtnList[key as string]}`)
    compCreateBtn?.addEventListener('dragstart', dragging)
  }
})
</script>
