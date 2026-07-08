<script setup lang="ts">
import { reactive, watch } from 'vue';

import type { Filters, Price } from '@/entities/car';

import { FormField, FormInput, FormRange } from '@/shared/ui';

const MIN_LIMIT = 0;
const MAX_LIMIT = 10000;

const price = reactive<Price>({
  minPrice: 0,
  maxPrice: 10000
});

const model = defineModel<Pick<Filters, 'maxPrice' | 'minPrice'>>();

watch(
  price,
  () => {
    if (!model.value) return;

    if (price.minPrice === '' || price.minPrice < MIN_LIMIT) price.minPrice = MIN_LIMIT;
    if (price.minPrice > MAX_LIMIT) price.minPrice = MAX_LIMIT;
    if (price.maxPrice === '' || price.maxPrice < MIN_LIMIT) price.maxPrice = MIN_LIMIT;
    if (price.maxPrice > MAX_LIMIT) price.maxPrice = MAX_LIMIT;

    model.value.minPrice = price.minPrice;
    model.value.maxPrice = price.maxPrice;
  },
  {
    deep: true
  }
);
</script>

<template>
  <div class="grid gap-y-4">
    <h4 class="text-[18px] text-foreground">Стоимость</h4>

    <div class="flex gap-x-4">
      <FormField label="от" class="max-w-51.5">
        <FormInput v-model="price.minPrice" type="number" />
      </FormField>
      <FormField label="до" class="max-w-51.5">
        <FormInput v-model="price.maxPrice" type="number" />
      </FormField>
    </div>

    <FormRange v-model="price" />
  </div>
</template>
