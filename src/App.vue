<template>
  <div>
    <Sidebar />
    <div class="fixed top-0 left-[300px] bottom-0 right-0 p-6 ">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Sidebar from './components/Sidebar.vue'
</script>