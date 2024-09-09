<script setup>
import BaseIcon from './BaseIcon.vue';
import { state } from '@/state.js';

const switchTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
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
    :class="`flex w-20 rounded-[25px] p-1 bg-transparent border ${state.theme === 'light' ? 'justify-start border-[#212121]' : 'justify-end border-white'}`" 
    @click="switchTheme"
  >
    <div :class="`flex justify-center items-center w-[40px] h-[36px] rounded-[20px] ${state.theme === 'light' ? 'bg-[#212121]' : 'bg-indigo-900'}`">
      <BaseIcon
        :iconName="state.theme"
        :iconWidth="iconState[state.theme].width"
        :iconHeight="iconState[state.theme].height"
        :fill="iconState[state.theme].color"
        :hasStroke="iconState[state.theme].hasStroke"
      />
    </div>
  </button>
</template>

<style scoped>
</style>
