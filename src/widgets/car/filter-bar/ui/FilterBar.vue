<script setup lang="ts">
import { FILTER_DATA } from '@/entities/filter';
import { AppButton, AppIcon, FormColor, FormPrice, FormSegment, FormSelect } from '@/shared/ui';

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
    <div v-if="isOpenFilter" class="fixed inset-0 bg-outline">
      <aside class="absolute right-0 top-0 p-3 max-w-125 w-full h-full">
        <div
          class="flex flex-col justify-between gap-y-2.5 bg-primary-foreground h-full rounded-2xl p-6"
        >
          <div class="flex items-center justify-between text-foreground">
            <h3 class="text-2xl font-bold">Фильтры</h3>
            <div class="p-2 cursor-pointer" @click="emit('switchFlag')">
              <AppIcon name="cross" class="w-6 h-6" />
            </div>
          </div>

          <form class="grid gap-y-6">
            <FormSelect label="марка" placeholder="Выберите марку" />
            <FormSelect label="Тип кузова" placeholder="Выберите кузов" />
            <FormSegment label="Руль" :items="FILTER_DATA.steering" />
            <FormSegment label="Коробка передач" :items="FILTER_DATA.transmission" />
            <FormPrice />
            <FormColor :colors="FILTER_DATA.colors" />
          </form>

          <div class="flex gap-x-4 w-full">
            <AppButton variant="secondary"> Сбросить фильтры </AppButton>
            <AppButton variant="primary"> Найти </AppButton>
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
