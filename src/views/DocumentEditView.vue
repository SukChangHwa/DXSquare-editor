<template>
  <div>
    <Sidebar :isShowThumbnail="!serviceStore.getCreateBarStatus()"/>
    <div class="ml-52 relative bg-blueGray-100">
      <admin-navbar />
      <button v-if="serviceStore.getCreateBarStatus" @click="showSaveModal"></button>
      <header-stats :isShow="serviceStore.getCreateBarStatus()" />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
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
import { ref } from 'vue'
import { useServiceStore } from '@/stores/service'
import { useImageStore, type ItemplateImg } from '@/stores/image'
import htmlToCanvas from 'html2canvas'
import AdminNavbar from '@/components/navbar/AdminNavbar.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import HeaderStats from '@/components/header/HeaderStats.vue'
import FooterAdmin from '@/components/footer/FooterAdmin.vue'
import saveModal from '@/components/modal/TemplateSaveModal.vue'


const isShowSaveModal = ref(false)
const serviceStore = useServiceStore()
const imageStore = useImageStore()

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

    imageStore.saveImage(imageObj)
    

  })

  isShowSaveModal.value = false
}


</script>
