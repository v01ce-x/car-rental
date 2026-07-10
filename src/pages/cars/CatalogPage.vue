<script setup lang="ts">
import { ref } from 'vue';

import { useCars } from '@/entities/car';
import { SearchBar } from '@/features/home';
import { AppLoading } from '@/shared/ui';
import { CarGrid, FilterBar } from '@/widgets/car';

const { data: cars, isLoading } = useCars();

const isOpenFilter = ref(false);

const openFilterBar = () => {
  isOpenFilter.value = !isOpenFilter.value;
};

const closeFilterBar = () => {
  isOpenFilter.value = false;
};
</script>

<template>
  <div class="sm:hidden mb-4">
    <h1 class="text-3xl font-bold">
      Аренда Машин
    </h1>
  </div>

  <div class="grid gap-y-10 justify-items-center">
    <SearchBar @open-filter-bar="openFilterBar" />

    <AppLoading v-if="isLoading" />

    <CarGrid v-else-if="cars?.data.length" :cars="cars.data" />

    <div v-else-if="cars?.success" class="flex justify-center mt-10">
      <span class="text-2xl text-center">По вашему запросу ничего не найдено</span>
    </div>

    <div v-else class="flex justify-center mt-10">
      <span class="text-2xl text-center">Возникли проблемы при загрузке данных, пожалуйста, перезагрузите сайт</span>
    </div>
    <teleport to="#screen">
      <FilterBar :is-open-filter="isOpenFilter" @close-filter-bar="closeFilterBar" />
    </teleport>
  </div>
</template>
