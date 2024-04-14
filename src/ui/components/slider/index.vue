<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import {ElScrollbar} from 'element-plus';
import {Icon} from '@ui/shared/icons';
import {Card} from '@ui/components/card';
import type {TCharacter} from '@app/Store/types';
import type {TSlider} from '@ui/components/slider/types';

const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

const props = defineProps<TSlider<TCharacter[]>>();

onMounted(() => {
  max.value = innerRef.value!.scrollWidth - innerRef.value!.clientWidth;
});

function scrollSlider(e: {scrollLeft: number}) {
  value.value = e.scrollLeft;
}

function scrollBtn(e: 'toLeft' | 'toRight') {
  if (e === 'toLeft') {
		const total = value.value - innerRef.value!.scrollWidth / props.list.length;
    value.value =  total > 0 ? total : 0
  }
  if (e === 'toRight') {
    value.value += innerRef.value!.scrollWidth / props.list.length;
  }
  scrollbarRef.value!.setScrollLeft(value.value);
}

const scrollPercent = computed(() => {
  if (!value.value && !max.value) return 0;
  const percent = (value.value * 100) / max.value;
  if (percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
});
</script>
<template>
  <div class="slider">
    <div class="slider__navigate">
      <el-progress
        :percentage="scrollPercent ?? 0"
        :stroke-width="1"
        :text-inside="true"
        class="slider__progress"
        color="#238E46"
        >.
      </el-progress>
      <div class="slider__btns">
        <el-button
          color="#EEF0F4"
          tag="span"
          type="info"
          class="narrow-btn"
          @click="scrollBtn('toLeft')"
        >
          <Icon :height="24" :width="24" name="arrow-green" />
        </el-button>
        <el-button
          color="#238E46"
          tag="span"
          type="info"
          class="narrow-btn"
          @click="scrollBtn('toRight')"
        >
          <Icon :height="24" :width="24" name="arrow-light-gray" />
        </el-button>
      </div>
    </div>
    <el-scrollbar ref="scrollbarRef" @scroll="scrollSlider">
      <div ref="innerRef" class="slider__list">
        <Card
          v-for="n in list"
          :id="`/${n.id}`"
          :key="n.id"
          :title="n.name"
          :href="n.image"
          :alt="n.name"
        />
      </div>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
