<script setup lang="ts">
import { AppButton, AppIcon, FormPrice, FormSegment, FormSelect } from '@/shared/ui';
import { FILTER_DATA } from '@/entities/filter';

interface Props {
  isOpenFilter: boolean;
}

defineProps<Props>();
const emit = defineEmits<{
  (e: 'switchFlag'): void;
}>();
</script>

<template>
  <transition name="filter-slide">
    <div class="fixed inset-0 bg-outline" v-if="isOpenFilter">
      <aside class="absolute right-0 top-0 p-3 max-w-125 w-full h-full">
        <div
          class="flex flex-col justify-between gap-y-2.5 bg-primary-foreground h-full rounded-2xl p-6"
        >
          <div class="flex items-center justify-between text-foreground">
            <h3 class="text-2xl font-bold">Фильтры</h3>
            <div class="p-2 cursor-pointer" @click="emit('switchFlag')">
              <app-icon name="cross" class="w-6 h-6" />
            </div>
          </div>

          <form class="grid gap-y-6">
            <form-select label="марка" placeholder="Выберите марку" />
            <form-select label="Тип кузова" placeholder="Выберите кузов" />
            <form-segment label="Руль" :items="FILTER_DATA.steering" />
            <form-segment label="Коробка передач" :items="FILTER_DATA.transmission" />
            <form-price />
          </form>

          <div class="flex gap-x-4 w-full">
            <app-button variant="secondary">Сбросить фильтры</app-button>
            <app-button variant="primary">Найти</app-button>
          </div>
        </div>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.filter-slide-enter-active,
.filter-slide-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.filter-slide-enter-from,
.filter-slide-leave-to {
  opacity: 0;
}

.filter-slide-enter-active .filter-sidebar,
.filter-slide-leave-active .filter-sidebar {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-slide-enter-from .filter-sidebar,
.filter-slide-leave-to .filter-sidebar {
  transform: translateX(100%);
}
</style>
