<script setup lang="ts">
import { useForm } from 'vee-validate';
import { onMounted, watch } from 'vue';

import { useCarFiltersStore, useRegistrationRentalStore } from '@/entities/car';
import { AppButton, AppIcon, FormField, FormInput } from '@/shared/ui';
import { adjustBookingDates } from '@/shared/utils';

import type { SearchBarValues } from '../lib/validation.ts';

import { searchBarSchema } from '../lib/validation.ts';
import SearchBarVariants from './search-bar.variants.ts';

const emit = defineEmits<{
  (e: 'openFilterBar'): void;
}>();

const { defineField } = useForm<SearchBarValues>({
  validationSchema: searchBarSchema
});
const carFiltersStore = useCarFiltersStore();
const registrationRentalStore = useRegistrationRentalStore();

const [startDate, startDateAttrs] = defineField('startDate');
const [endDate, endDateAttrs] = defineField('endDate');
const [search, searchAttrs] = defineField('search');

const { rent, buttons } = SearchBarVariants();

const handleClick = () => {
  carFiltersStore.setFilters({
    search: search.value || ''
  });
};

onMounted(() => {
  startDate.value = registrationRentalStore.rentalData.startDate;
  endDate.value = registrationRentalStore.rentalData.endDate;
});

watch([() => startDate.value, () => endDate.value], ([newStart, newEnd]) => {
  if (!newStart || !newEnd) return;

  const adjusted = adjustBookingDates(newStart, newEnd);

  if (adjusted.endDate !== newEnd) {
    endDate.value = adjusted.endDate ?? '';
  }
  if (adjusted.startDate !== newStart) {
    startDate.value = adjusted.startDate ?? '';
  }

  registrationRentalStore.rentalData.startDate = startDate.value;
  registrationRentalStore.rentalData.endDate = endDate.value;
});
</script>

<template>
  <form
    class="max-w-143.5 xl:max-w-full w-full flex flex-col xl:flex-row gap-3 items-center justify-between"
    @submit.prevent="handleClick"
  >
    <div :class="rent()">
      <FormField label="Начало аренды" class="w-full sm:w-69.5">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="startDate"
          v-bind="startDateAttrs"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>

      <FormField label="Окончание аренды" class="w-full sm:w-69.5">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="endDate"
          v-bind="endDateAttrs"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>
    </div>

    <FormField label="Поиск" class="xl:max-w-80 w-full">
      <AppIcon name="search" class="w-4 h-4 text-input" />
      <FormInput v-model="search" v-bind="searchAttrs" placeholder="Марка машины" />
    </FormField>

    <div :class="buttons()">
      <AppButton variant="primary" class="w-full xl:w-auto"> Найти машину </AppButton>
      <div
        class="p-4 bg-secondary hover:bg-secondary-hover duration-300 cursor-pointer rounded-full"
        @click="() => emit('openFilterBar')"
      >
        <AppIcon name="list-filter" class="w-5 h-5" />
      </div>
    </div>
  </form>
</template>
