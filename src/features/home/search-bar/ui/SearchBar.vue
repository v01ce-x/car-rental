<script setup lang="ts">
import { AppButton, AppIcon, FormCalendar, FormField, FormInput } from '@/shared/ui';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
import SearchBarVariants from '../lib/search-bar.variants.ts';

const startDate = ref<number>(Date.now());
const endDate = ref<number>(Date.now());

const { dateSearch, center } = SearchBarVariants();

const emit = defineEmits<{
  (e: 'switchFlag'): void;
}>();
</script>

<template>
  <form class="flex items-center justify-between">
    <div :class="center()">
      <form-field label="Начало аренды" is-date>
        <form-calendar v-model="startDate" :class="dateSearch()" />
      </form-field>

      <form-field label="Окончание аренды" is-date>
        <form-calendar v-model="endDate" :class="dateSearch()" />
      </form-field>
    </div>

    <form-field label="Поиск" class="max-w-80">
      <app-icon name="search" class="w-4 h-4" />
      <form-input placeholder="Модель машины" />
    </form-field>

    <div :class="center()">
      <app-button variant="primary">Найти машину</app-button>
      <div class="p-4 cursor-pointer" @click="() => emit('switchFlag')">
        <app-icon name="list-filter" class="w-5 h-5" />
      </div>
    </div>
  </form>
</template>
