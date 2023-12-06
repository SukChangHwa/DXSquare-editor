<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
    <div class="flex-auto p-4">
      <div :id="compId" class="flex flex-wrap" draggable="true">
        <div class="relative w-auto pl-1 flex-initial">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-1 h-1 shadow-sm rounded-full"
            :class="[iconColor]"
          >
            <i :class="[iconName]"></i>
          </div>
        </div>
        <div class="relative w-full pl-2 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-m">
            {{ compName }}
          </h5>
        </div>
        
      </div>
      
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  compId: {
    type: String,
    default: 'comp-input'
  },
  compName: {
    type: String,
    default: 'Traffic'
  },
  iconName: {
    type: String,
    default: 'far fa-chart-bar'
  },
  // can be any of the background color utilities
  // from tailwindcss
  iconColor: {
    type: String,
    default: 'bg-red-500'
  }
})

</script>
