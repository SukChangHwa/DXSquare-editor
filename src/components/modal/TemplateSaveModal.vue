<template>
  <Modal>
    <template #title>
      <span class="text-lg font-semibold">{{ props.title }}</span>
    </template>
    <template #content>
      <div class="flex flex-col">
        <input
          class="border p-2"
          type="text"
          placeholder="템플릿 이름 입력"
          v-model="templateTitle"
        />
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

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/ModalItem.vue'

const props = defineProps({
  title: String
})

const templateTitle = ref('')

const emit = defineEmits(['confirm', 'cancel'])

const closeModal = async () => {
  emit('cancel', false)
}

const confirm = async () => {
  emit('confirm', templateTitle.value)
}
</script>

<style scoped></style>
