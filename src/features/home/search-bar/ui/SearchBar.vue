<script setup lang="ts">
import { useForm } from 'vee-validate';

import { useCarFiltersStore } from '@/entities/car';
import { AppButton, AppIcon, FormField, FormInput } from '@/shared/ui';

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

const [startDate, startDateAttrs] = defineField('startDate');
const [endDate, endDateAttrs] = defineField('endDate');
const [search, searchAttrs] = defineField('search');

const { center } = SearchBarVariants();

const handleClick = () => {
  carFiltersStore.setFilters({
    search: search.value || ''
  });
};
</script>

<template>
  <form class="flex items-center justify-between" @submit.prevent="handleClick">
    <div :class="center()">
      <FormField label="Начало аренды" class="w-69.5">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="startDate"
          v-bind="startDateAttrs"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>

      <FormField label="Окончание аренды" class="w-69.5">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="endDate"
          v-bind="endDateAttrs"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>
    </div>

    <FormField label="Поиск" class="max-w-80 w-full">
      <AppIcon name="search" class="w-4 h-4 text-input" />
      <FormInput v-model="search" v-bind="searchAttrs" placeholder="Марка машины" />
    </FormField>

    <div :class="center()">
      <AppButton variant="primary"> Найти машину </AppButton>
      <div
        class="p-4 bg-secondary hover:bg-secondary-hover duration-300 cursor-pointer rounded-full"
        @click="() => emit('openFilterBar')"
      >
        <AppIcon name="list-filter" class="w-5 h-5" />
      </div>
    </div>
  </form>
</template>
