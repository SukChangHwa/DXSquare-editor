<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats :isShow="isShowCreateBar"/>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import AdminNavbar from '@/components/navbar/AdminNavbar.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import HeaderStats from '@/components/header/HeaderStats.vue'
import FooterAdmin from '@/components/footer/FooterAdmin.vue'
import router from '@/router'

const isShowCreateBar = ref(true)

onMounted(()=>{
  if(router.currentRoute.value.path == '/doc/editor') isShowCreateBar.value = false
  if(router.currentRoute.value.path == '/doc/dashboard') isShowCreateBar.value = true
})

</script>
