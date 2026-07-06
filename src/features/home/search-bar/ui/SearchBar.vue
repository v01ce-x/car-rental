<script setup lang="ts">
import { ref } from 'vue';

import { AppButton, AppIcon, FormCalendar, FormField, FormInput } from '@/shared/ui';

import SearchBarVariants from '../lib/search-bar.variants.ts';

import '@vuepic/vue-datepicker/dist/main.css';

const emit = defineEmits<{
  (e: 'switchFlag'): void;
}>();
const startDate = ref<number>(Date.now());
const endDate = ref<number>(Date.now());

const { dateSearch, center } = SearchBarVariants();
</script>

<template>
  <form class="flex items-center justify-between">
    <div :class="center()">
      <FormField label="Начало аренды" is-date>
        <FormCalendar v-model="startDate" :class="dateSearch()" />
      </FormField>

      <FormField label="Окончание аренды" is-date>
        <FormCalendar v-model="endDate" :class="dateSearch()" />
      </FormField>
    </div>

    <FormField label="Поиск" class="max-w-80">
      <AppIcon name="search" class="w-4 h-4 text-input" />
      <FormInput placeholder="Модель машины" />
    </FormField>

    <div :class="center()">
      <AppButton variant="primary"> Найти машину </AppButton>
      <div class="p-4 cursor-pointer" @click="() => emit('switchFlag')">
        <AppIcon name="list-filter" class="w-5 h-5" />
      </div>
    </div>
  </form>
</template>
