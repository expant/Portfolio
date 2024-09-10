<script setup>
import TheHeader from './components/views/TheHeader.vue';
import TheNavigation from './components/views/TheNavigation.vue';
import { state } from '@/state.js';

</script>

<template>
  <div :class="`h-screen w-full ${state.theme === 'light' ? 'bg-white' : 'bg-[#212121]'}`">
    <div class="p-[40px]">
      <TheHeader />
      <TheNavigation />
    </div>
  </div>
</template>

<style scoped>

</style>
