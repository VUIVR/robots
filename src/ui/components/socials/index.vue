<script lang="ts" setup>
import {Icon} from '@ui/shared/icons';
</script>
<template>
  <div class="social-icons">
    <a
      title="Переход на станицу linkedin.com"
      href="https://linkedin.com"
      class="social-icons__icon"
    >
      <Icon :height="12" name="linkedin" :width="12" />
    </a>
    <a
      title="Переход на станицу facebook.com"
      href="https://facebook.com"
      class="social-icons__icon"
    >
      <Icon :height="12" name="facebook" :width="7" />
    </a>
    <a
      title="Переход на станицу twitter.com"
      href="https://twitter.com"
      class="social-icons__icon"
    >
      <Icon :height="10" name="twitter" :width="12" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import 'style.scss';
</style>
