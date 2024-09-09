<template>
  <svg
    v-if="hasStroke"
    :width="`${iconWidth}`"
    :height="`${iconHeight}`"
    :fill="fill"
    :stroke="fill"
  >
    <use :xlink:href="`${sprite}#${iconName}`"></use>
  </svg>
  <svg
    v-if="!hasStroke"
    :width="`${iconWidth}`"
    :height="`${iconHeight}`"
    :fill="fill"
  >
    <use :xlink:href="`${sprite}#${iconName}`"></use>
  </svg>
</template>

<script setup>
import sprite from '@/assets/sprite.svg';

defineProps({
  iconName: String,
  iconWidth: Number,
  iconHeight: Number,
  fill: {
    type: String,
    require: false,
  },
  hasStroke: Boolean,
});
</script>

<style scoped>
</style>