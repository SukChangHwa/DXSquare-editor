<template>
    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
              <li class="items-center" v-for="(item, idx) of templateImages" :key="idx">
                <div class="border p-2 thumbnail">
                  <img class="thumbnail-img" :src="item.dataStr">
                </div>
              </li>
            </ul>
</template>
<script setup lang="ts">
import { useImageStore, type ItemplateImg } from '@/stores/image';
// const props = defineProps({
//     templateImages: {type: Array<ItemplateImg>, required: false}
// })
// console.log(props.templateImages)


const imageStore = useImageStore()
const selectTemplateNm = imageStore.getSelectImage()
const curTemplate = imageStore.getImage(selectTemplateNm)
const templateImages: ItemplateImg[] = new Array<ItemplateImg>()
templateImages.push(curTemplate)
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