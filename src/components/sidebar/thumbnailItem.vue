<template>
    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
              <li class="items-center" v-for="(item, idx) of props.templateImages" :key="idx">
                <div class="border p-2 thumbnail">
                  <img class="thumbnail-img" :src="item.dataStr">
                </div>
              </li>
            </ul>
</template>
<script setup lang="ts">
import { type ItemplateImg } from '@/stores/image';
const props = defineProps({
    templateImages: Array<ItemplateImg>
})
</script>
<style scoped>
.thumbnail {
  width: 120px;
  height: 150px;
}
.thumbnail-img {
  height: 100%;
}
</style>