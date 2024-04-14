<script lang="ts" setup>
import {Card} from '@ui/components/card';
import {Filters} from '@ui/components/filters';
import {useMainStore} from '@app/Store';
import type {TFilters} from '@app/Store/types';

const store = useMainStore();
await store.getCharacters();
</script>
<template>
  <div class="main">
    <div class="main__banner">
      <img alt="banner Rick&Morty" src="../public/images/banner.png" />
    </div>
    <div class="content">
      <Filters
        :modelValue="store.filters"
        @update:model-value="
          (key: keyof TFilters, value: string) =>
            store.handleFilters(key, value)
        "
      />
      <div class="card-list">
        <h2 v-if="store.list && !store.list.length" class="card-list__empty">
          Sorry, not found
        </h2>
        <transition-group v-else name="list">
          <Card
            v-for="pers in store.list"
            :id="`/${pers.id}`"
            :key="pers.id"
            :alt="pers.name"
            :href="pers.image"
            :title="pers.name"
          />
        </transition-group>
      </div>
      <el-pagination
        v-if="store.pagination"
        :current-page="store.currentPage"
        :page-count="store.pagination.pages"
        :pager-count="5"
        background
        class="content__pagination"
        hide-on-single-page
        layout="prev, pager, next"
        @update:current-page="(page: number) => store.handleCurrentPage(page)"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
