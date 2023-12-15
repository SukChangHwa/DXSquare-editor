<template>
    <Modal>
        <template #title>
            <span class="text-lg font-semibold">{{ props.title }}</span>
        </template>
        <template #content>
            <div class="flex flex-col modal-content">
                <canvas id="signpad-canvas" class="w-full h-full border border-gray-200"></canvas>
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

import Modal from '@/components/ModalItem.vue'
import '@/assets/ts/signature_pad.umd.custom.js'
import { onMounted } from 'vue';

const props = defineProps({
    title: String
})

let signaturePadPressure;


const emit = defineEmits(['confirm', 'cancel'])

const closeModal = () => {
    emit('cancel', false)
}

const confirm = () => {
    let imgStr = signaturePadPressure.toDataURL('image/png')
    emit('confirm', imgStr)
}

onMounted(()=>{
    
    const canvasElm = document.getElementById('signpad-canvas')
    signaturePadPressure = new SignaturePad(canvasElm, {
            backgroundColor: "rgb(255, 255, 255)", // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
            minWidth:0.1,
            //maxWidth:4,
            minDistance:0.1,
            usePressure:true
        });
        // signaturePadPressure.toDataURL("image/png");
        //     document.getElementById("signature-img-pressure").src = data;
})
</script>

<style scoped>
.modal-content {
    min-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>