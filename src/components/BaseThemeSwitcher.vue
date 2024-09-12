<script setup>
import BaseIcon from './BaseIcon.vue';
import { state } from '@/state.js';
import gsap from 'gsap';

const animateSwitch = (theme) => {
  if (theme === 'dark') {
    gsap.fromTo('.switcher', 
      { x: 0 },
      { x: 36, duration: 0.3 }
    );
    return;
  }
  gsap.fromTo('.switcher', 
    { x: 36 },
    { x: 0, duration: 0.3 }
  );
 
}

const switchTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  animateSwitch(state.theme);
};

const iconState = {
  light: {
    width: 22,
    height: 22,
    hasStroke: true,
    color: '#FFF176',
  },
  dark: {
    width: 18,
    height: 18,
    hasStroke: false,
    color: '#FFF176',
  },
};

</script>

<template>
  <button 
    :class="[
      'relative w-20 px-[10px] py-[10px] rounded-[25px] bg-transparent border', 
      state.theme === 'light' ? 'justify-start border-[#212121]' : 'justify-end border-white',
    ]"
    @click="switchTheme"
  >
    <div 
      :class="[
        'switcher absolute left-[1px] top-[1px] flex justify-center items-center w-[40px] h-[36px] rounded-[20px]', 
        state.theme === 'light' ? 'bg-[#212121]' : 'bg-indigo-900',
      ]"
    >
      <BaseIcon
        :iconName="state.theme"
        :iconWidth="iconState[state.theme].width"
        :iconHeight="iconState[state.theme].height"
        :fill="iconState[state.theme].color"
        :hasStroke="iconState[state.theme].hasStroke"
      />
    </div>
    <div class="flex justify-between items-center ps-1">
      <BaseIcon
        iconName="light"
        iconWidth="18"
        iconHeight="18"
        fill="#FFFFFF"
        :hasStroke="iconState.light.hasStroke"
      />
      <BaseIcon
        iconName="dark"
        :iconWidth="18"
        :iconHeight="18"
        fill="#212121"  
        :hasStroke="iconState.dark.hasStroke"
      />
    </div>
  </button>
</template>

<style scoped>
</style>
