<script setup>
import BaseIcon from './BaseIcon.vue';
import { ref } from 'vue';

const iconColor = '#FFF176';
const theme = ref('light');

const switchTheme = () => {
  console.log(theme.value);
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};

// `w-20 rounded-[25px] p-1 ${theme === 'light' ? 'bg-white' : 'bg-body'}`

const iconState = {
  light: {
    width: 22,
    height: 22,
    stroke: iconColor,
  },
  dark: {
    width: 18,
    height: 20,
    stroke: iconColor,
  },
};

</script>

<template>
  <button 
    class="w-20 rounded-[25px] p-1 bg-transparent border border-body" 
    @click="switchTheme"
  >
    <div class="flex justify-center items-center w-[40px] h-[36px] rounded-[20px] bg-body">
      <BaseIcon
        :iconName="theme"
        :iconWidth="iconState[theme].width"
        :iconHeight="iconState[theme].height"
        :stroke="iconState[theme].stroke"
        :fill="iconColor"
      />
    </div>
    <!-- <div :class="`${theme === 'light' ? 'bg-body' : 'bg-indigo-900'} p-1`">
     
    </div> -->
  </button>
</template>

<style scoped>
</style>
