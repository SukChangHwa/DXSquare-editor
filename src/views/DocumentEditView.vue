<template>
  <div>
    <!-- <Sidebar :isShowThumbnail="!serviceStore.getCreateBarStatus()" /> -->
    <div class="ml-52 relative bg-blueGray-100">
      <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <admin-navbar />
          <DocumentControls></DocumentControls>
          <header-stats :isShow="serviceStore.getCreateBarStatus()" />
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useServiceStore } from '@/stores/service'
import AdminNavbar from '@/components/navbar/AdminNavbar.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import HeaderStats from '@/components/header/HeaderStats.vue'
import DocumentControls from '@/components/header/DocumentControls.vue'
import FooterAdmin from '@/components/footer/FooterAdmin.vue'


const serviceStore = useServiceStore()
</script>