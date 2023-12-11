import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', () => {
  const isShowModal = ref(false)
  const isShowCreateBar = ref(false)

  function saveModalStatus(val: boolean) {
    isShowModal.value = val
  }

  function setCreateBarStatus(bool) {
    isShowCreateBar.value = bool
  }

  function getCreateBarStatus() {
    return isShowCreateBar.value
  }

  return { isShowModal, isShowCreateBar, saveModalStatus, setCreateBarStatus, getCreateBarStatus }
})
