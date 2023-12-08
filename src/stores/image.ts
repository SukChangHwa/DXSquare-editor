import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface ItemplateImg {
  fileName: string
  dataStr: string
}

export const useImageStore = defineStore('images', () => {
  const images = ref<ItemplateImg[]>([])
  function saveImage(imgObj: ItemplateImg) {
    images.value.push(imgObj)
  }

  return { images, saveImage }
})
