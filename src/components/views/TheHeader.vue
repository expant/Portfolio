<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import BaseButtonNavItem from '../BaseButtonNavItem.vue';
import BaseButtonLogo from '../BaseButtonLogo.vue';

onMounted(() => {

});

</script>

<template>
  <header class="fixed w-full flex justify-between items-center px-10 py-5 font-pirata bg-transparent">
    <base-button-nav-item>projects</base-button-nav-item>
    <BaseButtonLogo />
    <base-button-nav-item>about</base-button-nav-item>
  </header>
</template>

<style scoped>

</style>
