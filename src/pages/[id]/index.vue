<script lang="ts" setup>
import {useRoute} from "vue-router";
import {Icon} from '@ui/shared/icons';
import {Slider} from '@ui/components/slider';
import {useCharacterStore} from '@app/Store';

const store = useCharacterStore();
const route = useRoute();
await store.getCharacter(+route.params.id);
await Promise.all([store.getLocation(), store.getEpisodesInfo()])
await store.getCharacterList();
</script>
<template>
  <div class="personal-file">
    <NuxtLink class="btn-back" to="/">
      <el-button color="#EEF0F4" tag="span" type="info" class="narrow-btn">
        <Icon :height="24" :width="24" name="arrow-green" />
      </el-button>
      <span>Назад</span>
    </NuxtLink>
    <template v-if="store.character">
      <div class="info">
        <div class="info__img">
          <img :src="store.character.image" alt="banner" />
        </div>
        <div class="content">
          <h1 class="content__header">{{ store.character.name }}</h1>
          <div class="content__tables">
            <div class="content__table table">
              <div class="table__header">Personal Data</div>
              <div class="table__row">
                <span>Status</span>
                <span>{{ store.character.status }}</span>
              </div>
              <div class="table__row">
                <span>Gender</span>
                <span>{{ store.character.gender }}</span>
              </div>
            </div>
            <div class="content__table table">
              <div class="table__header">Location</div>
              <ul class="table__ul">
                <template v-if="store.location">
                  <li class="table__li">{{ store.location.name }}</li>
                  <li class="table__li">{{ store.location.type }}</li>
                  <li class="table__li">{{ store.location.dimension }}</li>
                </template>
              </ul>
            </div>
            <div class="content__table table">
              <div class="table__header">Episode</div>
              <el-scrollbar max-height="250px">
                <div
                  v-for="e in store.episodes"
                  :key="e.name"
                  class="table__row"
                >
                  <span>{{ e.name }}</span>
                  <span>{{ e['air_date'] }}</span>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>More characters from Earth (Evil Rick's Target Dimension)</h2>
        <Slider v-if="store.list" :list="store.list" />
      </div>
    </template>
    <h2 v-else class="personal-file__empty">No found</h2>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
