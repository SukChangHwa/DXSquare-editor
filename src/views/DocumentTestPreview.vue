<template>
  <div class="container">
    <div v-html="docHtml"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const contentHtml = history.state.contentHtml

const docHtml = ref(contentHtml)

</script>
<style scoped></style>