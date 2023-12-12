import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ItemplateImg {
  id: string
  fileName: string
  imgDataStr: string
  htmlStr: string
}

export const useDocStore = defineStore(
  'doc',
  () => {
    const doc = ref([])
    const selDocId = ref('')

    function saveDocument(imgObj: ItemplateImg) {
      doc.value.push(imgObj)
    }
    function getDocument(str) {
      return doc.value.find((el) => el.id == str)
    }
    function setSelectDocId(str) {
      selDocId.value = str
    }

    function getSelectDocId() {
      return selDocId.value
    }

    function getSelectDocName() {
      let selectDocInfo = doc.value.find((el) => el.id == selDocId.value)
      return selectDocInfo?.fileName || ''
    }

    function getAllDoc() {
      return doc.value
    }

    function updateDocument(id, updateObj) {
      let idx = doc.value.findIndex((el) => el.id == id)

      for(const [key, value] of Object.entries(updateObj)) {
        doc.value[idx][key] = value
      }
        

      return doc.value
      
    }

    return {
      doc,
      saveDocument,
      getDocument,
      setSelectDocId,
      getSelectDocId,
      getSelectDocName,
      updateDocument,
      getAllDoc
    }
  },
  { persist: true }
)
