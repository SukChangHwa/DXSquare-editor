import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ItemplateImg {
  fileName: string
  dataStr: string
}

export const useImageStore = defineStore('image', () => {
  const image = ref<ItemplateImg>()
  function saveImage(imgObj: ItemplateImg) {
    image.value = imgObj
  }
  function getImage() {
    return image.value
  }

  return { image, saveImage, getImage }
})
