<template>
  <Modal>
    <template #title>
      <span class="text-lg font-semibold">{{ props.title }}</span>
    </template>
    <template #content>
      <div class="flex modal-content divide-x space-x-3 text-sm">
        <div class="modal-list pr-4 space-y-2">
          <button class="block">새로운 서식문서</button>
          <button class="block">내 서식문서함</button>
          <button class="block">내 컴퓨터</button>
        </div>
        <div class="modal-list pl-4 flex flex-col">
          <div class="modal-list flex flex-col space-y-6">
            <div>
              <p>빈 페이지</p>
              <button
                style="width: 60px; height: 80px; border: 1px solid #000"
                @click="select"
              ></button>
            </div>
            <div>
              <!-- <span>샘플문서</span>  -->
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <button class="bg-blue-600 w-16 p-2 rounded font-bold text-base text-white" @click="confirm">
        확인
      </button>
      <button
        class="border border-blue-600 w-16 p-2 rounded font-bold text-base text-blue-600"
        @click="closeModal"
      >
        닫기
      </button>
    </template>
  </Modal>
</template>
<script setup>
import { ref } from 'vue'
import Modal from '@/components/ModalItem.vue'

const props = defineProps({
  title: String
})
</script>
<style scoped></style>
