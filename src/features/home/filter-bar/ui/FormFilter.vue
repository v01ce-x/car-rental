<script setup lang="ts">
import { reactive } from 'vue';

import { type Filters, type MockFilters, useCarFiltersStore } from '@/entities/car';

import { AppButton, FormColor, FormPrice, FormSegment, FormSelect } from '@/shared/ui';

const carFiltersStore = useCarFiltersStore();
const FILTER_DATA: MockFilters = {
  brands: [
    {
      id: 1,
      brand: 'haval'
    },
    {
      id: 2,
      brand: 'hyundai'
    },
    {
      id: 3,
      brand: 'volkswagen'
    },
    {
      id: 4,
      brand: 'kia'
    },
    {
      id: 5,
      brand: 'geely'
    },
    {
      id: 6,
      brand: 'mercedes'
    },
    {
      id: 7,
      brand: 'garden_car'
    },
    {
      id: 8,
      brand: 'grocery_cart'
    },
    {
      id: 9,
      brand: 'haier'
    },
    {
      id: 10,
      brand: 'invalid'
    }
  ],
  bodyTypes: [
    {
      id: 1,
      bodyType: 'sedan'
    },
    {
      id: 2,
      bodyType: 'suv'
    },
    {
      id: 3,
      bodyType: 'coupe'
    },
    {
      id: 4,
      bodyType: 'hatchback'
    },
    {
      id: 5,
      bodyType: 'cabriolet'
    }
  ],
  colors: [
    {
      id: 1,
      color: 'black'
    },
    {
      id: 2,
      color: 'white'
    },
    {
      id: 3,
      color: 'red'
    },
    {
      id: 4,
      color: 'silver'
    },
    {
      id: 5,
      color: 'blue'
    },
    {
      id: 6,
      color: 'grey'
    },
    {
      id: 7,
      color: 'orange'
    }
  ],
  steering: [
    {
      id: 1,
      type: ''
    },
    {
      id: 2,
      type: 'left'
    },
    {
      id: 3,
      type: 'right'
    }
  ],
  transmission: [
    {
      id: 1,
      type: ''
    },
    {
      id: 2,
      type: 'automatic'
    },
    {
      id: 3,
      type: 'manual'
    }
  ]
};

const emit = defineEmits<{
  (e: 'closeFilterBar'): void;
}>();

const filters: Omit<Filters, 'search'> = reactive({
  brand: '',
  bodyType: '',
  steering: '',
  transmission: '',
  minPrice: 0,
  maxPrice: 10_000,
  color: ''
});

const handleClick = () => {
  carFiltersStore.setFilters(filters);
  emit('closeFilterBar');
};

const resetForm = () => {
  filters.brand = '';
  filters.bodyType = '';
  filters.steering = '';
  filters.transmission = '';
  filters.minPrice = 0;
  filters.maxPrice = 10_000;
  filters.color = '';
};
</script>

<template>
  <form
    class="flex flex-col flex-1 gap-y-5 justify-between h-full overflow-y-auto overflow-x-hidden p-2"
    @submit.prevent="handleClick"
  >
    <div class="grid gap-y-6">
      <FormSelect
        v-model="filters.brand"
        label="марка"
        placeholder="Выберите марку"
        :options="FILTER_DATA.brands"
        :get-option="(item) => item.brand"
        class="relative z-100"
      />
      <FormSelect
        v-model="filters.bodyType"
        label="Тип кузова"
        placeholder="Выберите кузов"
        :options="FILTER_DATA.bodyTypes"
        :get-option="(item) => item.bodyType"
        class="relative z-99"
      />
      <FormSegment
        v-model="filters.steering"
        label="Руль"
        :items="FILTER_DATA.steering"
        :get-label="(item) => item.type"
      />
      <FormSegment
        v-model="filters.transmission"
        label="Коробка передач"
        :items="FILTER_DATA.transmission"
        :get-label="(item) => item.type"
      />
      <FormPrice v-model="filters" />
      <FormColor v-model="filters.color" :colors="FILTER_DATA.colors" />
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full">
      <AppButton variant="secondary" @click="resetForm()"> Сбросить фильтры </AppButton>
      <AppButton variant="primary"> Найти </AppButton>
    </div>
  </form>
</template>

<style scoped></style>
