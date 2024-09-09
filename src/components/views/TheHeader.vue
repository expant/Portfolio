<script setup>
import gsap from 'gsap';
import BaseThemeSwitcher from '../BaseThemeSwitcher.vue';
import { state } from '@/state.js';
import { onMounted } from 'vue';

const content = {
  name: 'Elagin Anton',
};

onMounted(() => {
  const tl = gsap.timeline({});

  tl.fromTo(
    '#header-avatar', 
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.5 },
  );
  tl.fromTo(
    '#title-shadow-1', 
    { opacity: 0, y: 100 },
    { opacity: 0.2, y: 0, duration: 0.5 },
  );
  tl.fromTo(
    '#title-shadow-2', 
    { opacity: 0, y: 200 },
    { opacity: 0.1, y: 0, duration: 0.5 },
  );
  tl.fromTo(
    '#title-shadow-3', 
    { opacity: 0, y: 300 },
    { opacity: 0.05, y: 0, duration: 0.5 },
  );

});

</script>

<template>
  <header class="flex justify-between items-center">
    <div class="flex gap-[20px] items-center">
      <img
        id="header-avatar"
        class="rounded-full"
        src="@/assets/avatar.png"
        alt="Avatar"
      >
      <h1 id="header-title" :class="`relative uppercase text-6xl ${state.theme === 'light' ? 'text-[#212121]' : 'text-[#909090]'}`">
        <div>
          <span
          class="inline-block"
          id="letter"
          v-for="letter in content.name"
          :key="letter"
        >{{ letter }}</span>
        </div>
        <div id="title-shadow-1" class="opacity-20 absolute bottom-[-42px] w-full">{{ content.name }}</div>
        <div id="title-shadow-2" class="opacity-10 absolute bottom-[-84px]">{{ content.name }}</div>
        <div id="title-shadow-3" class="first-line:opacity-5 absolute bottom-[-126px]">{{ content.name }}</div>
      </h1>
    </div>
    <div>
      <BaseThemeSwitcher />
    </div>
  </header>
</template>

<style scoped>

</style>
