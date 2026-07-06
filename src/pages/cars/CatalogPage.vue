<script setup lang="ts">
import { ref } from 'vue';

import { SearchBar } from '@/features/home';
import { CarGrid, FilterBar } from '@/widgets/car';
import {useCars} from "@/entities/car";

const { data: cars } = useCars();

const isOpenFilter = ref(false);

const openFilterBar = () => {
  isOpenFilter.value = !isOpenFilter.value;
};

const closeFilterBar = () => {
  isOpenFilter.value = false;
};
</script>

<template>
  <div class="grid gap-y-10">
    <SearchBar @open-filter-bar="openFilterBar" />

    <CarGrid :cars="cars" v-if="cars"/>
    <teleport to="#screen">
      <FilterBar :is-open-filter="isOpenFilter" @close-filter-bar="closeFilterBar" />
    </teleport>
  </div>
</template>

<style scoped></style>
