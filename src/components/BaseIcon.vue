<template>
  <svg
    :width="`${iconWidth}px`"
    :height="`${iconHeight}px`"
    :stroke="stroke"
    :fill="fill"
  >
    <use :xlink:href="`${icons}#${iconName}`"></use>
  </svg>
</template>

<script setup>
import icons from '@/assets/icons.svg';

defineProps({
  iconName: String,
  iconWidth: Number,
  iconHeight: Number,
  stroke: String,
  fill: {
    type: String,
    require: false,
  }
});
</script>

<style scoped>
</style>