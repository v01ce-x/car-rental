<script setup lang="ts">
import { ref, watch } from 'vue';
import { type Car, useCars } from '@/entities/car';
import { SearchBar } from '@/features/home';
import { AppLoading } from '@/shared/ui';
import { CarGrid, FilterBar } from '@/widgets/car';
import { useInfiniteScroll } from "@vueuse/core";

const allProducts = ref<Car[]>([]);

const bottomMarkerRef = ref<HTMLElement | null>(null);
const isOpenFilter = ref(false);

const { data: newCars, isLoading, loadNextPage, hasNextPage, status } = useCars();

const openFilterBar = () => {
  isOpenFilter.value = !isOpenFilter.value;
};

const closeFilterBar = () => {
  isOpenFilter.value = false;
};

watch(() => newCars.value?.pages, (pages) => {
  if (!pages) return;
  allProducts.value = pages.flatMap(page => page.data);
}, { immediate: true });

useInfiniteScroll(
    window,
    () => {
      if (status.value !== 'pending' && hasNextPage.value) {
        loadNextPage();
      }
    },
    { distance: 80 }
);
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

    <CarGrid
        v-else-if="allProducts.length"
        :cars="allProducts"
    />

    <div v-else-if="newCars?.pages" class="flex justify-center mt-10">
      <span class="text-2xl text-center">По вашему запросу ничего не найдено</span>
    </div>

    <div v-else class="flex justify-center mt-10">
      <span class="text-2xl text-center">Возникли проблемы при загрузке данных, пожалуйста, перезагрузите сайт</span>
    </div>

    <div ref="bottomMarkerRef" class="w-full h-10 flex justify-center items-center text-gray-400">
      <span v-if="status === 'pending'">Загрузка новых машин...</span>
    </div>

    <teleport to="#screen">
      <FilterBar :is-open-filter="isOpenFilter" @close-filter-bar="closeFilterBar" />
    </teleport>
  </div>
</template>
