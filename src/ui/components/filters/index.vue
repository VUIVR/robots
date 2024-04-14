<script lang="ts" setup>
import type {
  TFiltersProps,
  TGendersTuple,
  TStatusTuple
} from '@ui/components/filters/types';

defineProps<TFiltersProps>();
defineEmits(['update:modelValue']);

const status: TStatusTuple = ['Alive', 'Dead', 'Unknown'];
const genders: TGendersTuple = ['Female', 'Male', 'Genderless', 'Unknown'];
</script>
<template>
  <div class="filters">
    <el-input
      :model-value="modelValue.name"
      class="filters__input"
      clearable
      placeholder="Имя"
      @input="(text: string) => $emit('update:modelValue', 'name', text)"
    />
    <el-select
      :model-value="modelValue.status"
      class="filters__select"
      clearable
      placeholder="Статус"
      @change="(value: string) => $emit('update:modelValue', 'status', value)"
    >
      <el-option v-for="s in status" :key="s" :value="s">{{ s }}</el-option>
    </el-select>
    <el-select
      :model-value="modelValue.genders"
      class="filters__select"
      clearable
      placeholder="Пол"
      @change="(value: string) => $emit('update:modelValue', 'genders', value)"
    >
      <el-option v-for="g in genders" :key="g" :value="g">{{ g }}</el-option>
    </el-select>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
