<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TheHeader from './components/views/TheHeader.vue';
import TheNavigation from './components/views/TheNavigation.vue';
import { state } from '@/state.js';
import { onMounted } from 'vue';

const { sections, sectionIsActive } = state;

gsap.registerPlugin(ScrollTrigger)
// gsap.defaults({ duration: 2 });

onMounted(() => {
  let sections = gsap.utils.toArray('.nav-item');
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.gsap-container',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => '+=' + document.querySelector('.gsap-container').offsetWidth,
    },
  });
  
});

</script>

<template>
  <div 
    :class="[state.theme === 'light' ? 'bg-white' : 'bg-[#212121]']"
  >
    <div class="w-screen">
      <section class="h-screen p-[40px]">
        <TheHeader />
        <TheNavigation />
      </section>
      <div class="gsap-container w-[300%] h-screen flex flex-nowrap">
        <section class="nav-item flex w-full h-full justify-center items-center">
          <div class="flex gap-[40px] max-w-[40%]">
            <div class="text-right">
              <div :class="['inline-block text-xl py-[5px] px-[10px] uppercase', state.theme === 'light' ? 'bg-[#212121] text-white' : 'bg-white text-[#212121]']">Elagin Anton, 24</div>
              <div class="text-[#909090] text-xl">Russia, Tver</div>
              <p class="text-[#909090] text-xl mt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img src="@/assets/avatar-rect.png" alt="Avatar">
          </div>
        </section>
        <section class="nav-item flex w-full h-full justify-center items-center text-7xl text-white bg-sky-700">
          projects
        </section>
        <section class="nav-item w-full h-full  flex justify-center items-center text-7xl text-white bg-black">
          contact me
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
