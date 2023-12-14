<template>
    <Modal>
        <template #title>
            <span class="text-lg font-semibold">{{ props.title }}</span>
        </template>
        <template #content>
            <div class="flex flex-col modal-content">
                <div class="modal-list" v-for="(item, idx) of documentList" :key="idx">
                    <div class="p-2">
                        <button @click="confirm(item)">{{ item.fileName }}</button>
                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <button class="bg-blue-600 w-16 p-2 rounded font-bold text-base text-white" @click="confirm">
                확인
            </button>
            <button class="border border-blue-600 w-16 p-2 rounded font-bold text-base text-blue-600" @click="closeModal">
                닫기
            </button>
        </template>
    </Modal>
</template>

<script setup lang="ts">
// TODO 저장된 문서가 없을 때 없다는 표시 
import Modal from '@/components/ModalItem.vue'
import { useDocStore, type ItemplateImg } from '@/stores/document'
const props = defineProps({
    title: String
})

const documentStore = useDocStore()
let documentList: ItemplateImg[]

documentList = documentStore.getAllDocuments()

const emit = defineEmits(['confirm', 'cancel'])

const closeModal = () => {
    emit('cancel', false)
}

const confirm = (item) => {
    emit('confirm', item)
}
</script>

<style scoped>
.modal-content {
    min-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>