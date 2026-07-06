<script setup lang="ts">
import { ref } from 'vue';

import { SearchBar } from '@/features/home';
import { CarGrid, FilterBar } from '@/widgets/car';

const isOpenFilter = ref(false);

const switchFlag = () => {
  isOpenFilter.value = !isOpenFilter.value;
};
</script>

<template>
  <div class="grid gap-y-10">
    <SearchBar @switch-flag="switchFlag" />

    <CarGrid />
    <teleport to="#screen">
      <FilterBar :is-open-filter="isOpenFilter" @switch-flag="switchFlag" />
    </teleport>
  </div>
</template>

<style scoped></style>
