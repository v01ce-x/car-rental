<script setup lang="ts">
import { AppButton, AppIcon, FormField, FormInput } from '@/shared/ui';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
import SearchBarVariants from '../lib/search-bar.variants.ts';

const startDate = ref(Date.now());
const endDate = ref(Date.now());

const { dateSearch, center } = SearchBarVariants();
</script>

<template>
  <form class="flex items-center justify-between">
    <div :class="center()">
      <form-field label="Начало аренды">
        <vue-date-picker v-model="startDate" :class="dateSearch()" />
      </form-field>

      <form-field label="Окончание аренды">
        <vue-date-picker v-model="endDate" :class="dateSearch()" />
      </form-field>
    </div>

    <form-field label="Поиск" is-date>
      <app-icon name="search" class="w-4 h-4" />
      <form-input placeholder="Модель машины" />
    </form-field>

    <div :class="center()">
      <app-button variant="primary">Найти машину</app-button>
      <div class="p-4 cursor-pointer">
        <app-icon name="list-filter" class="w-5 h-5" />
      </div>
    </div>
  </form>
</template>
