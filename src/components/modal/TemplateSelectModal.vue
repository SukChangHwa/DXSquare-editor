<template>
    <Modal>
        <template #title>
            <span class="text-lg font-semibold">{{ props.title }}</span>
        </template>
        <template #content>
            <div class="flex flex-col modal-content">
                <div class="modal-list" v-for="(item, idx) of templateList" :key="idx">
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
import { ref } from 'vue'
import Modal from '@/components/ModalItem.vue'
import { type ItemplateImg } from '@/stores/image';
const props = defineProps({
    title: String
})

let templateList: ItemplateImg[];

try {
    templateList = JSON.parse(localStorage.getItem('templates') ?? '') ?? new Array<ItemplateImg>()
} catch(e) {
    templateList = new Array<ItemplateImg>
}

const emit = defineEmits(['confirm', 'cancel'])

const closeModal = async () => {
    emit('cancel', false)
}

const confirm = async (item: ItemplateImg) => {
    emit('confirm', item)
}
</script>

<style scoped>
.modal-content {
    min-height: 200px;
    overflow-y:auto;
    overflow-x:hidden;
}
</style>
