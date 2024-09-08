<script setup>
import BaseThemeSwitcher from '../BaseThemeSwitcher.vue';

const content = {
  name: 'Elagin Anton',
};

</script>

<template>
  <header class="flex justify-between items-center">
    <div class="flex gap-[20px] items-center">
      <img
        class="rounded-full"
        src="@/assets/avatar.png"
        alt="Avatar"
      >
      <h1 class="relative uppercase text-6xl text-body">
        {{ content.name }}
        <div class="opacity-20 absolute bottom-[-42px]">{{ content.name }}</div>
        <div class="opacity-10 absolute bottom-[-84px]">{{ content.name }}</div>
        <div class="opacity-5 absolute bottom-[-126px]">{{ content.name }}</div>
      </h1>
    </div>
    <div>
      <BaseThemeSwitcher />
    </div>
  </header>
</template>

<style scoped>

</style>
