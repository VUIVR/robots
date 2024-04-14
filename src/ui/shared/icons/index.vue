<script setup lang="ts">
import type {UiIconProps} from './types';
import {Sprite} from './sprite';

const props = withDefaults(defineProps<UiIconProps>(), {
  width: 24,
  height: 24,
  customClass: undefined
});
</script>

<template>
  <div class="ui-icon" :class="[props.customClass]">
    <svg :width="props.width" :height="props.height">
      <use :href="`${Sprite}#${props.name}`" class="icon" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
