import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ItemplateImg {
  fileName: string
  dataStr: string
}

export const useImageStore = defineStore(
  'image',
  () => {
    const image = ref([])
    const selImageName = ref('')

    function saveTemplateImages(obj) {
      image.value.push(obj)
    }
    function getTemplateImages() {
      return image.value
    }
    function saveImage(imgObj: ItemplateImg) {
      image.value.push(imgObj)
    }
    function getImage(str) {
      // return image.value
      return image.value.find((el) => el.fileName == str)
    }
    function setSelectImage(str) {
      selImageName.value = str
    }

    function getSelectImage() {
      return selImageName.value
    }

    function getAllImage() {
      return image.value
    }

    return {
      image,
      saveImage,
      getImage,
      saveTemplateImages,
      getTemplateImages,
      setSelectImage,
      getSelectImage,
      getAllImage
    }
  },
  { persist: true }
)
