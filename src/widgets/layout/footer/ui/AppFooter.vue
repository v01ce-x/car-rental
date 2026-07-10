<script setup lang="ts">
import { ref } from 'vue';

import {AppIcon, SwitchThemeButton} from '@/shared/ui';

const NAVIGATIONS = [
  {
    id: 1,
    icon: 'car-front',
    name: 'Аренда'
  },
  {
    id: 2,
    icon: 'history',
    name: 'История'
  },
  {
    id: 3,
    icon: 'user',
    name: 'Профиль'
  }
];

const position = ref<'translate-x-[200%]' | 'translate-x-0' | 'translate-x-full'>('translate-x-0');
const currentIndex = ref<number>(1);

const getPosition = (accent: number): void => {
  switch (accent) {
    case 2:
      position.value = 'translate-x-full';
      break;
    case 3:
      position.value = 'translate-x-[200%]';
      break;
    default:
      position.value = 'translate-x-0';
  }
};
</script>

<template>
  <footer class="sm:hidden grid gap-y-2">
    <switch-theme-button class="w-full" />

    <div class="relative bg-background shadow-2xl border border-hard rounded-full">
      <div class="w-full rounded-full grid grid-cols-3 justify-items-center p-1 relative z-10">
        <div
            v-for="item of NAVIGATIONS"
            :key="item.id"
            class="p-2 rounded-full cursor-pointer flex flex-col items-center gap-y-2"
            :class="currentIndex === item.id ? 'text-[#FBFBFB]' : ''"
            @click="[getPosition(item.id), (currentIndex = item.id)]"
        >
          <AppIcon :name="item.icon" class="w-6 h-6" />
          <span class="text-[12px] font-semibold capitalize duration-500">{{ item.name }}</span>
        </div>
      </div>

      <div class="grid grid-cols-3 w-full h-full absolute flex-1 p-1 top-0 select-none">
        <div
            class="relative rounded-full bg-blue-600 p-1 h-full text-[16px] sm:text-[18px] text-transparent duration-500 shadow-2xl flex flex-col"
            :class="position"
        >
          <span>-</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
