<script setup>
import TheHeader from './components/views/TheHeader.vue';
import TheNavigation from './components/views/TheNavigation.vue';
import { state } from '@/state.js';

const { sections, sectionIsActive } = state;

const switchSection = (event) => {
  if (!sectionIsActive) {
    return;
  } 

  if (event.deltaY > 0) {
    const first = sections.shift();
    state.sections.push(first);
    state.sectionIsActive = false;
    setTimeout(() => {
      state.sectionIsActive = true;
    }, 3000);
    console.log(state.sections);
    return;
  }
  const last = sections.pop();
  state.sections.unshift(last);
  state.sectionIsActive = false;
  setTimeout(() => {
    state.sectionIsActive = true;
  }, 3000);
};

</script>

<template>
  <div 
    :class="`h-screen w-full ${state.theme === 'light' ? 'bg-white' : 'bg-[#212121]'}`"
    @wheel="switchSection"
  >
    <div class="p-[40px]">
      <section v-if="sections[0] === 'nav'">
        <TheHeader />
        <TheNavigation />
      </section>
      <section v-if="sections[0] === 'about'">
        <div class="flex w-screen h-screen justify-center items-center text-7xl">
          <span>about</span>
        </div>
      </section>
      <section v-if="sections[0] === 'projects'">
        <div class="flex w-screen h-screen justify-center items-center text-7xl">
          projects
        </div>
      </section>
      <section v-if="sections[0] === 'contact me'">
        <div class="flex w-screen h-screen justify-center items-center text-7xl">
          contact me
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
