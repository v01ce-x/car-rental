<script setup lang="ts">
import { ref } from 'vue';

import { useCars } from '@/entities/car';
import { SearchBar } from '@/features/home';
import { CarGrid, FilterBar } from '@/widgets/car';
import { AppLoading } from '@/shared/ui';

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
  <div class="grid gap-y-10">
    <SearchBar @open-filter-bar="openFilterBar" />

    <app-loading v-if="isLoading" />

    <CarGrid v-else-if="cars?.data.length" :cars="cars.data" />

    <div v-else-if="cars?.success" class="flex justify-center mt-10">
      <span class="text-2xl">По вашему запросу ничего не найдено</span>
    </div>

    <div v-else class="flex justify-center mt-10">
      <span class="text-2xl"
        >Возникли проблемы при загрузке данных, пожалуйста, перезагрузите сайт</span
      >
    </div>
    <teleport to="#screen">
      <FilterBar :is-open-filter="isOpenFilter" @close-filter-bar="closeFilterBar" />
    </teleport>
  </div>
</template>
