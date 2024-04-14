<script lang="ts" setup>
import type {ICard} from './type';

withDefaults(defineProps<Partial<ICard>>(), {
  href: './images/no-foto.jpg',
  alt: 'no foto'
});
</script>
<template>
  <article class="card">
    <div class="card__img">
      <img :alt="alt" :src="href" />
    </div>
    <NuxtLink :to="id">
      <h3 class="card__title">{{ title }}</h3>
    </NuxtLink>
  </article>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
