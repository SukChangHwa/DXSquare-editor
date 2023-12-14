import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ItemplateImg {
  id: string
  fileName: string
  imgDataStr?: string
  htmlStr: string
}

export const useTemplateStore = defineStore(
  'template',
  () => {
    const template = ref([])
    const selTemplateId = ref('')

    function saveTemplate(imgObj: ItemplateImg) {
      template.value.push(imgObj)
    }
    function getTemplate(str) {
      return template.value.find((el) => el.id == str)
    }
    function setSelectTemplateId(str) {
      selTemplateId.value = str
    }

    function getSelectTemplateId() {
      return selTemplateId.value
    }

    function getSelectTemplateName() {
      const selectDocInfo = template.value.find((el: ItemplateImg) => el.id == selTemplateId.value)
      return selectDocInfo?.fileName || ''
    }

    function getAllTemplates() {
      return template.value
    }

    function updateTemplate(id, updateObj) {
      const idx = template.value.findIndex((el) => el.id == id)

      for (const [key, value] of Object.entries(updateObj)) {
        template.value[idx][key] = value
      }

      return template.value
    }

    return {
      template,
      saveTemplate,
      getTemplate,
      setSelectTemplateId,
      getSelectTemplateId,
      getSelectTemplateName,
      updateTemplate,
      getAllTemplates
    }
  },
  { persist: true }
)

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
    function setSelectDocumentId(str) {
      selDocId.value = str
    }

    function getSelectDocumentId() {
      return selDocId.value
    }

    function getSelectDocumentName() {
      const selectDocInfo = doc.value.find((el: ItemplateImg) => el.id == selDocId.value)
      return selectDocInfo?.fileName || ''
    }

    function getAllDocuments() {
      return doc.value
    }

    function updateDocument(id, updateObj) {
      const idx = doc.value.findIndex((el) => el.id == id)

      for (const [key, value] of Object.entries(updateObj)) {
        doc.value[idx][key] = value
      }

      return doc.value
    }

    return {
      doc,
      saveDocument,
      getDocument,
      setSelectDocumentId,
      getSelectDocumentId,
      getSelectDocumentName,
      getAllDocuments,
      updateDocument
    }
  },
  { persist: true }
)
