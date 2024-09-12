<script setup>
import { state } from '@/state.js';
import { ref } from 'vue';

const nav = ['About', 'Projects', 'Contact me'];

const lightStyles = 'text-[#212121] hover:text-white hover:bg-[rgb(33,33,33)]';
const darkStyles = 'text-white hover:text-[#212121] hover:bg-white';

// uppercase text-8xl py-[20px] px-[20px] ${state.theme === 'light' ? lightStyles : darkStyles} transition-all

</script>

<template>
  <nav class="pt-[125px] pr-[120px] ml-auto">
    <ul class="flex flex-col items-end">
      <li
        :class="['uppercase text-8xl py-[20px] px-[20px] transition-all', state.theme === 'light' ? lightStyles : darkStyles]"
        v-for="item in nav"
        :key="item"
      >{{ item }}</li>
    </ul>
  </nav>
</template>


<style scoped>
</style>