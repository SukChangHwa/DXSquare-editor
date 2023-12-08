import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', () => {
  const isShowModal = ref(false)
  function saveModalStatus(val: boolean) {
    isShowModal.value = val
  }

  return { isShowModal, saveModalStatus }
})
