<script setup lang="ts">
import { SearchBar } from '@/features/home';
import { FilterBar, ProductGrid } from '@/widgets/home';
import { ref } from 'vue';

const isOpenFilter = ref(false);

const switchFlag = () => {
  isOpenFilter.value = !isOpenFilter.value;
};
</script>

<template>
  <div class="grid gap-y-10">
    <search-bar @switch-flag="switchFlag" />

    <product-grid />
    <teleport to="#screen">
      <filter-bar :is-open-filter="isOpenFilter" @switch-flag="switchFlag" />
    </teleport>
  </div>
</template>

<style scoped></style>
